import React from "react";
import { Star } from "lucide-react";
import { REVIEWS } from "../constants/data";

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-3.5 h-3.5 ${i < rating ? "fill-[var(--gold)] text-[var(--gold)]" : "text-[#333]"}`} />
    ))}
  </div>
);

export const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="section-tag">
          <div className="line" />
          <span>Testimonials</span>
          <div className="line" />
        </div>
        <h2 className="section-heading text-white">What Riders Say</h2>

        <div className="absolute top-0 right-10 hidden lg:block">
          <div className="bg-[#121212] border border-[var(--gold-border)] p-6 rounded-lg text-center shadow-xl">
            <div className="text-3xl font-bold text-white" style={{ fontFamily: 'Rajdhani', sans-serif }}>4.9</div>
            <div className="text-[10px] text-muted uppercase tracking-widest mt-1 mb-2">Overall Rating</div>
            <StarRating rating={5} />
            <div className="text-[9px] text-[var(--gold)] mt-3 font-bold uppercase cursor-pointer hover:underline">Facebook / Google Reviews</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.name} className="bg-card p-8 rounded-lg border border-white/5 flex flex-col gap-4">
              <StarRating rating={review.rating} />
              <p className="text-sm italic text-muted leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3 mt-auto pt-6 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center text-[#0b0b0b] font-bold text-xs">
                  {review.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-white uppercase" style={{ fontFamily: 'Rajdhani', sans-serif }}>{review.name}</div>
                  <div className="text-[10px] text-muted uppercase tracking-wider">{review.bike}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
