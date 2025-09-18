import React from "react";
import { NavbarFull } from "./Header";
import  Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <NavbarFull />

      {/* Main content */}
      <main className="flex-1 relative z-10">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};