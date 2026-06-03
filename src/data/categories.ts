// =============================================================================
// VexiraHub — Category Data
// All platform categories. UI only shows categories that have posts.
// Icons: React Icons (react-icons/fi = Feather Icons)
// =============================================================================

import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "cat-technology",
    name: "Technology",
    slug: "technology",
    description:
      "Explore the latest breakthroughs in tech — from consumer gadgets to enterprise software shaping the future.",
    icon: "FiCpu",
    accentColor: "var(--cat-technology)",
    coverImage: "",
  },
  {
    id: "cat-programming",
    name: "Programming",
    slug: "programming",
    description:
      "Deep-dive tutorials, best practices, and insights for developers of every skill level.",
    icon: "FiCode",
    accentColor: "var(--cat-programming)",
    coverImage: "",
  },
  {
    id: "cat-web-development",
    name: "Web Development",
    slug: "web-development",
    description:
      "Frontend, backend, and full-stack — everything you need to build for the modern web.",
    icon: "FiGlobe",
    accentColor: "var(--cat-web-dev)",
    coverImage: "",
  },
  {
    id: "cat-ai",
    name: "AI",
    slug: "ai",
    description:
      "Artificial intelligence, machine learning, LLMs, and the tools redefining what software can do.",
    icon: "FiZap",
    accentColor: "var(--cat-ai)",
    coverImage: "",
  },
  {
    id: "cat-startups",
    name: "Startups",
    slug: "startups",
    description:
      "Founder stories, funding news, startup culture, and the playbooks behind fast-growing companies.",
    icon: "FiTrendingUp",
    accentColor: "var(--cat-startups)",
    coverImage: "",
  },
  {
    id: "cat-business",
    name: "Business",
    slug: "business",
    description:
      "Strategy, leadership, operations, and the thinking that drives successful businesses.",
    icon: "FiBriefcase",
    accentColor: "var(--cat-business)",
    coverImage: "",
  },
  {
    id: "cat-finance",
    name: "Finance",
    slug: "finance",
    description:
      "Personal finance, investing, crypto, markets, and making your money work smarter.",
    icon: "FiDollarSign",
    accentColor: "var(--cat-finance)",
    coverImage: "",
  },
  {
    id: "cat-education",
    name: "Education",
    slug: "education",
    description:
      "Learning strategies, courses, certifications, and resources to accelerate your knowledge.",
    icon: "FiBook",
    accentColor: "var(--cat-education)",
    coverImage: "",
  },
  {
    id: "cat-career",
    name: "Career",
    slug: "career",
    description:
      "Job hunting, interviews, remote work, freelancing, and building a career you love.",
    icon: "FiAward",
    accentColor: "var(--cat-career)",
    coverImage: "",
  },
  {
    id: "cat-gaming",
    name: "Gaming",
    slug: "gaming",
    description:
      "Game reviews, industry news, esports, and the culture behind the world's biggest entertainment medium.",
    icon: "FiMonitor",
    accentColor: "var(--cat-gaming)",
    coverImage: "",
  },
  {
    id: "cat-entertainment",
    name: "Entertainment",
    slug: "entertainment",
    description:
      "Movies, music, streaming, pop culture, and everything that keeps you entertained.",
    icon: "FiFilm",
    accentColor: "var(--cat-entertainment)",
    coverImage: "",
  },
  {
    id: "cat-reviews",
    name: "Reviews",
    slug: "reviews",
    description:
      "Honest, in-depth reviews of the tools, products, and services that matter to creators and professionals.",
    icon: "FiStar",
    accentColor: "var(--cat-reviews)",
    coverImage: "",
  },
  {
    id: "cat-thoughts",
    name: "Thoughts",
    slug: "thoughts",
    description:
      "Personal essays, opinions, observations, and reflections on life, work, and the world.",
    icon: "FiFeather",
    accentColor: "var(--cat-thoughts)",
    coverImage: "",
  },
];

// -----------------------------------------------------------------------------
// Lookup helpers
// -----------------------------------------------------------------------------

/** Get a category by its slug */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

/** Get a category by its id */
export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
