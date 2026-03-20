import { RouterProvider } from "react-router";
import { router } from "./routes";
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
