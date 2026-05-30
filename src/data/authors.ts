// =============================================================================
// VexiraHub — Author Data
// Phase 1: Single publisher platform. Primary author is the owner/admin.
// Secondary authors added for mock post variety.
// =============================================================================

import type { Author } from "@/types";

export const authors: Author[] = [
  {
    id: "author-vexira",
    name: "Vexira",
    slug: "vexira",
    avatar: "",
    bio: "Founder of VexiraHub. I write about technology, AI, programming, and the ideas shaping the future. Building in public, one post at a time.",
    role: "Founder & Editor-in-Chief",
    social: {
      twitter: "https://twitter.com/vexirahub",
      linkedin: "https://linkedin.com/in/vexira",
      github: "https://github.com/vexirahub",
      website: "https://vexirahub.com",
    },
  },
];

// -----------------------------------------------------------------------------
// Primary author (the platform owner — used as default)
// -----------------------------------------------------------------------------
export const primaryAuthor: Author = authors[0];

// -----------------------------------------------------------------------------
// Lookup helpers
// -----------------------------------------------------------------------------

/** Get an author by slug */
export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

/** Get an author by id */
export function getAuthorById(id: string): Author | undefined {
  return authors.find((a) => a.id === id);
}
