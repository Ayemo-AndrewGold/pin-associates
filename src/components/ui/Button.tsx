"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap select-none";

    const variants = {
      primary:
        "bg-[#1E3A8A] text-white hover:bg-[#152D6E] focus-visible:ring-[#1E3A8A] shadow-sm hover:shadow-md active:scale-[0.98]",
      secondary:
        "bg-white text-[#1E3A8A] border-2 border-[#1E3A8A] hover:bg-[#EFF4FF] focus-visible:ring-[#1E3A8A] active:scale-[0.98]",
      outline:
        "bg-transparent text-[#1E3A8A] border border-[#1E3A8A]/30 hover:border-[#1E3A8A] hover:bg-[#EFF4FF] focus-visible:ring-[#1E3A8A]",
      ghost:
        "bg-transparent text-[#495057] hover:bg-[#F1F3F5] hover:text-[#222222] focus-visible:ring-[#1E3A8A]",
      gold:
        "bg-[#F4C430] text-[#152D6E] hover:bg-[#D4A820] focus-visible:ring-[#F4C430] shadow-sm hover:shadow-md font-bold active:scale-[0.98]",
      danger:
        "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500 active:scale-[0.98]",
    };

    const sizes = {
      sm:  "text-sm px-4 py-2 rounded-lg",
      md:  "text-sm px-5 py-2.5",
      lg:  "text-base px-7 py-3.5",
      xl:  "text-base px-9 py-4 rounded-2xl",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(base, variants[variant], sizes[size], fullWidth && "w-full", className)}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12" cy="12" r="10"
              stroke="currentColor" strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
