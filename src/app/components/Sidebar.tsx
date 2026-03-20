import { Link, useLocation } from "react-router";
import { HiViewGrid, HiTruck, HiCalendar, HiCog } from "react-icons/hi";
import { HiWrench } from "react-icons/hi2";
// @ts-ignore
import gearhouseLogo from "../../assets/Gearhouse logo Car only.png";
import { useLanguage } from "../context/LanguageContext";

const menuItems = [
  { icon: HiViewGrid, labelKey: "dashboard", path: "/dashboard" },
  { icon: HiTruck, labelKey: "vehicles", path: "/vehicles" },
  { icon: HiWrench, labelKey: "maintenance", path: "/maintenance" },
  { icon: HiCalendar, labelKey: "bookings", path: "/bookings" },
  { icon: HiCog, labelKey: "settings", path: "/settings" },
];

export default function Sidebar() {
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <div className="bg-sidebar h-full w-[240px] fixed left-0 top-0 border-r border-sidebar-border flex flex-col items-center z-10 transition-colors">
      {/* Logo Section */}
      <div className="pt-8 pb-10 flex flex-col items-center text-center">
        <div className="w-[86px] h-[70px] mb-4">
          <img src={gearhouseLogo} alt="Gearhouse" className="w-full h-full object-contain" />
        </div>
        <h2 className="font-['Inter',sans-serif] font-black text-primary text-2xl tracking-tighter">
          GEARHOUSE
        </h2>
      </div>

      {/* Navigation */}
      <nav className="w-full px-6 flex flex-col gap-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                isActive 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "text-sidebar-foreground hover:bg-sidebar-accent"
              }`}
            >
              <Icon className={`text-xl ${isActive ? "text-primary-foreground" : "text-primary"}`} />
              <span className={`font-['Inter',sans-serif] text-sm ${isActive ? "font-bold" : "font-medium"}`}>
                {t(item.labelKey as any)}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
