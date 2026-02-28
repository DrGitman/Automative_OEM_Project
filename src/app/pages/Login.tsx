import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { HiEye, HiEyeOff } from "react-icons/hi";
import svgPaths from "../../imports/svg-j5q3cnggiu";
import gearhouseLogo from "../../assets/Gearhouse logo White.png";

function GearhouseLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={gearhouseLogo} alt="Gearhouse" style={{ height: '80px', objectFit: 'contain' }} />
    </div>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loadingToast = toast.loading("Logging in...");
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success("Login successful!", { id: loadingToast });
        console.log("Login successful:", data);
        navigate("/dashboard");
      } else {
        try {
          const errorData = await response.json();
          toast.error(errorData.detail || "Login failed.", { id: loadingToast });
        } catch (e) {
          toast.error("Server error (500). Please check the backend details.", { id: loadingToast });
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Network error. Please ensure the backend server is running on port 8000.", {
        id: loadingToast,
        duration: 5000
      });
    }
  };

  return (
    <div style={{ backgroundColor: '#d72322', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      {/* Logo */}
      <div style={{ marginBottom: '40px' }}>
        <GearhouseLogo />
      </div>

      {/* White Card */}
      <div style={{ background: 'white', borderRadius: '20px', boxShadow: '0px 4px 52px rgba(0,0,0,0.15)', width: '100%', maxWidth: '529px', padding: '40px' }}>
        <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '28px', color: '#111827', textAlign: 'center', marginBottom: '32px', lineHeight: 1.4 }}>
          Login to your account
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ background: '#fafafa', height: '56px', padding: '0 16px', borderRadius: '8px', fontFamily: 'Outfit, sans-serif', fontSize: '16px', color: '#111827', border: '1.5px solid #f0f0f0', outline: 'none', width: '100%', boxSizing: 'border-box' }}
            onFocus={e => e.target.style.borderColor = '#d72322'}
            onBlur={e => e.target.style.borderColor = '#f0f0f0'}
            required
          />

          {/* Password */}
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ background: '#fafafa', height: '56px', padding: '0 48px 0 16px', borderRadius: '8px', fontFamily: 'Outfit, sans-serif', fontSize: '16px', color: '#111827', border: '1.5px solid #f0f0f0', outline: 'none', width: '100%', boxSizing: 'border-box' }}
              onFocus={e => e.target.style.borderColor = '#d72322'}
              onBlur={e => e.target.style.borderColor = '#f0f0f0'}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#A0AEC0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {showPassword ? <HiEye size={22} /> : <HiEyeOff size={22} />}
            </button>
          </div>

          {/* Remember Me & Forgot Password */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <label style={{ display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ position: 'relative', width: '20px', height: '20px', flexShrink: 0 }}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer', margin: 0 }}
                />
                <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="9.5" stroke={rememberMe ? "#d72322" : "#CBD5E0"} fill={rememberMe ? "#d72322" : "transparent"} />
                  {rememberMe && <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
                </svg>
              </div>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', color: '#111827' }}>Remember me</span>
            </label>
            <button
              type="button"
              onClick={() => navigate("/reset-password")}
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '15px', color: '#ec221f', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Forgot Password?
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            style={{ background: '#d72322', height: '56px', borderRadius: '8px', fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '16px', color: 'white', border: 'none', cursor: 'pointer', width: '100%', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#c01f1e')}
            onMouseLeave={e => (e.currentTarget.style.background = '#d72322')}
          >
            Sign in with email
          </button>

          {/* Divider */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ flex: 1, height: '1px', background: '#EEEFF2' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#718096', whiteSpace: 'nowrap' }}>Or login with</span>
            <div style={{ flex: 1, height: '1px', background: '#EEEFF2' }} />
          </div>

          {/* Social Buttons */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <button
              type="button"
              style={{ flex: 1, height: '56px', border: '1.5px solid #EEEFF2', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: 'white', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#fafafa')}
              onMouseLeave={e => (e.currentTarget.style.background = 'white')}
            >
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                <path d={svgPaths.p32d4ab00} fill="#4285F4" />
                <path d={svgPaths.p348bac40} fill="#00C0E8" />
                <path d={svgPaths.p2aa7f680} fill="#FDCF24" />
                <path d={svgPaths.p18bd6d00} fill="#EB4335" />
              </svg>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', color: '#111827' }}>Google</span>
            </button>
            <button
              type="button"
              style={{ flex: 1, height: '56px', border: '1.5px solid #EEEFF2', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: 'white', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#fafafa')}
              onMouseLeave={e => (e.currentTarget.style.background = 'white')}
            >
              <svg width="18" height="20" viewBox="0 0 20 22" fill="none">
                <path d={svgPaths.p132f3180} fill="#111827" />
              </svg>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', color: '#111827' }}>Apple</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p style={{ textAlign: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '15px', color: '#718096', margin: 0 }}>
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '15px', color: '#ec221f', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Get Started
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
