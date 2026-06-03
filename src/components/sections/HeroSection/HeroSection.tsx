"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiTrendingUp, FiZap } from "react-icons/fi";
import FeaturedCard from "@/components/cards/FeaturedCard";
import { getHeroPost, getFeaturedPosts } from "@/data/posts";
import { ROUTES } from "@/lib/routes";
import styles from "./HeroSection.module.css";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  }),
  exit: { opacity: 0, y: -24, transition: { duration: 0.3 } },
};

export default function HeroSection() {
  const hero = getHeroPost();
  const secondary = getFeaturedPosts(3)
    .filter((p) => p.id !== hero?.id)
    .slice(0, 2);

  if (!hero) return null;

  return (
    <section className={styles.section} aria-label="Featured articles">
      <div className={styles.container}>
        {/* Section header */}
        <motion.div
          className={styles.header}
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          <div className={styles.badge}>
            <FiZap className={styles.badgeIcon} aria-hidden="true" />
            <span>VEXIRAHUB News And Tech Blog</span>
          </div>
          <div className={styles.headerRight}>
            <Link href={ROUTES.TRENDING} className={styles.viewAll}>
              View Trending <FiTrendingUp aria-hidden="true" />
            </Link>
          </div>
        </motion.div>

        {/* Hero grid */}
        <div className={styles.grid}>
          {/* Primary hero card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={hero.id}
              className={styles.heroCard}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={1}
              variants={fadeUp}
            >
              <FeaturedCard post={hero} size="hero" />
            </motion.div>
          </AnimatePresence>

          {/* Secondary cards */}
          {secondary.length > 0 && (
            <div className={styles.secondaryCards}>
              {secondary.map((post, i) => (
                <motion.div
                  key={post.id}
                  className={styles.secondaryCard}
                  initial="hidden"
                  animate="visible"
                  custom={i + 2}
                  variants={fadeUp}
                >
                  <FeaturedCard post={post} size="secondary" />
                </motion.div>
              ))}

              {/* Explore more CTA */}
              <motion.div
                initial="hidden"
                animate="visible"
                custom={4}
                variants={fadeUp}
              >
                <Link href={ROUTES.LATEST} className={styles.ctaCard}>
                  <span className={styles.ctaText}>
                    Explore all articles
                    <FiArrowRight
                      className={styles.ctaArrow}
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
