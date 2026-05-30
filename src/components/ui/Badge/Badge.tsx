import { cn } from "@/lib/utils";
import type { BadgeVariant } from "@/types";
import styles from "./Badge.module.css";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  /** CSS color string — used when variant="category" */
  accentColor?: string;
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({
  label,
  variant = "default",
  accentColor,
  size = "md",
  className,
}: BadgeProps) {
  const inlineStyle =
    variant === "category" && accentColor
      ? ({
          "--badge-color": accentColor,
          color: accentColor,
          borderColor: `color-mix(in srgb, ${accentColor} 40%, transparent)`,
          background: `color-mix(in srgb, ${accentColor} 12%, transparent)`,
        } as React.CSSProperties)
      : undefined;

  return (
    <span
      className={cn(styles.badge, styles[variant], styles[size], className)}
      style={inlineStyle}
    >
      {label}
    </span>
  );
}
