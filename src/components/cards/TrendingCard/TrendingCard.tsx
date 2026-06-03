import Link from "next/link";
import { FiClock, FiTrendingUp } from "react-icons/fi";
import Badge from "@/components/ui/Badge";
import {
  formatReadingTime,
  formatNumber,
  getCategoryGradientBg,
  getInitials,
  cn,
} from "@/lib/utils";
import { getPostRoute } from "@/lib/routes";
import type { Post } from "@/types";
import styles from "./TrendingCard.module.css";

interface TrendingCardProps {
  post: Post;
  rank: number; // 1-based rank number
  className?: string;
}

export default function TrendingCard({
  post,
  rank,
  className,
}: TrendingCardProps) {
  const gradient = getCategoryGradientBg(post.category.slug);

  return (
    <article className={cn(styles.card, className)}>
      {/* Rank number */}
      <span className={styles.rank} aria-label={`Rank ${rank}`}>
        {String(rank).padStart(2, "0")}
      </span>

      {/* Thumbnail */}
      <Link
        href={getPostRoute(post.slug)}
        className={styles.thumbnail}
        style={{ background: gradient }}
        aria-label={post.title}
        tabIndex={-1}
      >
        <span className={styles.thumbnailInitial}>
          {getInitials(post.category.name)}
        </span>
      </Link>

      {/* Content */}
      <div className={styles.content}>
        <Badge
          label={post.category.name}
          variant="category"
          accentColor={post.category.accentColor}
          size="sm"
        />
        <h3 className={styles.title}>
          <Link href={getPostRoute(post.slug)} className={styles.titleLink}>
            {post.title}
          </Link>
        </h3>
        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <FiClock aria-hidden="true" />
            {formatReadingTime(post.readingTime)}
          </span>
          <span className={styles.metaItem}>
            <FiTrendingUp aria-hidden="true" />
            {formatNumber(post.views)} views
          </span>
        </div>
      </div>
    </article>
  );
}
