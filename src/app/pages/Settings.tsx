import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { HiBell, HiShieldCheck, HiColorSwatch, HiGlobe } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

export default function Settings() {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const [localTheme, setLocalTheme] = useState(theme);
  const [localLanguage, setLocalLanguage] = useState(language);

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    maintenance: true,
    offers: false
  });

  const handleSave = () => {
    setTheme(localTheme);
    setLanguage(localLanguage);
    toast.success(t('changes_saved'));
  };

  return (
    <div className="bg-background min-h-screen flex font-['Inter',sans-serif] transition-colors duration-300">
      <Sidebar />

      <div className="ml-[240px] flex-1 overflow-x-hidden page-transition pt-[72px]">
        <Header title={t('settings')} subtitle={t('customize_ui')} />

        <div className="p-8 space-y-6 max-w-[1000px]">
          {/* Notifications Section */}
          <Section icon={<HiBell />} title={t('notifications')} subtitle={t('notif_settings')}>
            <div className="space-y-6">
              <ToggleRow
                title={t('email_notif')}
                subtitle={t('email_notif_sub')}
                enabled={notifications.email}
                onToggle={() => setNotifications({ ...notifications, email: !notifications.email })}
              />
              <ToggleRow
                title={t('push_notif')}
                subtitle={t('push_notif_sub')}
                enabled={notifications.push}
                onToggle={() => setNotifications({ ...notifications, push: !notifications.push })}
              />
              <ToggleRow
                title={t('maint_alerts')}
                subtitle={t('maint_alerts_sub')}
                enabled={notifications.maintenance}
                onToggle={() => setNotifications({ ...notifications, maintenance: !notifications.maintenance })}
              />
              <ToggleRow
                title={t('promo_offers')}
                subtitle={t('promo_offers_sub')}
                enabled={notifications.offers}
                onToggle={() => setNotifications({ ...notifications, offers: !notifications.offers })}
              />
            </div>
          </Section>

          {/* Preferences Section */}
          <Section icon={<HiColorSwatch />} title={t('preferences')} subtitle={t('customize_ui')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-muted-foreground text-[10px] font-black uppercase tracking-widest mb-3">{t('theme_mode')}</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setLocalTheme("light")}
                    className={`flex-1 py-3 rounded-xl border font-black text-sm transition-all ${localTheme === 'light' ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20' : 'bg-card text-muted-foreground border-border hover:bg-muted'}`}
                  >
                    {t('light')}
                  </button>
                  <button
                    onClick={() => setLocalTheme("dark")}
                    className={`flex-1 py-3 rounded-xl border font-black text-sm transition-all ${localTheme === 'dark' ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20' : 'bg-card text-muted-foreground border-border hover:bg-muted'}`}
                  >
                    {t('dark')}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-muted-foreground text-[10px] font-black uppercase tracking-widest mb-3">{t('language_label')}</label>
                  <select 
                    value={localLanguage}
                    onChange={(e) => setLocalLanguage(e.target.value as any)}
                    className="w-full h-[48px] px-4 bg-muted border border-border rounded-xl font-bold text-sm text-foreground outline-none focus:border-primary shadow-sm transition-colors"
                  >
                   <option value="English">{t('English')}</option>
                  <option value="German">{t('German')}</option>
                  <option value="Afrikaans">{t('Afrikaans')}</option>
                  <option value="Oshiwambo">{t('Oshiwambo')}</option>
                </select>
              </div>
            </div>
          </Section>

          {/* Security & Support */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div onClick={() => navigate("/privacy-policy")} className="cursor-pointer">
              <SecondaryCard icon={<HiShieldCheck />} title={t('privacy_policy')} subtitle={t('privacy_sub')} />
            </div>
            <div onClick={() => navigate("/legal-notice")} className="cursor-pointer">
              <SecondaryCard icon={<HiGlobe />} title={t('legal_notice')} subtitle={t('legal_sub')} />
            </div>
          </div>

          <div className="flex justify-end pt-10">
            <button 
              onClick={handleSave}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-black text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
            >
              {t('save_changes')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ icon, title, subtitle, children }: any) {
  return (
    <div className="bg-card rounded-[32px] p-8 border border-border shadow-sm transition-colors">
      <div className="flex items-center gap-6 mb-8">
        <div className="bg-primary/10 p-4 rounded-2xl text-primary text-xl">
          {icon}
        </div>
        <div>
          <h3 className="text-foreground text-lg font-black tracking-tight">{title}</h3>
          <p className="text-muted-foreground text-sm font-medium">{subtitle}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function ToggleRow({ title, subtitle, enabled, onToggle }: any) {
  return (
    <div className="flex items-center justify-between p-4 -mx-4 hover:bg-muted rounded-2xl transition-colors group">
      <div>
        <p className="font-black text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground font-medium">{subtitle}</p>
      </div>
      <button
        onClick={onToggle}
        className={`w-14 h-8 rounded-full relative transition-all duration-300 ${enabled ? 'bg-primary' : 'bg-muted border border-border'}`}
      >
        <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-all duration-300 ${enabled ? 'left-7' : 'left-1'}`} />
      </button>
    </div>
  );
}

function SecondaryCard({ icon, title, subtitle }: any) {
  return (
    <div className="bg-card p-8 rounded-[32px] border border-border shadow-sm hover:border-primary/50 transition-all group flex items-start gap-6 hover:shadow-lg hover:shadow-primary/5">
      <div className="bg-muted p-4 rounded-2xl text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors text-2xl">
        {icon}
      </div>
      <div>
        <h4 className="font-black text-foreground tracking-tight">{title}</h4>
        <p className="text-xs text-muted-foreground mt-1 font-medium">{subtitle}</p>
      </div>
    </div>
  );
}
