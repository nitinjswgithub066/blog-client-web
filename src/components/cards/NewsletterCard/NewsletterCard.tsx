"use client";

import { useState } from "react";
import { FiMail, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import styles from "./NewsletterCard.module.css";

interface NewsletterCardProps {
  className?: string;
  variant?: "default" | "inline"; // "inline" = horizontal layout
}

export default function NewsletterCard({
  className,
  variant = "default",
}: NewsletterCardProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    // Simulate API call for Phase 1
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <div className={`${styles.card} ${styles[variant]} ${className ?? ""}`}>
        <div className={styles.success}>
          <FiCheckCircle className={styles.successIcon} aria-hidden="true" />
          <div>
            <h3 className={styles.successTitle}>You&apos;re in! 🎉</h3>
            <p className={styles.successText}>
              Welcome to VexiraHub. Expect great content in your inbox.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.card} ${styles[variant]} ${className ?? ""}`}>
      <div className={styles.header}>
        <div className={styles.iconWrapper} aria-hidden="true">
          <FiMail />
        </div>
        <div>
          <h2 className={styles.title}>Stay in the loop</h2>
          <p className={styles.subtitle}>
            Get the best articles on Technology, AI, Startups, and more —
            delivered weekly. No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <Input
          id="newsletter-email"
          type="email"
          placeholder="your@email.com"
          variant="glass"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          leftIcon={<FiMail />}
          error={error}
          fullWidth
          aria-label="Email address"
          autoComplete="email"
        />
        <Button
          type="submit"
          variant="primary"
          isLoading={loading}
          rightIcon={!loading ? <FiArrowRight /> : undefined}
          fullWidth={variant === "default"}
        >
          Subscribe Free
        </Button>
      </form>

      <p className={styles.disclaimer}>
        Join 12,000+ readers. No spam. One-click unsubscribe.
      </p>
    </div>
  );
}
