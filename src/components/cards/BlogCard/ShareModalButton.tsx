"use client";

import { useState } from "react";
import { FiShare2, FiX, FiTwitter, FiLinkedin, FiFacebook, FiCopy } from "react-icons/fi";
import styles from "./ShareModalButton.module.css";

interface ShareModalButtonProps {
  title: string;
  url: string;
}

export default function ShareModalButton({ title, url: pathUrl }: ShareModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Compute absolute URL on the client side
  const url = typeof window !== "undefined" ? `${window.location.origin}${pathUrl}` : pathUrl;

  const toggleModal = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating if wrapped in a Link (though it shouldn't be)
    e.stopPropagation();
    setIsOpen(!isOpen);
    setCopied(false);
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
    let shareUrl = "";
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    } else if (platform === "linkedin") {
      shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;
    } else if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className={styles.container}>
      <button 
        type="button" 
        className={styles.triggerBtn} 
        onClick={toggleModal}
        aria-label="Share post"
        aria-expanded={isOpen}
      >
        <FiShare2 aria-hidden="true" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop for closing modal when clicking outside */}
          <div className={styles.backdrop} onClick={toggleModal} aria-hidden="true" />
          
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <span className={styles.modalTitle}>Share Article</span>
              <button type="button" className={styles.closeBtn} onClick={toggleModal} aria-label="Close share menu">
                <FiX aria-hidden="true" />
              </button>
            </div>
            
            <div className={styles.modalContent}>
              <div className={styles.linkPreview}>
                <span className={styles.linkText}>{url}</span>
              </div>
              
              <div className={styles.socialRows}>
                <button type="button" className={styles.socialBtn} onClick={(e) => shareSocial(e, "twitter")} aria-label="Share on Twitter">
                  <FiTwitter aria-hidden="true" />
                </button>
                <button type="button" className={styles.socialBtn} onClick={(e) => shareSocial(e, "linkedin")} aria-label="Share on LinkedIn">
                  <FiLinkedin aria-hidden="true" />
                </button>
                <button type="button" className={styles.socialBtn} onClick={(e) => shareSocial(e, "facebook")} aria-label="Share on Facebook">
                  <FiFacebook aria-hidden="true" />
                </button>
                <button type="button" className={styles.copyBtn} onClick={copyLink} aria-label="Copy link">
                  <FiCopy aria-hidden="true" /> {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
