import React from "react";
import { cn } from "../../lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  children: React.ReactNode;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, children, className, ...props }, ref) => {
    return (
      <div className="mb-4">
        <label
          className="text-xs font-bold text-foreground/50 uppercase tracking-wider block mb-1.5"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          {label}
        </label>
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              "w-full bg-[#1a1a1a] rounded px-4 py-2.5 text-sm text-foreground focus:outline-none appearance-none transition-colors",
              "border border-[rgba(201,162,39,0.25)] focus:border-[#c9a227]",
              error && "border-red-500 focus:border-red-500",
              className
            )}
            {...props}
          >
            {children}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {error && <p className="text-red-500 text-[10px] mt-1 uppercase font-bold tracking-wider">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
