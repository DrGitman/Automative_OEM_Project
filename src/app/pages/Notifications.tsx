import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useLanguage } from "../context/LanguageContext";
import {
  HiExclamation,
  HiInformationCircle,
  HiCheckCircle,
  HiCog,
  HiBan,
  HiFilter,
  HiChevronDown,
  HiCheck,
} from "react-icons/hi";

type NotificationCategory = "All Notifications" | "Critical Alerts" | "Bookings" | "System Updates";
type DateRange = "Last 24 Hours" | "Last 7 Days" | "Last 30 Days" | "All Time";

interface Notification {
  id: string;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  message: string;
  time: string;
  category: NotificationCategory;
  isUnread?: boolean;
  actions?: { label: string; variant: "primary" | "ghost" }[];
}

const notifications: Notification[] = [
  {
    id: "1",
    icon: <HiExclamation className="text-amber-500 text-xl" />,
    iconBg: "bg-amber-50",
    title: "Urgent Maintenance Required",
    message: "Vehicle GH-102 (Tesla Model 3) reports a critical brake wear warning. Immediate inspection is required to maintain fleet safety.",
    time: "2 mins ago",
    category: "Critical Alerts",
    isUnread: true,
    actions: [
      { label: "SCHEDULE NOW", variant: "primary" },
      { label: "DISMISS", variant: "ghost" },
    ],
  },
  {
    id: "2",
    icon: <HiInformationCircle className="text-blue-500 text-xl" />,
    iconBg: "bg-blue-50",
    title: "Service Confirmation",
    message: "Booking #BK-8842 for Toyota Hilux has been confirmed with City Garage for tomorrow at 09:00 AM.",
    time: "1 hour ago",
    category: "Bookings",
    isUnread: true,
  },
  {
    id: "3",
    icon: <HiCheckCircle className="text-green-500 text-xl" />,
    iconBg: "bg-green-50",
    title: "Vehicle Return Complete",
    message: "Ford Transit (GH-024) has been returned and cleared for next assignment by driver Sarah J.",
    time: "3 hours ago",
    category: "Bookings",
  },
  {
    id: "4",
    icon: <HiCog className="text-[#747681] text-xl" />,
    iconBg: "bg-gray-100",
    title: "System Update Successful",
    message: "Gearhouse Fleet Manager updated to version 2.4.0. Check out the new diagnostic reporting tools in Settings.",
    time: "Yesterday",
    category: "System Updates",
  },
  {
    id: "5",
    icon: <HiBan className="text-red-500 text-xl" />,
    iconBg: "bg-red-50",
    title: "Speed Threshold Alert",
    message: "GH-056 exceeded the regional speed limit of 110 km/h on M1 Highway. Driver: Mike Ross.",
    time: "Yesterday",
    category: "Critical Alerts",
    isUnread: true,
  },
];

const CATEGORIES: NotificationCategory[] = ["All Notifications", "Critical Alerts", "Bookings", "System Updates"];
const DATE_RANGES: DateRange[] = ["Last 24 Hours", "Last 7 Days", "Last 30 Days", "All Time"];

export default function Notifications() {
  const { t } = useLanguage();
  const [selectedCategories, setSelectedCategories] = useState<NotificationCategory[]>(["All Notifications"]);
  const [dateRange, setDateRange] = useState<DateRange>("Last 24 Hours");
  const [showDateDropdown, setShowDateDropdown] = useState(false);

  const toggleCategory = (cat: NotificationCategory) => {
    if (cat === "All Notifications") {
      setSelectedCategories(["All Notifications"]);
    } else {
      const withoutAll = selectedCategories.filter((c: any) => c !== "All Notifications");
      const exists = withoutAll.includes(cat);
      const updated = exists ? withoutAll.filter((c: any) => c !== cat) : [...withoutAll, cat];
      setSelectedCategories(updated.length === 0 ? ["All Notifications"] : updated);
    }
  };

  const filtered = notifications.filter((n) => {
    if (selectedCategories.includes("All Notifications")) return true;
    return selectedCategories.includes(n.category);
  });

  const unreadCount = notifications.filter((n) => n.isUnread).length;

  return (
    <div className="bg-background min-h-screen flex font-['Inter',sans-serif] transition-colors duration-300 track-theme">
      <Sidebar />
      <div className="ml-[240px] flex-1 overflow-x-hidden page-transition pt-[72px]">
        <Header
          title={t('notifications')}
          subtitle={`${t('hi')}, ${t('unread_count_part1') || 'You have'} ${unreadCount} ${unreadCount === 1 ? t('unread_alert') : t('unread_alerts')}`}
        />

      <div className="p-8 max-w-[1400px] mx-auto">
        <div className="flex gap-6 items-start">
          {/* Notification Feed */}
          <div className="flex-1 min-w-0 space-y-3">
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                <HiCheckCircle className="mx-auto text-5xl opacity-20 mb-4" />
                <p className="font-medium text-foreground">{t('all_caught_up')}</p>
                <p className="text-sm mt-1">{t('no_notif_match')}</p>
              </div>
            ) : (
              filtered.map((n) => (
                <div
                  key={n.id}
                  className={`bg-card rounded-2xl p-5 border flex gap-4 items-start group hover:shadow-md transition-shadow ${
                    n.isUnread ? "border-border" : "border-transparent"
                  }`}
                >
                  <div className={`mt-0.5 size-10 rounded-xl flex items-center justify-center shrink-0 ${n.iconBg}`}>
                    {n.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-foreground font-medium text-base leading-snug">{t(n.title) || n.title}</p>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs text-muted-foreground font-normal whitespace-nowrap">{n.time}</span>
                        {n.isUnread && (
                          <div className="size-2 bg-primary rounded-full shrink-0" />
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm font-normal mt-1.5 leading-relaxed">{t(n.message) || n.message}</p>
                    {n.actions && (
                      <div className="flex gap-3 mt-3">
                        {n.actions.map((action) => (
                          <button
                            key={action.label}
                            className={`text-xs font-semibold tracking-wider transition-colors ${
                              action.variant === "primary"
                                ? "text-primary hover:text-primary/80"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {t(action.label) || action.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}

            {/* Load More */}
            <button className="w-full py-4 text-muted-foreground text-sm font-medium hover:text-foreground transition-colors text-center">
              {t('load_older')}
            </button>
          </div>

          {/* Right Sidebar - Filters & Pro Tip */}
          <div className="w-[280px] shrink-0 space-y-4">
            {/* Filter Panel */}
            <div className="bg-card rounded-2xl p-5 border border-border">
              <div className="flex items-center gap-2 mb-5">
                <HiFilter className="text-muted-foreground" />
                <span className="text-foreground font-semibold text-sm uppercase tracking-wider">{t('filters')}</span>
              </div>

              <div className="mb-5">
                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider mb-3">{t('categories_label')}</p>
                <div className="space-y-2">
                  {CATEGORIES.map((cat) => {
                    const isSelected = selectedCategories.includes(cat);
                    return (
                      <button
                        key={cat}
                        onClick={() => toggleCategory(cat)}
                        className="w-full flex items-center gap-3 group"
                      >
                        <div
                          className={`size-4 rounded border flex items-center justify-center transition-all ${
                            isSelected ? "bg-primary border-primary" : "bg-card border-border"
                          }`}
                        >
                          {isSelected && <HiCheck className="text-primary-foreground text-[10px]" />}
                        </div>
                        <span
                          className={`text-sm transition-colors ${
                            isSelected ? "text-foreground font-medium" : "text-muted-foreground font-normal"
                          }`}
                        >
                          {t(cat) || cat}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mb-5">
                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider mb-3">{t('date_range_label')}</p>
                <div className="relative">
                  <button
                    onClick={() => setShowDateDropdown(!showDateDropdown)}
                    className="w-full h-9 pl-4 pr-3 bg-muted border border-border rounded-xl flex items-center justify-between text-sm text-foreground font-normal"
                  >
                    {t(dateRange) || dateRange}
                    <HiChevronDown className={`text-muted-foreground transition-transform ${showDateDropdown ? "rotate-180" : ""}`} />
                  </button>
                  {showDateDropdown && (
                    <div className="absolute top-full mt-1 w-full bg-card border border-border rounded-xl shadow-lg z-10 overflow-hidden">
                      {DATE_RANGES.map((dr) => (
                        <button
                          key={dr}
                          onClick={() => { setDateRange(dr); setShowDateDropdown(false); }}
                          className={`w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors ${
                            dateRange === dr ? "text-primary font-medium" : "text-foreground font-normal"
                          }`}
                        >
                          {t(dr) || dr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => { setSelectedCategories(["All Notifications"]); setDateRange("Last 24 Hours"); }}
                className="w-full h-10 bg-foreground text-background rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity mb-2"
              >
                {t('apply_filters')}
              </button>
              <button
                onClick={() => { setSelectedCategories(["All Notifications"]); setDateRange("Last 24 Hours"); }}
                className="w-full h-10 text-muted-foreground text-sm font-normal hover:text-foreground transition-colors"
              >
                {t('clear_all')}
              </button>
            </div>

            {/* Pro Tip */}
            <div className="bg-primary rounded-2xl p-5 shadow-lg shadow-primary/20">
              <p className="text-primary-foreground font-semibold text-sm mb-2">{t('pro_tip')}</p>
              <p className="text-primary-foreground/80 text-sm font-normal leading-relaxed">
                {t('sms_alerts_note')}
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
