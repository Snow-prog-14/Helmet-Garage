import React from "react";

export const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#c9a227]" />
      <span className="text-[#c9a227] text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
        {children}
      </span>
      <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#c9a227]" />
    </div>
  );
};

export const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <h2
      className="font-bold text-white text-center leading-tight"
      style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.02em" }}
    >
      {children}
    </h2>
  );
};
