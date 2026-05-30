import { cn } from "@/lib/utils";
import styles from "./Loader.module.css";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string; // accessibility label
}

export default function Loader({ size = "md", className, label = "Loading..." }: LoaderProps) {
  return (
    <div
      className={cn(styles.wrapper, className)}
      role="status"
      aria-label={label}
    >
      <div className={cn(styles.spinner, styles[size])} />
      <span className="sr-only">{label}</span>
    </div>
  );
}
