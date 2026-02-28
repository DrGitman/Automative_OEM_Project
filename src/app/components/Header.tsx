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
    <div className="bg-white h-[80px] w-full flex items-center justify-between px-8 border-b border-[#EEEFF2]">
      <div>
        <h1 className="font-['Outfit',sans-serif] font-bold text-[#04091e] text-[24px]">{title}</h1>
        <p className="font-['Outfit',sans-serif] text-[#747681] text-[14px]">{subtitle}</p>
      </div>

      <div className="flex items-center gap-8">
        {/* Search */}
        <div className="bg-[#f5f5f5] h-[44px] w-[360px] rounded-[10px] flex items-center justify-between px-[16px]">
          <div className="flex items-center gap-[12px] flex-1">
            <HiSearch className="text-[#04091E] text-xl" />
            <input
              type="text"
              placeholder="Search..."
              value={searchValue !== undefined ? searchValue : undefined}
              onChange={(e) => onSearch?.(e.target.value)}
              className="bg-transparent border-none outline-none font-['Outfit',sans-serif] text-[#747681] text-[14px] w-full"
            />
          </div>
          <div className="flex items-center gap-[4px] border border-[#E2E4E8] rounded-md px-1 py-0.5 bg-white shadow-sm">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#323B49" strokeWidth="3">
              <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z" />
              <path d="M9 3v18" />
            </svg>
            <span className="font-['Outfit',sans-serif] font-bold text-[#323b49] text-[12px]">K</span>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-[4px]">
          <button className="p-2.5 hover:bg-gray-50 rounded-full transition-colors relative text-[#25314C]">
            <HiSparkles className="text-2xl" />
          </button>
          <button className="p-2.5 hover:bg-gray-50 rounded-full transition-colors text-[#25314C] relative">
            <HiBell className="text-2xl" />
            <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-[#EC221F] rounded-full border-2 border-white"></div>
          </button>
        </div>

        <div className="w-px h-[40px] bg-[#EEEFF2]" />

        {/* Profile */}
        <Link to="/account" className="flex items-center gap-[16px] hover:opacity-80 transition-opacity">
          <div className="size-[48px] rounded-full overflow-hidden bg-[#FEE2E2] flex items-center justify-center border-2 border-white shadow-sm">
            {user ? (
              <span className="text-[#D72322] font-black text-lg">{user.firstname[0]}{user.lastname[0]}</span>
            ) : (
              <div className="w-full h-full bg-gray-200 animate-pulse" />
            )}
          </div>
          <div className="hidden md:block">
            <p className="font-['Outfit',sans-serif] font-bold text-[#04091e] text-[16px]">
              {user ? `${user.firstname} ${user.lastname}` : "Loading..."}
            </p>
            <p className="font-['Outfit',sans-serif] text-[#747681] text-[12px]">Owner</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
