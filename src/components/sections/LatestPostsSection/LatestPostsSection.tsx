import type { Post } from "@/types";
import Link from "next/link";
import { FiClock } from "react-icons/fi";
import BlogCard from "@/components/cards/BlogCard";
import Sidebar from "@/components/layout/Sidebar";
import { getLatestPosts } from "@/lib/api";
import { ROUTES } from "@/lib/routes";
import styles from "./LatestPostsSection.module.css";

interface LatestPostsSectionProps {
  limit?: number;
  showSidebar?: boolean;
}

export default async function LatestPostsSection({
  limit = 6,
  showSidebar = true,
}: LatestPostsSectionProps) {
  let posts: Post[] = [];
  try {
    posts = (await getLatestPosts(1, limit)).items;
  } catch (error) {
    console.error("[HOME_LATEST] Unable to load posts:", error);
  }

  return (
    <section className={styles.section} aria-labelledby="latest-heading">
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles.titleGroup}>
              <FiClock className={styles.icon} aria-hidden="true" />
              <h2 id="latest-heading" className={styles.title}>
                Latest Articles
              </h2>
            </div>
            <Link href={ROUTES.LATEST} className={styles.viewAll}>
              View all
            </Link>
          </div>
          {posts.length ? (
            <div className={styles.grid}>
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} orientation="vertical" />
              ))}
            </div>
          ) : (
            <p>No published articles yet. Please check back soon.</p>
          )}
          <div className={styles.footer}>
            <Link href={ROUTES.LATEST} className={styles.loadMore}>
              Browse all articles
            </Link>
          </div>
        </div>
        {showSidebar && <Sidebar className={styles.sidebar} />}
      </div>
    </section>
  );
}
