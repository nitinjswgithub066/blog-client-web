import Link from "next/link";
import { FiGrid } from "react-icons/fi";
import CategoryCard from "@/components/cards/CategoryCard";
import { getPublicCategories } from "@/lib/api";
import { ROUTES } from "@/lib/routes";
import styles from "./CategorySection.module.css";

export default async function CategorySection() {
  let categories = [];
  try { categories = (await getPublicCategories()).slice(0, 15); }
  catch (error) { console.error("[HOME_CATEGORIES] Unable to load categories:", error); }
  if (!categories.length) return null;
  return (
    <section className={styles.section} aria-labelledby="categories-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <FiGrid className={styles.icon} aria-hidden="true" />
            <div><h2 id="categories-heading" className={styles.title}>Explore Topics</h2><p className={styles.subtitle}>Dive deep into the subjects that matter to you</p></div>
          </div>
          <Link href={ROUTES.CATEGORIES} className={styles.viewAll}>All Topics</Link>
        </div>
        <div className={styles.grid}>
          {categories.map(cat => <div key={cat.id} className={styles.cardWrapper}><CategoryCard category={cat} postCount={cat.postCount ?? 0} /></div>)}
        </div>
      </div>
    </section>
  );
}
