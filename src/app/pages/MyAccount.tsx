import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { HiUser, HiShieldCheck, HiPencilAlt, HiCheckCircle, HiArrowRight } from "react-icons/hi";

export default function MyAccount() {
  const navigate = useNavigate();
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
    alert("Profile updated successfully!");
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#F8F9FB]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D72322]"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9FB] min-h-screen flex font-['Outfit',sans-serif]">
      <Sidebar />

      <div className="ml-[240px] flex-1 overflow-x-hidden">
        <Header title="My Account" subtitle="Manage your personal profile and security" />

        <div className="p-8 space-y-6 max-w-[1000px]">
          <div className="bg-white rounded-3xl border border-[#EEEFF2] shadow-sm overflow-hidden">
            <div className="p-8">
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between pb-10 border-b border-[#EEEFF2] mb-10 gap-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <div className="size-[120px] rounded-full bg-[#FEF2F2] flex items-center justify-center border-4 border-white shadow-xl">
                      <span className="font-black text-[#D72322] text-4xl">
                        {formData.firstname[0]}{formData.lastname[0]}
                      </span>
                    </div>
                    <button className="absolute bottom-2 right-2 size-10 bg-[#D72322] rounded-full shadow-lg flex items-center justify-center border-4 border-white text-white hover:scale-110 transition-transform">
                      <HiPencilAlt className="text-lg" />
                    </button>
                  </div>

                  <div className="text-center md:text-left">
                    <h2 className="text-[#04091E] text-3xl font-black mb-2">
                      {formData.firstname} {formData.lastname}
                    </h2>
                    <p className="text-[#747681] font-medium mb-4">
                      Vehicle Owner & Fleet Manager
                    </p>
                    <div className="flex justify-center md:justify-start gap-3">
                      <span className="px-4 py-1.5 bg-[#EBFDF5] text-[#10B981] rounded-full text-[10px] font-black uppercase tracking-wider">
                        Active
                      </span>
                      <span className="px-4 py-1.5 bg-[#F8F9FB] text-[#747681] rounded-full text-[10px] font-black uppercase tracking-wider border border-[#EEEFF2]">
                        Owner
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-auto">
                  <button className="w-full bg-[#F8F9FB] text-[#04091E] px-8 h-14 rounded-2xl font-black text-sm border border-[#EEEFF2] hover:bg-gray-50 hover:border-[#D72322]/20 transition-all flex items-center justify-center gap-2">
                    Download Profile Data
                  </button>
                </div>
              </div>

              <form onSubmit={handleSave} className="space-y-12">
                {/* Personal Details */}
                <div>
                  <div className="flex items-center gap-3 mb-8 text-[#D72322]">
                    <HiUser className="text-2xl" />
                    <h3 className="text-[#04091E] text-lg font-black uppercase tracking-widest">PERSONAL DETAILS</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputGroup label="First Name" value={formData.firstname} onChange={(val: string) => setFormData({ ...formData, firstname: val })} />
                    <InputGroup label="Last Name" value={formData.lastname} onChange={(val: string) => setFormData({ ...formData, lastname: val })} />
                    <InputGroup label="Email Address" value={formData.email} onChange={(val: string) => setFormData({ ...formData, email: val })} />
                    <InputGroup label="Phone Number" value={formData.phone} onChange={(val: string) => setFormData({ ...formData, phone: val })} />
                  </div>
                </div>

                {/* Account Security */}
                <div>
                  <div className="flex items-center gap-3 mb-8 text-[#D72322]">
                    <HiShieldCheck className="text-2xl" />
                    <h3 className="text-[#04091E] text-lg font-black uppercase tracking-widest">ACCOUNT SECURITY</h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-[#F8F9FB] p-6 rounded-2xl border border-[#EEEFF2] flex items-center justify-between group cursor-pointer hover:border-[#D72322]/20 transition-all">
                      <div className="flex items-center gap-6">
                        <div className="size-12 bg-white rounded-xl flex items-center justify-center text-[#D72322] shadow-sm border border-[#EEEFF2]">
                          <HiShieldCheck className="text-xl" />
                        </div>
                        <div>
                          <p className="font-black text-[#04091E]">Change Password</p>
                          <p className="text-xs text-[#747681]">Update your account credentials</p>
                        </div>
                      </div>
                      <HiArrowRight className="text-[#A3A6B4] group-hover:text-[#D72322] transition-colors" />
                    </div>

                    <div className="bg-[#F8F9FB] p-6 rounded-2xl border border-[#EEEFF2] flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="size-12 bg-white rounded-xl flex items-center justify-center text-[#10B981] shadow-sm border border-[#EEEFF2]">
                          <HiCheckCircle className="text-xl" />
                        </div>
                        <div>
                          <p className="font-black text-[#04091E]">Two-Factor Authentication</p>
                          <p className="text-xs text-[#747681]">Add an extra layer of security</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                        className={`w-14 h-8 rounded-full relative transition-all duration-300 ${twoFactorEnabled ? 'bg-[#10B981]' : 'bg-[#E2E4E8]'}`}
                      >
                        <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-all duration-300 ${twoFactorEnabled ? 'left-7' : 'left-1'}`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 border-t border-[#EEEFF2]">
                  <button
                    type="button"
                    className="text-[#D72322] font-black text-xs uppercase tracking-widest hover:underline"
                  >
                    Deactivate Account
                  </button>
                  <div className="flex gap-4 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => navigate("/dashboard")}
                      className="flex-1 sm:flex-none px-10 h-14 bg-white border border-[#EEEFF2] rounded-2xl font-black text-[#747681] hover:bg-gray-50 transition-all text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 sm:flex-none px-10 h-14 bg-[#D72322] text-white rounded-2xl font-black text-sm shadow-xl shadow-red-100 hover:bg-[#B91C1C] transition-all"
                    >
                      Save Preferences
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
      <label className="block text-[#A3A6B4] text-[10px] font-black uppercase tracking-widest ml-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-14 px-6 bg-[#F8F9FB] border border-[#EEEFF2] rounded-2xl font-bold text-[#04091E] outline-none focus:border-[#D72322] focus:bg-white shadow-sm transition-all"
      />
    </div>
  );
}
