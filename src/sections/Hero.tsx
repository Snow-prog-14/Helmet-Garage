import React from "react";
import { Sparkles, Calendar, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "../components/shared/Button";
import { scrollToSection } from "../utils/helpers";
import { GOLD_TEXT_STYLE, GOLD_GRADIENT } from "../constants/data";

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-container relative">
      <div className="absolute inset-0 bg-[#080808]">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&auto=format"
          alt="Premium motorcycle detail on dark background"
          className="w-full h-full object-cover opacity-20"
        />
        {/* Dark marble radial overlays */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(201,162,39,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(201,162,39,0.04) 0%, transparent 50%)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/90 to-[#080808]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/70" />
      </div>

      {/* Gold accent line left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-48 rounded-r" style={{ background: GOLD_GRADIENT }} />

      <div className="relative max-w-7xl mx-auto py-36 md:py-0 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded border border-[rgba(201,162,39,0.4)] bg-[rgba(201,162,39,0.06)]">
            <Sparkles className="w-3.5 h-3.5 text-[#c9a227]" />
            <span className="text-[#c9a227] text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              Pasig City's Premier Motorcycle Detailing
            </span>
          </div>

          {/* Headline */}
          <h1
            className="hero-typography font-bold leading-none mb-5"
            style={{ fontSize: "clamp(4rem, 12vw, 9rem)", letterSpacing: "0.01em" }}
          >
            <span className="block" style={GOLD_TEXT_STYLE}>PROTECT.</span>
            <span className="block text-white">RIDE.</span>
          </h1>

          <p className="text-foreground/70 text-xl md:text-2xl font-light mb-10 max-w-xl leading-relaxed">
            Premium Detailing and Care for Your Ride.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => scrollToSection("booking")}>
              <Calendar className="w-5 h-5" />
              BOOK YOUR SLOT TODAY!
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <Button size="lg" outline onClick={() => scrollToSection("services")}>
              VIEW SERVICES
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-10">
            {[
              { val: "100%", label: "Premium Products" },
              { val: "4.9★", label: "Customer Rating" },
              { val: "All Brands", label: "Bikes Accepted" },
            ].map(({ val, label }) => (
              <div key={label}>
                <div className="text-3xl font-bold" style={{ fontFamily: "'Rajdhani', sans-serif", ...GOLD_TEXT_STYLE }}>
                  {val}
                </div>
                <div className="text-xs text-foreground/50 uppercase tracking-wider mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b0b0b] to-transparent" />
    </section>
  );
};
