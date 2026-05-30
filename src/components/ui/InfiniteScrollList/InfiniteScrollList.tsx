"use client";

import { useState, useEffect, useRef } from "react";
import BlogCard from "@/components/cards/BlogCard";
import type { Post } from "@/types";
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
      { rootMargin: "100px" }
    );

    observer.observe(currentLoader);

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [hasMore, isLoading, displayedPosts, allPosts, chunkSize]);

  const loadMorePosts = () => {
    setIsLoading(true);
    // Simulate network delay for premium smooth UX
    setTimeout(() => {
      const currentLength = displayedPosts.length;
      const nextPosts = allPosts.slice(currentLength, currentLength + chunkSize);
      
      setDisplayedPosts((prev) => [...prev, ...nextPosts]);
      setIsLoading(false);
      
      if (currentLength + chunkSize >= allPosts.length) {
        setHasMore(false);
      }
    }, 800);
  };

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
              <div key={i} className={styles.skeletonCard} style={orientation === "horizontal" ? { height: '220px' } : undefined}>
                <div className={styles.skeletonImage} style={orientation === "horizontal" ? { display: 'none' } : undefined} />
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
        <div ref={loaderRef} style={{ height: "20px", width: "100%" }} />
      )}

      {!hasMore && displayedPosts.length > 0 && (
        <div className={styles.endMessage}>
          You&apos;ve reached the end of the list.
        </div>
      )}
    </div>
  );
}
