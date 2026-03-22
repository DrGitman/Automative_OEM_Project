// Forced rebuild to resolve stale routes.ts reference
import { RouterProvider } from "react-router";
import { router } from "./routes.tsx";
import { Toaster } from "sonner";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Toaster position="top-center" richColors />
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  );
}
