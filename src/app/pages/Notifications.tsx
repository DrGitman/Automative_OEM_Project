import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
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
  const [selectedCategories, setSelectedCategories] = useState<NotificationCategory[]>(["All Notifications"]);
  const [dateRange, setDateRange] = useState<DateRange>("Last 24 Hours");
  const [showDateDropdown, setShowDateDropdown] = useState(false);

  const toggleCategory = (cat: NotificationCategory) => {
    if (cat === "All Notifications") {
      setSelectedCategories(["All Notifications"]);
    } else {
      const withoutAll = selectedCategories.filter((c) => c !== "All Notifications");
      const exists = withoutAll.includes(cat);
      const updated = exists ? withoutAll.filter((c) => c !== cat) : [...withoutAll, cat];
      setSelectedCategories(updated.length === 0 ? ["All Notifications"] : updated);
    }
  };

  const filtered = notifications.filter((n) => {
    if (selectedCategories.includes("All Notifications")) return true;
    return selectedCategories.includes(n.category);
  });

  const unreadCount = notifications.filter((n) => n.isUnread).length;

  return (
    <div className="bg-[#F8F9FB] min-h-screen flex font-['Inter',sans-serif]">
      <Sidebar />
      <div className="ml-[240px] flex-1 overflow-x-hidden page-transition">
        <Header
          title="Notifications"
          subtitle={`You have ${unreadCount} unread alert${unreadCount !== 1 ? "s" : ""}`}
        />

      <div className="p-8 max-w-[1400px] mx-auto">
        <div className="flex gap-6 items-start">
          {/* Notification Feed */}
          <div className="flex-1 min-w-0 space-y-3">
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-[#747681]">
                <HiCheckCircle className="mx-auto text-5xl text-gray-300 mb-4" />
                <p className="font-medium text-[#04091E]">All caught up!</p>
                <p className="text-sm mt-1">No notifications match your current filters.</p>
              </div>
            ) : (
              filtered.map((n) => (
                <div
                  key={n.id}
                  className={`bg-white rounded-2xl p-5 border flex gap-4 items-start group hover:shadow-md transition-shadow ${
                    n.isUnread ? "border-[#EEEFF2]" : "border-transparent"
                  }`}
                >
                  <div className={`mt-0.5 size-10 rounded-xl flex items-center justify-center shrink-0 ${n.iconBg}`}>
                    {n.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-[#04091E] font-medium text-base leading-snug">{n.title}</p>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs text-[#A3A6B4] font-normal whitespace-nowrap">{n.time}</span>
                        {n.isUnread && (
                          <div className="size-2 bg-[#D72322] rounded-full shrink-0" />
                        )}
                      </div>
                    </div>
                    <p className="text-[#747681] text-sm font-normal mt-1.5 leading-relaxed">{n.message}</p>
                    {n.actions && (
                      <div className="flex gap-3 mt-3">
                        {n.actions.map((action) => (
                          <button
                            key={action.label}
                            className={`text-xs font-semibold tracking-wider transition-colors ${
                              action.variant === "primary"
                                ? "text-[#D72322] hover:text-[#B01C1B]"
                                : "text-[#A3A6B4] hover:text-[#747681]"
                            }`}
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}

            {/* Load More */}
            <button className="w-full py-4 text-[#747681] text-sm font-medium hover:text-[#04091E] transition-colors text-center">
              Load older notifications
            </button>
          </div>

          {/* Right Sidebar - Filters & Pro Tip */}
          <div className="w-[280px] shrink-0 space-y-4">
            {/* Filter Panel */}
            <div className="bg-white rounded-2xl p-5 border border-[#EEEFF2]">
              <div className="flex items-center gap-2 mb-5">
                <HiFilter className="text-[#A3A6B4]" />
                <span className="text-[#04091E] font-semibold text-sm uppercase tracking-wider">Filters</span>
              </div>

              <div className="mb-5">
                <p className="text-[#747681] text-xs font-medium uppercase tracking-wider mb-3">Categories</p>
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
                            isSelected ? "bg-[#D72322] border-[#D72322]" : "bg-white border-[#EEEFF2]"
                          }`}
                        >
                          {isSelected && <HiCheck className="text-white text-[10px]" />}
                        </div>
                        <span
                          className={`text-sm transition-colors ${
                            isSelected ? "text-[#04091E] font-medium" : "text-[#747681] font-normal"
                          }`}
                        >
                          {cat}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mb-5">
                <p className="text-[#747681] text-xs font-medium uppercase tracking-wider mb-3">Date Range</p>
                <div className="relative">
                  <button
                    onClick={() => setShowDateDropdown(!showDateDropdown)}
                    className="w-full h-9 pl-4 pr-3 bg-[#F8F9FB] border border-[#EEEFF2] rounded-xl flex items-center justify-between text-sm text-[#04091E] font-normal"
                  >
                    {dateRange}
                    <HiChevronDown className={`text-[#A3A6B4] transition-transform ${showDateDropdown ? "rotate-180" : ""}`} />
                  </button>
                  {showDateDropdown && (
                    <div className="absolute top-full mt-1 w-full bg-white border border-[#EEEFF2] rounded-xl shadow-lg z-10 overflow-hidden">
                      {DATE_RANGES.map((dr) => (
                        <button
                          key={dr}
                          onClick={() => { setDateRange(dr); setShowDateDropdown(false); }}
                          className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[#F8F9FB] transition-colors ${
                            dateRange === dr ? "text-[#D72322] font-medium" : "text-[#04091E] font-normal"
                          }`}
                        >
                          {dr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => { setSelectedCategories(["All Notifications"]); setDateRange("Last 24 Hours"); }}
                className="w-full h-10 bg-[#04091E] text-white rounded-xl font-semibold text-sm hover:bg-[#1a2030] transition-colors mb-2"
              >
                Apply Filters
              </button>
              <button
                onClick={() => { setSelectedCategories(["All Notifications"]); setDateRange("Last 24 Hours"); }}
                className="w-full h-10 text-[#747681] text-sm font-normal hover:text-[#04091E] transition-colors"
              >
                Clear All
              </button>
            </div>

            {/* Pro Tip */}
            <div className="bg-[#D72322] rounded-2xl p-5">
              <p className="text-white font-semibold text-sm mb-2">PRO TIP</p>
              <p className="text-white/80 text-sm font-normal leading-relaxed">
                You can set automated SMS alerts for Critical and Urgent notifications in your{" "}
                <span className="text-white font-semibold underline cursor-pointer">Account Settings</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
