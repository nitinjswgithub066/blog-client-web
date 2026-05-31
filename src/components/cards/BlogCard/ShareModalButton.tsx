"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FiShare2, FiX, FiTwitter, FiLinkedin, FiFacebook, FiCopy, FiCheck } from "react-icons/fi";
import styles from "./ShareModalButton.module.css";

interface ShareModalButtonProps {
  title: string;
  url: string;
  className?: string;
  showLabel?: boolean;
}

export default function ShareModalButton({ title, url: pathUrl, className, showLabel }: ShareModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const isBrowser = typeof window !== "undefined";
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Compute absolute URL on the client side
  const url = isBrowser ? `${window.location.origin}${pathUrl}` : pathUrl;

  // Lock scroll when modal is open
  useEffect(() => {
    if (triggerRef.current) {
      triggerRef.current.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(true);
    setCopied(false);
  };

  const closeModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
  };

  const copyLink = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const shareSocial = (e: React.MouseEvent, platform: string) => {
    e.preventDefault();
    e.stopPropagation();
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    let shareUrl = "";

    if (platform === "twitter") shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    if (platform === "linkedin") shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;
    if (platform === "facebook") shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

    if (shareUrl) window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const modal = isOpen ? (
    <div className={styles.overlay} onClick={closeModal} role="dialog" aria-modal="true" aria-label="Share article">
      <div
        className={styles.modal}
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
      >
        {/* Header */}
        <div className={styles.modalHeader}>
          <span className={styles.modalTitle}>Share Article</span>
          <button type="button" className={styles.closeBtn} onClick={closeModal} aria-label="Close share menu">
            <FiX aria-hidden="true" />
          </button>
        </div>

        {/* Post title */}
        <div className={styles.modalContent}>
          <p className={styles.postTitle}>{title}</p>

          {/* Link preview */}
          <div className={styles.linkPreview}>
            <span className={styles.linkText}>{url}</span>
          </div>

          {/* Social icons row */}
          <div className={styles.socialLabel}>Share via</div>
          <div className={styles.socialRow}>
            <button type="button" className={`${styles.socialBtn} ${styles.twitter}`} onClick={(e) => shareSocial(e, "twitter")} aria-label="Share on Twitter / X">
              <FiTwitter aria-hidden="true" />
              <span>Twitter</span>
            </button>
            <button type="button" className={`${styles.socialBtn} ${styles.linkedin}`} onClick={(e) => shareSocial(e, "linkedin")} aria-label="Share on LinkedIn">
              <FiLinkedin aria-hidden="true" />
              <span>LinkedIn</span>
            </button>
            <button type="button" className={`${styles.socialBtn} ${styles.facebook}`} onClick={(e) => shareSocial(e, "facebook")} aria-label="Share on Facebook">
              <FiFacebook aria-hidden="true" />
              <span>Facebook</span>
            </button>
          </div>

          {/* Copy link */}
          <button type="button" className={`${styles.copyBtn} ${copied ? styles.copiedState : ""}`} onClick={copyLink}>
            {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
            {copied ? "Link Copied!" : "Copy Link"}
          </button>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={className || styles.triggerBtn}
        onClick={openModal}
        aria-label="Share post"
        aria-expanded="false"
        ref={triggerRef}
      >
        <FiShare2 aria-hidden="true" />
        {showLabel && <span>Share</span>}
      </button>

      {/* Portal so the modal renders at body level, escaping card overflow:hidden */}
      {isBrowser && createPortal(modal, document.body)}
    </div>
  );
}
