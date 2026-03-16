import { Link } from "react-router";
import { useEffect, useState } from "react";
import { HiSearch, HiBell, HiSparkles } from "react-icons/hi";

// ==========================================
// HEADER COMPONENT
// Displays page title, search bar, and user profile information.
// ==========================================
export default function Header({
  title,
  subtitle,
  onSearch,
  searchValue
}: {
  title: string;
  subtitle: string;
  onSearch?: (value: string) => void;
  searchValue?: string;
}) {
  const [user, setUser] = useState<{ firstname: string, lastname: string } | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <div className="bg-white h-[72px] w-full flex items-center justify-between px-8 border-b border-[#F4F4F5]">
      <div>
        <h1 className="font-['Inter',sans-serif] font-semibold text-[#09090B] text-[20px]">{title}</h1>
        <p className="font-['Inter',sans-serif] text-[#71717A] text-[13px]">{subtitle}</p>
      </div>

      <div className="flex items-center gap-8">
        {/* Search */}
        <div className="bg-[#F4F4F5] h-[40px] w-[320px] rounded-lg flex items-center justify-between px-4 border border-[#E4E4E7]/50">
          <div className="flex items-center gap-3 flex-1">
            <HiSearch className="text-[#A1A1AA] text-lg" />
            <input
              type="text"
              placeholder="Search..."
              value={searchValue !== undefined ? searchValue : undefined}
              onChange={(e) => onSearch?.(e.target.value)}
              className="bg-transparent border-none outline-none font-['Inter',sans-serif] text-[#09090B] placeholder-[#A1A1AA] text-sm w-full font-medium"
            />
          </div>
          <div className="hidden sm:flex items-center gap-1 border border-[#E4E4E7] rounded-md px-1.5 py-0.5 bg-white shadow-sm">
            <span className="font-['Inter',sans-serif] font-semibold text-[#71717A] text-[11px]">⌘ K</span>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-1">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative text-[#71717A]">
            <HiSparkles className="text-xl" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-[#71717A] relative">
            <HiBell className="text-xl" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-[#D72322] rounded-full border-2 border-white"></div>
          </button>
        </div>

        <div className="w-px h-8 bg-[#F4F4F5]" />

        {/* Profile */}
        <Link to="/account" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
          <div className="size-10 rounded-full overflow-hidden bg-[#FEE2E2] flex items-center justify-center border border-[#E4E4E7] shadow-sm">
            {user ? (
              <span className="text-[#D72322] font-semibold text-sm">{user.firstname[0]}{user.lastname[0]}</span>
            ) : (
              <div className="w-full h-full bg-gray-200 animate-pulse" />
            )}
          </div>
          <div className="hidden md:block">
            <p className="font-['Inter',sans-serif] font-semibold text-[#09090B] text-sm leading-none">
              {user ? `${user.firstname} ${user.lastname}` : "Loading..."}
            </p>
            <p className="font-['Inter',sans-serif] text-[#71717A] text-[11px] mt-1 uppercase font-bold tracking-wider">Fleet Owner</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
