import React from "react";
import { SectionLabel, SectionHeading } from "../components/shared/SectionHeadings";
import { REVIEWS, GOLD_TEXT_STYLE, GOLD_BORDER_SUBTLE_STYLE, GOLD_GRADIENT } from "../constants/data";
import { StarRating } from "../components/shared/StarRating";

export const Reviews: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/40 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[rgba(201,162,39,0.2)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[rgba(201,162,39,0.2)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <SectionLabel>Testimonials</SectionLabel>
            <SectionHeading>
              WHAT RIDERS <span style={GOLD_TEXT_STYLE}>SAY</span>
            </SectionHeading>
          </div>
          <div className="flex items-center gap-4 bg-card rounded-lg px-5 py-4 self-start" style={GOLD_BORDER_SUBTLE_STYLE}>
            <div>
              <div className="text-3xl font-bold" style={{ fontFamily: "'Rajdhani', sans-serif", ...GOLD_TEXT_STYLE }}>4.9</div>
              <StarRating rating={5} />
            </div>
            <div>
              <div className="text-foreground/50 text-xs uppercase tracking-wider">Overall Rating</div>
              <div className="text-white font-semibold text-sm">Facebook · Google</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="bg-card rounded-lg p-6 flex flex-col hover:border-[#c9a227]/50 transition-all duration-300 hover:-translate-y-0.5"
              style={GOLD_BORDER_SUBTLE_STYLE}
            >
              <StarRating rating={r.rating} />
              <p className="text-foreground/65 text-sm leading-relaxed mt-4 mb-5 flex-1 italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[rgba(201,162,39,0.15)]">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-[#0b0b0b] text-xs font-bold flex-shrink-0" style={{ background: GOLD_GRADIENT }}>
                  {r.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{r.name}</div>
                  <div className="text-xs text-foreground/45">{r.bike} · {r.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
