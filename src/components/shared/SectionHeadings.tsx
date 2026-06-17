import React from "react";

export const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--gold)]" />
      <span className="text-[var(--gold)] text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
        {children}
      </span>
      <div className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--gold)]" />
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
