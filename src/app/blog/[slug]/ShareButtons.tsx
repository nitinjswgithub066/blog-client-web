"use client";

import { FiTwitter, FiLinkedin, FiLink, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa"; // Using FaWhatsapp since Fi doesn't have a distinct one
import styles from "./ShareButtons.module.css";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className={styles.shareWrapper}>
      <span className={styles.shareLabel}>Share</span>
      <div className={styles.shareRow}>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareBtn}
          aria-label="Share on Twitter"
        >
          <FiTwitter aria-hidden="true" />
          <span>Twitter</span>
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareBtn}
          aria-label="Share on LinkedIn"
        >
          <FiLinkedin aria-hidden="true" />
          <span>LinkedIn</span>
        </a>
        <a
          href={`https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareBtn}
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
        {/* Instagram doesn't support direct URL sharing, so we fallback to opening IG */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareBtn}
          aria-label="Open Instagram"
        >
          <FiInstagram aria-hidden="true" />
          <span>Instagram</span>
        </a>
        <button
          className={styles.shareBtn}
          onClick={() => navigator.clipboard.writeText(url)}
          aria-label="Copy link"
          type="button"
        >
          <FiLink aria-hidden="true" />
          <span>Copy</span>
        </button>
      </div>
    </div>
  );
}
