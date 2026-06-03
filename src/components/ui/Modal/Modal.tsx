"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { useScrollLock } from "@/hooks/useScrollLock";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  className,
}: ModalProps) {
  useScrollLock(isOpen);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

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
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className={cn(styles.panel, styles[size], className)}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Header */}
            {title && (
              <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <button
                  className={styles.closeBtn}
                  onClick={onClose}
                  aria-label="Close modal"
                >
                  <FiX />
                </button>
              </div>
            )}

            {/* Close button (no title) */}
            {!title && (
              <button
                className={cn(styles.closeBtn, styles.closeBtnFloating)}
                onClick={onClose}
                aria-label="Close modal"
              >
                <FiX />
              </button>
            )}

            <div className={styles.body}>{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
