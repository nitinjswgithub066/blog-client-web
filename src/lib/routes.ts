// =============================================================================
// VexiraHub — Route Constants
// Single source of truth for all application routes.
// Never hardcode route strings in components — always import from here.
// =============================================================================

// -----------------------------------------------------------------------------
// Static Routes
// -----------------------------------------------------------------------------
export const ROUTES = {
  // Core pages
  HOME:           "/",
  TRENDING:       "/trending",
  LATEST:         "/latest",
  CATEGORIES:     "/categories",
  THOUGHTS:       "/thoughts",
  SEARCH:         "/search",

  // Company pages
  ABOUT:          "/about",
  CONTACT:        "/contact",

  // Legal pages
  PRIVACY_POLICY: "/privacy-policy",
  TERMS:          "/terms",
  COOKIES:        "/cookies-policy",
} as const;

// -----------------------------------------------------------------------------
// Dynamic Route Builders
// -----------------------------------------------------------------------------

/**
 * Build a URL for a blog post detail page.
 * @example getPostRoute("how-to-learn-react-in-2026") → "/blog/how-to-learn-react-in-2026"
 */
export function getPostRoute(slug: string): string {
  return `/blog/${slug}`;
}

/**
 * Build a URL for a category page.
 * @example getCategoryRoute("technology") → "/categories/technology"
 */
export function getCategoryRoute(slug: string): string {
  return `/categories/${slug}`;
}

/**
 * Build a URL for the search page with an optional query.
 * @example getSearchRoute("react hooks") → "/search?q=react+hooks"
 */
export function getSearchRoute(query?: string): string {
  if (!query) return ROUTES.SEARCH;
  return `${ROUTES.SEARCH}?q=${encodeURIComponent(query)}`;
}

/**
 * Build a URL for the author profile page (future-proofing).
 * @example getAuthorRoute("vexira") → "/authors/vexira"
 */
export function getAuthorRoute(slug: string): string {
  return `/authors/${slug}`;
}

/**
 * Build a URL for a tag page (future-proofing).
 * @example getTagRoute("react") → "/tags/react"
 */
export function getTagRoute(slug: string): string {
  return `/tags/${slug}`;
}

// -----------------------------------------------------------------------------
// Route type helpers
// -----------------------------------------------------------------------------

/** All static route values as a union type */
export type StaticRoute = (typeof ROUTES)[keyof typeof ROUTES];

/** Check if a pathname matches a static route exactly */
export function isActiveRoute(pathname: string, route: string): boolean {
  return pathname === route;
}

/**
 * Check if a pathname starts with a route (for nested active states).
 * @example isActiveRoutePrefix("/categories/technology", "/categories") → true
 */
export function isActiveRoutePrefix(pathname: string, routePrefix: string): boolean {
  if (routePrefix === ROUTES.HOME) {
    return pathname === ROUTES.HOME;
  }
  return pathname.startsWith(routePrefix);
}
