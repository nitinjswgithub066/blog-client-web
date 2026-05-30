import type { Metadata } from "next";
import { FiClock } from "react-icons/fi";
import BlogCard from "@/components/cards/BlogCard";
import Sidebar from "@/components/layout/Sidebar";
import { getLatestPosts } from "@/data/posts";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Latest Articles",
  description: "Browse all the latest articles published on VexiraHub — fresh content every day.",
};

const posts = getLatestPosts(18);

export default function LatestPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <div className={styles.headerBadge}>
            <FiClock aria-hidden="true" />
            <span>Latest</span>
          </div>
          <h1 className={styles.pageTitle}>Latest Articles</h1>
          <p className={styles.pageSubtitle}>
            Fresh content from our editorial team — published daily across all topics.
          </p>
        </header>

        <div className={styles.layout}>
          <div className={styles.grid}>
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} orientation="vertical" />
            ))}
          </div>
          <Sidebar className={styles.sidebar} />
        </div>
      </div>
    </div>
  );
}
