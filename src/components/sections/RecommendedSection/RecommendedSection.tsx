import Link from "next/link";
import { FiStar } from "react-icons/fi";
import BlogCard from "@/components/cards/BlogCard";
import { getRelatedPosts, getLatestPosts } from "@/data/posts";
import { ROUTES } from "@/lib/routes";
import styles from "./RecommendedSection.module.css";

interface RecommendedSectionProps {
  currentPostId?: string;
  categorySlug?: string;
}

export default function RecommendedSection({
  currentPostId,
  categorySlug,
}: RecommendedSectionProps) {
  const posts = currentPostId && categorySlug
    ? getRelatedPosts(currentPostId, categorySlug, 4)
    : getLatestPosts(4);

  if (posts.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="recommended-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <FiStar className={styles.icon} aria-hidden="true" />
          <h2 id="recommended-heading" className={styles.title}>
            {currentPostId ? "You Might Also Like" : "Recommended for You"}
          </h2>
          <Link href={ROUTES.LATEST} className={styles.viewAll}>More</Link>
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} orientation="vertical" />
          ))}
        </div>
      </div>
    </section>
  );
}
