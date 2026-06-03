"use client";

import { useState } from "react";
import { FiMail, FiSend, FiCheckCircle } from "react-icons/fi";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email is required.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  }

  if (submitted) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.success}>
            <FiCheckCircle className={styles.successIcon} aria-hidden="true" />
            <h2 className={styles.successTitle}>Message Sent!</h2>
            <p className={styles.successText}>
              We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerBadge}>
            <FiMail aria-hidden="true" />
            <span>Contact</span>
          </div>
          <h1 className={styles.title}>Get in Touch</h1>
          <p className={styles.subtitle}>
            Questions, feedback, partnerships, or just a hello — we love to hear
            from you.
          </p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <Input
              id="contact-name"
              label="Your name"
              placeholder="Alex Morgan"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              error={errors.name}
              fullWidth
            />
            <Input
              id="contact-email"
              label="Email"
              type="email"
              placeholder="you@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              error={errors.email}
              fullWidth
            />
          </div>
          <Input
            id="contact-subject"
            label="Subject"
            placeholder="How can we help?"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            error={errors.subject}
            fullWidth
          />
          <div className={styles.textareaWrapper}>
            <label htmlFor="contact-message" className={styles.textareaLabel}>
              Message
            </label>
            <textarea
              id="contact-message"
              className={`${styles.textarea} ${errors.message ? styles.textareaError : ""}`}
              rows={6}
              placeholder="Your message..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            {errors.message && (
              <span className={styles.errorText}>{errors.message}</span>
            )}
          </div>
          <Button
            type="submit"
            variant="primary"
            isLoading={loading}
            rightIcon={!loading ? <FiSend /> : undefined}
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
