import React from "react";
import { Wrench, Shield, Sparkles, ChevronRight } from "lucide-react";
import { SectionLabel, SectionHeading } from "../components/shared/SectionHeadings";
import { GOLD_TEXT_STYLE, GOLD_BORDER_SUBTLE_STYLE } from "../constants/data";
import { scrollToSection } from "../utils/helpers";

const SERVICES = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Bike Wash",
    desc: "Standard motorwash to premium ceramic-protected full wash. Quick turnaround, spotless results.",
    items: ["Motorwash from ₱120", "Wax & Ceramic options", "Big Bike specialist"],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Helmet Cleaning",
    desc: "Deep clean, graphene ceramic coating, and full detailing packages for all helmet types.",
    items: ["Full & Half Face cleaning", "Graphene Ceramic ₱600", "Packages A, B & C"],
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Repairs & Add-Ons",
    desc: "Snap button repair, D-ring replacement, and decal removal with premium wash.",
    items: ["Stainless Button ₱150", "Double D Ring ₱100", "Decal Removal ₱800"],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <SectionLabel>Our Services</SectionLabel>
          <SectionHeading>
            WHAT WE <span style={GOLD_TEXT_STYLE}>OFFER</span>
          </SectionHeading>
          <p className="text-foreground/55 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            From quick motorwash to full ceramic coating — everything your bike and helmet deserve,
            done right here in Pasig City.
          </p>
        </div>

        {/* Service overview cards */}
        <div className="services-grid mb-14">
          {SERVICES.map(({ icon, title, desc, items }) => (
            <div
              key={title}
              className="pricing-card group"
            >
              <div className="w-14 h-14 rounded flex items-center justify-center text-[#c9a227] flex-shrink-0 bg-[rgba(201,162,39,0.1)] border border-[rgba(201,162,39,0.25)] mb-4">
                {icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.04em" }}>
                  {title}
                </h3>
                <p className="text-foreground/55 text-sm leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-1.5 mb-6">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/70">
                      <div className="w-1 h-1 rounded-full bg-[#c9a227] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => scrollToSection("pricing")}
                className="mt-auto text-xs text-[#c9a227] hover:text-[#e8c547] transition-colors flex items-center gap-1 font-medium"
                style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.06em" }}
              >
                SEE FULL PRICING <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Add-on banner */}
        <div
          className="rounded-lg px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[linear-gradient(135deg,rgba(201,162,39,0.12)0%,rgba(232,197,71,0.04)100%)] border border-[#c9a227]"
        >
          <div className="flex items-center gap-4">
            <Sparkles className="w-6 h-6 text-[#c9a227] flex-shrink-0" />
            <div>
              <div className="text-xs text-[#c9a227] font-bold tracking-widest uppercase mb-0.5" style={{ fontFamily: "'Rajdhani', sans-serif" }}>Add-On Service</div>
              <div className="text-white font-medium">Removal &amp; Installation of Decals with Premium Wash</div>
            </div>
          </div>
          <div className="text-2xl font-bold flex-shrink-0" style={{ fontFamily: "'Rajdhani', sans-serif", ...GOLD_TEXT_STYLE }}>₱800</div>
        </div>
      </div>
    </section>
  );
};
