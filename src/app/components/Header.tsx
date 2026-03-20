import { Link } from "react-router";
import { useEffect, useState } from "react";
import { HiSearch, HiBell, HiSparkles } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";

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

  const { t } = useLanguage();

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
            title="Open Gearbot AI"
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
        <Link to="/my-account" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
          <div className="size-10 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center border border-border shadow-sm">
            {user ? (
              <span className="text-primary font-black text-sm">{user.firstname[0]}{user.lastname[0]}</span>
            ) : (
              <div className="w-full h-full bg-muted animate-pulse" />
            )}
          </div>
          <div className="hidden md:block">
            <p className="font-['Inter',sans-serif] font-black text-foreground text-sm leading-none">
              {user ? `${user.firstname} ${user.lastname}` : "Loading..."}
            </p>
            <p className="font-['Inter',sans-serif] text-muted-foreground text-[11px] mt-1 uppercase font-black tracking-widest">Fleet Owner</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
