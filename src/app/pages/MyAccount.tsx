import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { HiUser, HiShieldCheck, HiPencilAlt, HiCheckCircle, HiArrowRight, HiLockClosed, HiEye, HiEyeOff, HiX } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";
import { toast } from "sonner";

export default function MyAccount() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setFormData({
        firstname: parsedUser.firstname || "",
        lastname: parsedUser.lastname || "",
        email: parsedUser.email || "",
        phone: parsedUser.phone || "",
      });
      setTwoFactorEnabled(parsedUser.two_factor_enabled || false);
      setProfileImage(parsedUser.profile_image || null);
    }
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user?.id) return;

    const formData = new FormData();
    formData.append("file", file);

    const uploadPromise = fetch("http://localhost:8000/upload-image", {
      method: "POST",
      body: formData,
    });

    toast.promise(uploadPromise, {
      loading: t('uploading'),
      success: async (res) => {
        const data = await res.json();
        const imageUrl = `http://localhost:8000${data.url}`;
        
        // Update user on backend
        await fetch(`http://localhost:8000/users/update/${user.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ profile_image: imageUrl }),
        });

        const updatedUser = { ...user, profile_image: imageUrl };
        setUser(updatedUser);
        setProfileImage(imageUrl);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        window.dispatchEvent(new CustomEvent("user-updated"));
        return t('image_uploaded_successfully');
      },
      error: t('failed_to_upload_image'),
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.id) return;

    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/users/update/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          two_factor_enabled: twoFactorEnabled
        }),
      });

      if (!response.ok) throw new Error("Failed to update profile");

      const updatedUser = await response.json();
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      window.dispatchEvent(new CustomEvent("user-updated"));
      toast.success(t('profile_updated_successfully'));
    } catch (error) {
      toast.error(t('something_went_wrong'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeactivate = async () => {
    if (!user?.id || !window.confirm(t('deactivate_confirmation'))) return;

    try {
      const response = await fetch(`http://localhost:8000/users/deactivate/${user.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success(t('account_deactivated_successfully'));
        localStorage.removeItem("user");
        navigate("/login");
      }
    } catch (error) {
      toast.error(t('something_went_wrong'));
    }
  };

  const handleDownloadData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(user, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `profile_data_${user?.firstname}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
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
                    <div className="size-[120px] rounded-full bg-primary/10 flex items-center justify-center border-4 border-card shadow-xl overflow-hidden">
                      {profileImage ? (
                        <img src={profileImage} alt="Profile" className="size-full object-cover" />
                      ) : (
                        <span className="font-black text-primary text-4xl">
                          {formData.firstname[0]}{formData.lastname[0]}
                        </span>
                      )}
                    </div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      className="hidden"
                      accept="image/*"
                    />
                    <button 
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute bottom-2 right-2 size-10 bg-primary rounded-full shadow-lg flex items-center justify-center border-4 border-card text-primary-foreground hover:scale-110 transition-transform"
                    >
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
                  <button 
                    type="button"
                    onClick={handleDownloadData}
                    className="w-full bg-muted text-foreground px-8 h-14 rounded-2xl font-black text-sm border border-border hover:bg-muted/80 hover:border-primary/20 transition-all flex items-center justify-center gap-2"
                  >
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
                    <div 
                      onClick={() => setShowPasswordModal(true)}
                      className="bg-muted p-6 rounded-2xl border border-border flex items-center justify-between group cursor-pointer hover:border-primary/20 transition-all"
                    >
                      <div className="flex items-center gap-6">
                        <div className="size-12 bg-card rounded-xl flex items-center justify-center text-primary shadow-sm border border-border">
                          <HiLockClosed className="text-xl" />
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
                    onClick={handleDeactivate}
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
                      disabled={isLoading}
                      className="flex-1 sm:flex-none px-12 h-14 bg-primary text-primary-foreground rounded-2xl font-black text-sm shadow-xl shadow-primary/20 hover:scale-105 disabled:opacity-50 disabled:scale-100 transition-all uppercase tracking-widest"
                    >
                      {isLoading ? t('loading') : t('save_changes')}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showPasswordModal && (
        <PasswordChangeModal 
          isOpen={showPasswordModal} 
          onClose={() => setShowPasswordModal(false)} 
          userId={user?.id}
          t={t}
        />
      )}
    </div>
  );
}

function PasswordChangeModal({ isOpen, onClose, userId, t }: any) {
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: ""
  });
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      toast.error(t('passwords_do_not_match'));
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/users/change-password/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          current_password: passwords.current,
          new_password: passwords.new
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || "Failed to change password");
      }

      toast.success(t('password_changed_successfully'));
      onClose();
    } catch (error: any) {
      toast.error(error.message || t('something_went_wrong'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-card w-full max-w-[480px] rounded-[32px] border border-border shadow-2xl shadow-primary/5 overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="p-8 border-b border-border flex items-center justify-between bg-muted/30">
          <div>
            <h3 className="text-xl font-black text-foreground">{t('change_password')}</h3>
            <p className="text-xs text-muted-foreground mt-1">{t('update_credentials')}</p>
          </div>
          <button onClick={onClose} className="size-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <HiX className="text-xl" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">{t('current_password')}</label>
            <div className="relative">
              <input
                type={showCurrent ? "text" : "password"}
                required
                value={passwords.current}
                onChange={e => setPasswords({ ...passwords, current: e.target.value })}
                className="w-full h-14 pl-12 pr-12 bg-muted border border-border rounded-2xl font-bold text-sm outline-none focus:border-primary focus:bg-card transition-all"
              />
              <HiLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-xl" />
              <button type="button" onClick={() => setShowCurrent(!showCurrent)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary">
                {showCurrent ? <HiEyeOff className="text-xl" /> : <HiEye className="text-xl" />}
              </button>
            </div>
          </div>

          <div className="space-y-4 pt-2 border-t border-border/50">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">{t('new_password')}</label>
              <div className="relative">
                <input
                  type={showNew ? "text" : "password"}
                  required
                  value={passwords.new}
                  onChange={e => setPasswords({ ...passwords, new: e.target.value })}
                  className="w-full h-14 pl-12 pr-12 bg-muted border border-border rounded-2xl font-bold text-sm outline-none focus:border-primary focus:bg-card transition-all"
                />
                <HiLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-xl" />
                <button type="button" onClick={() => setShowNew(!showNew)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary">
                  {showNew ? <HiEyeOff className="text-xl" /> : <HiEye className="text-xl" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">{t('confirm_password')}</label>
              <div className="relative">
                <input
                  type={showNew ? "text" : "password"}
                  required
                  value={passwords.confirm}
                  onChange={e => setPasswords({ ...passwords, confirm: e.target.value })}
                  className="w-full h-14 pl-12 pr-12 bg-muted border border-border rounded-2xl font-bold text-sm outline-none focus:border-primary focus:bg-card transition-all"
                />
                <HiLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-xl" />
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 h-14 bg-card border border-border rounded-2xl font-black text-xs uppercase tracking-widest text-muted-foreground hover:bg-muted transition-all"
            >
              {t('cancel')}
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 h-14 bg-primary text-primary-foreground rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 disabled:opacity-50 disabled:scale-100 transition-all"
            >
              {isLoading ? t('loading') : t('confirm')}
            </button>
          </div>
        </form>
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
