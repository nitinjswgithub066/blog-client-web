// =============================================================================
// VexiraHub — Navigation Configuration
// Defines all nav links used across Navbar, MobileDrawer, and Footer.
// Primary links are shown in desktop nav.
// Secondary links go in the mobile drawer / "more" dropdown.
// =============================================================================

import type { NavConfig, NavLink } from "@/types";

// -----------------------------------------------------------------------------
// Primary Navigation (Desktop navbar + tablet)
// -----------------------------------------------------------------------------
export const primaryNavLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
    icon: "FiHome",
  },
  {
    label: "Trending",
    href: "/trending",
    icon: "FiTrendingUp",
  },
  {
    label: "Latest",
    href: "/latest",
    icon: "FiClock",
  },
  {
    label: "Categories",
    href: "/categories",
    icon: "FiGrid",
    // Children populated dynamically from active categories at render time
    children: [
      { label: "Technology", href: "/categories/technology" },
      { label: "Programming", href: "/categories/programming" },
      { label: "Web Development", href: "/categories/web-development" },
      { label: "AI", href: "/categories/ai" },
      { label: "Startups", href: "/categories/startups" },
      { label: "Business", href: "/categories/business" },
      { label: "Finance", href: "/categories/finance" },
      { label: "Education", href: "/categories/education" },
      { label: "Career", href: "/categories/career" },
      { label: "Gaming", href: "/categories/gaming" },
      { label: "Entertainment", href: "/categories/entertainment" },
      { label: "Reviews", href: "/categories/reviews" },
      { label: "Thoughts", href: "/categories/thoughts" },
    ],
  },
  {
    label: "Thoughts",
    href: "/thoughts",
    icon: "FiFeather",
  },
];

// -----------------------------------------------------------------------------
// Secondary Navigation (shown in mobile drawer + "more" menu)
// -----------------------------------------------------------------------------
export const secondaryNavLinks: NavLink[] = [
  {
    label: "About",
    href: "/about",
    icon: "FiUser",
  },
  {
    label: "Contact",
    href: "/contact",
    icon: "FiMail",
  },
];

// -----------------------------------------------------------------------------
// Mobile-only Navigation (extra items only shown in mobile drawer)
// -----------------------------------------------------------------------------
export const mobileOnlyLinks: NavLink[] = [
  {
    label: "Search",
    href: "/search",
    icon: "FiSearch",
  },
];

// -----------------------------------------------------------------------------
// Full Navigation Config (combined)
// -----------------------------------------------------------------------------
export const navConfig: NavConfig = {
  primary: primaryNavLinks,
  secondary: secondaryNavLinks,
  mobileOnly: mobileOnlyLinks,
};

// -----------------------------------------------------------------------------
// Footer Navigation Groups
// -----------------------------------------------------------------------------
export const footerNav = {
  platform: {
    title: "Platform",
    links: [
      { label: "Home", href: "/" },
      { label: "Trending", href: "/trending" },
      { label: "Latest", href: "/latest" },
      { label: "Categories", href: "/categories" },
      { label: "Thoughts", href: "/thoughts" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Cookies Policy", href: "/cookies-policy" },
    ],
  },
  categories: {
    title: "Explore",
    links: [
      { label: "Technology", href: "/categories/technology" },
      { label: "Programming", href: "/categories/programming" },
      { label: "AI", href: "/categories/ai" },
      { label: "Startups", href: "/categories/startups" },
      { label: "Finance", href: "/categories/finance" },
      { label: "Gaming", href: "/categories/gaming" },
    ],
  },
};

// -----------------------------------------------------------------------------
// Breadcrumb helper type
// -----------------------------------------------------------------------------
export interface Breadcrumb {
  label: string;
  href: string;
  isActive?: boolean;
}

/** Build breadcrumb trail for category pages */
export function getCategoryBreadcrumb(
  categoryName: string,
  categorySlug: string,
): Breadcrumb[] {
  return [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/categories" },
    {
      label: categoryName,
      href: `/categories/${categorySlug}`,
      isActive: true,
    },
  ];
}

/** Build breadcrumb trail for blog post pages */
export function getPostBreadcrumb(
  categoryName: string,
  categorySlug: string,
  postTitle: string,
): Breadcrumb[] {
  return [
    { label: "Home", href: "/" },
    { label: categoryName, href: `/categories/${categorySlug}` },
    { label: postTitle, href: "#", isActive: true },
  ];
}
