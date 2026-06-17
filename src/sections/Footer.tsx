import React from "react";
import { Shield, Facebook, MapPin, Phone, Navigation, Instagram, Mail } from "lucide-react";
import { NAV_LINKS, CORE_VALUES } from "../constants/data";
import { scrollToSection } from "../utils/helpers";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-16 pb-8">
      {/* 1. Map Visual Frame */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="media-box h-48 sm:h-64 border border-white/5 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1200&h=400&fit=crop&auto=format"
            alt="Map Preview"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[var(--gold)] flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#0b0b0b]" />
            </div>
            <span className="text-white font-bold text-lg" style={{ fontFamily: 'Rajdhani', sans-serif }}>14 Catalina Subdivision, Pasig City</span>
            <span className="text-[var(--gold)] text-[10px] font-bold tracking-[0.2em] mt-1">THE HELMET GARAGE HQ</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* 2. Footer Structure (4-Column Layout) */}
        <div className="footer-grid mb-16">
          {/* Column 1: Brand Bio */}
          <div className="footer-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-[var(--gold)] flex items-center justify-center">
                <Shield className="w-4 h-4 text-[#0b0b0b]" />
              </div>
              <span className="text-white font-bold tracking-widest text-sm" style={{ fontFamily: 'Rajdhani', sans-serif }}>THE HELMET GARAGE</span>
            </div>
            <p className="text-muted text-xs leading-relaxed mb-6">
              Pasig City's premier motorcycle detailing specialist. We provide museum-grade care for your machine and gear, using only the finest ceramic and graphene products.
            </p>
            <button className="btn-outline btn-sm py-2 text-[10px]">
              <Facebook className="w-3 h-3" /> FOLLOW ON FACEBOOK
            </button>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {NAV_LINKS.map(link => (
                <li key={link.id}><a href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Bike Wash</a></li>
              <li><a href="#services">Helmet Cleaning</a></li>
              <li><a href="#services">Ceramic Coating</a></li>
              <li><a href="#services">Repair & Maintenance</a></li>
              <li><a href="#services">Decal Installation</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Directory */}
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-[var(--gold)] shrink-0" />
                <span className="text-xs text-muted leading-relaxed">Catalina Subdivision, Rosario,<br />Pasig City, Metro Manila</span>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-[var(--gold)] shrink-0" />
                <span className="text-xs text-muted">0939 405 0469</span>
              </div>
              <div className="flex gap-3">
                <Navigation className="w-4 h-4 text-[var(--gold)] shrink-0" />
                <span className="text-xs text-muted uppercase font-bold tracking-wider">WAZE: "The Helmet Garage Pasig"</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-muted uppercase tracking-widest">© 2026 THE HELMET GARAGE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Instagram className="w-4 h-4 text-muted hover:text-[var(--gold)] cursor-pointer transition-colors" />
            <Facebook className="w-4 h-4 text-muted hover:text-[var(--gold)] cursor-pointer transition-colors" />
            <Mail className="w-4 h-4 text-muted hover:text-[var(--gold)] cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};
