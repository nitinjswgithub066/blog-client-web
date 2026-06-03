import Link from "next/link";
import { FiEye } from "react-icons/fi";
import Badge from "@/components/ui/Badge";
import ShareModalButton from "./ShareModalButton";
import { formatDate, formatNumber, getInitials, cn } from "@/lib/utils";
import { getPostRoute } from "@/lib/routes";
import type { Post } from "@/types";
import type { CardOrientation } from "@/types";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
  post: Post;
  orientation?: CardOrientation;
  className?: string;
  priority?: boolean;
}

const gradientClassMap: Record<string, string> = {
  technology: styles.gradientTechnology,
  programming: styles.gradientProgramming,
  "web-development": styles.gradientWebDevelopment,
  ai: styles.gradientAi,
  startups: styles.gradientStartups,
  business: styles.gradientBusiness,
  finance: styles.gradientFinance,
  education: styles.gradientEducation,
  career: styles.gradientCareer,
  gaming: styles.gradientGaming,
  entertainment: styles.gradientEntertainment,
  reviews: styles.gradientReviews,
  thoughts: styles.gradientThoughts,
};

export default function BlogCard({
  post,
  orientation = "vertical",
  className,
}: BlogCardProps) {
  const gradientClass =
    gradientClassMap[post.category.slug] ?? styles.gradientDefault;

  return (
    <article className={cn(styles.card, styles[orientation], className)}>
      {/* Image / Gradient thumbnail */}
      <Link
        href={getPostRoute(post.slug)}
        className={styles.imageWrapper}
        aria-hidden="true"
        tabIndex={-1}
      >
        <div
          className={cn(styles.image, gradientClass)}
          aria-label={post.featuredImageAlt}
        >
          {/* Category initial overlay */}
          <span className={styles.categoryInitial}>
            {getInitials(post.category.name)}
          </span>
        </div>

        {/* Trending badge overlay */}
        {post.isTrending && (
          <span className={styles.trendingBadge}>🔥 Trending</span>
        )}
      </Link>

      {/* Content */}
      <div className={styles.content}>
        {/* Category badge */}
        <Badge
          label={post.category.name}
          variant="category"
          accentColor={post.category.accentColor}
          size="sm"
        />

        {/* Title */}
        <h3 className={styles.title}>
          <Link href={getPostRoute(post.slug)} className={styles.titleLink}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className={styles.excerpt}>{post.excerpt}</p>

        {/* Footer: author + meta */}
        <div className={styles.footer}>
          <div className={styles.author}>
            {/* Avatar */}
            <div
              className={cn(styles.avatar, gradientClass)}
              aria-hidden="true"
            >
              <span className={styles.avatarInitial}>
                {getInitials(post.author.name)}
              </span>
            </div>
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>{post.author.name}</span>
              <span className={styles.date}>
                {formatDate(post.publishedAt)}
              </span>
            </div>
          </div>

          <div className={styles.meta}>
            <ShareModalButton
              title={post.title}
              url={getPostRoute(post.slug)}
            />
            <span className={styles.metaItem}>
              <FiEye aria-hidden="true" />
              {formatNumber(post.views)}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
