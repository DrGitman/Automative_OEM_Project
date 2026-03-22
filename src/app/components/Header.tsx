import { Link } from "react-router";
import { useEffect, useState } from "react";
import { HiSearch, HiBell, HiSparkles, HiLogout, HiUser } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router";

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
  const [user, setUser] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();

  const refreshUser = () => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  };

  useEffect(() => {
    refreshUser();
    window.addEventListener("user-updated", refreshUser);
    
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById("profile-dropdown");
      const profileBtn = document.getElementById("profile-button");
      if (dropdown && !dropdown.contains(event.target as Node) && profileBtn && !profileBtn.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("user-updated", refreshUser);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    if (window.confirm(t("confirm_logout") || "Are you sure you want to logout?")) {
      localStorage.removeItem("user");
      sessionStorage.removeItem("session_started");
      navigate("/login");
    }
  };

  return (
    <div className="bg-card h-[72px] w-[calc(100%-240px)] flex items-center justify-between px-8 border-b border-border fixed top-0 left-[240px] z-20 transition-colors">
      <div>
        <h1 className="font-['Inter',sans-serif] font-black text-foreground text-[20px] tracking-tight">{title}</h1>
        <p className="font-['Inter',sans-serif] text-muted-foreground text-[13px] font-medium">{subtitle}</p>
      </div>

      <div className="flex items-center gap-8">
        {/* Search */}
        <div className="bg-muted h-[40px] w-[320px] rounded-xl flex items-center justify-between px-4 border border-border transition-colors">
          <div className="flex items-center gap-3 flex-1">
            <HiSearch className="text-muted-foreground text-lg" />
            <input
              type="text"
              placeholder={t('search')}
              value={searchValue !== undefined ? searchValue : undefined}
              onChange={(e) => onSearch?.(e.target.value)}
              className="bg-transparent border-none outline-none font-['Inter',sans-serif] text-foreground placeholder-muted-foreground/60 text-sm w-full font-medium"
            />
          </div>
          <div className="hidden sm:flex items-center gap-1 border border-border rounded-md px-1.5 py-0.5 bg-card shadow-sm">
            <span className="font-['Inter',sans-serif] font-black text-muted-foreground text-[11px]">⌘ K</span>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-1">
          {/* Gearbot AI toggle */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("toggle-gearbot"))}
            className="p-2 hover:bg-primary/10 rounded-xl transition-colors relative text-muted-foreground hover:text-primary group"
            title={t('open_gearbot')}
          >
            <HiSparkles className="text-xl group-hover:rotate-12 transition-transform" />
          </button>
          {/* Notifications */}
          <Link to="/notifications" className="p-2 hover:bg-muted rounded-xl transition-colors text-muted-foreground relative inline-flex items-center justify-center">
            <HiBell className="text-xl" />
            <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-card"></div>
          </Link>
        </div>

        <div className="w-px h-8 bg-border" />

        {/* Profile */}
        <div className="relative">
          <button 
            id="profile-button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-4 hover:bg-muted/50 p-1.5 rounded-xl transition-all border border-transparent hover:border-border group"
          >
            <div className="size-10 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center border border-border shadow-sm group-hover:scale-105 transition-transform">
              {user ? (
                user.profile_image ? (
                  <img src={user.profile_image} alt={user.firstname} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-primary font-black text-sm">{user.firstname[0]}{user.lastname?.[0]}</span>
                )
              ) : (
                <div className="w-full h-full bg-muted animate-pulse" />
              )}
            </div>
            <div className="hidden md:block text-left">
              <p className="font-['Inter',sans-serif] font-black text-foreground text-sm leading-none">
                {user ? `${user.firstname} ${user.lastname}` : t('loading')}
              </p>
              <p className="font-['Inter',sans-serif] text-muted-foreground text-[11px] mt-1 uppercase font-black tracking-widest">{t('fleet_owner')}</p>
            </div>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div 
              id="profile-dropdown"
              className="absolute top-full right-0 mt-3 w-56 bg-card border border-border rounded-2xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
            >
              <div className="px-4 py-3 border-b border-border/50 mb-1">
                <p className="text-[11px] font-black text-muted-foreground uppercase tracking-wider mb-1">{t('signed_in_as')}</p>
                <p className="text-sm font-black text-foreground truncate">{user?.email}</p>
              </div>
              
              <Link 
                to="/my-account" 
                onClick={() => setIsDropdownOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-foreground hover:bg-muted transition-colors mx-2 rounded-xl"
              >
                <HiUser className="text-primary text-lg" />
                {t('my_profile')}
              </Link>
              
              <div className="h-px bg-border/50 my-1 mx-4" />
              
              <button 
                onClick={handleLogout}
                className="w-[calc(100%-16px)] flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-primary hover:bg-primary/5 transition-colors mx-2 rounded-xl text-left"
              >
                <HiLogout className="text-lg" />
                {t('logout')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
