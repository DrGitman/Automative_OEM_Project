import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import gearhouseLogo from "../../assets/Gearhouse logo White.png";

function GearhouseLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={gearhouseLogo} alt="Gearhouse" style={{ height: '80px', objectFit: 'contain' }} />
    </div>
  );
}

export default function CreateNewPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [passwords, setPasswords] = useState({ new: "", confirm: "" });
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      toast.error("Passwords do not match!");
      return;
    }

    const loadingToast = toast.loading("Resetting password...");
    try {
      const response = await fetch("http://localhost:8000/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          new_password: passwords.new
        }),
      });

      if (response.ok) {
        toast.success("Password reset successfully!", { id: loadingToast });
        setShowSuccess(true);
      } else {
        try {
          const errorData = await response.json();
          toast.error(errorData.detail || "Password reset failed", { id: loadingToast });
        } catch (e) {
          toast.error("Server error (500). Please check the backend details.", { id: loadingToast });
        }
      }
    } catch (error) {
      console.error("Reset password error:", error);
      toast.error("Network error. Please ensure the backend server is running on port 8000.", {
        id: loadingToast,
        duration: 5000
      });
    }
  };

  const inputStyle = {
    background: '#fafafa', height: '56px', padding: '0 48px 0 16px', borderRadius: '8px',
    fontFamily: 'Outfit, sans-serif', fontSize: '16px', color: '#111827',
    border: '1.5px solid #f0f0f0', outline: 'none', width: '100%', boxSizing: 'border-box' as const,
  };

  // ── Success / Confirmation screen ──────────────────────────────────────────
  if (showSuccess) {
    return (
      <div style={{ backgroundColor: '#d72322', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ marginBottom: '40px' }}><GearhouseLogo /></div>

        <div style={{ background: 'white', borderRadius: '20px', boxShadow: '0px 4px 52px rgba(0,0,0,0.15)', width: '100%', maxWidth: '520px', padding: '40px', position: 'relative' }}>
          {/* Close button */}
          <button
            onClick={() => navigate("/")}
            style={{ position: 'absolute', right: '20px', top: '20px', background: 'none', border: 'none', cursor: 'pointer', color: '#A0AEC0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <IoClose size={24} />
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', paddingTop: '16px' }}>
            {/* Password-changed illustration */}
            <div style={{ width: '130px', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 126 128" fill="none" width="126" height="128">
                {/* Hexagon shield */}
                <path d="M63 4 L110 30 L110 82 L63 108 L16 82 L16 30 Z" fill="#D72322" />
                {/* Inner white shield */}
                <path d="M63 18 L98 36 L98 76 L63 94 L28 76 L28 36 Z" fill="white" />
                {/* Lock body */}
                <rect x="48" y="58" width="30" height="22" rx="4" fill="#D72322" />
                {/* Lock shackle */}
                <path d="M53 58 L53 50 C53 44 73 44 73 50 L73 58" stroke="#D72322" strokeWidth="4" fill="none" />
                {/* Keyhole */}
                <circle cx="63" cy="67" r="4" fill="white" />
                <rect x="61" y="67" width="4" height="6" fill="white" />
                {/* Dots on left (floating) */}
                <circle cx="30" cy="58" r="3" fill="#D72322" />
                <circle cx="20" cy="50" r="3" fill="#D72322" />
                <circle cx="14" cy="62" r="3" fill="#D72322" />
                {/* Arrow accent */}
                <path d="M105 45 L115 45 L115 55" stroke="#D72322" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '26px', color: '#111827', lineHeight: 1.3, marginBottom: '12px' }}>
                Your successfully changed your password
              </p>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500, fontSize: '16px', color: '#747681', lineHeight: 1.6, margin: 0 }}>
                Commodo gravida eget ultricies sed in lacus. Commodo, tellus duis eros pellentesque.
              </p>
            </div>

            <button
              onClick={() => navigate("/")}
              style={{ background: '#d72322', height: '56px', borderRadius: '8px', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '16px', color: 'white', border: 'none', cursor: 'pointer', width: '100%', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#c01f1e')}
              onMouseLeave={e => (e.currentTarget.style.background = '#d72322')}
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Create New Password form ───────────────────────────────────────────────
  return (
    <div style={{ backgroundColor: '#d72322', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ marginBottom: '40px' }}><GearhouseLogo /></div>

      <div style={{ background: 'white', borderRadius: '20px', boxShadow: '0px 4px 52px rgba(0,0,0,0.15)', width: '100%', maxWidth: '529px', padding: '40px' }}>
        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '28px', color: '#111827', lineHeight: 1.25, marginBottom: '12px' }}>
            Create new password
          </p>
          <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500, fontSize: '16px', color: '#718096', lineHeight: 1.6, margin: 0 }}>
            Please enter a new password. Your new password must be different from previous password.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Email */}
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{ ...inputStyle, padding: '0 16px' }}
            required
          />

          {/* New Password */}
          <div style={{ position: 'relative' }}>
            <input
              type={showNew ? "text" : "password"}
              value={passwords.new}
              onChange={e => setPasswords({ ...passwords, new: e.target.value })}
              placeholder="New password"
              style={{ ...inputStyle, borderColor: passwords.new ? '#009aba' : '#f0f0f0' }}
              required
            />
            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#718096', display: 'flex', alignItems: 'center' }}
            >
              {showNew ? <HiEye size={22} /> : <HiEyeOff size={22} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div style={{ position: 'relative' }}>
            <input
              type={showConfirm ? "text" : "password"}
              value={passwords.confirm}
              onChange={e => setPasswords({ ...passwords, confirm: e.target.value })}
              placeholder="Confirm new password"
              style={inputStyle}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#A0AEC0', display: 'flex', alignItems: 'center' }}
            >
              <HiEyeOff size={22} />
            </button>
          </div>

          <button
            type="submit"
            style={{ background: '#d72322', height: '56px', borderRadius: '8px', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '16px', color: 'white', border: 'none', cursor: 'pointer', width: '100%', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#c01f1e')}
            onMouseLeave={e => (e.currentTarget.style.background = '#d72322')}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
