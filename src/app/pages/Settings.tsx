import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { HiBell, HiShieldCheck, HiColorSwatch, HiGlobe, HiMail } from "react-icons/hi";

export default function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    maintenance: true,
    offers: false
  });

  const [theme, setTheme] = useState("light");

  return (
    <div className="bg-[#F8F9FB] min-h-screen flex font-['Outfit',sans-serif]">
      <Sidebar />

      <div className="ml-[240px] flex-1 overflow-x-hidden">
        <Header title="Settings" subtitle="Configure your Gearhouse experience" />

        <div className="p-8 space-y-6 max-w-[1000px]">
          {/* Notifications Section */}
          <Section icon={<HiBell />} title="Notifications" subtitle="Choose what you want to be notified about">
            <div className="space-y-6">
              <ToggleRow
                title="Email Notifications"
                subtitle="Receive summary reports and alerts via email"
                enabled={notifications.email}
                onToggle={() => setNotifications({ ...notifications, email: !notifications.email })}
              />
              <ToggleRow
                title="Push Notifications"
                subtitle="Real-time alerts on your browser/device"
                enabled={notifications.push}
                onToggle={() => setNotifications({ ...notifications, push: !notifications.push })}
              />
              <ToggleRow
                title="Maintenance Alerts"
                subtitle="Get notified when a vehicle needs urgent service"
                enabled={notifications.maintenance}
                onToggle={() => setNotifications({ ...notifications, maintenance: !notifications.maintenance })}
              />
              <ToggleRow
                title="Promotional Offers"
                subtitle="Stay updated on service discounts and rewards"
                enabled={notifications.offers}
                onToggle={() => setNotifications({ ...notifications, offers: !notifications.offers })}
              />
            </div>
          </Section>

          {/* Preferences Section */}
          <Section icon={<HiColorSwatch />} title="Preferences" subtitle="Customize the interface and display">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[#A3A6B4] text-[10px] font-black uppercase tracking-widest mb-3">Theme Mode</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setTheme("light")}
                    className={`flex-1 py-4 rounded-2xl border font-bold transition-all ${theme === 'light' ? 'bg-[#D72322] text-white border-[#D72322]' : 'bg-white text-[#747681] border-[#EEEFF2] hover:bg-gray-50'}`}
                  >
                    Light
                  </button>
                  <button
                    onClick={() => setTheme("dark")}
                    className={`flex-1 py-4 rounded-2xl border font-bold transition-all ${theme === 'dark' ? 'bg-[#D72322] text-white border-[#D72322]' : 'bg-white text-[#747681] border-[#EEEFF2] hover:bg-gray-50'}`}
                  >
                    Dark
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-[#A3A6B4] text-[10px] font-black uppercase tracking-widest mb-3">Language</label>
                <select className="w-full h-[60px] px-6 bg-white border border-[#EEEFF2] rounded-2xl font-bold text-[#04091E] outline-none focus:border-[#D72322] shadow-sm">
                  <option>English (US)</option>
                  <option>German</option>
                  <option>Afrikaans</option>
                </select>
              </div>
            </div>
          </Section>

          {/* Security & Support */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SecondaryCard icon={<HiShieldCheck />} title="Privacy Policy" subtitle="Manage your data and privacy settings" />
            <SecondaryCard icon={<HiGlobe />} title="Legal Notice" subtitle="Terms of service and legal agreement" />
          </div>

          <div className="flex justify-end pt-10">
            <button className="bg-[#D72322] text-white px-12 py-4 rounded-2xl font-black text-sm shadow-xl shadow-red-100 hover:bg-[#B91C1C] transition-all">
              Save All Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ icon, title, subtitle, children }: any) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-[#EEEFF2] shadow-sm">
      <div className="flex items-center gap-6 mb-10">
        <div className="bg-[#FEF2F2] p-4 rounded-2xl text-[#D72322] text-2xl">
          {icon}
        </div>
        <div>
          <h3 className="text-[#04091E] text-xl font-black">{title}</h3>
          <p className="text-[#747681] text-sm font-medium">{subtitle}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function ToggleRow({ title, subtitle, enabled, onToggle }: any) {
  return (
    <div className="flex items-center justify-between p-4 -mx-4 hover:bg-[#F8F9FB] rounded-2xl transition-colors">
      <div>
        <p className="font-bold text-[#04091E]">{title}</p>
        <p className="text-xs text-[#747681]">{subtitle}</p>
      </div>
      <button
        onClick={onToggle}
        className={`w-14 h-8 rounded-full relative transition-all duration-300 ${enabled ? 'bg-[#D72322]' : 'bg-[#E2E4E8]'}`}
      >
        <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-all duration-300 ${enabled ? 'left-7' : 'left-1'}`} />
      </button>
    </div>
  );
}

function SecondaryCard({ icon, title, subtitle }: any) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-[#EEEFF2] shadow-sm hover:border-[#D72322]/20 transition-all group flex items-start gap-6">
      <div className="bg-[#F8F9FB] p-4 rounded-2xl text-[#747681] group-hover:text-[#D72322] group-hover:bg-[#FEF2F2] transition-colors text-2xl">
        {icon}
      </div>
      <div>
        <h4 className="font-black text-[#04091E]">{title}</h4>
        <p className="text-xs text-[#747681] mt-1">{subtitle}</p>
      </div>
    </div>
  );
}
