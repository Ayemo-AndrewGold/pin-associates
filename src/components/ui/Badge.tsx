import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "blue" | "gold" | "green" | "gray" | "red" | "outline";
  size?: "sm" | "md";
}

export default function Badge({
  children,
  className,
  variant = "blue",
  size = "md",
  ...props
}: BadgeProps) {
  const variants = {
    blue:    "bg-[#EFF4FF] text-[#1E3A8A] border border-[#DBEAFE]",
    gold:    "bg-[#FFFBEB] text-[#92600A] border border-[#FDE68A]",
    green:   "bg-[#DCFCE7] text-[#16A34A] border border-[#BBF7D0]",
    gray:    "bg-[#F1F3F5] text-[#495057] border border-[#E9ECEF]",
    red:     "bg-red-50 text-red-700 border border-red-100",
    outline: "bg-transparent text-[#1E3A8A] border border-[#1E3A8A]/30",
  };

  const sizes = {
    sm: "text-xs px-2.5 py-0.5 rounded-md",
    md: "text-xs px-3 py-1 rounded-full",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 font-semibold whitespace-nowrap",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
