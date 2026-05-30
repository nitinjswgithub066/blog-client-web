import { cn } from "@/lib/utils";
import styles from "./SkeletonLoader.module.css";

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: boolean;
}

function Skeleton({ className, width, height, rounded = false }: SkeletonProps) {
  return (
    <div
      className={cn(styles.skeleton, rounded && styles.rounded, className)}
      style={{ width, height }}
      aria-hidden="true"
    />
  );
}

// ── Preset skeleton layouts ──────────────────────────────────────────────────

export function BlogCardSkeleton() {
  return (
    <div className={styles.card} aria-busy="true" aria-label="Loading article">
      <Skeleton className={styles.image} />
      <div className={styles.content}>
        <Skeleton className={styles.badge} width="80px" height="20px" rounded />
        <Skeleton className={styles.title} />
        <Skeleton className={styles.titleShort} />
        <Skeleton className={styles.excerpt} />
        <Skeleton className={styles.excerptShort} />
        <div className={styles.meta}>
          <Skeleton rounded width="28px" height="28px" />
          <Skeleton width="120px" height="14px" rounded />
        </div>
      </div>
    </div>
  );
}

export function TrendingCardSkeleton() {
  return (
    <div className={styles.trending} aria-busy="true" aria-label="Loading trending article">
      <Skeleton className={styles.trendingImg} rounded />
      <div className={styles.trendingContent}>
        <Skeleton width="60px" height="16px" rounded />
        <Skeleton width="100%" height="16px" rounded />
        <Skeleton width="70%" height="16px" rounded />
      </div>
    </div>
  );
}

export function CategoryCardSkeleton() {
  return (
    <div className={styles.categoryCard} aria-busy="true">
      <Skeleton className={styles.categoryImg} />
      <Skeleton width="80px" height="16px" rounded />
      <Skeleton width="60px" height="12px" rounded />
    </div>
  );
}

export default Skeleton;
