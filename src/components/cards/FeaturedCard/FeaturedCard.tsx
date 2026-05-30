import Link from "next/link";
import { FiClock, FiEye, FiArrowRight } from "react-icons/fi";
import Badge from "@/components/ui/Badge";
import {
  formatDate, formatNumber, formatReadingTime,
  getCategoryGradientBg, getInitials, cn
} from "@/lib/utils";
import { getPostRoute } from "@/lib/routes";
import type { Post } from "@/types";
import styles from "./FeaturedCard.module.css";

interface FeaturedCardProps {
  post: Post;
  /** "hero" = large full-width card, "secondary" = medium card */
  size?: "hero" | "secondary";
  className?: string;
}

export default function FeaturedCard({
  post,
  size = "hero",
  className,
}: FeaturedCardProps) {
  const gradient = getCategoryGradientBg(post.category.slug);

  return (
    <article className={cn(styles.card, styles[size], className)}>
      {/* Gradient background */}
      <div className={styles.background} style={{ background: gradient }} />

      {/* Dark overlay for readability */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        {/* Top: badge + meta */}
        <div className={styles.top}>
          <Badge
            label={post.category.name}
            variant="category"
            accentColor={post.category.accentColor}
          />
          {post.isTrending && (
            <span className={styles.trendingPill}>🔥 Trending</span>
          )}
        </div>

        {/* Title */}
        <h2 className={styles.title}>
          <Link href={getPostRoute(post.slug)} className={styles.titleLink}>
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        {size === "hero" && (
          <p className={styles.excerpt}>{post.excerpt}</p>
        )}

        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.author}>
            <div
              className={styles.avatar}
              style={{ background: "rgba(255,255,255,0.20)" }}
              aria-hidden="true"
            >
              <span className={styles.avatarInitial}>
                {getInitials(post.author.name)}
              </span>
            </div>
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>{post.author.name}</span>
              <span className={styles.date}>{formatDate(post.publishedAt)}</span>
            </div>
          </div>

          <div className={styles.metaGroup}>
            <span className={styles.metaItem}>
              <FiClock aria-hidden="true" />
              {formatReadingTime(post.readingTime)}
            </span>
            <span className={styles.metaItem}>
              <FiEye aria-hidden="true" />
              {formatNumber(post.views)}
            </span>

            <Link
              href={getPostRoute(post.slug)}
              className={styles.readBtn}
              aria-label={`Read ${post.title}`}
            >
              Read <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
