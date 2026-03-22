import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import {
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';
import { useNavigate } from "react-router";
import { HiDotsVertical, HiClock, HiExclamationCircle, HiSparkles, HiX } from "react-icons/hi";
// @ts-ignore
import gearhouseLogo from "../../assets/Gearhouse logo Car only.png";
import Pagination from "../components/common/Pagination";
import { useLanguage } from "../context/LanguageContext";

// ==========================================
// DASHBOARD PAGE
// Provides a high-level overview of fleet stats,
// maintenance alerts, and recent activity charts.
// ==========================================
export default function Dashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesPerPage, setVehiclesPerPage] = useState(3);
  const [showAiModal, setShowAiModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      const userStr = localStorage.getItem("user");
      if (!userStr) {
        setLoading(false);
        return;
      }

      const user = JSON.parse(userStr);
      const userId = user.id || user.user?.id;

      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:8000/dashboard/data?user_id=${userId}`);
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error("Dashboard API error:", response.status);
        }
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const { t } = useLanguage();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="text-muted-foreground font-medium animate-pulse">{t('loading')}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background p-6 text-center font-['Inter',sans-serif]">
        <div className="bg-card p-10 rounded-2xl shadow-sm border border-border max-w-md">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <HiExclamationCircle className="text-3xl" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">{t('something_went_wrong')}</h2>
          <p className="text-muted-foreground text-sm mb-8">{t('error_occurred')}</p>
          <div className="flex gap-4">
            <button
              onClick={() => window.location.reload()}
              className="flex-1 bg-primary text-primary-foreground h-11 rounded-lg font-bold text-sm hover:opacity-90 transition-all"
            >
              {t('retry')}
            </button>
            <button
              onClick={() => { localStorage.clear(); window.location.href = '/login'; }}
              className="flex-1 bg-card text-muted-foreground h-11 rounded-lg font-bold text-sm border border-border hover:bg-muted transition-all"
            >
              {t('go_to_login')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const { stats, sortedVehicles, chart_data } = {
    stats: data.stats,
    sortedVehicles: data.vehicles,
    chart_data: data.chart_data
  };

  // Pagination
  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = sortedVehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);
  const totalPages = Math.ceil(sortedVehicles.length / vehiclesPerPage);


  return (
    <div className="bg-background min-h-screen flex font-['Inter',sans-serif] transition-colors duration-300">
      <Sidebar />

      <div className="ml-[240px] w-[calc(100%-240px)] page-transition pt-[72px]">
        <Header
          title={`${t('hi')}, ${stats.user_name.split(' ')[0]}`}
          subtitle={t('garage')}
          predictionCount={stats.ai_predicted}
        />

        <div className="p-4 sm:p-6 lg:p-8 space-y-8 max-w-[1400px]">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              label={t('total_investment')}
              value={`N$${stats.total_investment.toLocaleString()}`}
              change={stats.investment_change}
              type="investment"
              color="red"
              trend={stats.investment_trend}
            />
            <StatCard
              label={t('service_records')}
              value={stats.service_records_count.toString()}
              change={stats.records_change}
              type="records"
              color="orange"
              trend={stats.records_trend}
            />
            <StatCard
              label={t('scheduled_tasks')}
              value={stats.scheduled_tasks_count.toString()}
              change={stats.tasks_change}
              type="tasks"
              color="pink"
              trend={stats.tasks_trend}
            />
          </div>

          {/* Row 1: Chart & Limited Offer */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm transition-colors">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                <div>
                  <p className="text-muted-foreground text-xs mb-1 font-medium italic">{t('maintenance_activity')}</p>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-black text-foreground">{stats.active_alerts} {t('alerts')}</h2>
                    <span className="bg-primary text-primary-foreground text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg shadow-primary/20">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                        <path d="m19 12-7 7-7-7M12 19V5" />
                      </svg>
                      23.5%
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground font-black">{t('open_alerts')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#A3E635]" />
                      <span className="text-sm text-muted-foreground font-black">{t('closed_alerts')}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-xl text-sm text-foreground font-black bg-card hover:bg-muted transition-all">
                    {t('last_7_months')}
                    <HiClock className="text-primary" />
                  </button>
                </div>
              </div>

              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chart_data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorOpen" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#EC221F" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#EC221F" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorClosed" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#A3E635" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#A3E635" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F2F4" />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#A3A6B4', fontSize: 12, fontWeight: 500 }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#A3A6B4', fontSize: 12, fontWeight: 500 }}
                    />
                    <Tooltip
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="open_alerts"
                      stroke="#EC221F"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorOpen)"
                      dot={{ r: 4, fill: '#EC221F', stroke: 'white', strokeWidth: 2 }}
                      activeDot={{ r: 6, strokeWidth: 0 }}
                    />
                    <Area
                      type="monotone"
                      dataKey="closed_alerts"
                      stroke="#A3E635"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorClosed)"
                      dot={{ r: 4, fill: '#A3E635', stroke: 'white', strokeWidth: 2 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-card p-8 rounded-[32px] border border-border shadow-sm overflow-hidden relative group transition-all">
              <div className="flex justify-between items-start mb-8 relative z-10">
                <h4 className="text-lg font-black text-foreground">{t('limited_offer')}</h4>
                <div className="bg-muted p-2.5 rounded-xl border border-border">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground">
                    <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
                    <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z" />
                  </svg>
                </div>
              </div>

              <div className="relative h-[220px] flex items-center justify-center mb-10">
                <div className="w-[200px] h-[130px] bg-primary rounded-2xl rotate-[-4deg] shadow-2xl shadow-primary/30 flex flex-col items-center justify-center relative overflow-hidden group-hover:rotate-0 transition-transform duration-500">
                  <div className="absolute top-1/2 left-0 w-10 h-10 bg-card rounded-full -translate-x-1/2 -translate-y-1/2" />
                  <p className="text-primary-foreground text-4xl font-black mb-1">{t('off_20')}</p>
                  <p className="text-primary-foreground text-[15px] font-black text-center leading-tight uppercase tracking-widest opacity-90">{t('brake_service')}</p>
                  <div className="absolute top-1/2 right-4 w-5 h-5 border-2 border-white/20 rounded-full" />
                </div>
              </div>

              <button
                onClick={() => navigate('/bookings')}
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-black text-base shadow-xl shadow-primary/20 hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {t('book_now')}
              </button>
            </div>
          </div>

          {/* Row 2: Vehicle Status & AI Insight */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
            <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col transition-colors">
              <div className="p-6 border-b border-border">
                <h3 className="text-sm font-black text-foreground uppercase tracking-widest">{t('vehicle_status')}</h3>
              </div>
              <div className="overflow-x-hidden overflow-y-auto max-h-[400px]">
                <table className="w-full table-fixed text-left">
                  <thead className="sticky top-0 bg-muted z-10">
                    <tr className="border-b border-border">
                      <th className="py-3 px-6 font-black text-[11px] uppercase tracking-[0.2em] text-muted-foreground w-12 text-center">{t('no')}</th>
                      <th className="py-3 px-6 font-black text-[11px] uppercase tracking-[0.2em] text-muted-foreground w-[200px]">{t('vehicle')}</th>
                      <th className="py-3 px-6 font-black text-[11px] uppercase tracking-[0.2em] text-muted-foreground w-[140px]">{t('last_service')}</th>
                      <th className="py-3 px-6 font-black text-[11px] uppercase tracking-[0.2em] text-muted-foreground w-[120px]">{t('mileage')}</th>
                      <th className="py-3 px-6 font-black text-[11px] uppercase tracking-[0.2em] text-muted-foreground w-[100px]">{t('risk')}</th>
                      <th className="py-3 px-6 font-black text-[11px] uppercase tracking-[0.2em] text-muted-foreground text-center w-12"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {currentVehicles.map((v: any, idx: number) => (
                      <tr key={v.id} className="group hover:bg-muted transition-colors h-[64px]">
                        <td className="py-3 px-6 font-black text-muted-foreground text-center">
                          {(indexOfFirstVehicle + idx + 1).toString().padStart(2, '0')}
                        </td>
                        <td className="py-3 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-muted rounded-md flex items-center justify-center p-1 border border-border shrink-0">
                              <img src={gearhouseLogo} alt="car" className="w-full h-full object-contain grayscale opacity-60 invert dark:invert-0" />
                            </div>
                            <div className="truncate">
                              <p className="text-xs font-black text-foreground truncate">{v.make} {v.model}</p>
                              <p className="text-[10px] text-muted-foreground truncate font-bold">{v.license_plate || "N/A"}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-6">
                          <p className="text-xs font-black text-foreground">Mar 24, 2022</p>
                          <p className="text-[10px] text-muted-foreground font-bold">09:20 AM</p>
                        </td>
                        <td className="py-3 px-6">
                          <p className="text-xs font-black text-foreground">{v.mileage.toLocaleString()}.000km</p>
                        </td>
                        <td className="py-3 px-6">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${v.risk_level === 'High' ? 'bg-[#FEE2E2] text-[#D72322]' :
                            v.risk_level === 'Medium' ? 'bg-[#FEF3C7] text-[#D97706]' :
                              'bg-[#DCFCE7] text-[#15803D]'
                            }`}>
                            {v.risk_level}
                          </span>
                        </td>
                        <td className="py-3 px-6 text-right">
                          <button className="p-2 text-[#A1A1AA] hover:text-[#09090B] hover:bg-white rounded-md transition-all border border-transparent hover:border-[#E4E4E7]">
                            <HiDotsVertical className="text-sm" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {currentVehicles.length < vehiclesPerPage && Array.from({ length: vehiclesPerPage - currentVehicles.length }).map((_, idx) => (
                      <tr key={`empty-${idx}`} className="h-[64px]">
                        <td colSpan={6}>&nbsp;</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-[#F4F4F5]">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  pageSize={vehiclesPerPage}
                  totalItems={sortedVehicles.length}
                  itemsName={t('vehicles')}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>

            <div className="bg-card p-8 rounded-[32px] border border-border shadow-sm transition-colors h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2.5 rounded-xl text-primary">
                  <HiSparkles className="text-xl" />
                </div>
                <h4 className="text-lg font-black text-foreground uppercase tracking-tight">{t('ai_insight')}</h4>
              </div>
              <p className="text-2xl font-black text-foreground leading-[1.2] mb-10">
                {stats.ai_predicted > 0 
                  ? `${t('hi')}, I predict ${stats.ai_predicted} vehicles will need maintenance within 30 days.`
                  : "All systems clear! No urgent predictions for your fleet today."}
              </p>
              <div className="flex gap-4 mt-auto">
                <button
                  onClick={() => setShowAiModal(true)}
                  className="flex-1 bg-primary text-primary-foreground py-4 rounded-xl font-black text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20"
                >
                  {t('view_details')}
                </button>
                <button className="flex-1 bg-muted text-muted-foreground py-4 rounded-xl font-black text-sm hover:bg-muted/80 transition-all border border-border">
                  {t('dismiss')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insight Modal */}
      {showAiModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="bg-card w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-border flex flex-col max-h-[90vh]">
            {/* Header/Banner (Fixed) */}
            <div className="bg-primary p-8 text-primary-foreground relative shrink-0">
              <button
                onClick={() => setShowAiModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <HiX className="text-xl" />
              </button>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-2xl">
                  <HiSparkles className="text-2xl" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-[0.2em]">{t('ai_garage_insights')}</h3>
              </div>
              <p className="text-white/80 font-bold italic">{t('predictive_analysis')}</p>
            </div>

            <div className="p-8 space-y-8 overflow-y-auto flex-1 custom-scrollbar">
              {/* Prediction Card */}
              <div className="bg-muted p-8 rounded-[24px] border border-border">
                <h4 className="text-foreground font-black text-lg mb-4 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
                  {t('maintenance_forecast')}
                </h4>
                <p className="text-muted-foreground leading-relaxed font-bold">
                  Based on your current mileage trends and historical data, our AI models predict that <span className="text-primary font-black underline decoration-primary/30 underline-offset-4">{stats.ai_predicted} vehicles</span> will require service within the next <span className="text-foreground font-black">30 days</span>.
                </p>
              </div>

              {/* Breakdown */}
              <div className="space-y-4">
                <h4 className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.3em]">{t('detailed_analysis')}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {stats.top_insights && stats.top_insights.length > 0 ? (
                    stats.top_insights.map((ins: any, i: number) => (
                      <InsightItem key={i} title={ins.vehicle} detail={ins.insight} risk={ins.risk} />
                    ))
                  ) : (
                    <div className="col-span-2 py-8 text-center bg-background/50 rounded-xl border border-dashed border-border">
                      <p className="text-muted-foreground font-bold italic">No critical maintenance insights at the moment.</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => { setShowAiModal(false); navigate('/bookings'); }}
                  className="flex-1 bg-primary text-primary-foreground py-4 rounded-xl font-black hover:opacity-90 transition-all shadow-xl shadow-primary/20"
                >
                  {t('schedule_all_services')}
                </button>
                <button
                  onClick={() => setShowAiModal(false)}
                  className="flex-1 bg-muted text-muted-foreground py-4 rounded-xl font-black border border-border hover:bg-muted/80 transition-all"
                >
                  {t('close')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function InsightItem({ title, detail, risk }: { title: string, detail: string, risk: string }) {
  const { t } = useLanguage();
  const riskColor = risk === 'High' ? 'text-primary' : risk === 'Medium' ? 'text-amber-500' : 'text-emerald-500';
  return (
    <div className="p-4 bg-muted border border-border rounded-xl flex flex-col gap-1 hover:border-primary/30 transition-colors">
      <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{title}</span>
      <span className="text-sm font-black text-foreground">{detail}</span>
      <span className={`text-[10px] font-black uppercase ${riskColor}`}>{t('risk')}: {t(`risk_${risk.toLowerCase()}`)}</span>
    </div>
  );
}

function StatCard({ label, value, change, color, trend }: any) {
  const { t } = useLanguage();
  const isPositive = change.includes('+');

  return (
    <div className="bg-card p-6 rounded-[32px] border border-border shadow-sm group hover:border-primary/20 transition-all duration-300">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-muted-foreground text-[10px] font-black mb-4 uppercase tracking-[0.2em]">{label}</p>
          <h3 className="text-2xl font-black text-foreground mb-2">{value}</h3>
          <div className="flex items-center gap-1.5">
            <span className={`text-xs font-black ${isPositive ? 'text-emerald-500' : 'text-primary'}`}>
              {isPositive ? '↑' : '↓'} {change.split(' ')[1]}
            </span>
            <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-wide">{t('from_last_week')}</span>
          </div>
        </div>
        <div className={`p-3 rounded-2xl ${color === 'red' ? 'bg-primary/10 text-primary' :
          color === 'orange' ? 'bg-amber-500/10 text-amber-500' :
            'bg-pink-500/10 text-pink-500'
          }`}>
          <HiDotsVertical className="text-xl opacity-40 cursor-pointer hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Sparkline simulation */}
      <div className="flex items-end gap-1.5 h-12 mt-8">
        {trend.map((h: number, i: number) => (
          <div
            key={i}
            className={`flex-1 rounded-sm transition-all duration-700 ${i === trend.length - 2 ? 'bg-primary' : 'bg-muted group-hover:bg-primary/5'}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}
