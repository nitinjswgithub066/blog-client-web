"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { cn } from "@/lib/utils";
import styles from "./Dropdown.module.css";

export interface DropdownItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  divider?: boolean; // render a divider before this item
}

interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: "left" | "right";
  className?: string;
  triggerClassName?: string;
  showChevron?: boolean;
}

export default function Dropdown({
  trigger,
  items,
  align = "left",
  className,
  triggerClassName,
  showChevron = true,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  function handleItemClick(item: DropdownItem) {
    item.onClick?.();
    setOpen(false);
  }

  return (
    <div ref={ref} className={cn(styles.wrapper, className)}>
      {/* Trigger button */}
      <button
        type="button"
        className={cn(styles.trigger, triggerClassName)}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {trigger}
        {showChevron && (
          <FiChevronDown
            className={cn(styles.chevron, open && styles.chevronOpen)}
            aria-hidden="true"
          />
        )}
      </button>

      {/* Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={cn(styles.menu, styles[align])}
            role="menu"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
          >
            {items.map((item, i) => (
              <div key={i}>
                {item.divider && i > 0 && (
                  <div className={styles.divider} role="separator" />
                )}
                {item.href ? (
                  <a
                    href={item.href}
                    className={styles.item}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                  >
                    {item.icon && (
                      <span className={styles.itemIcon}>{item.icon}</span>
                    )}
                    {item.label}
                  </a>
                ) : (
                  <button
                    type="button"
                    className={styles.item}
                    role="menuitem"
                    onClick={() => handleItemClick(item)}
                  >
                    {item.icon && (
                      <span className={styles.itemIcon}>{item.icon}</span>
                    )}
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
