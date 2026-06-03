// =============================================================================
// VexiraHub — Utility Functions
// Core helpers used across the entire platform.
// =============================================================================

// -----------------------------------------------------------------------------
// Class Name Merger (lightweight clsx alternative)
// -----------------------------------------------------------------------------

/**
 * Merge multiple class names into a single string, filtering falsy values.
 * Usage: cn("base-class", isActive && "active", className)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

// -----------------------------------------------------------------------------
// Date Formatting
// -----------------------------------------------------------------------------

/**
 * Format an ISO date string into a human-readable format.
 * @example formatDate("2026-05-20T08:00:00Z") → "May 20, 2026"
 */
export function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Format an ISO date string into a short format.
 * @example formatDateShort("2026-05-20T08:00:00Z") → "May 20"
 */
export function formatDateShort(isoString: string): string {
  return new Date(isoString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

/**
 * Return a relative time string from an ISO date.
 * @example timeAgo("2026-05-29T08:00:00Z") → "1 day ago"
 */
export function timeAgo(isoString: string): string {
  const now = new Date();
  const then = new Date(isoString);
  const diffMs = now.getTime() - then.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHrs = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffHrs / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffSec < 60) return "just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHrs < 24) return `${diffHrs}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffWeeks < 4) return `${diffWeeks}w ago`;
  if (diffMonths < 12) return `${diffMonths}mo ago`;
  return `${diffYears}y ago`;
}

// -----------------------------------------------------------------------------
// Reading Time
// -----------------------------------------------------------------------------

/**
 * Estimate reading time from HTML or plain text content.
 * Assumes average reading speed of 238 words per minute.
 * @returns Reading time in minutes (minimum 1)
 */
export function getReadingTime(content: string): number {
  const wordsPerMinute = 238;
  // Strip HTML tags for accurate word count
  const plainText = content.replace(/<[^>]*>/g, " ");
  const wordCount = plainText.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / wordsPerMinute));
}

/**
 * Format reading time as a display string.
 * @example formatReadingTime(7) → "7 min read"
 */
export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}

// -----------------------------------------------------------------------------
// Number Formatting
// -----------------------------------------------------------------------------

/**
 * Format a large number into a compact human-readable string.
 * @example formatViews(48200) → "48.2K"
 * @example formatViews(1200000) → "1.2M"
 */
export function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

// -----------------------------------------------------------------------------
// String Utilities
// -----------------------------------------------------------------------------

/**
 * Convert a string to a URL-friendly slug.
 * @example slugify("Hello World! How Are You?") → "hello-world-how-are-you"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Truncate a string to a maximum length with an ellipsis.
 * @example truncate("Hello World", 8) → "Hello..."
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3).trim() + "...";
}

/**
 * Extract initials from a name string for avatar fallbacks.
 * @example getInitials("Aryan Mehta") → "AM"
 * @example getInitials("Vexira") → "VX"
 */
export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Capitalize the first letter of a string.
 */
export function capitalize(text: string): string {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// -----------------------------------------------------------------------------
// CSS Gradient Image System
// Replaces external images with beautiful, premium CSS gradients.
// Each category has a unique gradient derived from its accent color.
// Used by PostImage, CategoryCard, HeroSection, etc.
// -----------------------------------------------------------------------------

export interface GradientConfig {
  background: string; // Full CSS gradient string (for inline style)
  accent: string; // Hex accent color (for overlays, badges)
  textColor: string; // Light or dark text on this gradient
}

const categoryGradients: Record<string, GradientConfig> = {
  technology: {
    background:
      "linear-gradient(135deg, #0d0221 0%, #1a0845 40%, #2d1b69 70%, #6C63FF 100%)",
    accent: "#6C63FF",
    textColor: "#ffffff",
  },
  programming: {
    background:
      "linear-gradient(135deg, #012018 0%, #03422f 40%, #065f46 70%, #10B981 100%)",
    accent: "#10B981",
    textColor: "#ffffff",
  },
  "web-development": {
    background:
      "linear-gradient(135deg, #060d1f 0%, #0c1e4a 40%, #1e3a8a 70%, #3B82F6 100%)",
    accent: "#3B82F6",
    textColor: "#ffffff",
  },
  ai: {
    background:
      "linear-gradient(135deg, #0f0020 0%, #2e0066 40%, #5b21b6 70%, #8B5CF6 100%)",
    accent: "#8B5CF6",
    textColor: "#ffffff",
  },
  startups: {
    background:
      "linear-gradient(135deg, #1a0a00 0%, #451f00 40%, #78350f 70%, #F59E0B 100%)",
    accent: "#F59E0B",
    textColor: "#ffffff",
  },
  business: {
    background:
      "linear-gradient(135deg, #1a0000 0%, #450000 40%, #7f1d1d 70%, #EF4444 100%)",
    accent: "#EF4444",
    textColor: "#ffffff",
  },
  finance: {
    background:
      "linear-gradient(135deg, #001412 0%, #022f2b 40%, #0f5955 70%, #14B8A6 100%)",
    accent: "#14B8A6",
    textColor: "#ffffff",
  },
  education: {
    background:
      "linear-gradient(135deg, #001018 0%, #01263a 40%, #0c4a6e 70%, #06B6D4 100%)",
    accent: "#06B6D4",
    textColor: "#ffffff",
  },
  career: {
    background:
      "linear-gradient(135deg, #1a0800 0%, #431200 40%, #7c2d12 70%, #F97316 100%)",
    accent: "#F97316",
    textColor: "#ffffff",
  },
  gaming: {
    background:
      "linear-gradient(135deg, #100020 0%, #2e0045 40%, #581c87 70%, #A855F7 100%)",
    accent: "#A855F7",
    textColor: "#ffffff",
  },
  entertainment: {
    background:
      "linear-gradient(135deg, #1a0015 0%, #4a003a 40%, #831843 70%, #EC4899 100%)",
    accent: "#EC4899",
    textColor: "#ffffff",
  },
  reviews: {
    background:
      "linear-gradient(135deg, #081000 0%, #1a2e00 40%, #365314 70%, #84CC16 100%)",
    accent: "#84CC16",
    textColor: "#ffffff",
  },
  thoughts: {
    background:
      "linear-gradient(135deg, #07090f 0%, #0f172a 40%, #1e293b 70%, #334155 100%)",
    accent: "#94A3B8",
    textColor: "#ffffff",
  },
  // Default fallback
  default: {
    background:
      "linear-gradient(135deg, #09090B 0%, #111114 40%, #18181C 70%, #27272A 100%)",
    accent: "#6C63FF",
    textColor: "#ffffff",
  },
};

/**
 * Get the CSS gradient config for a given category slug.
 * Falls back to 'default' if the slug is not found.
 * @example getCategoryGradient("technology") → { background: "...", accent: "#6C63FF", ... }
 */
export function getCategoryGradient(categorySlug: string): GradientConfig {
  return categoryGradients[categorySlug] ?? categoryGradients.default;
}

/**
 * Get CSS gradient string for direct use as a background-image style.
 * @example getCategoryGradientBg("ai") → "linear-gradient(135deg, ...)"
 */
export function getCategoryGradientBg(categorySlug: string): string {
  return getCategoryGradient(categorySlug).background;
}

// -----------------------------------------------------------------------------
// Pagination
// -----------------------------------------------------------------------------

/**
 * Paginate an array and return the current page's slice.
 */
export function paginate<T>(
  items: T[],
  page: number,
  perPage: number,
): { items: T[]; totalPages: number; totalItems: number } {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / perPage);
  const safePage = Math.max(1, Math.min(page, totalPages));
  const start = (safePage - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    totalPages,
    totalItems,
  };
}

// -----------------------------------------------------------------------------
// URL & SEO
// -----------------------------------------------------------------------------

/**
 * Build an absolute URL from a path (uses NEXT_PUBLIC_SITE_URL env var).
 */
export function absoluteUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vexirahub.com";
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
