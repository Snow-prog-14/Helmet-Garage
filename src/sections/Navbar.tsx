import React, { useState, useEffect } from "react";
import { X, Shield, Calendar, Menu } from "lucide-react";
import { NAV_LINKS, GOLD_GRADIENT } from "../constants/data";
import { scrollToSection } from "../utils/helpers";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { cn } from "../lib/utils";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("navbar", isScrolled && "scrolled")}>
      {/* 1. LEFT: Logo & Stacked Text */}
      <div className="navbar-left" onClick={() => scrollToSection("home")} style={{ cursor: "pointer" }}>
        <div className="logo-badge" style={{ background: GOLD_GRADIENT }}>
          <Shield className="w-5 h-5 text-[#0b0b0b]" />
        </div>
        <div className="logo-text">
          <span className="brand-name">THE HELMET GARAGE</span>
          <span className="brand-tagline">PREMIUM DETAILING</span>
        </div>
      </div>

      {/* 2. CENTER: Navigation Links */}
      <nav className="navbar-center">
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={cn("nav-link", activeSection === link.id && "active")}
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* 3. RIGHT: Action Button */}
      <div className="navbar-right">
        <button className="btn-primary btn-sm" onClick={() => scrollToSection("booking")}>
          <Calendar className="w-4 h-4" />
          BOOK YOUR SLOT
        </button>
        
        {/* Hamburger - only visible on mobile via CSS */}
        <button 
          className="hamburger-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu Overlay */}
      <div 
        className={cn(
          "mobile-menu-overlay",
          isMenuOpen ? "active" : ""
        )}
      >
        <div className="mobile-links">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => { scrollToSection(link.id); setIsMenuOpen(false); }}
              className="mobile-link"
            >
              {link.label}
            </button>
          ))}
          <button className="btn-primary w-full mt-4" onClick={() => { scrollToSection("booking"); setIsMenuOpen(false); }}>
            <Calendar className="w-4 h-4" />
            BOOK YOUR SLOT TODAY!
          </button>
        </div>
      </div>
    </header>
  );
};
