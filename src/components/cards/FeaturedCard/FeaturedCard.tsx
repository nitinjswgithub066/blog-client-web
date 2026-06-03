import Link from "next/link";
import { FiEye, FiArrowRight } from "react-icons/fi";
import Badge from "@/components/ui/Badge";
import ShareModalButton from "@/components/cards/BlogCard/ShareModalButton";
import {
  formatDate,
  formatNumber,
  getCategoryGradientBg,
  getInitials,
  cn,
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
        {size === "hero" && <p className={styles.excerpt}>{post.excerpt}</p>}

        {/* Footer */}
        <div className={styles.footer}>
          {/* Row 1: Author (Left) and Date (Right) */}
          <div className={styles.footerRow}>
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
              <span className={styles.authorName}>{post.author.name}</span>
            </div>
            <span className={styles.date}>{formatDate(post.publishedAt)}</span>
          </div>

          {/* Row 2: Share & Views (Left) and Read Button (Right) */}
          <div className={styles.footerRow}>
            <div className={styles.metaGroup}>
              <ShareModalButton
                title={post.title}
                url={getPostRoute(post.slug)}
                className={styles.metaItem}
                showLabel={true}
              />
              <span className={styles.metaItem}>
                <FiEye aria-hidden="true" />
                {formatNumber(post.views)}
              </span>
            </div>

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
