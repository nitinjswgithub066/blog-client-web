import type { Category } from "@/types";
import type { Metadata } from "next";
import { FiGrid } from "react-icons/fi";
import CategoryCard from "@/components/cards/CategoryCard";
import { getPublicCategories } from "@/lib/api";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "All Categories", description: "Browse all published content categories on VexiraHub." };

export default async function CategoriesPage() {
  let categories: Category[] = [];
  try { categories = await getPublicCategories(); }
  catch (error) { console.error("[CATEGORIES_PAGE] Unable to load categories:", error); }
  return (
    <div className={styles.page}><div className={styles.container}>
      <header className={styles.pageHeader}><div className={styles.headerBadge}><FiGrid aria-hidden="true" /><span>Topics</span></div><h1 className={styles.pageTitle}>Browse All Topics</h1><p className={styles.pageSubtitle}>{categories.length} active topics with published articles.</p></header>
      {categories.length ? <div className={styles.grid}>{categories.map(cat => <CategoryCard key={cat.id} category={cat} postCount={cat.postCount ?? 0} />)}</div> : <p>No active categories yet.</p>}
    </div></div>
  );
}
