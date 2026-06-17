import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-[#c9a227] text-[#c9a227]" : "text-[#3a3020]"
          }`}
        />
      ))}
    </div>
  );
};
