import type { Metadata } from "next";
import { FiTrendingUp } from "react-icons/fi";
import BlogCard from "@/components/cards/BlogCard";
import { getTrendingPosts } from "@/data/posts";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Trending Articles",
  description: "Discover what's trending on VexiraHub — the most-read articles across all topics right now.",
};

const posts = getTrendingPosts(12);

export default function TrendingPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <div className={styles.headerBadge}>
            <FiTrendingUp aria-hidden="true" />
            <span>Trending</span>
          </div>
          <h1 className={styles.pageTitle}>What&apos;s Trending</h1>
          <p className={styles.pageSubtitle}>
            The most-read articles on VexiraHub right now, across all topics.
          </p>
        </header>

        <div className={styles.grid}>
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} orientation="vertical" />
          ))}
        </div>
      </div>
    </div>
  );
}
