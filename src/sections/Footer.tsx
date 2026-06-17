import React from "react";
import { Shield, Facebook, MapPin, Phone, Navigation, Calendar } from "lucide-react";
import { NAV_LINKS, GOLD_GRADIENT, CORE_VALUES } from "../constants/data";
import { Button } from "../components/shared/Button";
import { scrollToSection } from "../utils/helpers";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080808] pt-16 pb-8 border-t border-[rgba(201,162,39,0.25)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
                <div className="text-[10px] tracking-widest leading-none uppercase mt-0.5" style={{ color: "#c9a227" }}>
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium text-[#c9a227] transition-colors hover:bg-[#c9a227]/10 border border-[rgba(201,162,39,0.35)]"
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
                    className="text-foreground/50 text-sm hover:text-[#c9a227] transition-colors"
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
                  <button onClick={() => scrollToSection("services")} className="text-foreground/50 text-sm hover:text-[#c9a227] transition-colors text-left">
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
                  <div className="text-[#c9a227] mt-0.5 flex-shrink-0">{icon}</div>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 py-6 border-t border-b border-[rgba(201,162,39,0.15)]">
          {CORE_VALUES.map(({ icon, title }) => (
            <div key={title} className="flex items-center gap-2.5">
              <div className="text-[#c9a227] flex-shrink-0">{icon}</div>
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
