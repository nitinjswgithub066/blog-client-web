"use client";

import { useState, useEffect } from "react";

import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "./ThemeToggle.module.css";

interface ThemeToggleProps {
  className?: string;
  compact?: boolean; // icon-only, no label
}

export default function ThemeToggle({ className, compact = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;

  return (
    <button
      id="theme-toggle"
      className={cn(styles.toggle, compact && styles.compact, className)}
      suppressHydrationWarning
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      type="button"
    >
      <span className={styles.track}>
        <span className={cn(styles.thumb, isDark && styles.thumbDark)}>
          {isDark ? (
            <FiMoon className={styles.icon} aria-hidden="true" />
          ) : (
            <FiSun className={styles.icon} aria-hidden="true" />
          )}
        </span>
      </span>
      {!compact && (
        <span className={styles.label}>{isDark ? "Dark" : "Light"}</span>
      )}
    </button>
  );
}
