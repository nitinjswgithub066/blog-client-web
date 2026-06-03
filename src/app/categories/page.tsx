import type { Metadata } from "next";
import { FiGrid } from "react-icons/fi";
import CategoryCard from "@/components/cards/CategoryCard";
import { categories } from "@/data/categories";
import { getAllPosts } from "@/data/posts";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "All Categories",
  description:
    "Browse all content categories on VexiraHub — from Technology and AI to Finance, Gaming, and more.",
};

const allPosts = getAllPosts();
const postCountBySlug: Record<string, number> = {};
for (const p of allPosts) {
  postCountBySlug[p.category.slug] =
    (postCountBySlug[p.category.slug] ?? 0) + 1;
}

export default function CategoriesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <div className={styles.headerBadge}>
            <FiGrid aria-hidden="true" />
            <span>Topics</span>
          </div>
          <h1 className={styles.pageTitle}>Browse All Topics</h1>
          <p className={styles.pageSubtitle}>
            {categories.length} curated topics — find the content that matters
            to you.
          </p>
        </header>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              postCount={postCountBySlug[cat.slug] ?? 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
