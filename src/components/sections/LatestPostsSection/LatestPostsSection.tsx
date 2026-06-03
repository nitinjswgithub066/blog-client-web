import Link from "next/link";
import { FiClock } from "react-icons/fi";
import BlogCard from "@/components/cards/BlogCard";
import Sidebar from "@/components/layout/Sidebar";
import { getLatestPosts } from "@/data/posts";
import { ROUTES } from "@/lib/routes";
import styles from "./LatestPostsSection.module.css";

interface LatestPostsSectionProps {
  limit?: number;
  showSidebar?: boolean;
}

export default function LatestPostsSection({
  limit = 6,
  showSidebar = true,
}: LatestPostsSectionProps) {
  const posts = getLatestPosts(limit);

  return (
    <section className={styles.section} aria-labelledby="latest-heading">
      <div className={styles.container}>
        <div className={styles.main}>
          {/* Header */}
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

          {/* Grid */}
          <div className={styles.grid}>
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} orientation="vertical" />
            ))}
          </div>

          {/* Load more CTA */}
          <div className={styles.footer}>
            <Link href={ROUTES.LATEST} className={styles.loadMore}>
              Browse all articles
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        {showSidebar && <Sidebar className={styles.sidebar} />}
      </div>
    </section>
  );
}
