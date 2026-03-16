import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { HiEye, HiEyeOff, HiCheckCircle } from "react-icons/hi";
import gearhouseLogo from "../../assets/Gearhouse logo White.png";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeToTerms) {
      toast.warning("Please agree to the Terms and Conditions");
      return;
    }

    const loadingToast = toast.loading("Creating your account...");
    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: formData.firstName,
          lastname: formData.lastName,
          email: formData.email,
          password: formData.password
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data));
        toast.success("Registration successful!", { id: loadingToast });
        navigate("/dashboard");
      } else {
        try {
          const errorData = await response.json();
          toast.error(errorData.detail || "Registration failed", { id: loadingToast });
        } catch (e) {
          toast.error("Server error (500). Please check the backend details.", { id: loadingToast });
        }
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Network error. Please ensure the backend server is running on port 8000.", {
        id: loadingToast,
        duration: 5000
      });
    }
  };

  return (
    <div className="min-h-screen flex bg-white font-['Inter',sans-serif]">
      {/* Left side - Branding & Hero (Desktop Only) */}
      <div className="hidden lg:flex flex-1 bg-[#D72322] relative overflow-hidden flex-col justify-between p-16">
        {/* Background Pattern/Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <img src={gearhouseLogo} alt="Gearhouse" className="h-16 object-contain mb-12" />
          <h1 className="text-white text-6xl font-semibold leading-[1.1] tracking-tight mb-8">
            Manage your fleet <br />
            <span className="text-white/80">with precision.</span>
          </h1>
          <p className="text-white/70 text-xl font-normal max-w-md leading-relaxed">
            Join the most advanced automotive management platform. Streamline maintenance, bookings, and fleet tracking in one unified interface.
          </p>
        </div>

        <div className="relative z-10 space-y-10">
          <div className="flex gap-4 items-start">
            <div className="mt-1 size-6 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
              <HiCheckCircle className="text-lg" />
            </div>
            <div>
              <p className="text-white font-medium text-lg">Real-time Fleet Analytics</p>
              <p className="text-white/60 text-sm">Monitor every vehicle sensor and performance metric.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="mt-1 size-6 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
              <HiCheckCircle className="text-lg" />
            </div>
            <div>
              <p className="text-white font-medium text-lg">Predictive Maintenance</p>
              <p className="text-white/60 text-sm">Know exactly when your vehicles need service before issues arise.</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-white/40 text-sm">
          © {new Date().getFullYear()} Gearhouse Automotive Group. All rights reserved.
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-[0.8] flex flex-col items-center justify-center p-8 bg-[#F8F9FB] lg:bg-white overflow-y-auto">
        <div className="w-full max-w-[480px]">
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-12">
             <div className="bg-[#D72322] p-4 rounded-2xl shadow-xl shadow-red-100">
                <img src={gearhouseLogo} alt="Gearhouse" className="h-10 object-contain" />
             </div>
          </div>

          <div className="mb-10">
            <h2 className="text-[#04091E] text-4xl font-semibold mb-3 tracking-tight">Create your account</h2>
            <p className="text-[#747681] text-lg font-normal">Start your 14-day free trial today.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
             <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 space-y-2">
                  <label className="text-sm font-medium text-[#04091E]">First name</label>
                  <input
                    type="text"
                    placeholder="e.g. Alex"
                    value={formData.firstName}
                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full h-14 px-5 bg-[#F8F9FB] border border-[#EEEFF2] rounded-2xl font-normal text-base text-[#04091E] outline-none focus:border-[#D72322] focus:bg-white transition-all shadow-sm"
                    required
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <label className="text-sm font-medium text-[#04091E]">Last name</label>
                  <input
                    type="text"
                    placeholder="e.g. Smith"
                    value={formData.lastName}
                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full h-14 px-5 bg-[#F8F9FB] border border-[#EEEFF2] rounded-2xl font-normal text-base text-[#04091E] outline-none focus:border-[#D72322] focus:bg-white transition-all shadow-sm"
                    required
                  />
                </div>
             </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#04091E]">Email address</label>
              <input
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-14 px-5 bg-[#F8F9FB] border border-[#EEEFF2] rounded-2xl font-normal text-base text-[#04091E] outline-none focus:border-[#D72322] focus:bg-white transition-all shadow-sm"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#04091E]">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 8 characters"
                  value={formData.password}
                  onChange={e => setFormData({ ...formData, password: e.target.value })}
                  className="w-full h-14 px-5 bg-[#F8F9FB] border border-[#EEEFF2] rounded-2xl font-normal text-base text-[#04091E] outline-none focus:border-[#D72322] focus:bg-white transition-all shadow-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-[#A3A6B4] hover:text-[#D72322] transition-colors"
                >
                  {showPassword ? <HiEye size={22} /> : <HiEyeOff size={22} />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3 py-2 cursor-pointer" onClick={() => setAgreeToTerms(!agreeToTerms)}>
              <div className={`mt-1 size-5 rounded-md border flex items-center justify-center transition-all ${agreeToTerms ? 'bg-[#D72322] border-[#D72322]' : 'bg-white border-[#EEEFF2]'}`}>
                {agreeToTerms && <HiCheckCircle className="text-white text-base" />}
              </div>
              <p className="text-sm text-[#747681] font-normal leading-relaxed">
                I agree to the <span className="text-[#D72322] font-medium hover:underline cursor-pointer">Terms and Conditions</span> and <span className="text-[#D72322] font-medium hover:underline cursor-pointer">Privacy Policy</span>.
              </p>
            </div>

            <button
              type="submit"
              className="w-full h-16 bg-[#D72322] text-white rounded-2xl font-semibold text-lg shadow-xl shadow-red-100 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Get Started
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#EEEFF2]"></div></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-4 text-[#A3A6B4] font-medium tracking-widest">Or sign up with</span></div>
            </div>

            <div className="flex gap-4">
               <button type="button" className="flex-1 h-14 border border-[#EEEFF2] rounded-2xl flex items-center justify-center gap-3 bg-white hover:bg-[#F8F9FB] transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  <span className="text-[#04091E] font-medium">Google</span>
               </button>
               <button type="button" className="flex-1 h-14 border border-[#EEEFF2] rounded-2xl flex items-center justify-center gap-3 bg-white hover:bg-[#F8F9FB] transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
                  <span className="text-[#04091E] font-medium">GitHub</span>
               </button>
            </div>

            <p className="text-center text-[#747681] text-base font-normal pt-4">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/")}
                className="text-[#D72322] font-semibold hover:underline"
              >
                Sign in
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
