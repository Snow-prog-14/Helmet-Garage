import React, { useState, useEffect } from "react";
import { Menu, X, Shield, Calendar } from "lucide-react";
import { NAV_LINKS, GOLD_GRADIENT } from "../constants/data";
import { Button } from "../components/shared/Button";
import { scrollToSection } from "../utils/helpers";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { cn } from "../lib/utils";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map(l => l.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "navbar",
        isScrolled ? "bg-[#0b0b0b]/96 backdrop-blur-md shadow-xl shadow-black/50 border-b border-[rgba(201,162,39,0.2)]" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollToSection("home")} className="navbar-logo group">
          <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0 shadow-md shadow-[#c9a227]/30" style={{ background: GOLD_GRADIENT }}>
            <Shield className="w-5 h-5 text-[#0b0b0b]" />
          </div>
          <div className="text-left">
            <div className="font-bold text-white leading-none tracking-widest text-base uppercase" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              The Helmet Garage
            </div>
            <div className="text-[10px] tracking-widest leading-none uppercase mt-1" style={{ color: "#c9a227" }}>
              Premium Detailing
            </div>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="navbar-links hidden lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "px-4 py-2 text-sm font-medium tracking-wide rounded transition-all",
                activeSection === link.id ? "text-[#c9a227]" : "text-foreground/60 hover:text-foreground hover:bg-white/5"
              )}
              style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.06em" }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button size="sm" onClick={() => scrollToSection("booking")}>
            <Calendar className="w-4 h-4" />
            BOOK YOUR SLOT
          </Button>
        </div>

        <button 
          className="lg:hidden p-2 text-foreground/60 hover:text-foreground" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-x-0 top-16 bg-[#161616] lg:hidden transition-all duration-300 overflow-hidden border-t border-[rgba(201,162,39,0.2)]",
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => { scrollToSection(link.id); setIsMenuOpen(false); }}
              className="text-left px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-white/5 rounded transition-colors"
              style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.06em" }}
            >
              {link.label}
            </button>
          ))}
          <div className="mt-3 pt-3 border-t border-[rgba(201,162,39,0.15)]">
            <Button size="sm" className="w-full" onClick={() => { scrollToSection("booking"); setIsMenuOpen(false); }}>
              <Calendar className="w-4 h-4" />
              BOOK YOUR SLOT TODAY!
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
