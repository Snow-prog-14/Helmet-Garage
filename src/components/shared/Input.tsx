import React from "react";
import { cn } from "../../lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="mb-4">
        <label
          className="text-xs font-bold text-foreground/50 uppercase tracking-wider block mb-1.5"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          {label}
        </label>
        <input
          ref={ref}
          className={cn(
            "w-full bg-[#1a1a1a] rounded px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none transition-colors",
            "border border-[rgba(201,162,39,0.25)] focus:border-[#c9a227]",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="text-red-500 text-[10px] mt-1 uppercase font-bold tracking-wider">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
