import React from "react";
import { Shield, Facebook, MapPin, Phone, Navigation, Calendar } from "lucide-react";
import { NAV_LINKS, GOLD_GRADIENT, CORE_VALUES } from "../constants/data";
import { Button } from "../components/shared/Button";
import { scrollToSection } from "../utils/helpers";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080808] border-t border-[rgba(212,175,55,0.25)]">
      {/* Map Preview Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
        <div className="rounded-lg overflow-hidden relative h-48 sm:h-64 bg-[#121212] border border-[rgba(212,175,55,0.25)] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1200&h=400&fit=crop&auto=format"
            alt="Map location of The Helmet Garage"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-lg" style={{ background: GOLD_GRADIENT }}>
              <MapPin className="w-6 h-6 text-[#0b0b0b]" />
            </div>
            <span className="text-white text-lg font-bold tracking-wide" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              14 Catalina Subdivision, Pasig City
            </span>
            <span className="text-[var(--gold)] text-sm mt-1 font-medium tracking-widest uppercase" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              Waze: "The Helmet Garage Pasig"
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded flex items-center justify-center" style={{ background: GOLD_GRADIENT }}>
                <Shield className="w-5 h-5 text-[#0b0b0b]" />
              </div>
              <div>
                <div className="font-bold text-white text-base uppercase tracking-widest leading-none" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  The Helmet Garage
                </div>
                <div className="text-[10px] tracking-widest leading-none uppercase mt-0.5" style={{ color: "var(--gold)" }}>
                  Premium Detailing · Pasig City
                </div>
              </div>
            </div>
            <p className="text-foreground/45 text-xs leading-relaxed mb-5">
              Premium motorcycle and helmet detailing in Rosario, Pasig City. Clean. Protect. Ride.
            </p>
            {/* Social */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium text-[var(--gold)] transition-colors hover:bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.35)]"
              style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.06em" }}
            >
              <Facebook className="w-4 h-4" />
              The Helmet Garage
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-foreground/50 text-sm hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              Services
            </h4>
            <ul className="space-y-2">
              {["Bike Wash", "Helmet Cleaning", "Ceramic Coating w/ Graphene", "Bike Spa Packages", "Snap Button Repair", "Decal Removal"].map((s) => (
                <li key={s}>
                  <button onClick={() => scrollToSection("services")} className="text-foreground/50 text-sm hover:text-[var(--gold)] transition-colors text-left">
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              Contact
            </h4>
            <div className="space-y-3 mb-6">
              {[
                { icon: <MapPin className="w-4 h-4" />, val: "14 Catalina Subdivision\nRosario, Pasig City 1609" },
                { icon: <Phone className="w-4 h-4" />, val: "09394050469\n(also GCash)" },
                { icon: <Navigation className="w-4 h-4" />, val: "Waze: The Helmet Garage Pasig" },
              ].map(({ icon, val }) => (
                <div key={val} className="flex gap-2.5 items-start">
                  <div className="text-[var(--gold)] mt-0.5 flex-shrink-0">{icon}</div>
                  <div className="text-foreground/50 text-xs whitespace-pre-line leading-relaxed">{val}</div>
                </div>
              ))}
            </div>
            <Button size="sm" onClick={() => scrollToSection("booking")}>
              <Calendar className="w-3.5 h-3.5" />
              BOOK NOW
            </Button>
          </div>
        </div>

        {/* Core values strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 py-6 border-t border-b border-[rgba(212,175,55,0.15)]">
          {CORE_VALUES.map(({ icon, title }) => (
            <div key={title} className="flex items-center gap-2.5">
              <div className="text-[var(--gold)] flex-shrink-0">{icon}</div>
              <span className="text-foreground/50 text-xs font-medium">{title}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-foreground/30 text-xs">
            © 2026 The Helmet Garage · Rosario, Pasig City · All rights reserved.
          </p>
          <p className="text-foreground/30 text-xs italic">Clean. Protect. Ride.</p>
        </div>
      </div>
    </footer>
  );
};
