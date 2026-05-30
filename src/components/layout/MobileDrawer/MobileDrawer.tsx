"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome, FiTrendingUp, FiClock, FiGrid,
  FiFeather, FiUser, FiMail, FiSearch, FiX,
  FiChevronDown, FiChevronRight,
} from "react-icons/fi";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useScrollLock } from "@/hooks/useScrollLock";
import { navConfig } from "@/data/navigation";
import { isActiveRoutePrefix } from "@/lib/routes";
import { cn } from "@/lib/utils";
import styles from "./MobileDrawer.module.css";
import { useState } from "react";

// Icon map for nav icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FiHome: FiHome,
  FiTrendingUp: FiTrendingUp,
  FiClock: FiClock,
  FiGrid: FiGrid,
  FiFeather: FiFeather,
  FiUser: FiUser,
  FiMail: FiMail,
  FiSearch: FiSearch,
};

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  useScrollLock(isOpen);

  const allLinks = [
    ...navConfig.primary,
    ...navConfig.secondary,
    ...navConfig.mobileOnly,
  ];

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

          {/* Drawer panel */}
          <motion.aside
            className={styles.drawer}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Header */}
            <div className={styles.header}>
              <Link href="/" className={styles.brand} onClick={onClose}>
                <span className={styles.brandDot} />
                <span className={styles.brandName}>VexiraHub</span>
              </Link>
              <button
                className={styles.closeBtn}
                onClick={onClose}
                aria-label="Close menu"
              >
                <FiX />
              </button>
            </div>

            {/* Nav links */}
            <nav className={styles.nav} aria-label="Mobile navigation">
              {allLinks.map((link) => {
                const Icon = link.icon ? iconMap[link.icon] : null;
                const isActive = isActiveRoutePrefix(pathname, link.href);
                const hasChildren = link.children && link.children.length > 0;

                if (hasChildren) {
                  return (
                    <div key={link.href}>
                      <button
                        className={cn(styles.navItem, isActive && styles.active)}
                        onClick={() => setCategoriesOpen((o) => !o)}
                        aria-expanded={categoriesOpen}
                      >
                        {Icon && <Icon className={styles.navIcon} />}
                        <span className={styles.navLabel}>{link.label}</span>
                        <span className={cn(styles.chevron, categoriesOpen && styles.chevronOpen)}>
                          <FiChevronDown />
                        </span>
                      </button>

                      <AnimatePresence>
                        {categoriesOpen && (
                          <motion.div
                            className={styles.subMenu}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {link.children!.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  styles.subItem,
                                  isActiveRoutePrefix(pathname, child.href) && styles.subItemActive
                                )}
                                onClick={onClose}
                              >
                                <FiChevronRight className={styles.subArrow} />
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
                    className={cn(styles.navItem, isActive && styles.active)}
                    onClick={onClose}
                  >
                    {Icon && <Icon className={styles.navIcon} />}
                    <span className={styles.navLabel}>{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Footer: theme toggle */}
            <div className={styles.footer}>
              <span className={styles.footerLabel}>Appearance</span>
              <ThemeToggle />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
