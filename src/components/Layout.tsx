import React from "react";
import Navbar from "./navigation/NavBar";
import Footer from "./navigation/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#0C0C0C] min-h-screen text-white">
      <Navbar />
      <main className="px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
