import React from "react";
import { Wrench, Shield, Sparkles, Award, Calendar, ArrowRight } from "lucide-react";
import { SectionLabel, SectionHeading } from "../components/shared/SectionHeadings";
import { 
  BIKE_WASH, HELMET_CLEANING, SNAP_REPAIR, 
  VEHICLE_MODELS, VEHICLE_MATRIX, MATRIX_COLS,
  GOLD_TEXT_STYLE, GOLD_BORDER_SUBTLE_STYLE 
} from "../constants/data";
import { Button } from "../components/shared/Button";
import { scrollToSection } from "../utils/helpers";
import { cn } from "../lib/utils";

interface PricingCardProps {
  title: string;
  items: { name: string; price: string; highlight?: boolean }[];
  icon: React.ReactNode;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, items, icon }) => (
  <div className="pricing-card">
    <div className="px-6 py-4 flex items-center gap-3 bg-[linear-gradient(135deg,rgba(201,162,39,0.15)0%,rgba(232,197,71,0.05)100%)] border-b border-[rgba(201,162,39,0.25)] -mx-6 -mt-6 mb-4">
      <div className="text-[#c9a227]">{icon}</div>
      <h3 className="font-bold text-white text-lg tracking-wide" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.06em" }}>
        {title}
      </h3>
    </div>
    <div className="flex-1 divide-y divide-[rgba(201,162,39,0.1)]">
      {items.map((item) => (
        <div
          key={item.name}
          className={cn(
            "flex items-center justify-between py-3 transition-colors",
            item.highlight ? "text-[#e8c547]" : "text-foreground/80"
          )}
        >
          <span className="text-sm font-medium">
            {item.name}
          </span>
          <span className="text-sm font-bold tabular-nums" style={item.highlight ? GOLD_TEXT_STYLE : undefined}>
            {!item.highlight ? <span className="text-[#c9a227]">{item.price}</span> : item.price}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-secondary/40 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[rgba(201,162,39,0.2)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[rgba(201,162,39,0.2)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <SectionLabel>Price List</SectionLabel>
          <SectionHeading>
            TRANSPARENT <span style={GOLD_TEXT_STYLE}>PRICING</span>
          </SectionHeading>
          <p className="text-foreground/55 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            No hidden fees. Every peso listed is every peso you pay. Walk in or book ahead.
          </p>
        </div>

        <div className="services-grid mb-10">
          <PricingCard title="Bike Wash" icon={<Wrench className="w-5 h-5" />} items={BIKE_WASH} />
          <PricingCard title="Helmet Cleaning" icon={<Shield className="w-5 h-5" />} items={HELMET_CLEANING} />
          <PricingCard title="Snap Button Repair" icon={<Sparkles className="w-5 h-5" />} items={SNAP_REPAIR} />
        </div>

        <div className="pricing-matrix-container">
          <div className="px-6 py-4 flex items-center gap-3 bg-[linear-gradient(135deg,rgba(201,162,39,0.15)0%,rgba(232,197,71,0.05)100%)] border-b border-[rgba(201,162,39,0.25)]">
            <Award className="w-5 h-5 text-[#c9a227]" />
            <h3 className="font-bold text-white text-lg tracking-wide" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.06em" }}>
              Vehicle Pricing Matrix
            </h3>
            <span className="ml-auto text-xs text-foreground/40 hidden sm:block">All prices in Philippine Peso (₱)</span>
          </div>

          <table className="pricing-table">
            <thead>
              <tr>
                <th>Model</th>
                {MATRIX_COLS.map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {VEHICLE_MODELS.map((model, idx) => (
                <tr
                  key={model}
                >
                  <td className="font-semibold text-foreground/90 whitespace-nowrap" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.02em" }}>
                    {model === "Big Bike" ? (
                      <span className="flex items-center justify-center gap-1.5">
                        {model}
                        <span className="text-[10px] px-1.5 py-0.5 rounded text-[#c9a227] font-bold tracking-widest bg-[rgba(201,162,39,0.15)] border border-[rgba(201,162,39,0.3)]">
                          PREMIUM
                        </span>
                      </span>
                    ) : model}
                  </td>
                  {MATRIX_COLS.map((col) => (
                    <td key={col} className="font-medium tabular-nums text-[#c9a227]">
                      {VEHICLE_MATRIX[model]?.[col] ?? "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" onClick={() => scrollToSection("booking")}>
            <Calendar className="w-5 h-5" />
            BOOK YOUR SLOT TODAY!
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
