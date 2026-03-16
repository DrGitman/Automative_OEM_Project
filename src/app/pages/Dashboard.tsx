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

// ==========================================
// DASHBOARD PAGE
// Provides a high-level overview of fleet stats,
// maintenance alerts, and recent activity charts.
// ==========================================
export default function Dashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesPerPage, setVehiclesPerPage] = useState(5);
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#F8F9FB]">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D72322]"></div>
          <p className="text-[#747681] font-medium animate-pulse">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#F8F9FB] p-6 text-center font-['Inter',sans-serif]">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-[#E4E4E7] max-w-md">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#D72322]">
            <HiExclamationCircle className="text-3xl" />
          </div>
          <h2 className="text-xl font-semibold text-[#09090B] mb-2">Something went wrong</h2>
          <p className="text-[#71717A] text-sm mb-8">We couldn't load your dashboard data. Please make sure the backend server is running and you are logged in.</p>
          <div className="flex gap-4">
            <button
              onClick={() => window.location.reload()}
              className="flex-1 bg-[#D72322] text-white h-11 rounded-lg font-semibold text-sm hover:bg-[#B91C1C] transition-all"
            >
              Retry
            </button>
            <button
              onClick={() => { localStorage.clear(); window.location.href = '/'; }}
              className="flex-1 bg-white text-[#71717A] h-11 rounded-lg font-semibold text-sm border border-[#E4E4E7] hover:bg-gray-50 transition-all"
            >
              Go to Login
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
    <div className="bg-[#F8F9FB] min-h-screen flex font-['Inter',sans-serif]">
      <Sidebar />

      <div className="ml-[240px] flex-1 overflow-x-hidden page-transition">
        <Header
          title={`Hi, ${stats.user_name.split(' ')[0]}`}
          subtitle="Let's check your Garage today"
        />

        <div className="p-8 space-y-6 max-w-[1200px]">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              label="Total Investment"
              value={`N$${stats.total_investment.toLocaleString()}`}
              change={stats.investment_change}
              type="investment"
              color="red"
              trend={stats.investment_trend}
            />
            <StatCard
              label="Service Records"
              value={stats.service_records_count.toString()}
              change={stats.records_change}
              type="records"
              color="orange"
              trend={stats.records_trend}
            />
            <StatCard
              label="Scheduled Tasks"
              value={stats.scheduled_tasks_count.toString()}
              change={stats.tasks_change}
              type="tasks"
              color="pink"
              trend={stats.tasks_trend}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Chart Section */}
              <div className="bg-white p-8 rounded-2xl border border-[#EEEFF2] shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                  <div>
                    <p className="text-[#747681] text-xs mb-1 font-medium">Maintenance Activity Overview</p>
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-black text-[#04091E]">242 Alerts</h2>
                      <span className="bg-[#EC221F] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
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
                        <div className="w-2.5 h-2.5 rounded-full bg-[#EC221F]" />
                        <span className="text-sm text-[#747681] font-medium">Open Alerts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#A3E635]" />
                        <span className="text-sm text-[#747681] font-medium">Closed Alerts</span>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border border-[#EEEFF2] rounded-lg text-sm text-[#04091E] font-bold bg-white hover:bg-gray-50 transition-colors">
                      Last 7 month
                      <HiClock className="text-[#EC221F]" />
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

              {/* Vehicle Status Table */}
              <div className="bg-white rounded-2xl border border-[#E4E4E7] shadow-sm overflow-hidden">
                <div className="p-6 border-b border-[#F4F4F5]">
                  <h3 className="text-sm font-semibold text-[#09090B]">Vehicle Status</h3>
                </div>
                <div className="overflow-auto max-h-[400px]">
                  <table className="w-full table-fixed text-left">
                    <thead className="sticky top-0 bg-[#FAFAFA] z-10">
                      <tr className="border-b border-[#F4F4F5]">
                        <th className="py-3 px-6 font-semibold text-[11px] uppercase tracking-wider text-[#71717A] w-12 text-center">No</th>
                        <th className="py-3 px-6 font-semibold text-[11px] uppercase tracking-wider text-[#71717A] w-[200px]">Vehicle</th>
                        <th className="py-3 px-6 font-semibold text-[11px] uppercase tracking-wider text-[#71717A] w-[140px]">Last Service</th>
                        <th className="py-3 px-6 font-semibold text-[11px] uppercase tracking-wider text-[#71717A] w-[120px]">Mileage</th>
                        <th className="py-3 px-6 font-semibold text-[11px] uppercase tracking-wider text-[#71717A] w-[100px]">Risk</th>
                        <th className="py-3 px-6 font-semibold text-[11px] uppercase tracking-wider text-[#71717A] text-center w-12"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F4F4F5]">
                      {currentVehicles.map((v: any, idx: number) => (
                        <tr key={v.id} className="group hover:bg-[#FAFAFA] transition-colors h-[64px]">
                          <td className="py-3 px-6 font-medium text-[#71717A] text-center">
                            {(indexOfFirstVehicle + idx + 1).toString().padStart(2, '0')}
                          </td>
                          <td className="py-3 px-6">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-[#F8F9FB] rounded-md flex items-center justify-center p-1 border border-[#E4E4E7] shrink-0">
                                <img src={gearhouseLogo} alt="car" className="w-full h-full object-contain grayscale opacity-60" />
                              </div>
                              <div className="truncate">
                                <p className="text-xs font-semibold text-[#09090B] truncate">{v.make} {v.model}</p>
                                <p className="text-[10px] text-[#71717A] truncate font-medium">{v.license_plate || "N/A"}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-6">
                            <p className="text-xs font-semibold text-[#09090B]">Mar 24, 2022</p>
                            <p className="text-[10px] text-[#71717A] font-medium">09:20 AM</p>
                          </td>
                          <td className="py-3 px-6">
                            <p className="text-xs font-semibold text-[#09090B]">{v.mileage.toLocaleString()}.000km</p>
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
                    itemsName="vehicles"
                    onPageChange={setCurrentPage}
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Limited Time Offer */}
              <div className="bg-white p-8 rounded-2xl border border-[#EEEFF2] shadow-sm overflow-hidden relative group">
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <h4 className="text-lg font-black text-[#04091E]">Limited Time Offer</h4>
                  <div className="bg-[#F8F9FB] p-2.5 rounded-xl border border-[#EEEFF2]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#04091E" strokeWidth="2">
                      <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
                      <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z" />
                    </svg>
                  </div>
                </div>

                <div className="relative h-[220px] flex items-center justify-center mb-10">
                  {/* The Red Tag */}
                  <div className="w-[200px] h-[130px] bg-[#D72322] rounded-2xl rotate-[-4deg] shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group-hover:rotate-0 transition-transform duration-500">
                    <div className="absolute top-1/2 left-0 w-10 h-10 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <p className="text-white text-4xl font-black mb-1">20% Off</p>
                    <p className="text-white text-[15px] font-bold text-center leading-tight uppercase tracking-widest opacity-90">Brake<br />Service</p>
                    <div className="absolute top-1/2 right-4 w-5 h-5 border-2 border-white/20 rounded-full" />
                  </div>
                </div>

                <button
                  onClick={() => navigate('/bookings')}
                  className="w-full bg-[#D72322] text-white py-4 rounded-xl font-black text-base shadow-xl shadow-red-100 hover:bg-[#B91C1C] transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Now
                </button>
              </div>

              {/* AI Insight */}
              <div className="bg-white p-8 rounded-2xl border border-[#EEEFF2] shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#FEF2F2] p-2.5 rounded-xl text-[#D72322]">
                    <HiSparkles className="text-xl" />
                  </div>
                  <h4 className="text-lg font-black text-[#04091E]">AI Insight</h4>
                </div>

                <p className="text-2xl font-black text-[#04091E] leading-[1.2] mb-10">
                  Maintenance likely needed in 2 weeks for 3 vehicles
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => setShowAiModal(true)}
                    className="flex-1 bg-[#D72322] text-white py-4 rounded-xl font-black text-sm hover:bg-[#B91C1C] transition-all shadow-lg shadow-red-50"
                  >
                    View Details
                  </button>
                  <button className="flex-1 bg-[#F8F9FB] text-[#747681] py-4 rounded-xl font-black text-sm hover:bg-gray-100 transition-all border border-[#EEEFF2]">
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insight Modal */}
      {showAiModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#04091E]/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/20 flex flex-col max-h-[90vh]">
            {/* Header/Banner (Fixed) */}
            <div className="bg-[#D72322] p-8 text-white relative shrink-0">
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
                <h3 className="text-2xl font-black uppercase tracking-wider">AI Garage Insights</h3>
              </div>
              <p className="text-white/80 font-medium">Predictive maintenance analysis for your fleet</p>
            </div>

            <div className="p-8 space-y-8 overflow-y-auto flex-1">
              {/* Prediction Card */}
              <div className="bg-[#F8F9FB] p-6 rounded-2xl border border-[#EEEFF2]">
                <h4 className="text-[#04091E] font-black text-lg mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#D72322] rounded-full" />
                  Maintenance Forecast
                </h4>
                <p className="text-[#747681] leading-relaxed font-medium">
                  Based on your current mileage trends and historical data, our AI models predict that <span className="text-[#04091E] font-black underline decoration-[#D72322]/30">3 vehicles</span> will require service within the next <span className="text-[#04091E] font-black">14 days</span>.
                </p>
              </div>

              {/* Breakdown */}
              <div className="space-y-4">
                <h4 className="text-[#A3A6B4] text-xs font-black uppercase tracking-[0.2em]">Detailed Analysis</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InsightItem title="Brake Wear" detail="85% worn on Sedan" risk="High" />
                  <InsightItem title="Engine Oil" detail="Due in 450km" risk="Medium" />
                  <InsightItem title="Tire Health" detail="Rotation advised" risk="Low" />
                  <InsightItem title="Battery" detail="Optimal state" risk="None" />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => { setShowAiModal(false); navigate('/bookings'); }}
                  className="flex-1 bg-[#D72322] text-white py-4 rounded-xl font-black hover:bg-[#B91C1C] transition-all"
                >
                  Schedule All Services
                </button>
                <button
                  onClick={() => setShowAiModal(false)}
                  className="flex-1 bg-white text-[#747681] py-4 rounded-xl font-black border border-[#EEEFF2] hover:bg-gray-50 transition-all"
                >
                  Close
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
  const riskColor = risk === 'High' ? 'text-red-500' : risk === 'Medium' ? 'text-amber-500' : 'text-emerald-500';
  return (
    <div className="p-4 bg-white border border-[#EEEFF2] rounded-xl flex flex-col gap-1 hover:border-[#D72322]/30 transition-colors">
      <span className="text-[10px] font-black uppercase tracking-widest text-[#A3A6B4]">{title}</span>
      <span className="text-sm font-black text-[#04091E]">{detail}</span>
      <span className={`text-[10px] font-bold uppercase ${riskColor}`}>Risk: {risk}</span>
    </div>
  );
}

function StatCard({ label, value, change, type, color, trend }: any) {
  const isPositive = change.includes('+');

  return (
    <div className="bg-white p-6 rounded-2xl border border-[#EEEFF2] shadow-sm group hover:border-[#D72322]/20 transition-all duration-300">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-[#A3A6B4] text-sm font-bold mb-4 uppercase tracking-wider">{label}</p>
          <h3 className="text-2xl font-black text-[#04091E] mb-2">{value}</h3>
          <div className="flex items-center gap-1.5">
            <span className={`text-xs font-black ${isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
              {isPositive ? '↑' : '↓'} {change.split(' ')[1]}
            </span>
            <span className="text-[#A3A6B4] text-[10px] font-bold uppercase tracking-wide">from last week</span>
          </div>
        </div>
        <div className={`p-3 rounded-full ${color === 'red' ? 'bg-[#FEF2F2] text-[#D72322]' :
          color === 'orange' ? 'bg-[#FFF7ED] text-[#F97316]' :
            'bg-[#FDF2F9] text-[#DB2777]'
          }`}>
          <HiDotsVertical className="text-xl opacity-40 cursor-pointer hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Sparkline simulation */}
      <div className="flex items-end gap-1.5 h-12 mt-8">
        {trend.map((h: number, i: number) => (
          <div
            key={i}
            className={`flex-1 rounded-sm transition-all duration-700 delay-[${i * 50}ms] ${i === trend.length - 2 ? 'bg-[#D72322]' : 'bg-[#E2E4E8] group-hover:bg-[#25314C]/10'
              }`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}
