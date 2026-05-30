import Link from "next/link";
import { FiGrid } from "react-icons/fi";
import CategoryCard from "@/components/cards/CategoryCard";
import { categories } from "@/data/categories";
import { getAllPosts } from "@/data/posts";
import { ROUTES } from "@/lib/routes";
import styles from "./CategorySection.module.css";

// Count posts per category
const allPosts = getAllPosts();
const postCountBySlug: Record<string, number> = {};
for (const p of allPosts) {
  postCountBySlug[p.category.slug] = (postCountBySlug[p.category.slug] ?? 0) + 1;
}

export default function CategorySection() {
  return (
    <section className={styles.section} aria-labelledby="categories-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <FiGrid className={styles.icon} aria-hidden="true" />
            <div>
              <h2 id="categories-heading" className={styles.title}>Explore Topics</h2>
              <p className={styles.subtitle}>Dive deep into the subjects that matter to you</p>
            </div>
          </div>
          <Link href={ROUTES.CATEGORIES} className={styles.viewAll}>All Topics</Link>
        </div>

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
    </section>
  );
}
