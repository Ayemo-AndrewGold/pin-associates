import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
  labelVariant?: "blue" | "gold";
}

export default function SectionHeader({
  label,
  title,
  highlight,
  description,
  align = "center",
  theme = "light",
  className,
  labelVariant = "blue",
}: SectionHeaderProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  const isDark = theme === "dark";

  const labelClass =
    labelVariant === "gold"
      ? "section-label section-label-gold"
      : "section-label";

  const titleWithHighlight = highlight
    ? title.replace(
        highlight,
        `<span class="${isDark ? "text-[#F4C430]" : "text-[#1E3A8A]"}">${highlight}</span>`
      )
    : title;

  return (
    <div className={cn("flex flex-col gap-4", alignClass, className)}>
      {label && (
        <span className={labelClass}>{label}</span>
      )}

      <h2
        className={cn(
          "font-heading font-bold leading-tight",
          isDark ? "text-white" : "text-[#222222]"
        )}
        dangerouslySetInnerHTML={{ __html: titleWithHighlight }}
      />

      {description && (
        <p
          className={cn(
            "text-lg leading-relaxed max-w-2xl",
            isDark ? "text-white/70" : "text-[#6C757D]",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
