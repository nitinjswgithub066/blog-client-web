import Link from "next/link";
import { FiTrendingUp } from "react-icons/fi";
import TrendingCard from "@/components/cards/TrendingCard";
import BlogCard from "@/components/cards/BlogCard";
import { getTrendingPosts } from "@/data/posts";
import { ROUTES } from "@/lib/routes";
import styles from "./TrendingSection.module.css";

export default function TrendingSection() {
  const trendingPosts = getTrendingPosts(8);
  const [top, ...rest] = trendingPosts;

  return (
    <section className={styles.section} aria-labelledby="trending-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <FiTrendingUp className={styles.icon} aria-hidden="true" />
            <h2 id="trending-heading" className={styles.title}>Trending Now</h2>
          </div>
          <Link href={ROUTES.TRENDING} className={styles.viewAll}>All Trending</Link>
        </div>

        <div className={styles.layout}>
          {/* Left: top trending large card */}
          {top && (
            <div className={styles.featured}>
              <BlogCard post={top} orientation="vertical" />
            </div>
          )}

          {/* Right: ranked list */}
          <div className={styles.list}>
            {rest.map((post, i) => (
              <TrendingCard key={post.id} post={post} rank={i + 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
