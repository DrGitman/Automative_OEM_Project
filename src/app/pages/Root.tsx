import { Outlet } from "react-router";
import FloatingAIAgent from "../components/FloatingAIAgent";
import { useState, useEffect } from "react";

export default function Root() {
  const [isGearbotOpen, setIsGearbotOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsGearbotOpen(prev => !prev);
    window.addEventListener("toggle-gearbot", handler);
    return () => window.removeEventListener("toggle-gearbot", handler);
  }, []);

  return (
    <>
      <Outlet />
      <FloatingAIAgent isOpen={isGearbotOpen} onClose={() => setIsGearbotOpen(false)} />
    </>
  );
}
