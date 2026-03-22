import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { HiEye, HiEyeOff } from "react-icons/hi";
// @ts-ignore
import gearhouseLogo from "../../assets/Gearhouse logo White.png";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleForgotPassword = async () => {
    if (!email) {
      toast.error("Please enter your email address first.");
      return;
    }
    const loadingToast = toast.loading("Sending reset link...");
    try {
      const response = await fetch("http://localhost:8000/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        const data = await response.json();
        toast.success(`Reset link sent to ${data.to}`, { id: loadingToast, duration: 6000 });
      } else {
        const err = await response.json();
        toast.error(err.detail || "Failed to send reset link.", { id: loadingToast });
      }
    } catch {
      toast.error("Network error. Please try again.", { id: loadingToast });
    }
  };

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
        navigate("/dashboard");
      } else {
        try {
          const err = await response.json();
          toast.error(err.detail || "Login failed.", { id: loadingToast });
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
      style={{
        height: "100vh",
        backgroundColor: "#D72322",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "Inter, system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        overflowY: "auto",
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: "28px", textAlign: "center" }}>
        <img
          src={gearhouseLogo}
          alt="Gearhouse"
          style={{ height: "56px", maxWidth: "200px", objectFit: "contain" }}
        />
      </div>

      {/* Card */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "40px 40px",
          width: "100%",
          maxWidth: "460px",
          minWidth: "380px",
          boxShadow: "0 4px 32px rgba(0,0,0,0.18)",
        }}
      >
        <h1
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "24px",
            fontWeight: 600,
            color: "#0A0F1E",
            textAlign: "center",
            marginBottom: "28px",
            lineHeight: 1.3,
          }}
        >
          Login to your account
        </h1>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            onFocus={e => (e.target.style.borderColor = "#D72322")}
            onBlur={e => (e.target.style.borderColor = "#E8E9EE")}
            required
          />

          {/* Password */}
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ ...inputStyle, paddingRight: "48px" }}
              onFocus={e => (e.target.style.borderColor = "#D72322")}
              onBlur={e => (e.target.style.borderColor = "#E8E9EE")}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={eyeBtnStyle}
            >
              {showPassword ? <HiEye size={20} /> : <HiEyeOff size={20} />}
            </button>
          </div>

          {/* Remember me + Forgot Password */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <label
              style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
              onClick={() => setRememberMe(!rememberMe)}
            >
              <div
                style={{
                  width: "20px", height: "20px", borderRadius: "50%",
                  border: rememberMe ? "2px solid #D72322" : "2px solid #CBD5E0",
                  backgroundColor: rememberMe ? "#D72322" : "white",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, transition: "all 0.15s",
                }}
              >
                {rememberMe && <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "white" }} />}
              </div>
              <span style={{ fontSize: "14px", color: "#3D3D3D", userSelect: "none" }}>Remember me</span>
            </label>
            <button
              type="button"
              onClick={handleForgotPassword}
              style={{ fontSize: "14px", fontWeight: 600, color: "#D72322", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              Forgot Password?
            </button>
          </div>

          {/* Sign In */}
          <button
            type="submit"
            style={primaryBtnStyle}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#C01F1E")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#D72322")}
          >
            Sign in with email
          </button>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "4px 0" }}>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#EEEFF2" }} />
            <span style={{ fontSize: "14px", color: "#9CA3AF", whiteSpace: "nowrap" }}>Or login with</span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#EEEFF2" }} />
          </div>

          {/* Social Buttons */}
          <div style={{ display: "flex", gap: "12px" }}>
            <button type="button" style={socialBtnStyle}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "white")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button type="button" style={socialBtnStyle}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "white")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A0F1E" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Apple
            </button>
          </div>

          {/* Sign Up Link */}
          <p style={{ textAlign: "center", fontSize: "14px", color: "#9CA3AF", margin: "4px 0 0" }}>
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              style={{ fontSize: "14px", fontWeight: 600, color: "#D72322", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              Get Started
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

// ── Shared micro-styles ──────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  width: "100%",
  height: "46px",
  padding: "0 16px",
  backgroundColor: "#F6F7F9",
  border: "1.5px solid #E8E9EE",
  borderRadius: "8px",
  fontFamily: "Inter, sans-serif",
  fontSize: "16px",
  color: "#0A0F1E",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.15s",
};

const eyeBtnStyle: React.CSSProperties = {
  position: "absolute", right: "14px", top: "50%",
  transform: "translateY(-50%)", background: "none",
  border: "none", cursor: "pointer", color: "#9CA3AF",
  display: "flex", alignItems: "center",
};

const primaryBtnStyle: React.CSSProperties = {
  height: "46px",
  backgroundColor: "#D72322",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: "16px",
  cursor: "pointer",
  width: "100%",
  transition: "background-color 0.15s",
};

const socialBtnStyle: React.CSSProperties = {
  flex: 1,
  height: "46px",
  border: "1.5px solid #E8E9EE",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  backgroundColor: "white",
  cursor: "pointer",
  fontFamily: "Inter, sans-serif",
  fontSize: "14px",
  fontWeight: 500,
  color: "#0A0F1E",
  transition: "background-color 0.15s",
};
