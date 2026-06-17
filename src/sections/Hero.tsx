import React from "react";
import { Sparkles, Calendar, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "../components/shared/Button";
import { scrollToSection } from "../utils/helpers";
import { GOLD_TEXT_STYLE, GOLD_GRADIENT } from "../constants/data";

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-wrapper">
      <img
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&auto=format"
        alt="Premium motorcycle detail background"
        className="hero-bg-image"
      />

      <div className="hero-content">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded border border-[rgba(212,175,55,0.4)] bg-[rgba(212,175,55,0.06)]">
          <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />
          <span className="text-[var(--gold)] text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            Pasig City's Premier Motorcycle Detailing
          </span>
        </div>

        {/* Headline */}
        <h1
          className="hero-typography"
          style={{ fontSize: "clamp(4rem, 12vw, 9rem)", letterSpacing: "0.01em" }}
        >
          <span className="block" style={GOLD_TEXT_STYLE}>PROTECT.</span>
          <span className="block text-white">RIDE.</span>
        </h1>

        <p className="hero-subtext">
          Premium Detailing and Care for Your Ride.
        </p>

        <div className="button-row">
          <button className="btn-primary" onClick={() => scrollToSection("booking")}>
            <Calendar className="w-5 h-5" />
            BOOK YOUR SLOT TODAY! ➔
          </button>
          <button className="btn-outline" onClick={() => scrollToSection("services")}>
            VIEW SERVICES ➔
          </button>
        </div>

        {/* Stats */}
        <div className="metrics-row">
          {[
            { val: "100%", label: "Premium Products" },
            { val: "4.9★", label: "Customer Rating" },
            { val: "All Brands", label: "Bikes Accepted" },
          ].map(({ val, label }) => (
            <div key={label} className="metric-item">
              <div className="metric-value">{val}</div>
              <div className="metric-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
