import { Navigate, useLocation } from "react-router";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    
    // Simple check for now. In a real app, you'd verify the token with the backend.
    if (user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
    
    // Handle "fresh start" logic: 
    // If we want to force login on every fresh window/tab, we can check sessionStorage.
    // However, the standard behavior of starting at /login if not authenticated 
    // addresses most "fresh start" issues where users see a broken dashboard.
    // If the user wants to ALWAYS start at login even if authenticated, 
    // we would check a sessionStorage flag here.
    const sessionStarted = sessionStorage.getItem("session_started");
    if (!sessionStarted) {
      sessionStorage.setItem("session_started", "true");
      // If it's a fresh session and we are at the root, we might want to force /login.
      // But let's stick to the redirection if not authenticated first.
    }
  }, []);

  if (isAuth === null) {
    return (
      <div className="flex items-center justify-center h-screen bg-background text-foreground">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuth) {
    // Redirect to login, but save the current location to redirect back after login.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
