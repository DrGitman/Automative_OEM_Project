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
    <div className="bg-white h-full w-[256px] fixed left-0 top-0 border-r border-[#EEEFF2] flex flex-col items-center z-10">
      {/* Logo Section */}
      <div className="pt-10 pb-12 flex flex-col items-center">
        <div className="w-[106px] h-[85px] mb-4">
          <img src={gearhouseLogo} alt="Gearhouse" className="w-full h-full object-contain" />
        </div>
        <h2 className="font-['Outfit',sans-serif] font-black text-[#D72322] text-2xl tracking-tighter">
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
              className={`flex items-center gap-6 px-4 h-[56px] rounded-xl transition-all duration-200 ${isActive
                ? "bg-[#D72322] text-white shadow-lg shadow-red-200"
                : "text-[#030303] hover:bg-gray-50"
                }`}
            >
              <Icon className={`text-2xl ${isActive ? "text-white" : "text-[#D22624]"}`} />
              <span className={`font-['Outfit',sans-serif] text-base font-medium ${isActive ? "font-bold" : ""}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
