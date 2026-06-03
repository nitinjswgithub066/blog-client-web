import Link from "next/link";
import { FiTrendingUp } from "react-icons/fi";
import TrendingCard from "@/components/cards/TrendingCard";
import NewsletterCard from "@/components/cards/NewsletterCard";
import { getTrendingPosts } from "@/data/posts";
import { categories } from "@/data/categories";
import { getCategoryRoute } from "@/lib/routes";
import { cn } from "@/lib/utils";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  className?: string;
  hideTrending?: boolean;
}

const trendingPosts = getTrendingPosts(5);
const topCategories = categories.slice(0, 6);

export default function Sidebar({
  className,
  hideTrending = false,
}: SidebarProps) {
  return (
    <aside className={cn(styles.sidebar, className)} aria-label="Sidebar">
      {/* Trending widget */}
      {!hideTrending && (
        <section className={styles.widget}>
          <div className={styles.widgetHeader}>
            <FiTrendingUp className={styles.widgetIcon} aria-hidden="true" />
            <h2 className={styles.widgetTitle}>Trending Now</h2>
          </div>
          <div className={styles.trendingList}>
            {trendingPosts.map((post, i) => (
              <TrendingCard key={post.id} post={post} rank={i + 1} />
            ))}
          </div>
        </section>
      )}

      {/* Categories widget */}
      <section className={styles.widget}>
        <div className={styles.widgetHeader}>
          <h2 className={styles.widgetTitle}>Explore Topics</h2>
          <Link href="/categories" className={styles.widgetLink}>
            View all
          </Link>
        </div>
        <div className={styles.categoryGrid}>
          {topCategories.map((cat) => (
            <Link
              key={cat.id}
              href={getCategoryRoute(cat.slug)}
              className={styles.catChip}
              style={{
                borderColor: `color-mix(in srgb, ${cat.accentColor} 35%, transparent)`,
                color: cat.accentColor,
              }}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter widget */}
      <NewsletterCard />
    </aside>
  );
}
