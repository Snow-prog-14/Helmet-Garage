import React from "react";
import { GOLD_GRADIENT, GOLD_BORDER_STYLE } from "../../constants/data";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  outline?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = "md",
  outline = false,
  loading = false,
  className,
  disabled,
  ...props
}) => {
  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const style: React.CSSProperties = outline
    ? { ...GOLD_BORDER_STYLE, fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.08em" }
    : { background: GOLD_GRADIENT, fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.08em" };

  const baseClasses = cn(
    "font-bold rounded transition-all duration-200 inline-flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed",
    outline
      ? "text-[#c9a227] hover:bg-[#c9a227]/10"
      : "text-[#0b0b0b] hover:brightness-110 shadow-lg shadow-[#c9a227]/20",
    sizes[size],
    className
  );

  return (
    <button
      onClick={onClick}
      style={style}
      className={baseClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};
