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
    avatar: "https://picsum.photos/seed/vexira-author/200/200",
    bio: "Founder of VexiraHub. I write about technology, AI, programming, and the ideas shaping the future. Building in public, one post at a time.",
    role: "Founder & Editor-in-Chief",
    social: {
      twitter: "https://twitter.com/vexirahub",
      linkedin: "https://linkedin.com/in/vexira",
      github: "https://github.com/vexirahub",
      website: "https://vexirahub.com",
    },
  },
  {
    id: "author-aryan-mehta",
    name: "Aryan Mehta",
    slug: "aryan-mehta",
    avatar: "https://picsum.photos/seed/aryan-mehta/200/200",
    bio: "Full-stack developer and open-source contributor. Passionate about clean code, web performance, and making the web more accessible.",
    role: "Staff Writer — Programming",
    social: {
      twitter: "https://twitter.com/aryanmehta",
      github: "https://github.com/aryanmehta",
    },
  },
  {
    id: "author-priya-sharma",
    name: "Priya Sharma",
    slug: "priya-sharma",
    avatar: "https://picsum.photos/seed/priya-sharma/200/200",
    bio: "Startup founder turned writer. I cover the business of tech — fundraising, product strategy, and the human stories behind growing companies.",
    role: "Staff Writer — Startups & Business",
    social: {
      twitter: "https://twitter.com/priyasharma",
      linkedin: "https://linkedin.com/in/priyasharma",
    },
  },
  {
    id: "author-rohan-das",
    name: "Rohan Das",
    slug: "rohan-das",
    avatar: "https://picsum.photos/seed/rohan-das/200/200",
    bio: "Finance enthusiast, crypto observer, and personal finance advocate. I help people make sense of money in the digital age.",
    role: "Staff Writer — Finance",
    social: {
      twitter: "https://twitter.com/rohandas",
      linkedin: "https://linkedin.com/in/rohandas",
    },
  },
  {
    id: "author-aisha-khan",
    name: "Aisha Khan",
    slug: "aisha-khan",
    avatar: "https://picsum.photos/seed/aisha-khan/200/200",
    bio: "Educator, curriculum designer, and lifelong learner. Writing about edtech, skill-building, and the future of how we learn.",
    role: "Staff Writer — Education & Career",
    social: {
      twitter: "https://twitter.com/aishakhan",
      linkedin: "https://linkedin.com/in/aishakhan",
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
