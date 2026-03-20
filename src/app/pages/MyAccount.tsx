import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { HiUser, HiShieldCheck, HiPencilAlt, HiCheckCircle, HiArrowRight } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";

export default function MyAccount() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "+264 81 123 4567", // Default placeholder
  });
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setFormData({
        firstname: parsedUser.firstname || "",
        lastname: parsedUser.lastname || "",
        email: parsedUser.email || "",
        phone: parsedUser.phone || "+264 81 123 4567",
      });
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate save
    localStorage.setItem("user", JSON.stringify({ ...user, ...formData }));
    alert(t('profile_updated_successfully') || "Profile updated successfully!");
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen flex font-['Inter',sans-serif] transition-colors duration-300">
      <Sidebar />

      <div className="ml-[240px] flex-1 overflow-x-hidden page-transition pt-[72px]">
        <Header title={t('profile')} subtitle={t('manage_profile')} />

        <div className="p-8 space-y-6 max-w-[1000px]">
          <div className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden">
            <div className="p-8">
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between pb-10 border-b border-border mb-10 gap-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <div className="size-[120px] rounded-full bg-primary/10 flex items-center justify-center border-4 border-card shadow-xl">
                      <span className="font-black text-primary text-4xl">
                        {formData.firstname[0]}{formData.lastname[0]}
                      </span>
                    </div>
                    <button className="absolute bottom-2 right-2 size-10 bg-primary rounded-full shadow-lg flex items-center justify-center border-4 border-card text-primary-foreground hover:scale-110 transition-transform">
                      <HiPencilAlt className="text-lg" />
                    </button>
                  </div>

                  <div className="text-center md:text-left">
                    <h2 className="text-foreground text-3xl font-black mb-2">
                      {formData.firstname} {formData.lastname}
                    </h2>
                    <p className="text-muted-foreground font-medium mb-4">
                      {t('owner_manager')}
                    </p>
                    <div className="flex justify-center md:justify-start gap-3">
                      <span className="px-4 py-1.5 bg-green-500/10 text-green-500 rounded-full text-[10px] font-black uppercase tracking-wider">
                        {t('active')}
                      </span>
                      <span className="px-4 py-1.5 bg-muted text-muted-foreground rounded-full text-[10px] font-black uppercase tracking-wider border border-border">
                        {t('owner')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-auto">
                  <button className="w-full bg-muted text-foreground px-8 h-14 rounded-2xl font-black text-sm border border-border hover:bg-muted/80 hover:border-primary/20 transition-all flex items-center justify-center gap-2">
                    {t('download_profile_data')}
                  </button>
                </div>
              </div>

              <form onSubmit={handleSave} className="space-y-12">
                {/* Personal Details */}
                <div>
                  <div className="flex items-center gap-3 mb-8 text-primary">
                    <HiUser className="text-2xl" />
                    <h3 className="text-foreground text-lg font-black uppercase tracking-widest">{t('personal_details')}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputGroup label={t('first_name')} value={formData.firstname} onChange={(val: string) => setFormData({ ...formData, firstname: val })} />
                    <InputGroup label={t('last_name')} value={formData.lastname} onChange={(val: string) => setFormData({ ...formData, lastname: val })} />
                    <InputGroup label={t('email_address')} value={formData.email} onChange={(val: string) => setFormData({ ...formData, email: val })} />
                    <InputGroup label={t('phone_number')} value={formData.phone} onChange={(val: string) => setFormData({ ...formData, phone: val })} />
                  </div>
                </div>

                {/* Account Security */}
                <div>
                  <div className="flex items-center gap-3 mb-8 text-primary">
                    <HiShieldCheck className="text-2xl" />
                    <h3 className="text-foreground text-lg font-black uppercase tracking-widest">{t('account_security')}</h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-muted p-6 rounded-2xl border border-border flex items-center justify-between group cursor-pointer hover:border-primary/20 transition-all">
                      <div className="flex items-center gap-6">
                        <div className="size-12 bg-card rounded-xl flex items-center justify-center text-primary shadow-sm border border-border">
                          <HiShieldCheck className="text-xl" />
                        </div>
                        <div>
                          <p className="font-black text-foreground">{t('change_password')}</p>
                          <p className="text-xs text-muted-foreground">{t('update_credentials')}</p>
                        </div>
                      </div>
                      <HiArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>

                    <div className="bg-muted p-6 rounded-2xl border border-border flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="size-12 bg-card rounded-xl flex items-center justify-center text-green-500 shadow-sm border border-border">
                          <HiCheckCircle className="text-xl" />
                        </div>
                        <div>
                          <p className="font-black text-foreground">{t('two_factor_auth')}</p>
                          <p className="text-xs text-muted-foreground">{t('extra_security_layer')}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                        className={`w-12 h-6.5 rounded-full relative transition-all duration-300 ${twoFactorEnabled ? 'bg-green-500' : 'bg-muted-foreground/30'}`}
                      >
                        <div className={`absolute top-0.5 w-5.5 h-5.5 bg-card rounded-full shadow-sm transition-all duration-300 ${twoFactorEnabled ? 'left-6' : 'left-0.5'}`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 border-t border-border">
                  <button
                    type="button"
                    className="text-primary font-black text-xs uppercase tracking-widest hover:underline"
                  >
                    {t('deactivate_account')}
                  </button>
                  <div className="flex gap-4 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => navigate("/dashboard")}
                      className="flex-1 sm:flex-none px-10 h-14 bg-card border border-border rounded-2xl font-black text-muted-foreground hover:bg-muted transition-all text-sm"
                    >
                      {t('cancel')}
                    </button>
                    <button
                      type="submit"
                      className="flex-1 sm:flex-none px-12 h-14 bg-primary text-primary-foreground rounded-2xl font-black text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-all uppercase tracking-widest"
                    >
                      {t('save_changes')}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, value, onChange }: any) {
  return (
    <div className="space-y-3">
      <label className="block text-muted-foreground text-[10px] font-black uppercase tracking-widest ml-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-14 px-6 bg-muted border border-border rounded-2xl font-bold text-sm text-foreground outline-none focus:border-primary focus:bg-card shadow-sm transition-all"
      />
    </div>
  );
}
