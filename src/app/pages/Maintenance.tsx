import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { HiDotsVertical, HiPlus, HiFilter, HiDownload, HiCalendar, HiInformationCircle, HiTrash, HiPrinter, HiX, HiTruck, HiClipboardList, HiCheckCircle } from "react-icons/hi";
import { toast } from "sonner";
import Pagination from "../components/common/Pagination";

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
  const [recordsPerPage, setRecordsPerPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");

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
      <div className="flex items-center justify-center h-screen bg-[#F8F9FB]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D72322]"></div>
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
    <div className="bg-[#F8F9FB] min-h-screen flex font-['Outfit',sans-serif]">
      <Sidebar />

      <div className="ml-[240px] flex-1">
        <Header
          title="Maintenance"
          subtitle="Let's check your Garage today"
          searchValue={searchQuery}
          onSearch={setSearchQuery}
        />

        <div className="px-6 py-8 flex items-start gap-6 max-w-[1300px] mx-auto">
          {/* Main Content */}
          <div className="flex-1 min-w-0 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-6">
              <MiniStat label="TOTAL LOGS" value={data?.stats.total_logs} trend="+12%" color="red" />
              <MiniStat label="ACTIVE ALERTS" value={data?.stats.active_alerts} highlight="Critical" color="orange" />
              <MiniStat label="COMPLETED (YTD)" value={data?.stats.completed_ytd} check color="green" />
              <MiniStat label="AI-PREDICTED (30D)" value={data?.stats.ai_predicted} sparkle color="gray" />
            </div>

            {/* List Section */}
            <div className="bg-white rounded-[32px] border border-[#EEEFF2] shadow-sm overflow-hidden">
              <div className="p-8 flex justify-between items-center bg-white border-b border-[#EEEFF2]">
                <div className="flex gap-4">
                  <select className="bg-[#F8F9FB] border border-[#EEEFF2] px-4 py-2 rounded-xl text-sm font-medium outline-none cursor-pointer">
                    <option>All Vehicles</option>
                  </select>
                  <select className="bg-[#F8F9FB] border border-[#EEEFF2] px-4 py-2 rounded-xl text-sm font-medium outline-none cursor-pointer">
                    <option>Service Type</option>
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
                    className="flex items-center gap-2 px-6 py-2 border border-[#EEEFF2] rounded-xl text-sm font-bold text-[#04091E] hover:bg-gray-50 transition-all">
                    <HiDownload className="text-[#D72322]" /> Export
                  </button>
                  <button
                    onClick={() => setShowAddModal(true)}
                    className="flex items-center gap-2 px-6 py-2 bg-[#D72322] text-white rounded-xl text-sm font-black shadow-lg shadow-red-100 hover:scale-105 transition-all"
                  >
                    <HiPlus /> Add Service
                  </button>
                </div>
              </div>

              <div className="overflow-visible pb-32">
                <table className="w-full relative">
                  <thead>
                    <tr className="text-left bg-white border-b border-[#EEEFF2]">
                      <th className="py-4 px-4 whitespace-nowrap text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">Vehicle</th>
                      <th className="py-4 px-4 whitespace-nowrap text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">Service Type</th>
                      <th className="py-4 px-4 whitespace-nowrap text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">Date</th>
                      <th className="py-4 px-4 whitespace-nowrap text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">Status</th>
                      <th className="py-4 px-4 whitespace-nowrap text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">Cost</th>
                      <th className="py-4 px-4 text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">Notes</th>
                      <th className="py-4 px-4 w-10"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EEEFF2]">
                    {currentRecords.map((record: any) => (
                      <tr key={record.id} className={`hover:bg-gray-50/50 transition-all relative ${statusMenuId === record.id || actionMenuId === record.id ? 'z-50' : 'z-0'}`}>
                        <td className="py-5 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#F8F9FB] rounded-xl border border-[#EEEFF2] flex items-center justify-center font-black text-[#D72322] text-[10px]">
                              {record.vehicle.substring(0, 2).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-bold text-[#04091E] text-xs leading-tight">{record.vehicle}</p>
                              <p className="text-[9px] text-[#A3A6B4] font-medium tracking-wide">
                                VIN: {record.vin && record.vin !== "N/A" ? `...${record.vin.slice(-6)}` : '...38842'}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-5 px-4 whitespace-nowrap">
                          <span className="text-[9px] font-black text-[#D72322] uppercase tracking-widest border border-red-100 px-3 py-1 rounded-md bg-red-50/30">
                            {record.service}
                          </span>
                        </td>
                        <td className="py-5 px-4 whitespace-nowrap text-xs font-medium text-[#747681]">{record.date}</td>
                        <td className="py-5 px-4 whitespace-nowrap relative">
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              setStatusMenuId(statusMenuId === record.id ? null : record.id);
                              setActionMenuId(null);
                            }}
                            className="flex items-center gap-2 cursor-pointer group"
                          >
                            <div className={`w-2 h-2 rounded-full ${record.status === 'COMPLETED' ? 'bg-[#10B981]' : record.status === 'OVERDUE' ? 'bg-[#D72322]' : 'bg-[#F97316]'}`} />
                            <span className={`text-[9px] font-black uppercase tracking-widest group-hover:underline ${record.status === 'COMPLETED' ? 'text-[#10B981]' : record.status === 'OVERDUE' ? 'text-[#D72322]' : 'text-[#F97316]'}`}>
                              {record.status}
                            </span>
                          </div>
                          {statusMenuId === record.id && (
                            <div className="absolute left-4 top-[80%] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-[#EEEFF2] py-2 w-40 z-[100] animate-in fade-in slide-in-from-top-2 flex flex-col">
                              <p className="px-4 py-1 text-[8px] font-black text-[#A3A6B4] uppercase tracking-widest border-b border-[#EEEFF2] mb-1">Set Status</p>
                              <button onClick={() => handleStatusUpdate(record.id, 'COMPLETED')} className="w-full text-left px-4 py-2 text-xs font-bold text-[#10B981] hover:bg-green-50 transition-colors">Completed</button>
                              <button onClick={() => handleStatusUpdate(record.id, 'OPEN')} className="w-full text-left px-4 py-2 text-xs font-bold text-[#F97316] hover:bg-orange-50 transition-colors">Open</button>
                              <button onClick={() => handleStatusUpdate(record.id, 'OVERDUE')} className="w-full text-left px-4 py-2 text-xs font-bold text-[#D72322] hover:bg-red-50 transition-colors">Overdue</button>
                            </div>
                          )}
                        </td>
                        <td className="py-5 px-4 whitespace-nowrap font-black text-[#04091E] text-xs">${record.cost.toLocaleString()}</td>
                        <td className="py-5 px-4 text-[11px] text-[#747681] font-medium max-w-[180px] truncate">{record.notes}</td>
                        <td className="py-5 px-4 text-right relative min-w-[60px]">
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
                                View
                              </button>
                              <button
                                onClick={() => { setSelectedRecord(record); setShowEditModal(true); setActionMenuId(null); }}
                                className="w-full text-left px-4 py-3 text-sm font-bold text-[#04091E] hover:bg-gray-50 flex items-center justify-between transition-colors"
                              >
                                Edit
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-8 bg-white">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  pageSize={recordsPerPage}
                  onPageChange={setCurrentPage}
                  onPageSizeChange={(size) => {
                    setRecordsPerPage(size);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="w-[280px] xl:w-[320px] shrink-0 space-y-6">
            {/* AI Insights Card */}
            <div className="bg-white rounded-[24px] border-l-[6px] border-[#D72322] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <HiInformationCircle className="text-[#D72322] text-2xl" />
                <h3 className="font-black text-[#04091E] text-xs uppercase tracking-widest">AI Insights</h3>
              </div>
              <div className="bg-red-50/30 rounded-xl p-5 border border-red-50 mb-5">
                <p className="text-[9px] font-black text-[#D72322] uppercase tracking-widest mb-1">Next Maint.</p>
                <p className="font-bold text-[#04091E] text-base">Service in 1,240 km</p>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-[9px] font-black text-[#A3A6B4] uppercase tracking-widest mb-1">Est. Cost</p>
                  <p className="font-black text-[#04091E] text-base">$540.00</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-black text-[#A3A6B4] uppercase tracking-widest mb-1">Confidence</p>
                  <p className="font-black text-[#04091E] text-base">92%</p>
                </div>
              </div>
              <button className="w-full bg-[#D72322] text-white py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-red-100 hover:scale-[1.02] transition-all">
                Optimize Schedule
              </button>
            </div>

            {/* Upcoming Section */}
            <div>
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-black text-[#04091E] text-[10px] uppercase tracking-widest font-['Outfit']">Upcoming</h3>
                <span className="bg-[#D72322] text-white text-[9px] px-2 py-0.5 rounded font-black tracking-wider">30D Window</span>
              </div>
              <div className="space-y-3">
                {data?.upcoming.map((u: any) => (
                  <div key={u.id} className="bg-white p-4 rounded-2xl border border-[#EEEFF2] flex items-center gap-3 group cursor-pointer hover:border-[#D72322]/20 transition-all">
                    <div className="p-2.5 bg-[#F8F9FB] rounded-xl text-[#A3A6B4] group-hover:text-[#D72322] transition-colors">
                      <HiCalendar className="text-lg" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-[#04091E] text-[11px] leading-tight truncate">{u.title}</p>
                      <p className="text-[9px] text-[#A3A6B4] font-medium mt-0.5 truncate">{u.date}</p>
                    </div>
                    <div className="text-[#EEEFF2] group-hover:text-[#D72322] transition-colors text-xs opacity-50">{">"}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support/Tips */}
            <div className="bg-[#FFF8F8] p-5 rounded-2xl border border-red-50">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D72322]" />
                <p className="font-black text-[#D72322] text-[9px] uppercase tracking-widest">Maintenance Tip</p>
              </div>
              <p className="text-[#747681] text-[11px] font-medium leading-relaxed">
                Check tire pressure monthly to improve fuel efficiency by up to <span className="text-[#04091E] font-bold">3%</span>. Correct inflation also increases tire lifespan significantly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#EEEFF2] space-y-3">
              <p className="font-black text-[#04091E] text-[9px] uppercase tracking-widest">Need Assistance?</p>
              <p className="font-black text-[#04091E] text-2xl">1-800-GEAR-HELP</p>
              <button className="w-full bg-[#D72322] rounded-xl py-4 text-white text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2">
                Call Roadside Help
              </button>
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
  const colorClasses: any = {
    red: "text-[#D72322]",
    orange: "text-[#F97316]",
    green: "text-[#10B981]",
    gray: "text-[#04091E]"
  };

  return (
    <div className="bg-white p-6 rounded-[24px] border border-[#EEEFF2] shadow-sm relative group hover:border-[#D72322]/10 transition-all">
      <div className="flex flex-col gap-1">
        <h3 className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest leading-none">{label}</h3>
        <div className="flex items-center gap-4 mt-2">
          <span className="text-3xl font-black text-[#04091E]">{value?.toLocaleString() || '0'}</span>
          {trend && (
            <div className="flex items-center text-[#10B981] text-xs font-bold gap-1 mt-auto pb-1">
              <span className="rotate-[-45deg]">↑</span> {trend}
            </div>
          )}
          {highlight && <span className="text-xs font-black text-[#D72322] mt-auto pb-1">{highlight}</span>}
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
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-[640px] rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
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
        <div className="print:hidden">
          <div className="p-10 flex justify-between items-start">
            <div>
              <h2 className="text-[32px] font-black text-[#04091E]">{record.vehicle} — {record.service}</h2>
              <p className="text-[#A3A6B4] font-medium mt-1">Recorded on {record.date}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest ${record.status === 'OVERDUE' ? 'bg-[#FFF1F2] text-[#D72322]' : 'bg-[#F0FDF4] text-[#10B981]'}`}>
                {record.status}
              </span>
              <button onClick={onClose} className="p-2 text-[#A3A6B4] hover:bg-gray-50 rounded-full transition-all"><HiX className="text-2xl" /></button>
            </div>
          </div>

          <div className="px-10 grid grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <HiTruck className="text-[#A3A6B4] text-xl" />
                <h4 className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">Vehicle Info</h4>
              </div>
              <div className="bg-[#F8F9FB] p-8 rounded-[24px] border border-[#EEEFF2] space-y-4">
                <div>
                  <p className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest mb-1">VIN Number</p>
                  <p className="font-extrabold text-[#04091E] text-sm tracking-widest">{record.vin || "--"}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest mb-1">Mileage at Service</p>
                  <p className="font-extrabold text-[#04091E] text-lg">124,500 km</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <HiClipboardList className="text-[#A3A6B4] text-xl" />
                <h4 className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">Service Summary</h4>
              </div>
              <div className="bg-[#F8F9FB] p-8 rounded-[24px] border border-[#EEEFF2] flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest mb-1">Type</p>
                  <p className="font-extrabold text-[#04091E] text-lg">{record.service}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest mb-1">Total Cost</p>
                  <p className="font-black text-[#D72322] text-xl">${record.cost.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-10 py-10 space-y-6">
            <div className="flex items-center gap-3">
              <HiInformationCircle className="text-[#A3A6B4] text-xl" />
              <h4 className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">Detailed Notes</h4>
            </div>
            <div className="p-8 border border-[#EEEFF2] rounded-[24px] italic text-[#747681] text-sm leading-relaxed">
              {record.notes}
            </div>
          </div>

          {record.parts && record.parts.length > 0 && (
            <div className="px-10 pb-10 space-y-6">
              <div className="flex items-center gap-3">
                <HiTruck className="text-[#A3A6B4] text-xl rotate-180" />
                <h4 className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">Parts Replaced</h4>
              </div>
              <div className="space-y-3">
                {record.parts.map((part: any) => (
                  <div key={part.id} className="flex justify-between items-center p-5 border border-[#EEEFF2] rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border border-[#EEEFF2] flex items-center justify-center text-[10px] text-[#A3A6B4]">✓</div>
                      <span className="font-bold text-[#747681] text-sm">{part.part_name}</span>
                    </div>
                    <span className="font-extrabold text-[#04091E] text-sm">${part.cost.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="p-10 bg-[#F8F9FB]/50 border-t border-[#EEEFF2] flex justify-end gap-x-4">
            <button
              onClick={() => window.print()}
              className="bg-[#D72322] text-white px-10 h-16 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-red-100 flex items-center gap-3 hover:scale-105 transition-all"
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-[640px] rounded-[32px] overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        <div className="p-10 flex justify-between items-center border-b border-[#EEEFF2] shrink-0">
          <h2 className="text-2xl font-black text-[#D72322]">Add Maintenance Request</h2>
          <button onClick={onClose} className="p-2 text-[#A3A6B4] hover:bg-gray-50 rounded-full transition-all"><HiX className="text-2xl" /></button>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-6 overflow-y-auto">
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            <InputGroup label="SELECT VEHICLE" type="select" options={vehicles?.map((v: any) => ({ label: `${v.make} ${v.model} - ...${v.vin?.slice(-6)}`, value: v.id })) || []} value={formData.vehicle_id} onChange={(v: string) => setFormData({ ...formData, vehicle_id: parseInt(v) })} />
            <InputGroup label="SERVICE COST" type="number" prefix="$" value={formData.cost} onChange={(v: string) => setFormData({ ...formData, cost: parseFloat(v) })} />
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            <InputGroup label="SERVICE TYPE" type="select" options={[{ label: 'Oil Change', value: 'Oil Change' }, { label: 'Brake Change', value: 'Brake Change' }, { label: 'Engine Check', value: 'Engine Check' }]} value={formData.service_type} onChange={(v: string) => setFormData({ ...formData, service_type: v })} />
            <InputGroup label="CURRENT MILEAGE" type="number" suffix="KM" value={formData.mileage} onChange={(v: string) => setFormData({ ...formData, mileage: parseFloat(v) })} />
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            <InputGroup label="SERVICE DATE" type="date" value={formData.service_date} onChange={(v: string) => setFormData({ ...formData, service_date: v })} />
            <InputGroup label="TECHNICIAN / LOCATION" type="text" placeholder="e.g. QuickFix Motors" value={formData.technician_location} onChange={(v: string) => setFormData({ ...formData, technician_location: v })} />
          </div>

          <div className="col-span-2 space-y-3">
            <label className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest pl-1">NOTES</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter detailed service description, specific parts used, or future recommendations..."
              className="w-full h-32 p-6 bg-[#F8F9FB] border border-[#EEEFF2] rounded-[24px] outline-none focus:border-[#D72322] transition-all resize-none text-sm font-medium"
            />
          </div>

          <div className="col-span-2 flex justify-end gap-x-4 mt-4">
            <button type="button" onClick={onClose} className="px-12 h-16 border border-[#EEEFF2] rounded-2xl font-black text-xs uppercase tracking-widest text-[#747681]">Cancel</button>
            <button type="submit" className="px-12 h-16 bg-[#D72322] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-red-100">Save Service</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function EditMaintenanceModal({ record, onClose, onDelete }: any) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-[640px] rounded-[32px] overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        <div className="p-10 flex justify-between items-center border-b border-[#EEEFF2] shrink-0">
          <h2 className="text-2xl font-black text-[#D72322]">Edit Maintenance Request</h2>
          <button onClick={onClose} className="p-2 text-[#A3A6B4] hover:bg-gray-50 rounded-full transition-all"><HiX className="text-2xl" /></button>
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
            <label className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest pl-1">NOTES</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full h-32 p-6 bg-[#F8F9FB] border border-[#EEEFF2] rounded-[24px] outline-none focus:border-[#D72322] transition-all resize-none text-sm font-medium"
            />
          </div>

          <div className="col-span-2 flex justify-between items-center mt-4">
            <button type="button" onClick={onDelete} className="flex items-center gap-2 text-[#D72322] font-black text-xs uppercase tracking-widest"><HiTrash className="text-lg" /> Delete Entry</button>
            <div className="flex gap-x-4">
              <button type="button" onClick={onClose} className="px-12 h-16 border border-[#EEEFF2] rounded-2xl font-black text-xs uppercase tracking-widest text-[#747681]">Cancel</button>
              <button type="submit" className="px-12 h-16 bg-[#D72322] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-red-100">Update Service</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function InputGroup({ label, type, value, onChange, options, prefix, suffix, disabled, placeholder }: any) {
  return (
    <div className="space-y-3 relative">
      <label className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest pl-1">{label}</label>
      <div className="relative">
        {prefix && <span className="absolute left-6 top-1/2 -translate-y-1/2 font-medium text-[#747681]">{prefix}</span>}
        {type === "select" ? (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full h-16 pl-6 pr-12 bg-[#F8F9FB] border border-[#EEEFF2] rounded-2xl outline-none focus:border-[#D72322] transition-all text-sm font-bold appearance-none cursor-pointer"
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
            className={`w-full h-16 ${prefix ? 'pl-10' : 'pl-6'} pr-6 bg-[#F8F9FB] border border-[#EEEFF2] rounded-2xl outline-none focus:border-[#D72322] transition-all text-sm font-bold ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          />
        )}
        {suffix && <span className="absolute right-6 top-1/2 -translate-y-1/2 font-black text-[10px] text-[#A3A6B4] tracking-widest">{suffix}</span>}
      </div>
    </div>
  );
}
