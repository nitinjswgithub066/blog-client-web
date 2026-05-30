"use client";

import { FiTwitter, FiLinkedin, FiLink } from "react-icons/fi";
import styles from "./page.module.css";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  return (
    <div className={styles.share}>
      <span className={styles.shareLabel}>Share this article:</span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.shareBtn}
        aria-label="Share on Twitter"
      >
        <FiTwitter aria-hidden="true" /> Twitter
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.shareBtn}
        aria-label="Share on LinkedIn"
      >
        <FiLinkedin aria-hidden="true" /> LinkedIn
      </a>
      <button
        className={styles.shareBtn}
        onClick={() => navigator.clipboard.writeText(url)}
        aria-label="Copy link"
        type="button"
      >
        <FiLink aria-hidden="true" /> Copy link
      </button>
    </div>
  );
}
