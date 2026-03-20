import { useState, useEffect, useMemo } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useLanguage } from "../context/LanguageContext";
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
  const { t } = useLanguage();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [appointments, setAppointments] = useState<any[]>([]);
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredAppointments = useMemo(() => {
    if (!searchQuery) return appointments;
    return appointments.filter(a =>
      a.service?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [appointments, searchQuery]);

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
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen flex font-['Inter',sans-serif] transition-colors duration-300 track-theme">
      <Sidebar />

      <div className="ml-[240px] flex-1 overflow-x-hidden page-transition pt-[72px]">
        <Header
          title={t('bookings')}
          subtitle={t('garage')}
          searchValue={searchQuery}
          onSearch={setSearchQuery}
        />

        <div className="p-8 max-w-[1400px] mx-auto">
          <div className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden h-[calc(100vh-180px)] flex flex-col">
            {/* Calendar Header */}
            <div className="p-6 border-b border-border flex flex-col md:flex-row items-center justify-between gap-6 bg-card shrink-0">
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 border border-border rounded-xl flex items-center justify-center text-primary bg-muted">
                  <HiCalendar className="text-lg" />
                </div>
                <div>
                  <h3 className="text-foreground text-lg font-semibold">
                    {viewMode === 'day' ? format(currentDate, "EEEE, MMM d, yyyy") : format(currentDate, "MMMM yyyy")}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <button onClick={handlePrev} className="p-1 hover:bg-muted rounded-md transition-all text-muted-foreground"><HiChevronLeft className="text-xl" /></button>
                    <button onClick={() => setCurrentDate(new Date())} className="text-[10px] font-semibold text-primary uppercase tracking-wider hover:underline px-2">{t('today')}</button>
                    <button onClick={handleNext} className="p-1 hover:bg-muted rounded-md transition-all text-muted-foreground"><HiChevronRight className="text-xl" /></button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 bg-muted p-1 rounded-xl border border-border">
                {["day", "week", "month"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode as any)}
                    className={`px-6 py-2 rounded-lg text-xs font-semibold transition-all uppercase tracking-wider ${viewMode === mode
                      ? "bg-card text-primary shadow-sm border border-border/50"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {t(mode)}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setShowAddModal(true)}
                className="bg-primary w-10 h-10 rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center text-primary-foreground"
              >
                <HiPlus className="text-xl" />
              </button>
            </div>

            {/* Calendar Body Area with internal scrolling */}
            <div className="flex-1 overflow-auto bg-white custom-scrollbar">
              {viewMode === 'month' ? (
                <MonthView days={calendarDays} appointments={filteredAppointments} currentDate={currentDate} onSelect={setSelectedBooking} />
              ) : (
                <GridView mode={viewMode} days={calendarDays} hours={hours} appointments={filteredAppointments} onSelect={setSelectedBooking} />
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
  const { t } = useLanguage();
  return (
    <div className="min-w-[1200px] flex flex-col h-full bg-card">
      {/* Sticky Day Headers */}
      <div className="grid grid-cols-[80px_1fr] bg-card sticky top-0 z-30 border-b border-border shadow-sm">
        <div className="border-r border-border bg-card flex items-center justify-center">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{t('time')}</span>
        </div>
        <div className={`grid grid-cols-${days.length} w-full bg-card`}>
          {days.map((day: any) => (
            <div key={day.toString()} className="py-4 px-2 text-center border-r border-border last:border-r-0">
              <p className="text-muted-foreground text-[10px] font-semibold uppercase tracking-wider mb-1">{format(day, "EEE")}</p>
              <p className={`text-base font-bold ${isSameDay(day, new Date()) ? 'text-primary' : 'text-foreground'}`}>
                {format(day, "d")}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Time Grid */}
      <div className="relative">
        {hours.map((hour: string, hIdx: number) => (
          <div key={hour} className="grid grid-cols-[80px_1fr] border-b border-border last:border-b-0 min-h-[120px]">
            <div className="py-4 pr-3 text-right border-r border-border flex flex-col items-end">
              <span className="text-muted-foreground text-[10px] font-bold">{hour}</span>
            </div>
            <div className={`grid grid-cols-${days.length} w-full`}>
              {days.map((day: any, dIdx: number) => {
                const dayAppts = appointments.filter((a: any) => {
                  const aDate = new Date(a.date);
                  return isSameDay(aDate, day) && a.time === hour;
                });

                return (
                  <div key={dIdx} className="border-r border-border last:border-r-0 p-2 relative group hover:bg-muted/30 transition-colors">
                    {dayAppts.map((appt: any) => (
                      <div
                        key={appt.id}
                        onClick={() => onSelect(appt)}
                        className="bg-primary/10 border border-primary/20 rounded-xl p-4 cursor-pointer hover:bg-primary/20 transition-all"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-full border border-primary/20 overflow-hidden shadow-sm">
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${appt.name}`} alt="" />
                          </div>
                          <div>
                            <p className="text-foreground font-bold text-[11px] leading-tight truncate">{appt.name}</p>
                            <p className="text-primary text-[9px] font-semibold uppercase tracking-wider">{appt.service}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MonthView({ days, appointments, currentDate, onSelect }: any) {
  const { t } = useLanguage();
  return (
    <div className="grid grid-cols-7 h-full bg-card">
      {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(d => (
        <div key={d} className="py-3 px-6 border-b border-r border-border bg-muted/30 text-center text-[10px] font-semibold text-muted-foreground uppercase tracking-wider sticky top-0 z-20">
          {d}
        </div>
      ))}
      {days.map((day: any) => {
        const isCurrentMonth = isSameMonth(day, currentDate);
        const dayAppts = appointments.filter((a: any) => isSameDay(new Date(a.date), day));

        return (
          <div key={day.toString()} className={`min-h-[180px] p-6 border-b border-r border-border transition-colors hover:bg-muted/10 ${!isCurrentMonth ? 'bg-muted/5 grayscale' : ''}`}>
            <span className={`text-lg font-black ${isSameDay(day, new Date()) ? 'text-primary' : isCurrentMonth ? 'text-foreground' : 'text-muted-foreground'}`}>
              {format(day, "d")}
            </span>
            <div className="mt-4 space-y-2">
              {dayAppts.slice(0, 3).map((a: any) => (
                <div key={a.id} onClick={() => onSelect(a)} className="bg-primary text-primary-foreground p-2 rounded-xl text-[9px] font-black truncate shadow-sm cursor-pointer hover:opacity-90">
                  {a.service}
                </div>
              ))}
              {dayAppts.length > 3 && <p className="text-[10px] font-black text-muted-foreground">+{dayAppts.length - 3} {t('more')}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AddBookingModal({ vehicles, onClose, onRefresh }: any) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    vehicle_id: "", service_type: "Oil Change", service_center: "", location_address: "", preferred_date: "", preferred_time: "08:00 AM - 10:00 AM", notes: "", estimated_duration: "1.5 Hours", estimated_cost: 85.0
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      toast.error("User session not found. Please log in again.");
      return;
    }
    const user = JSON.parse(userStr);
    const userId = user.id || user.user?.id;
    if (!userId || !formData.vehicle_id) return;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-card rounded-[32px] w-full max-w-4xl flex border border-border overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] shadow-2xl">
        <div className="flex-1 p-10 border-r border-border overflow-y-auto custom-scrollbar">
          <div className="flex items-center gap-3 mb-8">
            <HiCalendar className="text-primary text-2xl" />
            <h2 className="text-[10px] font-black text-foreground uppercase tracking-[0.2em]">{t('service_details_title')}</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t('select_vehicle')}</label>
                <select
                  value={formData.vehicle_id}
                  onChange={e => setFormData({ ...formData, vehicle_id: e.target.value })}
                  className="w-full h-14 px-6 bg-muted border border-border rounded-2xl outline-none focus:border-primary text-sm font-black text-foreground appearance-none"
                >
                  <option value="">{t('select_vehicle')}</option>
                  {vehicles.map((v: any) => <option key={v.id} value={v.id}>{v.make} {v.model} ({v.license_plate})</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t('service_type')}</label>
                <select
                  value={formData.service_type}
                  onChange={e => setFormData({ ...formData, service_type: e.target.value })}
                  className="w-full h-14 px-6 bg-muted border border-border rounded-2xl outline-none focus:border-primary text-sm font-black text-foreground appearance-none"
                >
                  {["Oil Change", "Brake Service", "Engine Check", "Tire Rotation", "Full Inspection"].map(s => <option key={s} value={s}>{t(s.toLowerCase().replace(' ', '_')) || s}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t('select_service_center')}</label>
                <input
                  placeholder="e.g. Gearhouse Downtown Garage"
                  value={formData.service_center}
                  onChange={e => setFormData({ ...formData, service_center: e.target.value })}
                  className="w-full h-14 px-6 bg-muted border border-border rounded-2xl outline-none focus:border-primary text-sm font-black text-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t('location_address')}</label>
                <input
                  placeholder="123 Main St, Downtown"
                  value={formData.location_address}
                  onChange={e => setFormData({ ...formData, location_address: e.target.value })}
                  className="w-full h-14 px-6 bg-muted border border-border rounded-2xl outline-none focus:border-primary text-sm font-black text-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t('preferred_date')}</label>
                <input
                  type="date"
                  value={formData.preferred_date}
                  onChange={e => setFormData({ ...formData, preferred_date: e.target.value })}
                  className="w-full h-14 px-6 bg-muted border border-border rounded-2xl outline-none focus:border-primary text-sm font-black text-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t('preferred_time_slot')}</label>
                <select
                  value={formData.preferred_time}
                  onChange={e => setFormData({ ...formData, preferred_time: e.target.value })}
                  className="w-full h-14 px-6 bg-muted border border-border rounded-2xl outline-none focus:border-primary text-sm font-black text-foreground appearance-none"
                >
                  {["07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"].map(t => <option key={t} value={t}>{t} - {parseInt(t) + 2}:00 {t.includes('AM') ? 'AM' : 'PM'}</option>)}
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t('special_instructions')}</label>
              <textarea
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Add any specific details or concerns..."
                className="w-full p-6 bg-muted border border-border rounded-[24px] outline-none focus:border-primary text-sm font-medium h-32 text-foreground"
              />
            </div>
            <div className="flex gap-4 pt-4">
              <button onClick={onClose} type="button" className="px-10 h-14 border border-border text-primary rounded-2xl font-black text-sm hover:bg-primary/5 transition-all">{t('cancel')}</button>
              <button type="submit" className="flex-1 h-14 bg-primary text-primary-foreground rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-primary/20">
                <HiCheckCircle className="text-xl" /> {t('confirm_booking')}
              </button>
            </div>
          </form>
        </div>
        <div className="w-80 bg-muted/30 p-10 flex flex-col overflow-y-auto shrink-0">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-10">
              <HiInformationCircle className="text-muted-foreground text-2xl" />
              <h2 className="text-[10px] font-black text-foreground uppercase tracking-[0.2em]">{t('booking_summary')}</h2>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2 uppercase tracking-widest text-[8px] font-black">
                  <HiClock /> {t('estimated_duration')}
                </div>
                <p className="text-xl font-black text-foreground">{formData.estimated_duration}</p>
              </div>
              <div className="h-px bg-border" />
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2 uppercase tracking-widest text-[8px] font-black">
                  <HiCurrencyDollar /> {t('estimated_cost_label')}
                </div>
                <p className="text-3xl font-black text-primary">${formData.estimated_cost.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#EEEFF2]">
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full border border-[#EEEFF2] flex items-center justify-center text-[10px] text-[#A3A6B4]">?</div>
              <p className="text-[9px] font-bold text-[#747681] leading-relaxed">
                {t('cost_estimate_note')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookingDetailsModal({ booking, onClose }: any) {
  const { t } = useLanguage();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-card rounded-[32px] w-full max-w-xl p-10 animate-in zoom-in-95 duration-300 shadow-2xl border border-border overflow-y-auto max-h-[90vh] relative">
        <button onClick={onClose} className="absolute top-8 right-8 p-2 hover:bg-muted rounded-xl z-10"><HiX className="text-2xl text-muted-foreground" /></button>

        <div className="flex items-center gap-4 mb-10">
          <div className="w-20 h-20 rounded-[24px] bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <HiCalendar className="text-4xl" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-foreground leading-tight mb-1">{booking.service}</h2>
            <p className="text-muted-foreground text-xs font-black uppercase tracking-widest">{format(new Date(booking.date), "EEEE, d MMMM yyyy")}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-10">
          <InfoItem label={t('technician')} value={booking.name} />
          <InfoItem label={t('time_slot')} value={booking.time} />
          <InfoItem label={t('location')} value={booking.center || 'Main Street Auto'} />
          <InfoItem label={t('status')} value={booking.status || 'Confirmed'} />
        </div>

        <div className="bg-muted rounded-[24px] p-6 mb-10">
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
            <HiLocationMarker /> {t('address')}
          </p>
          <p className="text-sm font-black text-foreground">{booking.address || '123 Downtown St, Suite 405'}</p>
        </div>

        <button onClick={onClose} className="w-full h-14 bg-foreground text-background rounded-2xl font-black text-sm hover:scale-[1.02] transition-all">{t('close_details')}</button>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">{label}</p>
      <p className="text-sm font-black text-foreground uppercase">{value}</p>
    </div>
  );
}
