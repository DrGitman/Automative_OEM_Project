import { createBrowserRouter, Navigate } from "react-router";
import Root from "./pages/Root";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CreateNewPassword from "./pages/CreateNewPassword";
import Dashboard from "./pages/Dashboard";
import MyVehicles from "./pages/MyVehicles";
import Maintenance from "./pages/Maintenance";
import Bookings from "./pages/Bookings";
import Settings from "./pages/Settings";
import MyAccount from "./pages/MyAccount";
import ErrorBoundaryPage from "./pages/ErrorBoundaryPage";
import Notifications from "./pages/Notifications";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LegalNotice from "./pages/LegalNotice";
import ProtectedRoute from "./components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/forgot-password",
    Component: CreateNewPassword,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Root />
      </ProtectedRoute>
    ),
    ErrorBoundary: ErrorBoundaryPage,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: "dashboard", Component: Dashboard },
      { path: "vehicles", Component: MyVehicles },
      { path: "maintenance", Component: Maintenance },
      { path: "bookings", Component: Bookings },
      { path: "settings", Component: Settings },
      { path: "my-account", Component: MyAccount },
      { path: "notifications", Component: Notifications },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "legal-notice", Component: LegalNotice },
      { path: "*", Component: ErrorBoundaryPage },
    ],
  },
]);
