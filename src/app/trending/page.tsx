import type { Post } from "@/types";
import type { Metadata } from "next";
import { FiTrendingUp } from "react-icons/fi";
import BlogCard from "@/components/cards/BlogCard";
import Sidebar from "@/components/layout/Sidebar";
import { getTrendingPosts } from "@/lib/api";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Trending Articles",
  description: "Discover trending published articles on VexiraHub.",
};

export default async function TrendingPage() {
  let posts: Post[] = [];
  try {
    posts = (await getTrendingPosts(1, 50)).items;
  } catch (error) {
    console.error("[TRENDING_PAGE] Unable to load posts:", error);
  }
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
            Popular articles across all topics right now.
          </p>
        </header>
        <div className={styles.layout}>
          <div className={styles.main}>
            {posts.length ? (
              <div className={styles.grid}>
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <p>No trending articles yet.</p>
            )}
          </div>
          <Sidebar hideTrending className={styles.sidebar} />
        </div>
      </div>
    </div>
  );
}
