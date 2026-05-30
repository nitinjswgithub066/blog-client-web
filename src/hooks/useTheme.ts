"use client";

// =============================================================================
// VexiraHub — useTheme Hook
// Manages dark/light theme with localStorage persistence and
// prefers-color-scheme detection for first-time visitors.
// Applies data-theme attribute to <html> element.
// =============================================================================

import { useState, useEffect, useCallback } from "react";
import type { Theme } from "@/types";

const STORAGE_KEY = "vexirahub-theme";
const DEFAULT_THEME: Theme = "dark";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return null;
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  // On mount: read stored preference or fall back to system preference
  useEffect(() => {
    const stored = getStoredTheme();
    const resolved = stored ?? getSystemTheme();
    setThemeState(resolved);
    applyTheme(resolved);
    setMounted(true);
  }, []);

  // Listen for system theme changes (only if user hasn't set a preference)
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!getStoredTheme()) {
        const next: Theme = e.matches ? "light" : "dark";
        setThemeState(next);
        applyTheme(next);
      }
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return {
    theme,
    isDark: theme === "dark",
    isLight: theme === "light",
    setTheme,
    toggleTheme,
    mounted, // use to prevent hydration flash: only render toggle after mounted
  };
}
