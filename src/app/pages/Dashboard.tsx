import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import {
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';
import { useNavigate } from "react-router";
import { HiDotsVertical, HiClock, HiExclamationCircle, HiSparkles, HiX } from "react-icons/hi";
import gearhouseLogo from "../../assets/Gearhouse logo Car only.png";

// ==========================================
// DASHBOARD PAGE
// Provides a high-level overview of fleet stats,
// maintenance alerts, and recent activity charts.
// ==========================================
export default function Dashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAiModal, setShowAiModal] = useState(false);
  const navigate = useNavigate();
  const vehiclesPerPage = 3;

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
      <div className="flex flex-col items-center justify-center h-screen bg-[#F8F9FB] p-6 text-center">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-[#EEEFF2] max-w-md">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#D72322]">
            <HiExclamationCircle className="text-4xl" />
          </div>
          <h2 className="text-2xl font-black text-[#04091E] mb-2">Something went wrong</h2>
          <p className="text-[#747681] mb-8">We couldn't load your dashboard data. Please make sure the backend server is running and you are logged in.</p>
          <div className="flex gap-4">
            <button
              onClick={() => window.location.reload()}
              className="flex-1 bg-[#D72322] text-white py-3 rounded-xl font-bold hover:bg-[#B91C1C] transition-all"
            >
              Retry
            </button>
            <button
              onClick={() => { localStorage.clear(); window.location.href = '/'; }}
              className="flex-1 bg-[#F8F9FB] text-[#747681] py-3 rounded-xl font-bold border border-[#EEEFF2] hover:bg-gray-100 transition-all"
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
    <div className="bg-[#F8F9FB] min-h-screen flex font-['Outfit',sans-serif]">
      <Sidebar />

      <div className="ml-[256px] flex-1 overflow-x-hidden">
        <Header
          title={`Hi, ${stats.user_name.split(' ')[0]}`}
          subtitle="Let's check your Garage today"
        />

        <div className="p-10 space-y-8 max-w-[1400px]">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              label="Total Investment"
              value={`N$${stats.total_investment.toLocaleString()}`}
              change="- 0.5% from last week"
              type="investment"
              color="red"
              trend={[30, 70, 45, 90, 60, 100, 80]}
            />
            <StatCard
              label="Service Records"
              value={stats.service_records_count.toString()}
              change="+ 1.0% from last week"
              type="records"
              color="orange"
              trend={[20, 40, 30, 60, 50, 80, 70]}
            />
            <StatCard
              label="Scheduled Tasks"
              value={stats.scheduled_tasks_count.toString()}
              change="+ 1.0% from last week"
              type="tasks"
              color="pink"
              trend={[50, 30, 60, 40, 70, 50, 90]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Chart Section */}
              <div className="bg-white p-8 rounded-2xl border border-[#EEEFF2] shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                  <div>
                    <p className="text-[#747681] text-sm mb-1 font-medium">Maintenance Activity Overview</p>
                    <div className="flex items-center gap-3">
                      <h2 className="text-3xl font-black text-[#04091E]">242 Alerts</h2>
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
              <div className="bg-white p-8 rounded-2xl border border-[#EEEFF2] shadow-sm">
                <h3 className="text-xl font-bold text-[#04091E] mb-6">Vehicle Status</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b border-[#EEEFF2]">
                        <th className="pb-4 font-bold text-xs uppercase tracking-wider text-[#A3A6B4]">No</th>
                        <th className="pb-4 font-bold text-xs uppercase tracking-wider text-[#A3A6B4]">Vehicle Name</th>
                        <th className="pb-4 font-bold text-xs uppercase tracking-wider text-[#A3A6B4]">Last Service</th>
                        <th className="pb-4 font-bold text-xs uppercase tracking-wider text-[#A3A6B4]">Mileage</th>
                        <th className="pb-4 font-bold text-xs uppercase tracking-wider text-[#A3A6B4]">Risk Level</th>
                        <th className="pb-4 font-bold text-xs uppercase tracking-wider text-[#A3A6B4] text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EEEFF2]">
                      {currentVehicles.map((v: any, idx: number) => (
                        <tr key={v.id} className="group hover:bg-gray-50 transition-colors">
                          <td className="py-5 font-bold text-[#04091E]">
                            {(indexOfFirstVehicle + idx + 1).toString().padStart(2, '0')}
                          </td>
                          <td className="py-5">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-10 bg-[#F8F9FB] rounded-lg flex items-center justify-center p-1 border border-[#EEEFF2]">
                                <img src={gearhouseLogo} alt="car" className="w-full h-full object-contain grayscale opacity-60" />
                              </div>
                              <div>
                                <p className="text-sm font-black text-[#04091E]">{v.make} : {v.model}</p>
                                <p className="text-xs font-medium text-[#747681]">{v.license_plate || "N/A"}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-5">
                            <p className="text-sm font-bold text-[#04091E]">March 24, 2022</p>
                            <p className="text-xs font-medium text-[#747681]">09:20 AM</p>
                          </td>
                          <td className="py-5">
                            <p className="text-sm font-black text-[#04091E]">{v.mileage.toLocaleString()}.000km</p>
                          </td>
                          <td className="py-5">
                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${v.risk_level === 'High' ? 'bg-[#FEE2E2] text-[#EF4444]' :
                              v.risk_level === 'Medium' ? 'bg-[#FEF3C7] text-[#D97706]' :
                                'bg-[#EBFDF5] text-[#10B981]'
                              }`}>
                              {v.risk_level}
                            </span>
                          </td>
                          <td className="py-5 text-right">
                            <button className="p-2 text-[#A3A6B4] hover:text-[#04091E] hover:bg-white rounded-lg transition-all border border-transparent hover:border-[#EEEFF2]">
                              <HiDotsVertical />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Pagination */}
                <div className="mt-8 flex justify-end gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded-lg text-sm font-black transition-all ${currentPage === page
                        ? 'bg-[#D72322] text-white shadow-lg shadow-red-100'
                        : 'bg-[#F8F9FB] text-[#747681] hover:bg-gray-200 border border-[#EEEFF2]'
                        }`}
                    >
                      {page}
                    </button>
                  ))}
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#04091E]/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setShowAiModal(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-2xl rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/20">
            {/* Header/Banner */}
            <div className="bg-[#D72322] p-8 text-white relative">
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

            <div className="p-8 space-y-8">
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
    <div className="bg-white p-8 rounded-2xl border border-[#EEEFF2] shadow-sm group hover:border-[#D72322]/20 transition-all duration-300">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-[#A3A6B4] text-sm font-bold mb-4 uppercase tracking-wider">{label}</p>
          <h3 className="text-3xl font-black text-[#04091E] mb-2">{value}</h3>
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
      <div className="flex items-end gap-1.5 h-14 mt-8">
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
