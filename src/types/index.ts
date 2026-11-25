// =============================================================================
// VexiraHub — TypeScript Type Definitions
// =============================================================================

export interface Author {
  id: string; name: string; slug: string; avatar: string; bio: string; role: string;
  social: { twitter?: string; linkedin?: string; github?: string; website?: string };
}
export interface Category {
  id: string; name: string; slug: string; description: string; icon: string;
  accentColor: string; coverImage?: string; postCount?: number;
}
export interface Tag { id: string; name: string; slug: string }
export interface Post {
  id: string; slug: string; title: string; excerpt: string; content: string;
  contentCss?: string; category: Category; tags: Tag[]; author: Author;
  publishedAt: string; updatedAt?: string; readingTime: number;
  featuredImage: string; featuredImageAlt: string; isFeatured: boolean;
  isTrending: boolean; isThought: boolean; views: number; likes: number;
  shares?: number; commentCount?: number; seo?: PostSEO;
}
export interface PostSEO { metaTitle?: string; metaDescription?: string; ogImage?: string; keywords?: string[] }
export interface NavLink { label: string; href: string; icon?: string; isExternal?: boolean; children?: NavLink[] }
export interface NavConfig { primary: NavLink[]; secondary: NavLink[]; mobileOnly: NavLink[] }
export interface SearchResult { post: Post; matchScore: number }
export interface SearchSuggestion { label: string; type: "trending" | "category" | "tag"; href: string }
export interface NewsletterForm { email: string }
export interface ContactForm { name: string; email: string; subject: string; message: string }
export interface PaginationInfo { currentPage: number; totalPages: number; totalItems: number; itemsPerPage: number; hasNext: boolean; hasPrev: boolean }
export interface SidebarData { trendingPosts: Post[]; popularCategories: Category[]; recentPosts: Post[] }
export type Theme = "dark" | "light";
export interface WithClassName { className?: string }
export interface WithChildren { children: React.ReactNode }
export type CardSize = "sm" | "md" | "lg";
export type CardOrientation = "vertical" | "horizontal";
export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "danger";
export type ButtonSize = "xs" | "sm" | "md" | "lg";
export type BadgeVariant = "default" | "accent" | "success" | "warning" | "danger" | "category";
export type InputVariant = "default" | "search" | "glass";
