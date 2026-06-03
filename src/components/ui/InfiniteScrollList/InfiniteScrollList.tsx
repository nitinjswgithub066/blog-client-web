"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import BlogCard from "@/components/cards/BlogCard";
import type { Post } from "@/types";
import { cn } from "@/lib/utils";
import styles from "./InfiniteScrollList.module.css";

interface InfiniteScrollListProps {
  initialPosts: Post[];
  allPosts: Post[];
  chunkSize?: number;
  orientation?: "vertical" | "horizontal";
}

export default function InfiniteScrollList({
  initialPosts,
  allPosts,
  chunkSize = 12,
  orientation = "vertical",
}: InfiniteScrollListProps) {
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>(initialPosts);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(allPosts.length > initialPosts.length);
  const loaderRef = useRef<HTMLDivElement>(null);

  const loadMorePosts = useCallback(() => {
    setIsLoading(true);
    // Simulate network delay for premium smooth UX
    setTimeout(() => {
      setDisplayedPosts((prev) => {
        const nextPosts = allPosts.slice(prev.length, prev.length + chunkSize);
        const updated = [...prev, ...nextPosts];
        if (updated.length >= allPosts.length) {
          setHasMore(false);
        }
        return updated;
      });
      setIsLoading(false);
    }, 800);
  }, [allPosts, chunkSize]);

  useEffect(() => {
    const currentLoader = loaderRef.current;
    if (!currentLoader || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading) {
          loadMorePosts();
        }
      },
      { rootMargin: "100px" },
    );

    observer.observe(currentLoader);

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [hasMore, isLoading, loadMorePosts]);

  return (
    <div className={styles.listWrapper}>
      <div className={styles.grid}>
        {displayedPosts.map((post) => (
          <BlogCard key={post.id} post={post} orientation={orientation} />
        ))}
      </div>

      {isLoading && (
        <div className={styles.loaderContainer}>
          <div className={styles.skeletonGrid}>
            {[...Array(orientation === "vertical" ? 2 : 1)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  styles.skeletonCard,
                  orientation === "horizontal" && styles.skeletonCardHorizontal,
                )}
              >
                <div
                  className={cn(
                    styles.skeletonImage,
                    orientation === "horizontal" && styles.skeletonImageHidden,
                  )}
                />
                <div className={styles.skeletonContent}>
                  <div className={styles.skeletonBadge} />
                  <div className={styles.skeletonTitle} />
                  <div className={styles.skeletonText} />
                  <div className={styles.skeletonText} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {hasMore && !isLoading && (
        <div ref={loaderRef} className={styles.loaderSpacer} />
      )}

      {!hasMore && displayedPosts.length > 0 && (
        <div className={styles.endMessage}>
          You&apos;ve reached the end of the list.
        </div>
      )}
    </div>
  );
}
