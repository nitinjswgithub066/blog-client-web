// =============================================================================
// VexiraHub — TypeScript Type Definitions
// Single source of truth for all data shapes used across the platform.
// =============================================================================

// -----------------------------------------------------------------------------
// Author
// -----------------------------------------------------------------------------
export interface Author {
  id: string;
  name: string;
  slug: string;
  avatar: string;
  bio: string;
  role: string; // e.g. "Editor", "Staff Writer", "Founder"
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

// -----------------------------------------------------------------------------
// Category
// -----------------------------------------------------------------------------
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;              // React Icons name, e.g. "FiCpu"
  accentColor: string;       // CSS variable name, e.g. "var(--cat-technology)"
  coverImage?: string;
}

// -----------------------------------------------------------------------------
// Tag
// -----------------------------------------------------------------------------
export interface Tag {
  id: string;
  name: string;
  slug: string;
}

// -----------------------------------------------------------------------------
// Post (Blog Article)
// -----------------------------------------------------------------------------
export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;           // Rich HTML string (for blog detail page)
  category: Category;
  tags: Tag[];
  author: Author;
  publishedAt: string;       // ISO 8601 date string
  updatedAt?: string;        // ISO 8601 date string
  readingTime: number;       // In minutes
  featuredImage: string;     // URL
  featuredImageAlt: string;
  isFeatured: boolean;
  isTrending: boolean;
  isThought: boolean;        // True for "Thoughts" category posts
  views: number;
  likes: number;
  seo?: PostSEO;
}

// -----------------------------------------------------------------------------
// Post SEO Metadata
// -----------------------------------------------------------------------------
export interface PostSEO {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  keywords?: string[];
}

// -----------------------------------------------------------------------------
// Navigation
// -----------------------------------------------------------------------------
export interface NavLink {
  label: string;
  href: string;
  icon?: string;             // React Icons name
  isExternal?: boolean;
  children?: NavLink[];      // For dropdown menus
}

export interface NavConfig {
  primary: NavLink[];        // Main nav links
  secondary: NavLink[];      // Secondary (more menu) links
  mobileOnly: NavLink[];     // Links only shown in mobile drawer
}

// -----------------------------------------------------------------------------
// Search
// -----------------------------------------------------------------------------
export interface SearchResult {
  post: Post;
  matchScore: number;        // 0–1 relevance score (for mock filtering)
}

export interface SearchSuggestion {
  label: string;
  type: "trending" | "category" | "tag";
  href: string;
}

// -----------------------------------------------------------------------------
// Newsletter
// -----------------------------------------------------------------------------
export interface NewsletterForm {
  email: string;
}

// -----------------------------------------------------------------------------
// Contact Form
// -----------------------------------------------------------------------------
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// -----------------------------------------------------------------------------
// Pagination
// -----------------------------------------------------------------------------
export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// -----------------------------------------------------------------------------
// Sidebar Widget Data
// -----------------------------------------------------------------------------
export interface SidebarData {
  trendingPosts: Post[];
  popularCategories: Category[];
  recentPosts: Post[];
}

// -----------------------------------------------------------------------------
// Theme
// -----------------------------------------------------------------------------
export type Theme = "dark" | "light";

// -----------------------------------------------------------------------------
// Component Prop Helpers
// -----------------------------------------------------------------------------

/** Standard className prop for components that accept style overrides */
export interface WithClassName {
  className?: string;
}

/** Standard children prop */
export interface WithChildren {
  children: React.ReactNode;
}

/** Card size variants */
export type CardSize = "sm" | "md" | "lg";

/** Card orientation variants */
export type CardOrientation = "vertical" | "horizontal";

/** Button variants */
export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "danger";

/** Button sizes */
export type ButtonSize = "xs" | "sm" | "md" | "lg";

/** Badge variants */
export type BadgeVariant = "default" | "accent" | "success" | "warning" | "danger" | "category";

/** Input variants */
export type InputVariant = "default" | "search" | "glass";
