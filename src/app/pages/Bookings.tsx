import { useState, useEffect, useMemo } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { HiChevronLeft, HiChevronRight, HiPlus, HiCalendar, HiDotsVertical, HiX, HiClock, HiCurrencyDollar, HiLocationMarker, HiCheckCircle, HiInformationCircle } from "react-icons/hi";
import { format, startOfWeek, addDays, subDays, eachDayOfInterval, startOfMonth, endOfMonth, isSameDay, addMonths, subMonths, isSameMonth, startOfDay, endOfDay } from "date-fns";
import { toast } from "sonner";
// ==========================================
// BOOKINGS PAGE
// Features a dynamic calendar with Day, Week, and Month views.
// Handles appointment scheduling and workshop availability mapping.
// ==========================================
export default function Bookings() {
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"day" | "week" | "month">("week");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [appointments, setAppointments] = useState<any[]>([]);
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<any>(null);

  const hours = ["07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

  const fetchData = async () => {
    const userStr = localStorage.getItem("user");
    if (!userStr) return;
    const user = JSON.parse(userStr);
    const userId = user.id || user.user?.id;
    if (!userId) return;

    try {
      const resp = await fetch(`http://localhost:8000/bookings/data?user_id=${userId}`);
      if (resp.ok) {
        const result = await resp.json();
        setAppointments(result.bookings || []);
      }

      const vResp = await fetch(`http://localhost:8000/dashboard/data?user_id=${userId}`);
      if (vResp.ok) {
        const vResult = await vResp.json();
        setVehicles(vResult.vehicles || []);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const calendarDays = useMemo(() => {
    if (viewMode === "week") {
      const start = startOfWeek(currentDate, { weekStartsOn: 1 });
      return eachDayOfInterval({ start, end: addDays(start, 6) });
    } else if (viewMode === "day") {
      return [currentDate];
    } else {
      const start = startOfMonth(currentDate);
      const end = endOfMonth(currentDate);
      // Pad to start of week and end of week for full month grid
      const weekStart = startOfWeek(start, { weekStartsOn: 1 });
      const weekEnd = startOfWeek(end, { weekStartsOn: 1 });
      return eachDayOfInterval({ start: weekStart, end: addDays(weekEnd, 6) });
    }
  }, [currentDate, viewMode]);

  const handlePrev = () => {
    if (viewMode === "week") setCurrentDate(subDays(currentDate, 7));
    else if (viewMode === "day") setCurrentDate(subDays(currentDate, 1));
    else setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNext = () => {
    if (viewMode === "week") setCurrentDate(addDays(currentDate, 7));
    else if (viewMode === "day") setCurrentDate(addDays(currentDate, 1));
    else setCurrentDate(addMonths(currentDate, 1));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#F8F9FB]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D72322]"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9FB] min-h-screen flex font-['Outfit',sans-serif]">
      <Sidebar />

      <div className="ml-[256px] flex-1 overflow-x-hidden">
        <Header title="Bookings" subtitle="Let's check your Garage today" />

        <div className="p-10 max-w-[1600px] mx-auto">
          <div className="bg-white rounded-[40px] border border-[#EEEFF2] shadow-sm overflow-hidden min-h-[800px] flex flex-col">
            {/* Calendar Header */}
            <div className="p-8 border-b border-[#EEEFF2] flex flex-col md:flex-row items-center justify-between gap-6 bg-white">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 border border-[#EEEFF2] rounded-2xl flex items-center justify-center text-[#D72322] shadow-inner">
                  <HiCalendar className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-[#04091E] text-2xl font-black">
                    {viewMode === 'day' ? format(currentDate, "EEEE, MMM d, yyyy") : format(currentDate, "MMMM yyyy")}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <button onClick={handlePrev} className="p-1 hover:bg-[#F8F9FB] rounded-lg transition-all text-[#747681]"><HiChevronLeft className="text-xl" /></button>
                    <button onClick={() => setCurrentDate(new Date())} className="text-[10px] font-black text-[#D72322] uppercase tracking-[0.2em] hover:underline px-2">Today</button>
                    <button onClick={handleNext} className="p-1 hover:bg-[#F8F9FB] rounded-lg transition-all text-[#747681]"><HiChevronRight className="text-xl" /></button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-[#F8F9FB] p-1.5 rounded-2xl border border-[#EEEFF2]">
                {["day", "week", "month"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode as any)}
                    className={`px-8 py-2.5 rounded-xl text-xs font-black transition-all uppercase tracking-widest ${viewMode === mode
                      ? "bg-white text-[#D72322] shadow-sm"
                      : "text-[#A3A6B4] hover:text-[#04091E]"
                      }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setShowAddModal(true)}
                className="bg-[#D72322] w-14 h-14 rounded-2xl shadow-xl shadow-red-100 hover:bg-[#B91C1C] transition-all flex items-center justify-center text-white"
              >
                <HiPlus className="text-2xl" />
              </button>
            </div>

            {/* Calendar Body */}
            <div className="flex-1 overflow-auto">
              {viewMode === 'month' ? (
                <MonthView days={calendarDays} appointments={appointments} currentDate={currentDate} onSelect={setSelectedBooking} />
              ) : (
                <GridView mode={viewMode} days={calendarDays} hours={hours} appointments={appointments} onSelect={setSelectedBooking} />
              )}
            </div>
          </div>
        </div>
      </div>

      {showAddModal && <AddBookingModal vehicles={vehicles} onClose={() => setShowAddModal(false)} onRefresh={fetchData} />}
      {selectedBooking && <BookingDetailsModal booking={selectedBooking} onClose={() => setSelectedBooking(null)} />}
    </div>
  );
}

function GridView({ mode, days, hours, appointments, onSelect }: any) {
  return (
    <div className="min-w-[1200px]">
      <div className="grid grid-cols-[100px_repeat(auto-fit,minmax(0,1fr))] bg-[#F8F9FB]/30 border-b border-[#EEEFF2]">
        <div className="p-6 border-r border-[#EEEFF2]" />
        {days.map((day: any) => (
          <div key={day.toString()} className="p-6 text-center border-r border-[#EEEFF2] last:border-r-0">
            <p className="text-[#A3A6B4] text-[10px] font-black uppercase tracking-widest mb-1">{format(day, "EEE d")}</p>
            <p className={`text-xl font-black ${isSameDay(day, new Date()) ? 'text-[#D72322]' : 'text-[#04091E]'}`}>
              {format(day, "d")}
            </p>
          </div>
        ))}
      </div>

      <div className="relative">
        {hours.map((hour: string, hIdx: number) => (
          <div key={hour} className="grid grid-cols-[100px_repeat(auto-fit,minmax(0,1fr))] border-b border-[#EEEFF2] last:border-b-0 min-h-[140px]">
            <div className="p-4 text-right border-r border-[#EEEFF2] flex flex-col items-end pt-6">
              <span className="text-[#04091E] text-xs font-black">{hour}</span>
            </div>
            {days.map((day: any, dIdx: number) => {
              const dayAppts = appointments.filter((a: any) => {
                const aDate = new Date(a.date);
                return isSameDay(aDate, day) && a.time === hour;
              });

              return (
                <div key={dIdx} className="border-r border-[#EEEFF2] last:border-r-0 p-3 relative group hover:bg-gray-50/50 transition-colors">
                  {dayAppts.map((appt: any) => (
                    <div
                      key={appt.id}
                      onClick={() => onSelect(appt)}
                      className="bg-[#D72322] rounded-[24px] p-6 shadow-xl shadow-red-100 cursor-pointer hover:scale-[1.02] transition-all"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/10 flex items-center justify-center text-white overflow-hidden text-xs font-black">
                          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${appt.name}`} alt="" />
                        </div>
                        <div>
                          <p className="text-white font-black text-sm leading-tight">{appt.name}</p>
                          <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{appt.service}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function MonthView({ days, appointments, currentDate, onSelect }: any) {
  return (
    <div className="grid grid-cols-7 h-full">
      {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(d => (
        <div key={d} className="p-6 border-b border-r border-[#EEEFF2] bg-[#F8F9FB]/30 text-center text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">
          {d}
        </div>
      ))}
      {days.map((day: any) => {
        const isCurrentMonth = isSameMonth(day, currentDate);
        const dayAppts = appointments.filter((a: any) => isSameDay(new Date(a.date), day));

        return (
          <div key={day.toString()} className={`min-h-[180px] p-6 border-b border-r border-[#EEEFF2] transition-colors hover:bg-gray-50/50 ${!isCurrentMonth ? 'bg-[#F8F9FB]/20 grayscale' : ''}`}>
            <span className={`text-lg font-black ${isSameDay(day, new Date()) ? 'text-[#D72322]' : isCurrentMonth ? 'text-[#04091E]' : 'text-[#A3A6B4]'}`}>
              {format(day, "d")}
            </span>
            <div className="mt-4 space-y-2">
              {dayAppts.slice(0, 3).map((a: any) => (
                <div key={a.id} onClick={() => onSelect(a)} className="bg-[#D72322] text-white p-2 rounded-xl text-[9px] font-black truncate shadow-sm cursor-pointer hover:bg-[#B91C1C]">
                  {a.service}
                </div>
              ))}
              {dayAppts.length > 3 && <p className="text-[10px] font-black text-[#A3A6B4]">+{dayAppts.length - 3} more</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AddBookingModal({ vehicles, onClose, onRefresh }: any) {
  const [formData, setFormData] = useState({
    vehicle_id: "", service_type: "Oil Change", service_center: "", location_address: "", preferred_date: "", preferred_time: "08:00 AM - 10:00 AM", notes: "", estimated_duration: "1.5 Hours", estimated_cost: 85.0
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userStr = localStorage.getItem("user");
    if (!userStr || !formData.vehicle_id) return;
    const userId = JSON.parse(userStr).id;

    try {
      const resp = await fetch(`http://localhost:8000/appointments/add?user_id=${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          vehicle_id: parseInt(formData.vehicle_id),
          preferred_date: new Date(formData.preferred_date).toISOString()
        })
      });

      if (resp.ok) {
        toast.success("Workshop appointment booked!");
        onRefresh();
        onClose();
      }
    } catch (err) {
      toast.error("Booking failed");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#04091E]/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[40px] w-full max-w-4xl flex overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex-1 p-10 border-r border-[#EEEFF2]">
          <div className="flex items-center gap-3 mb-8">
            <HiCalendar className="text-[#D72322] text-2xl" />
            <h2 className="text-[10px] font-black text-[#04091E] uppercase tracking-[0.2em]">Service Details</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">Select Vehicle</label>
                <select
                  value={formData.vehicle_id}
                  onChange={e => setFormData({ ...formData, vehicle_id: e.target.value })}
                  className="w-full h-14 px-6 bg-[#F8F9FB] border border-[#EEEFF2] rounded-2xl outline-none focus:border-[#D72322] text-sm font-black text-[#04091E] appearance-none"
                >
                  <option value="">Select Vehicle</option>
                  {vehicles.map((v: any) => <option key={v.id} value={v.id}>{v.make} {v.model} ({v.license_plate})</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">Service Type</label>
                <select
                  value={formData.service_type}
                  onChange={e => setFormData({ ...formData, service_type: e.target.value })}
                  className="w-full h-14 px-6 bg-[#F8F9FB] border border-[#EEEFF2] rounded-2xl outline-none focus:border-[#D72322] text-sm font-black text-[#04091E] appearance-none"
                >
                  {["Oil Change", "Brake Service", "Engine Check", "Tire Rotation", "Full Inspection"].map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">Select Service Center</label>
                <input
                  placeholder="e.g. Gearhouse Downtown Garage"
                  value={formData.service_center}
                  onChange={e => setFormData({ ...formData, service_center: e.target.value })}
                  className="w-full h-14 px-6 bg-[#F8F9FB] border border-[#EEEFF2] rounded-2xl outline-none focus:border-[#D72322] text-sm font-black text-[#04091E]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">Location Address</label>
                <input
                  placeholder="123 Main St, Downtown"
                  value={formData.location_address}
                  onChange={e => setFormData({ ...formData, location_address: e.target.value })}
                  className="w-full h-14 px-6 bg-[#F8F9FB] border border-[#EEEFF2] rounded-2xl outline-none focus:border-[#D72322] text-sm font-black text-[#04091E]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">Preferred Date</label>
                <input
                  type="date"
                  value={formData.preferred_date}
                  onChange={e => setFormData({ ...formData, preferred_date: e.target.value })}
                  className="w-full h-14 px-6 bg-[#F8F9FB] border border-[#EEEFF2] rounded-2xl outline-none focus:border-[#D72322] text-sm font-black text-[#04091E]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">Preferred Time Slot</label>
                <select
                  value={formData.preferred_time}
                  onChange={e => setFormData({ ...formData, preferred_time: e.target.value })}
                  className="w-full h-14 px-6 bg-[#F8F9FB] border border-[#EEEFF2] rounded-2xl outline-none focus:border-[#D72322] text-sm font-black text-[#04091E] appearance-none"
                >
                  {["07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"].map(t => <option key={t} value={t}>{t} - {parseInt(t) + 2}:00 {t.includes('AM') ? 'AM' : 'PM'}</option>)}
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">Special Instructions</label>
              <textarea
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Add any specific details or concerns..."
                className="w-full p-6 bg-[#F8F9FB] border border-[#EEEFF2] rounded-[24px] outline-none focus:border-[#D72322] text-sm font-medium h-32"
              />
            </div>
            <div className="flex gap-4 pt-4">
              <button onClick={onClose} type="button" className="px-10 h-14 border border-[#EEEFF2] text-[#D72322] rounded-2xl font-black text-sm hover:bg-red-50 transition-all">Cancel</button>
              <button type="submit" className="flex-1 h-14 bg-[#D72322] text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-red-100">
                <HiCheckCircle className="text-xl" /> Confirm Booking
              </button>
            </div>
          </form>
        </div>

        <div className="w-80 bg-[#F8F9FB] p-10 flex flex-col">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-10">
              <HiInformationCircle className="text-[#A3A6B4] text-2xl" />
              <h2 className="text-[10px] font-black text-[#04091E] uppercase tracking-[0.2em]">Booking Summary</h2>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 text-[#A3A6B4] mb-2 uppercase tracking-widest text-[8px] font-black">
                  <HiClock /> Estimated Duration
                </div>
                <p className="text-xl font-black text-[#04091E]">{formData.estimated_duration}</p>
              </div>
              <div className="h-px bg-[#EEEFF2]" />
              <div>
                <div className="flex items-center gap-2 text-[#A3A6B4] mb-2 uppercase tracking-widest text-[8px] font-black">
                  <HiCurrencyDollar /> Estimated Cost
                </div>
                <p className="text-3xl font-black text-[#D72322]">${formData.estimated_cost.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#EEEFF2]">
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full border border-[#EEEFF2] flex items-center justify-center text-[10px] text-[#A3A6B4]">?</div>
              <p className="text-[9px] font-bold text-[#747681] leading-relaxed">
                Cost is an estimate based on standard labor rates and parts. Final price may vary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookingDetailsModal({ booking, onClose }: any) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#04091E]/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[40px] w-full max-w-xl p-10 animate-in zoom-in-95 duration-200 shadow-2xl overflow-hidden relative">
        <button onClick={onClose} className="absolute top-8 right-8 p-2 hover:bg-[#F8F9FB] rounded-xl"><HiX className="text-2xl text-[#747681]" /></button>

        <div className="flex items-center gap-4 mb-10">
          <div className="w-20 h-20 rounded-[24px] bg-[#FEF2F2] border border-red-50 flex items-center justify-center text-[#D72322]">
            <HiCalendar className="text-4xl" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-[#04091E] leading-tight mb-1">{booking.service}</h2>
            <p className="text-[#A3A6B4] text-xs font-black uppercase tracking-widest">{format(new Date(booking.date), "EEEE, d MMMM yyyy")}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-10">
          <InfoItem label="TECHNICIAN" value={booking.name} />
          <InfoItem label="TIME SLOT" value={booking.time} />
          <InfoItem label="LOCATION" value={booking.center || 'Main Street Auto'} />
          <InfoItem label="STATUS" value={booking.status || 'Confirmed'} />
        </div>

        <div className="bg-[#F8F9FB] rounded-[24px] p-6 mb-10">
          <p className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest mb-3 flex items-center gap-2">
            <HiLocationMarker /> Address
          </p>
          <p className="text-sm font-black text-[#04091E]">{booking.address || '123 Downtown St, Suite 405'}</p>
        </div>

        <button onClick={onClose} className="w-full h-14 bg-[#04091E] text-white rounded-2xl font-black text-sm hover:scale-[1.02] transition-all">Close Details</button>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <p className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest mb-1">{label}</p>
      <p className="text-sm font-black text-[#04091E] uppercase">{value}</p>
    </div>
  );
}
