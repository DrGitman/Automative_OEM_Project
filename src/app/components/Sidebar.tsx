import { Link, useLocation } from "react-router";
import { HiViewGrid, HiTruck, HiCalendar, HiCog } from "react-icons/hi";
import { HiWrench } from "react-icons/hi2";
// @ts-ignore
import gearhouseLogo from "../../assets/Gearhouse logo Car only.png";

interface MenuItem {
  icon: any;
  label: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { icon: HiViewGrid, label: "Dashboard", path: "/dashboard" },
  { icon: HiTruck, label: "My Vehicles", path: "/vehicles" },
  { icon: HiWrench, label: "Maintenance", path: "/maintenance" },
  { icon: HiCalendar, label: "Bookings", path: "/bookings" },
  { icon: HiCog, label: "Settings", path: "/settings" },
];

// ==========================================
// SIDEBAR COMPONENT
// Main navigation menu for the platform.
// Provides links to Dashboard, Vehicles, Maintenance, and Bookings.
// ==========================================
export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="bg-white h-full w-[240px] fixed left-0 top-0 border-r border-[#EEEFF2] flex flex-col items-center z-10">
      {/* Logo Section */}
      <div className="pt-8 pb-10 flex flex-col items-center">
        <div className="w-[86px] h-[70px] mb-4">
          <img src={gearhouseLogo} alt="Gearhouse" className="w-full h-full object-contain" />
        </div>
        <h2 className="font-['Inter',sans-serif] font-black text-[#D72322] text-2xl tracking-tighter">
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
              className={`flex items-center gap-3 p-2 rounded-lg transition-colors duration-200 ${isActive ? "bg-[#FEE2E2] text-[#D72322]" : "text-[#71717A] hover:bg-gray-100"}`}
            >
              <Icon className={`text-xl ${isActive ? "text-[#D72322]" : "text-[#A1A1AA]"}`} />
              <span className={`font-['Inter',sans-serif] text-sm font-medium ${isActive ? "font-bold text-[#D72322]" : "text-[#71717A]"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
