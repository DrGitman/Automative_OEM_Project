import { createBrowserRouter } from "react-router";
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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    ErrorBoundary: ErrorBoundaryPage,
    children: [
      { index: true, Component: Dashboard },
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
