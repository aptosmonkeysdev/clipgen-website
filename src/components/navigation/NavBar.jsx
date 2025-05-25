import React, { useState } from "react";
import { Button, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/Logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pages = [
    "Home",
    "Features",
    "Solutions",
    "Affiliate",
    "About",
    "Pricing",
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");

  const handleNavClick = (target) => {
    if (target === "Home") {
      navigate("/");
      setActive("Home");
      setMenuOpen(false);
    } else if (target === "Features") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document
            .getElementById("features-section")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 50);
      } else {
        document
          .getElementById("features-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }
      setActive("Features");
      setMenuOpen(false);
    } else if (target === "Solutions") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document
            .getElementById("solutions-section")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 50);
      } else {
        document
          .getElementById("solutions-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }
      setActive("Solutions");
      setMenuOpen(false);
    } else {
      navigate(`/${target.toLowerCase().replace(" ", "-")}`);
      setActive(target);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      const features = document.getElementById("features-section");
      const solutions = document.getElementById("solutions-section");

      const featuresTop = features?.offsetTop || 0;
      const solutionsTop = solutions?.offsetTop || 0;

      const buffer = 100; // tweak if needed for header height

      if (scrollY + buffer >= solutionsTop) {
        setActive("Solutions");
      } else if (scrollY + buffer >= featuresTop) {
        setActive("Features");
      } else {
        setActive("Home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <>
      <nav className="w-full py-4 flex items-center justify-between bg-[#0C0C0C] text-white px-4 md:px-12">
        {/* Mobile: Burger + Logo (LEFT) */}
        <div className="flex items-center gap-2 md:hidden">
          <IconButton onClick={() => setMenuOpen(true)} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        {/* Desktop: Logo (LEFT) */}
        <div className="hidden md:block">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Center nav (Desktop Only) */}
        <div className="hidden md:inline-flex mx-4 backdrop-blur-md bg-white/10 border border-white/10 rounded-xl shadow-md px-12 py-2 gap-6  justify-center text-gray-300">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => handleNavClick(page)}
              className={`hover:text-white transition-colors duration-200 ${
                active === page ? "text-white" : "text-grey"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Mobile: Get Started Button */}
          <div className="md:hidden">
            <Button
              variant="contained"
              style={{
                backgroundColor: "orange",
                color: "white",
                textTransform: "none",
              }}
            >
              Get Started
            </Button>
          </div>

          {/* Desktop: Login + Get Started */}
          <div className="hidden md:flex gap-3">
            <Button
              variant="contained"
              style={{
                backgroundColor: "black",
                color: "white",
                textTransform: "none",
                border: "1px solid white",
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "orange",
                color: "white",
                textTransform: "none",
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Drawer */}
      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "black", // ✅ force black background
            color: "white", // ✅ white text
            width: "100%", // ✅ full screen
          },
        }}
        ModalProps={{
          BackdropProps: {
            style: { backgroundColor: "rgba(0, 0, 0, 0.85)" },
          },
        }}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Top: Close and Nav Links */}
          <div className="p-6">
            <div className="flex justify-end mb-6">
              <IconButton onClick={() => setMenuOpen(false)}>
                <CloseIcon className="text-white" />
              </IconButton>
            </div>
            <div className="space-y-6 text-lg font-medium">
              {pages.map((page) => (
                <button
                  key={page}
                  className={`block hover:underline ${
                    active === page ? "text-white" : "text-grey"
                  }`}
                  onClick={() => handleNavClick(page)}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom: Login Button */}
          <div className="p-6">
            <Button
              fullWidth
              variant="contained"
              style={{
                backgroundColor: "white",
                color: "black",
                textTransform: "none",
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
}
