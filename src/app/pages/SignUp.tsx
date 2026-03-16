import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { HiEye, HiEyeOff } from "react-icons/hi";
// @ts-ignore
import gearhouseLogo from "../../assets/Gearhouse logo White.png";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData(prev => ({ ...prev, [field]: e.target.value }));

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
          password: formData.password,
        }),
      });
      if (response.ok) {
        toast.success("Account created! Please log in.", { id: loadingToast });
        navigate("/");
      } else {
        try {
          const err = await response.json();
          toast.error(err.detail || "Signup failed.", { id: loadingToast });
        } catch {
          toast.error("Server error. Please check the backend.", { id: loadingToast });
        }
      }
    } catch {
      toast.error("Network error. Ensure the backend is running on port 8000.", {
        id: loadingToast, duration: 5000,
      });
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{ backgroundColor: "#D72322" }}
    >
      {/* Logo */}
      <div className="mb-8">
        <img src={gearhouseLogo} alt="Gearhouse" className="h-10 object-contain" />
      </div>

      {/* White Card */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[500px] px-10 py-10">
        <h1 className="font-['Inter',sans-serif] font-bold text-[#04091E] text-2xl text-center mb-8">
          Create a new account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First & Last Name */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange("firstName")}
              className="flex-1 h-12 px-4 bg-[#F8F9FB] border border-[#EEEFF2] rounded-xl font-['Inter',sans-serif] text-sm text-[#04091E] outline-none focus:border-[#D72322] transition-colors"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange("lastName")}
              className="flex-1 h-12 px-4 bg-[#F8F9FB] border border-[#EEEFF2] rounded-xl font-['Inter',sans-serif] text-sm text-[#04091E] outline-none focus:border-[#D72322] transition-colors"
              required
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange("email")}
            className="w-full h-12 px-4 bg-[#F8F9FB] border border-[#EEEFF2] rounded-xl font-['Inter',sans-serif] text-sm text-[#04091E] outline-none focus:border-[#D72322] transition-colors"
            required
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange("password")}
              className="w-full h-12 px-4 pr-12 bg-[#F8F9FB] border border-[#EEEFF2] rounded-xl font-['Inter',sans-serif] text-sm text-[#04091E] outline-none focus:border-[#D72322] transition-colors"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A3A6B4] hover:text-[#D72322] transition-colors"
            >
              {showPassword ? <HiEye size={20} /> : <HiEyeOff size={20} />}
            </button>
          </div>

          {/* Terms */}
          <label className="flex items-center gap-3 cursor-pointer" onClick={() => setAgreeToTerms(!agreeToTerms)}>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                agreeToTerms ? "border-[#D72322] bg-[#D72322]" : "border-[#CBD5E0] bg-white"
              }`}
            >
              {agreeToTerms && <div className="w-2 h-2 bg-white rounded-full" />}
            </div>
            <span className="font-['Inter',sans-serif] text-sm text-[#04091E]">
              By proceeding, you agree to the{" "}
              <span className="text-[#D72322] font-semibold">Terms and Conditions</span>
            </span>
          </label>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full h-12 bg-[#D72322] text-white rounded-xl font-['Inter',sans-serif] font-semibold text-base hover:bg-[#C01F1E] active:scale-[0.98] transition-all"
          >
            Sign up with email
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 py-1">
            <div className="flex-1 h-px bg-[#EEEFF2]" />
            <span className="font-['Inter',sans-serif] text-sm text-[#A3A6B4]">Or Signup with</span>
            <div className="flex-1 h-px bg-[#EEEFF2]" />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              className="flex-1 h-12 border border-[#EEEFF2] rounded-xl flex items-center justify-center gap-2 bg-white hover:bg-[#F8F9FB] transition-colors font-['Inter',sans-serif] text-sm text-[#04091E]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button
              type="button"
              className="flex-1 h-12 border border-[#EEEFF2] rounded-xl flex items-center justify-center gap-2 bg-white hover:bg-[#F8F9FB] transition-colors font-['Inter',sans-serif] text-sm text-[#04091E]"
            >
              <svg width="16" height="18" viewBox="0 0 814 1000" fill="currentColor">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-38.8-162.1-116.9q-59.91-84-96.8-194.2C18 320.6 0 222.1 0 176.5c0-154.5 100.9-236.6 198.9-236.6 67.1 0 121.2 43.4 161.3 43.4 38.3 0 98.5-46 176.7-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
              </svg>
              Apple
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center font-['Inter',sans-serif] text-sm text-[#A3A6B4]">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="font-semibold text-[#D72322] hover:underline"
            >
              Login Now
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
