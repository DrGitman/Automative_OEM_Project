import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "sonner";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
// @ts-ignore
import gearhouseLogo from "../../assets/Gearhouse logo White.png";

function GearhouseLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={gearhouseLogo} alt="Gearhouse" style={{ height: '56px', maxWidth: '200px', objectFit: 'contain' }} />
    </div>
  );
}

export default function CreateNewPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isVerifying, setIsVerifying] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!token) {
      toast.error("Invalid or missing reset token.");
      setIsVerifying(false);
      return;
    }

    const verifyToken = async () => {
      try {
        const response = await fetch(`http://localhost:8000/verify-reset-token/${token}`);
        if (response.ok) {
          const data = await response.json();
          if (data.valid) {
            setIsValid(true);
          } else {
            toast.error(data.message || "Invalid or expired token.");
          }
        } else {
          toast.error("Error verifying token.");
        }
      } catch {
        toast.error("Network error while verifying token.");
      } finally {
        setIsVerifying(false);
      }
    };

    verifyToken();
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const loadingToast = toast.loading("Updating password...");
    try {
      const response = await fetch("http://localhost:8000/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      if (response.ok) {
        toast.success("Password updated successfully!", { id: loadingToast });
        setShowSuccess(true);
      } else {
        const err = await response.json();
        toast.error(err.detail || "Failed to update password.", { id: loadingToast });
      }
    } catch {
      toast.error("Network error. Please try again.", { id: loadingToast });
    }
  };

  if (isVerifying) {
    return (
      <div style={{ backgroundColor: '#D72322', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'white', fontFamily: 'Inter, sans-serif' }}>Verifying reset token...</p>
      </div>
    );
  }

  if (!isValid && !showSuccess) {
    return (
      <div style={{ backgroundColor: '#D72322', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ marginBottom: '28px' }}><GearhouseLogo /></div>
        <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 4px 32px rgba(0,0,0,0.18)', width: '100%', maxWidth: '460px', padding: '40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '24px', color: '#0A0F1E', marginBottom: '16px' }}>Invalid Token</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#747681', marginBottom: '24px' }}>The password reset link is invalid or has expired.</p>
          <button onClick={() => navigate("/")} style={primaryBtnStyle}>Back to Login</button>
        </div>
      </div>
    );
  }

  if (showSuccess) {
    return (
      <div style={{ backgroundColor: '#D72322', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ marginBottom: '28px' }}><GearhouseLogo /></div>
        <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 4px 32px rgba(0,0,0,0.18)', width: '100%', maxWidth: '460px', padding: '40px', position: 'relative', textAlign: 'center' }}>
          <button onClick={() => navigate("/")} style={{ position: 'absolute', right: '16px', top: '16px', background: 'none', border: 'none', cursor: 'pointer', color: '#A0AEC0' }}>
            <IoClose size={24} />
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            {/* Hexagon lock illustration */}
            <div style={{ width: '120px', height: '120px', position: 'relative' }}>
               <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 5L108 32.5V87.5L60 115L12 87.5V32.5L60 5Z" fill="#D72322"/>
                <rect x="42" y="55" width="36" height="28" rx="4" fill="white"/>
                <path d="M48 55V48C48 41.3726 53.3726 36 60 36C66.6274 36 72 41.3726 72 48V55" stroke="white" strokeWidth="4"/>
                <circle cx="60" cy="69" r="4" fill="#D72322"/>
                <rect x="58" y="69" width="4" height="8" fill="#D72322"/>
              </svg>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '24px', color: '#0A0F1E', marginBottom: '12px', lineHeight: 1.3 }}>
                 You successfully changed your password
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#747681', lineHeight: 1.5 }}>
                Commodo gravida eget ultricies sed in lacus. Commodo, tellus duis eros pellentesque.
              </p>
            </div>

            <button onClick={() => navigate("/")} style={primaryBtnStyle}>Back to Login</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#D72322', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ marginBottom: '28px' }}><GearhouseLogo /></div>
      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 4px 32px rgba(0,0,0,0.18)', width: '100%', maxWidth: '460px', padding: '40px', textAlign: 'center' }}>
        <div style={{ marginBottom: '28px' }}>
          <h1 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '24px', color: '#0A0F1E', marginBottom: '12px', lineHeight: 1.3 }}>
            Create new password
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#747681', lineHeight: 1.5 }}>
            Please enter a new password. Your new password must be different from previous password.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="New password"
              style={inputStyle}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={eyeBtnStyle}
            >
              {showPassword ? <HiEye size={22} /> : <HiEyeOff size={22} />}
            </button>
          </div>

          <div style={{ position: 'relative' }}>
            <input
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              style={inputStyle}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              style={eyeBtnStyle}
            >
              {showConfirm ? <HiEye size={22} /> : <HiEyeOff size={22} />}
            </button>
          </div>

          <button type="submit" style={primaryBtnStyle}>Reset Password</button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
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
  boxSizing: "border-box" as const,
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
}
