import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { HiDotsVertical, HiPlus, HiFilter, HiDownload, HiCalendar, HiInformationCircle, HiTrash, HiPrinter, HiX, HiTruck, HiClipboardList, HiCheckCircle } from "react-icons/hi";
import { toast } from "sonner";
import Pagination from "../components/common/Pagination";
import { useLanguage } from "../context/LanguageContext";

// ==========================================
// MAINTENANCE PAGE
// Displays service history, alerts, and upcoming tasks.
// Supports full CRUD for maintenance records.
// ==========================================
export default function Maintenance() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<any>(null);
  const [actionMenuId, setActionMenuId] = useState<number | null>(null);
  const [statusMenuId, setStatusMenuId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();

  const fetchMaintenanceData = async () => {
    const userStr = localStorage.getItem("user");
    if (!userStr) return;
    const user = JSON.parse(userStr);
    const userId = user.id || user.user?.id;
    if (!userId) return;

    try {
      const response = await fetch(`http://localhost:8000/maintenance/data?user_id=${userId}`);
      if (response.ok) {
        const result = await response.json();
        setData(result);
      }
    } catch (error) {
      console.error("Failed to fetch maintenance data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaintenanceData();
  }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;
    try {
      const resp = await fetch(`http://localhost:8000/maintenance/delete/${id}`, { method: 'DELETE' });
      if (resp.ok) {
        toast.success("Record deleted");
        fetchMaintenanceData();
        setActionMenuId(null);
      }
    } catch (err) {
      toast.error("Failed to delete");
    }
  };

  const handleStatusUpdate = async (id: number, newStatus: string) => {
    try {
      // If it's a real record (ID < 10000)
      if (id < 10000) {
        const resp = await fetch(`http://localhost:8000/maintenance/update/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: newStatus })
        });
        if (resp.ok) {
          toast.success(`Status updated to ${newStatus}`);
          fetchMaintenanceData();
        }
      } else {
        // It's an alert (virtual ID > 10000)
        // For now we just toast since alert closing logic might need another endpoint
        toast.success("Alert status updated");
        fetchMaintenanceData();
      }
    } catch (err) {
      toast.error("Failed to update status");
    } finally {
      setStatusMenuId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Pagination Logic
  const allRecords = data?.records || [];
  const filteredRecords = allRecords.filter((r: any) =>
    !searchQuery ||
    r.vehicle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.service?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.status?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.vin?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredRecords.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);

  return (
    <div className="bg-background min-h-screen flex font-['Inter',sans-serif] transition-colors duration-300">
      <Sidebar />

      <div className="ml-[240px] flex-1 page-transition pt-[72px]">
        <Header
          title={t('maintenance')}
          subtitle={t('garage')}
          searchValue={searchQuery}
          onSearch={setSearchQuery}
        />

        <div className="p-8 space-y-8 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
            {/* Left Column: Stats and Table */}
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
                <MiniStat label={t('total_logs')} value={data?.stats.total_logs} trend="+12%" color="red" />
                <MiniStat label={t('active_alerts')} value={data?.stats.active_alerts} highlight="Critical" color="orange" />
                <MiniStat label={t('completed_ytd')} value={data?.stats.completed_ytd} check color="green" />
                <MiniStat label={t('ai_predicted_30d')} value={data?.stats.ai_predicted} sparkle color="gray" />
              </div>

              {/* List Section */}
              <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="p-6 flex justify-between items-center bg-card border-b border-border">
                  <div className="flex gap-4">
                    <select className="bg-muted border border-border px-4 py-2 rounded-xl text-sm font-medium outline-none cursor-pointer text-foreground">
                      <option>{t('all_vehicles')}</option>
                    </select>
                    <select className="bg-muted border border-border px-4 py-2 rounded-xl text-sm font-medium outline-none cursor-pointer text-foreground">
                      <option>{t('service_type')}</option>
                    </select>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        const csvContent = "data:text/csv;charset=utf-8,Vehicle,Service Type,Date,Status,Cost,Notes\n" +
                          data?.records.map((r: any) =>
                            `"${r.vehicle}","${r.service}","${r.date}","${r.status}","${r.cost}","${r.notes?.replace(/"/g, '""')}"`
                          ).join("\n");
                        const encodedUri = encodeURI(csvContent);
                        const link = document.createElement("a");
                        link.setAttribute("href", encodedUri);
                        link.setAttribute("download", `maintenance_export_${new Date().toISOString().split('T')[0]}.csv`);
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="flex items-center gap-2 px-6 py-2 border border-border rounded-xl text-sm font-bold text-foreground hover:bg-muted transition-all">
                      <HiDownload className="text-primary" /> {t('export')}
                    </button>
                    <button
                      onClick={() => setShowAddModal(true)}
                      className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-black shadow-lg shadow-primary/20 hover:scale-105 transition-all"
                    >
                      <HiPlus /> {t('add_service')}
                    </button>
                  </div>
                </div>

                <div className="overflow-auto max-h-[500px] border border-border rounded-2xl relative">
                  <table className="w-full relative table-fixed">
                    <thead className="sticky top-0 bg-muted z-20">
                      <tr className="text-left border-b border-border">
                        <th className="py-3 px-6 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider w-[160px]">{t('vehicle')}</th>
                        <th className="py-3 px-6 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider w-[120px]">{t('service')}</th>
                        <th className="py-3 px-6 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider w-[100px]">{t('date')}</th>
                        <th className="py-3 px-6 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider w-[100px]">{t('status')}</th>
                        <th className="py-3 px-6 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider w-[100px]">{t('cost')}</th>
                        <th className="py-3 px-6 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">{t('notes')}</th>
                        <th className="py-3 px-6 w-12"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-card">
                      {currentRecords.map((record: any) => (
                        <tr key={record.id} className={`hover:bg-[#FAFAFA] transition-colors h-[64px] ${statusMenuId === record.id || actionMenuId === record.id ? 'z-50' : 'z-0'}`}>
                          <td className="py-3 px-6">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-md bg-[#F4F4F5] border border-[#E4E4E7] flex items-center justify-center font-bold text-[#D72322] text-[10px]">
                                {record.vehicle.substring(0, 2).toUpperCase()}
                              </div>
                              <div className="truncate">
                                <p className="font-semibold text-[#09090B] text-xs truncate">{record.vehicle}</p>
                                <p className="text-[10px] text-[#71717A] font-medium truncate">
                                  VIN: {record.vin && record.vin !== "N/A" ? `...${record.vin.slice(-6)}` : '...38842'}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-6 whitespace-nowrap">
                            <span className="text-[10px] font-semibold text-[#D72322] uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded border border-red-100">
                              {record.service}
                            </span>
                          </td>
                          <td className="py-3 px-6 whitespace-nowrap text-xs font-medium text-[#71717A]">{record.date}</td>
                          <td className="py-3 px-6 whitespace-nowrap relative">
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                setStatusMenuId(statusMenuId === record.id ? null : record.id);
                                setActionMenuId(null);
                              }}
                              className="flex items-center gap-2 cursor-pointer group"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full ${record.status === 'COMPLETED' ? 'bg-[#10B981]' : record.status === 'OVERDUE' ? 'bg-[#D72322]' : 'bg-[#F97316]'}`} />
                              <span className={`text-[10px] font-semibold uppercase tracking-wider group-hover:underline ${record.status === 'COMPLETED' ? 'text-[#10B981]' : record.status === 'OVERDUE' ? 'text-[#D72322]' : 'text-[#F97316]'}`}>
                                {record.status}
                              </span>
                            </div>
                            {statusMenuId === record.id && (
                              <div className="absolute left-4 top-[80%] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-[#EEEFF2] py-2 w-40 z-[100] animate-in fade-in slide-in-from-top-2 flex flex-col">
                                <p className="px-4 py-1 text-[8px] font-black text-[#A3A6B4] uppercase tracking-widest border-b border-[#EEEFF2] mb-1">{t('set_status')}</p>
                                <button onClick={() => handleStatusUpdate(record.id, 'COMPLETED')} className="w-full text-left px-4 py-2 text-xs font-bold text-[#10B981] hover:bg-green-50 transition-colors">Completed</button>
                                <button onClick={() => handleStatusUpdate(record.id, 'OPEN')} className="w-full text-left px-4 py-2 text-xs font-bold text-[#F97316] hover:bg-orange-50 transition-colors">Open</button>
                                <button onClick={() => handleStatusUpdate(record.id, 'OVERDUE')} className="w-full text-left px-4 py-2 text-xs font-bold text-[#D72322] hover:bg-red-50 transition-colors">Overdue</button>
                              </div>
                            )}
                          </td>
                          <td className="py-3 px-6 font-semibold text-[#09090B] text-xs">${record.cost.toLocaleString()}</td>
                          <td className="py-3 px-6 text-[11px] text-[#71717A] font-medium max-w-[180px] truncate">{record.notes}</td>
                          <td className="py-3 px-6 text-right relative">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActionMenuId(actionMenuId === record.id ? null : record.id);
                                setStatusMenuId(null);
                              }}
                              className="p-2 text-[#A3A6B4] hover:text-[#04091E] hover:bg-gray-100 rounded-full transition-all"
                            >
                              <HiDotsVertical />
                            </button>
                            {actionMenuId === record.id && (
                              <div className="absolute right-12 top-[80%] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-[#EEEFF2] py-2 w-32 z-[100] animate-in fade-in slide-in-from-top-2 flex flex-col">
                                <button
                                  onClick={() => { setSelectedRecord(record); setShowViewModal(true); setActionMenuId(null); }}
                                  className="w-full text-left px-4 py-3 text-sm font-bold text-[#04091E] hover:bg-gray-50 flex items-center justify-between transition-colors"
                                >
                                  {t('view_details')}
                                </button>
                                <button
                                  onClick={() => { setSelectedRecord(record); setShowEditModal(true); setActionMenuId(null); }}
                                  className="w-full text-left px-4 py-3 text-sm font-bold text-[#04091E] hover:bg-gray-50 flex items-center justify-between transition-colors"
                                >
                                  {t('edit_info')}
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                      {currentRecords.length < recordsPerPage && Array.from({ length: recordsPerPage - currentRecords.length }).map((_, idx) => (
                        <tr key={`empty-${idx}`} className="h-[64px]">
                          <td colSpan={7}>&nbsp;</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-white border border-[#E4E4E7] border-t-0 rounded-b-2xl">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    pageSize={recordsPerPage}
                    totalItems={filteredRecords.length}
                    itemsName="records"
                    onPageChange={setCurrentPage}
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar Area */}
            <div className="space-y-6">
              {/* AI Insights Card */}
              <div className="bg-card rounded-[24px] border-l-[6px] border-primary p-6 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <HiInformationCircle className="text-primary text-2xl" />
                  <h3 className="font-black text-foreground text-xs uppercase tracking-widest">{t('ai_insight')}</h3>
                </div>
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10 mb-5">
                  <p className="text-[9px] font-black text-primary uppercase tracking-widest mb-1">{t('next_maint')}</p>
                  <p className="font-bold text-foreground text-base">Service in 1,240 km</p>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-1">Est. Cost</p>
                    <p className="font-black text-foreground text-base">$540.00</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-1">Confidence</p>
                    <p className="font-black text-foreground text-base">92%</p>
                  </div>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
                  Optimize Schedule
                </button>
              </div>

              {/* Upcoming Section */}
              <div>
                <div className="flex justify-between items-center mb-5">
                  <h3 className="font-semibold text-foreground text-[10px] uppercase tracking-wider font-['Inter']">{t('upcoming')}</h3>
                  <span className="bg-primary text-primary-foreground text-[9px] px-2 py-0.5 rounded font-black tracking-wider">30D Window</span>
                </div>
                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                  {data?.upcoming.map((u: any) => (
                    <div key={u.id} className="bg-card p-4 rounded-2xl border border-border flex items-center gap-3 group cursor-pointer hover:border-primary/20 transition-all">
                      <div className="p-2.5 bg-muted rounded-xl text-muted-foreground group-hover:text-primary transition-colors">
                        <HiCalendar className="text-lg" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-foreground text-[11px] leading-tight truncate">{u.title}</p>
                        <p className="text-[9px] text-muted-foreground font-medium mt-0.5 truncate">{u.date}</p>
                      </div>
                      <div className="text-border group-hover:text-primary transition-colors text-xs opacity-50">{">"}</div>
                    </div>
                  ))}
                  {(!data?.upcoming || data.upcoming.length === 0) && (
                    <p className="text-muted-foreground text-[10px] font-medium text-center py-4 bg-muted/30 rounded-2xl border border-dashed border-border">No upcoming tasks</p>
                  )}
                </div>
              </div>

              {/* Support/Tips */}
              <div className="bg-primary/5 p-5 rounded-2xl border border-primary/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <p className="font-black text-primary text-[9px] uppercase tracking-widest">{t('maint_tip')}</p>
                </div>
                <p className="text-muted-foreground text-[11px] font-medium leading-relaxed">
                  Check tire pressure monthly to improve fuel efficiency by up to <span className="text-foreground font-bold">3%</span>. Correct inflation also increases tire lifespan significantly.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border space-y-3">
                <p className="font-black text-foreground text-[9px] uppercase tracking-widest">{t('assistance')}</p>
                <p className="font-black text-foreground text-2xl">1-800-GEAR-HELP</p>
                <button className="w-full bg-primary rounded-xl py-4 text-primary-foreground text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                  {t('call_help')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showAddModal && <AddMaintenanceModal onClose={() => { setShowAddModal(false); fetchMaintenanceData(); }} vehicles={data?.vehicles} />}
      {showEditModal && <EditMaintenanceModal record={selectedRecord} onClose={() => { setShowEditModal(false); fetchMaintenanceData(); }} onDelete={() => { handleDelete(selectedRecord?.id); setShowEditModal(false); }} />}
      {showViewModal && <ViewMaintenanceModal record={selectedRecord} onClose={() => setShowViewModal(false)} />}
    </div>
  );
}

function MiniStat({ label, value, trend, highlight, check, sparkle, color }: any) {
  const { t } = useLanguage(); // Although not used directly yet, good for consistency
  const colorClasses: any = {
    red: "text-primary",
    orange: "text-orange-500",
    green: "text-green-500",
    gray: "text-foreground"
  };

  return (
    <div className="bg-card p-6 rounded-[24px] border border-border shadow-sm relative group hover:border-primary/10 transition-all">
      <div className="flex flex-col gap-1">
        <h3 className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none">{label}</h3>
        <div className="flex items-center gap-4 mt-2">
          <span className="text-3xl font-black text-foreground">{value?.toLocaleString() || '0'}</span>
          {trend && (
            <div className="flex items-center text-green-500 text-xs font-bold gap-1 mt-auto pb-1">
              <span className="rotate-[-45deg]">↑</span> {trend}
            </div>
          )}
          {highlight && <span className="text-xs font-black text-primary mt-auto pb-1">{highlight}</span>}
        </div>
      </div>
      <div className={`absolute top-6 right-6 ${colorClasses[color]}`}>
        {check && <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center opacity-20">✓</div>}
        {sparkle && <div className="text-xl opacity-20">✨</div>}
        {label === "ACTIVE ALERTS" && <div className="w-2 h-2 rounded-full bg-current animate-pulse" />}
      </div>
    </div>
  );
}

// ----- Modal Components -----

function ViewMaintenanceModal({ record, onClose }: any) {
  const { t } = useLanguage();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-card w-full max-w-2xl rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-border">
        {/* Print Only Checklist Version */}
        <div className="hidden print:block p-10 font-serif text-[#04091E]">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold mb-2 bg-[#FDE7D2] inline-block px-4 py-1">Daily Vehicle Maintenance</h1>
            <br />
            <h1 className="text-4xl font-extrabold bg-[#FDE7D2] inline-block px-4 py-1">Checklist</h1>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold border-b-2 border-black pb-1 mb-4">Vehicle Information:</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Vehicle Make: <span className="underline ml-2">{record.vehicle.split(' ')[0]}</span></li>
                <li>Model: <span className="underline ml-2">{record.vehicle.split(' ').slice(1).join(' ')}</span></li>
                <li>License Plate Number: <span className="underline ml-2">{record.vin || '________________'}</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold border-b-2 border-black pb-1 mb-4">Daily Checklist:</h2>
              <div className="space-y-4 text-sm font-bold">
                <div>
                  <p>1. Exterior:</p>
                  <ul className="pl-6 list-[circle]">
                    <li>Check for visible damage or fluid leaks.</li>
                    <li>Inspect tires for cuts, bulges, or low pressure.</li>
                  </ul>
                </div>
                <div>
                  <p>2. Fluids:</p>
                  <ul className="pl-6 list-[circle]">
                    <li>Check oil level (visual inspection).</li>
                    <li>Inspect coolant reservoir.</li>
                    <li>Ensure windshield washer fluid is sufficient.</li>
                  </ul>
                </div>
                <div>
                  <p>3. Lights and Signals:</p>
                  <ul className="pl-6 list-[circle]">
                    <li>Verify headlights, brake lights, and turn signals are working.</li>
                  </ul>
                </div>
                <div>
                  <p>4. Interior:</p>
                  <ul className="pl-6 list-[circle]">
                    <li>Test horn and wipers.</li>
                    <li>Confirm seat belts are functional.</li>
                  </ul>
                </div>
                <div>
                  <p>5. Brakes and Steering:</p>
                  <ul className="pl-6 list-[circle]">
                    <li>Test brakes for proper function.</li>
                    <li>Ensure steering feels responsive during a brief test drive.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold border-b-2 border-black pb-1 mb-4">Notes:</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Inspection Date: <span className="underline ml-2">{record.date}</span></li>
                <li>Issues Noted: <span className="underline ml-2">{record.notes || 'None'}</span></li>
              </ul>
            </section>
          </div>

          <div className="mt-20 text-right text-xs text-[#747681]">
            Copyright@<span className="text-blue-600 underline">Sample.net</span>
          </div>
        </div>

        {/* Normal Modal View (Hidden on Print) */}
        <div className="print:hidden overflow-y-auto flex-1">
          <div className="p-10 flex justify-between items-start">
            <div>
              <h2 className="text-[32px] font-black text-foreground">{record.vehicle} — {record.service}</h2>
              <p className="text-muted-foreground font-medium mt-1">{t('recorded_on')} {record.date}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest ${record.status === 'OVERDUE' ? 'bg-primary/10 text-primary' : 'bg-green-500/10 text-green-500'}`}>
                {record.status}
              </span>
              <button onClick={onClose} className="p-2 text-muted-foreground hover:bg-muted rounded-full transition-all"><HiX className="text-2xl" /></button>
            </div>
          </div>

          <div className="px-10 grid grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <HiTruck className="text-muted-foreground text-xl" />
                <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t('vehicle_info')}</h4>
              </div>
              <div className="bg-muted p-8 rounded-[24px] border border-border space-y-4">
                <div>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">{t('vin')}</p>
                  <p className="font-extrabold text-foreground text-sm tracking-widest">{record.vin || "--"}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">{t('mileage_at_service')}</p>
                  <p className="font-extrabold text-foreground text-lg">124,500 km</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <HiClipboardList className="text-muted-foreground text-xl" />
                <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t('service_summary')}</h4>
              </div>
              <div className="bg-muted p-8 rounded-[24px] border border-border flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">{t('type')}</p>
                  <p className="font-extrabold text-foreground text-lg">{record.service}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">{t('total_cost')}</p>
                  <p className="font-black text-primary text-xl">${record.cost.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-10 py-10 space-y-6">
            <div className="flex items-center gap-3">
              <HiInformationCircle className="text-muted-foreground text-xl" />
              <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t('detailed_notes')}</h4>
            </div>
            <div className="p-8 border border-border rounded-[24px] italic text-muted-foreground text-sm leading-relaxed">
              {record.notes}
            </div>
          </div>

          {record.parts && record.parts.length > 0 && (
            <div className="px-10 pb-10 space-y-6">
              <div className="flex items-center gap-3">
                <HiTruck className="text-[#A3A6B4] text-xl rotate-180" />
                <h4 className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">Parts Replaced</h4>
              </div>
              <div className="space-y-1.5">
                {record.parts.map((part: any) => (
                  <div key={part.id} className="flex justify-between items-center px-4 py-2.5 border border-[#F4F4F5] rounded-lg bg-[#FAFAFA]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-3.5 h-3.5 rounded-full border border-red-100 flex items-center justify-center text-[7px] text-[#D72322] bg-red-50">✓</div>
                      <span className="font-medium text-[#71717A] text-[11px]">{part.part_name}</span>
                    </div>
                    <span className="font-semibold text-[#09090B] text-[11px]">${part.cost.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="p-10 bg-muted/50 border-t border-border flex justify-end gap-x-4">
            <button
              onClick={() => window.print()}
              className="bg-primary text-primary-foreground px-10 h-16 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 flex items-center gap-3 hover:scale-105 transition-all"
            >
              <HiPrinter className="text-xl" /> Print/Export
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddMaintenanceModal({ onClose, vehicles }: any) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    vehicle_id: vehicles?.[0]?.id || "",
    service_type: "Oil Change",
    service_date: new Date().toISOString().split('T')[0],
    mileage: 0,
    cost: 0,
    description: "",
    technician_location: ""
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const resp = await fetch("http://localhost:8000/maintenance/add", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (resp.ok) {
        toast.success("Maintenance added successfully");
        onClose();
      }
    } catch (err) {
      toast.error("Failed to add record");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-card w-full max-w-2xl rounded-[32px] overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh] border border-border">
        <div className="p-10 flex justify-between items-center border-b border-border shrink-0">
          <h2 className="text-2xl font-black text-primary">{t('add_service')}</h2>
          <button onClick={onClose} className="p-2 text-muted-foreground hover:bg-muted rounded-full transition-all"><HiX className="text-2xl" /></button>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-6 overflow-y-auto">
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            <InputGroup label={t('select_vehicle')} type="select" options={vehicles?.map((v: any) => ({ label: `${v.make} ${v.model} - ...${v.vin?.slice(-6)}`, value: v.id })) || []} value={formData.vehicle_id} onChange={(v: string) => setFormData({ ...formData, vehicle_id: parseInt(v) })} />
            <InputGroup label={t('service_cost')} type="number" prefix="$" value={formData.cost} onChange={(v: string) => setFormData({ ...formData, cost: parseFloat(v) })} />
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            <InputGroup label={t('service_type')} type="select" options={[{ label: t('oil_change'), value: 'Oil Change' }, { label: t('brake_change'), value: 'Brake Change' }, { label: t('engine_check'), value: 'Engine Check' }]} value={formData.service_type} onChange={(v: string) => setFormData({ ...formData, service_type: v })} />
            <InputGroup label={t('current_mileage')} type="number" suffix="KM" value={formData.mileage} onChange={(v: string) => setFormData({ ...formData, mileage: parseFloat(v) })} />
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            <InputGroup label={t('date')} type="date" value={formData.service_date} onChange={(v: string) => setFormData({ ...formData, service_date: v })} />
            <InputGroup label={t('tech_loc')} type="text" placeholder="e.g. QuickFix Motors" value={formData.technician_location} onChange={(v: string) => setFormData({ ...formData, technician_location: v })} />
          </div>

          <div className="col-span-2 space-y-3">
            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest pl-1">{t('notes')}</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder={t('add_additional_details')}
              className="w-full h-32 p-6 bg-muted border border-border rounded-[24px] outline-none focus:border-primary transition-all resize-none text-sm font-medium text-foreground"
            />
          </div>

          <div className="col-span-2 flex justify-end gap-x-4 mt-4">
            <button type="button" onClick={onClose} className="px-12 h-16 border border-border rounded-2xl font-black text-xs uppercase tracking-widest text-muted-foreground hover:bg-muted">{t('cancel')}</button>
            <button type="submit" className="px-12 h-16 bg-primary text-primary-foreground rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20">{t('save_changes')}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function EditMaintenanceModal({ record, onClose, onDelete }: any) {
  const { t } = useLanguage();
  const parseDate = (d: string) => {
    try {
      if (!d || ["Today", "Scheduled", "Overdue", "N/A"].includes(d)) return new Date().toISOString().split('T')[0];
      const parsed = new Date(d);
      return isNaN(parsed.getTime()) ? new Date().toISOString().split('T')[0] : parsed.toISOString().split('T')[0];
    } catch { return new Date().toISOString().split('T')[0]; }
  };

  const [formData, setFormData] = useState({
    vehicle_id: record.vehicle_id,
    service_type: record.service,
    service_date: parseDate(record.date),
    mileage: record.mileage || 45200, // Fallback if missing
    cost: record.cost,
    description: record.notes,
    technician_location: record.technician_location || ""
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const resp = await fetch(`http://localhost:8000/maintenance/update/${record.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (resp.ok) {
        toast.success("Maintenance updated successfully");
        onClose();
      }
    } catch (err) {
      toast.error("Failed to update record");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-card w-full max-w-2xl rounded-[32px] overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh] border border-border">
        <div className="p-10 flex justify-between items-center border-b border-border shrink-0">
          <h2 className="text-2xl font-black text-primary">{t('edit_service')}</h2>
          <button onClick={onClose} className="p-2 text-muted-foreground hover:bg-muted rounded-full transition-all"><HiX className="text-2xl" /></button>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-6 overflow-y-auto">
          <InputGroup label="SELECT VEHICLE" type="text" value={record.vehicle} disabled />
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            <InputGroup label="SERVICE COST" type="number" prefix="$" value={formData.cost} onChange={(v: string) => setFormData({ ...formData, cost: parseFloat(v) })} />
            <InputGroup label="SERVICE TYPE" type="select" options={[{ label: 'Oil Change', value: 'Oil Change' }, { label: 'Brake Change', value: 'Brake Change' }]} value={formData.service_type} onChange={(v: string) => setFormData({ ...formData, service_type: v })} />
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            <InputGroup label="CURRENT MILEAGE" type="number" suffix="KM" value={formData.mileage} onChange={(v: string) => setFormData({ ...formData, mileage: parseFloat(v) })} />
            <InputGroup label="SERVICE DATE" type="date" value={formData.service_date} onChange={(v: string) => setFormData({ ...formData, service_date: v })} />
          </div>
          <InputGroup label="TECHNICIAN / LOCATION" type="text" value={formData.technician_location} onChange={(v: string) => setFormData({ ...formData, technician_location: v })} />

          <div className="col-span-2 space-y-3">
            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest pl-1">NOTES</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full h-32 p-6 bg-muted border border-border rounded-[24px] outline-none focus:border-primary transition-all resize-none text-sm font-medium text-foreground"
            />
          </div>

          <div className="col-span-2 flex justify-between items-center mt-4">
            <button type="button" onClick={onDelete} className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:underline"><HiTrash className="text-lg" /> {t('delete_entry')}</button>
            <div className="flex gap-x-4">
              <button type="button" onClick={onClose} className="px-12 h-16 border border-border rounded-2xl font-black text-xs uppercase tracking-widest text-muted-foreground hover:bg-muted">{t('cancel')}</button>
              <button type="submit" className="px-12 h-16 bg-primary text-primary-foreground rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20">{t('update_service')}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function InputGroup({ label, type, value, onChange, options, prefix, suffix, disabled, placeholder }: any) {
  const { t } = useLanguage();
  return (
    <div className="space-y-3 relative">
      <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest pl-1">{label}</label>
      <div className="relative">
        {prefix && <span className="absolute left-6 top-1/2 -translate-y-1/2 font-medium text-muted-foreground">{prefix}</span>}
        {type === "select" ? (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full h-16 pl-6 pr-12 bg-muted border border-border rounded-2xl outline-none focus:border-primary transition-all text-sm font-bold appearance-none cursor-pointer text-foreground"
          >
            {options?.map((opt: any) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            placeholder={placeholder}
            className={`w-full h-16 ${prefix ? 'pl-10' : 'pl-6'} pr-6 bg-muted border border-border rounded-2xl outline-none focus:border-primary transition-all text-sm font-bold text-foreground ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          />
        )}
        {suffix && <span className="absolute right-6 top-1/2 -translate-y-1/2 font-black text-[10px] text-muted-foreground tracking-widest">{suffix}</span>}
      </div>
    </div>
  );
}
