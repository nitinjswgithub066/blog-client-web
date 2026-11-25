import type { Post } from "@/types";
import Link from "next/link";
import { FiTrendingUp } from "react-icons/fi";
import TrendingCard from "@/components/cards/TrendingCard";
import BlogCard from "@/components/cards/BlogCard";
import { getTrendingPosts } from "@/lib/api";
import { ROUTES } from "@/lib/routes";
import styles from "./TrendingSection.module.css";

export default async function TrendingSection() {
  let trendingPosts: Post[] = [];
  try {
    trendingPosts = (await getTrendingPosts(1, 5)).items;
  } catch (error) {
    console.error("[HOME_TRENDING] Unable to load posts:", error);
  }

  const [top, ...rest] = trendingPosts;
  if (!top) return null;
  return (
    <section className={styles.section} aria-labelledby="trending-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <FiTrendingUp className={styles.icon} aria-hidden="true" />
            <h2 id="trending-heading" className={styles.title}>
              Trending Now
            </h2>
          </div>
          <Link href={ROUTES.TRENDING} className={styles.viewAll}>
            All Trending
          </Link>
        </div>
        <div className={styles.layout}>
          <div className={styles.featured}>
            <BlogCard post={top} orientation="vertical" />
          </div>
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
