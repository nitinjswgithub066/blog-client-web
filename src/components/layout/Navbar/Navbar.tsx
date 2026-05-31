"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch, FiMenu, FiHome, FiTrendingUp,
  FiClock, FiGrid, FiFeather, FiChevronDown,
} from "react-icons/fi";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileDrawer from "@/components/layout/MobileDrawer";
import SearchOverlay from "@/components/layout/SearchOverlay";
import { primaryNavLinks } from "@/data/navigation";
import { isActiveRoutePrefix } from "@/lib/routes";
import { cn } from "@/lib/utils";
import styles from "./Navbar.module.css";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FiHome, FiTrendingUp, FiClock, FiGrid, FiFeather,
};

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const megaButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll detection for shadow/blur effect
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Keyboard shortcut: Ctrl+K / Cmd+K opens search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (megaButtonRef.current) {
      megaButtonRef.current.setAttribute(
        "aria-expanded",
        megaMenuOpen ? "true" : "false"
      );
    }
  }, [megaMenuOpen]);

  useEffect(() => {
    if (mobileMenuButtonRef.current) {
      mobileMenuButtonRef.current.setAttribute(
        "aria-expanded",
        drawerOpen ? "true" : "false"
      );
    }
  }, [drawerOpen]);

  return (
    <>
      <header
        className={cn(styles.header, scrolled && styles.scrolled)}
        role="banner"
      >
        <div className={styles.inner}>
          {/* ── Brand ── */}
          <Link href="/" className={styles.brand} aria-label="VexiraHub home">
            <span className={styles.brandDot} aria-hidden="true" />
            <span className={styles.brandName}>VexiraHub</span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            {primaryNavLinks.map((link) => {
              const Icon = link.icon ? iconMap[link.icon] : null;
              const isActive = isActiveRoutePrefix(pathname, link.href);
              const hasChildren = link.children && link.children.length > 0;

              if (hasChildren) {
                return (
                  <div
                    key={link.href}
                    className={styles.megaWrapper}
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    <button
                      className={cn(styles.navLink, isActive && styles.active)}
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-controls="nav-mega-menu"
                      type="button"
                      ref={megaButtonRef}
                    >
                      {Icon && <Icon className={styles.navIcon} />}
                      {link.label}
                      <FiChevronDown
                        className={cn(styles.navChevron, megaMenuOpen && styles.chevronOpen)}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence>
                      {megaMenuOpen && (
                        <motion.div
                          className={styles.megaMenu}
                          id="nav-mega-menu"
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.18 }}
                        >
                          {link.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                styles.megaItem,
                                isActiveRoutePrefix(pathname, child.href) && styles.megaItemActive
                              )}
                              onClick={() => setMegaMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(styles.navLink, isActive && styles.active)}
                >
                  {Icon && <Icon className={styles.navIcon} />}
                  {link.label}
                  {isActive && (
                    <motion.span
                      className={styles.activeBar}
                      layoutId="navActiveBar"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Actions ── */}
          <div className={styles.actions}>
            {/* Search button */}
            <button
              id="search-btn"
              className={styles.actionBtn}
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search (Ctrl+K)"
              title="Search (Ctrl+K)"
            >
              <FiSearch aria-hidden="true" />
              <kbd className={styles.kbd}>⌘K</kbd>
            </button>

            {/* Theme toggle — desktop only */}
            <div className={styles.themeWrapper}>
              <ThemeToggle compact />
            </div>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-btn"
              className={cn(styles.actionBtn, styles.menuBtn)}
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded="false"
              ref={mobileMenuButtonRef}
            >
              <FiMenu aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Search Overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
