import type { Metadata } from "next";
import { FiFeather } from "react-icons/fi";
import BlogCard from "@/components/cards/BlogCard";
import { getThoughtPosts } from "@/data/posts";
import InfiniteScrollList from "@/components/ui/InfiniteScrollList";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Thoughts",
  description: "Short-form opinions, personal essays, and reflections from the VexiraHub team.",
};

const posts = getThoughtPosts();

export default function ThoughtsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <div className={styles.headerBadge}>
            <FiFeather aria-hidden="true" />
            <span>Thoughts</span>
          </div>
          <h1 className={styles.pageTitle}>Personal Thoughts</h1>
          <p className={styles.pageSubtitle}>
            Short-form opinions, personal essays, and reflections from the team.
          </p>
        </header>

        {posts.length > 0 ? (
          <div className={styles.gridContainer}>
            <InfiniteScrollList
              initialPosts={posts.slice(0, 12)}
              allPosts={posts}
              chunkSize={12}
              orientation="horizontal"
            />
          </div>
        ) : (
          <div className={styles.empty}>
            <span aria-hidden="true" className={styles.emptyIcon}>✍️</span>
            <h2 className={styles.emptyTitle}>Coming soon</h2>
            <p className={styles.emptyText}>Personal thoughts and essays will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
