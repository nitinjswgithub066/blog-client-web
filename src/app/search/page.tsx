"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FiSearch, FiX } from "react-icons/fi";
import BlogCard from "@/components/cards/BlogCard";
import Input from "@/components/ui/Input";
import { searchPosts } from "@/data/posts";
import type { Post } from "@/types";
import styles from "./page.module.css";

function SearchResults() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Post[]>([]);

  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    setResults(searchPosts(query.trim()));
  }, [query]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <div className={styles.headerBadge}>
            <FiSearch aria-hidden="true" />
            <span>Search</span>
          </div>
          <h1 className={styles.pageTitle}>Search Articles</h1>
          <p className={styles.pageSubtitle}>
            Find articles, tutorials, and insights across all topics.
          </p>
        </header>

        <div className={styles.searchBar}>
          <Input
            type="search"
            placeholder="Type to search..."
            variant="default"
            leftIcon={<FiSearch />}
            rightIcon={query ? <FiX /> : undefined}
            onRightIconClick={() => setQuery("")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            fullWidth
            aria-label="Search articles"
            autoFocus
          />
        </div>

        {query && (
          <p className={styles.resultCount}>
            {results.length === 0
              ? `No results for "${query}"`
              : `${results.length} result${results.length !== 1 ? "s" : ""} for "${query}"`}
          </p>
        )}

        {results.length > 0 && (
          <div className={styles.grid}>
            {results.map((post) => (
              <BlogCard key={post.id} post={post} orientation="vertical" />
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <div className={styles.empty}>
            <span className={styles.emptyIcon} aria-hidden="true">🔍</span>
            <h2 className={styles.emptyTitle}>Nothing found</h2>
            <p className={styles.emptyText}>Try different keywords or browse our categories.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className={styles.page}><div className={styles.container}><p style={{ color: "var(--text-muted)" }}>Loading...</p></div></div>}>
      <SearchResults />
    </Suspense>
  );
}
