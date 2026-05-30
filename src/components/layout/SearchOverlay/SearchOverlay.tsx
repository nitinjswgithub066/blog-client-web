"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiX, FiTrendingUp, FiGrid, FiArrowRight } from "react-icons/fi";
import { useScrollLock } from "@/hooks/useScrollLock";
import { searchPosts } from "@/data/posts";
import { categories } from "@/data/categories";
import { getCategoryGradientBg, getInitials, formatReadingTime } from "@/lib/utils";
import { getPostRoute, getCategoryRoute, getSearchRoute } from "@/lib/routes";
import type { Post } from "@/types";
import styles from "./SearchOverlay.module.css";

const TRENDING_SEARCHES = [
  "React hooks",
  "AI tools 2026",
  "TypeScript tips",
  "Next.js App Router",
  "Investing basics",
];

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Post[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useScrollLock(isOpen);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Live search
  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    const trimmed = query.trim();
    setResults(searchPosts(trimmed).slice(0, 6));
  }, [query]);

  function handleFullSearch(e?: React.FormEvent) {
    e?.preventDefault();
    if (!query.trim()) return;
    router.push(getSearchRoute(query.trim()));
    onClose();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-label="Search"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Search bar */}
            <form onSubmit={handleFullSearch} className={styles.searchBar}>
              <FiSearch className={styles.searchIcon} aria-hidden="true" />
              <input
                ref={inputRef}
                type="search"
                className={styles.input}
                placeholder="Search articles, categories, tags..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search"
                autoComplete="off"
              />
              {query && (
                <button
                  type="button"
                  className={styles.clearBtn}
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  <FiX />
                </button>
              )}
              <button
                type="button"
                className={styles.closeBtn}
                onClick={onClose}
                aria-label="Close search"
              >
                <FiX />
              </button>
            </form>

            <div className={styles.body}>
              {/* Live results */}
              {results.length > 0 && (
                <section className={styles.section}>
                  <h3 className={styles.sectionTitle}>Results</h3>
                  <ul className={styles.resultList}>
                    {results.map((post) => (
                      <li key={post.id}>
                        <Link
                          href={getPostRoute(post.slug)}
                          className={styles.resultItem}
                          onClick={onClose}
                        >
                          <div
                            className={styles.resultThumb}
                            style={{ background: getCategoryGradientBg(post.category.slug) }}
                            aria-hidden="true"
                          >
                            <span className={styles.resultThumbInitial}>
                              {getInitials(post.category.name)}
                            </span>
                          </div>
                          <div className={styles.resultInfo}>
                            <span className={styles.resultTitle}>{post.title}</span>
                            <span className={styles.resultMeta}>
                              {post.category.name} · {formatReadingTime(post.readingTime)}
                            </span>
                          </div>
                          <FiArrowRight className={styles.resultArrow} aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {query && (
                    <button
                      className={styles.viewAll}
                      onClick={handleFullSearch}
                    >
                      View all results for &quot;{query}&quot;
                      <FiArrowRight aria-hidden="true" />
                    </button>
                  )}
                </section>
              )}

              {/* Empty state */}
              {query && results.length === 0 && (
                <div className={styles.empty}>
                  <p>No results for <strong>&quot;{query}&quot;</strong></p>
                  <p className={styles.emptyHint}>Try searching for a topic, category, or author</p>
                </div>
              )}

              {/* Default: trending + categories */}
              {!query && (
                <>
                  <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>
                      <FiTrendingUp aria-hidden="true" /> Trending Searches
                    </h3>
                    <div className={styles.pills}>
                      {TRENDING_SEARCHES.map((term) => (
                        <button
                          key={term}
                          className={styles.pill}
                          onClick={() => setQuery(term)}
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </section>

                  <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>
                      <FiGrid aria-hidden="true" /> Browse Categories
                    </h3>
                    <div className={styles.catGrid}>
                      {categories.slice(0, 8).map((cat) => (
                        <Link
                          key={cat.id}
                          href={getCategoryRoute(cat.slug)}
                          className={styles.catChip}
                          onClick={onClose}
                          style={{ borderColor: `color-mix(in srgb, ${cat.accentColor} 35%, transparent)` }}
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </section>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
