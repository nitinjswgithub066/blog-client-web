import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read VexiraHub's privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.meta}>Last updated: May 30, 2026</p>
        </header>
        <div data-prose className={styles.prose}>
          <p>At VexiraHub, we respect your privacy and are committed to protecting your personal data. This Privacy Policy describes how we collect, use, and share information when you use our platform.</p>
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you subscribe to our newsletter, contact us, or create an account. This may include your name, email address, and any message content you send us.</p>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to deliver and improve our services, communicate with you, and comply with legal obligations. We do not sell your personal information to third parties.</p>
          <h2>3. Cookies</h2>
          <p>We use cookies to enhance your experience on our platform. You can manage your cookie preferences at any time through your browser settings or our cookie settings page.</p>
          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
          <h2>5. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please visit our <Link href="/contact">Contact page</Link>.</p>
        </div>
      </div>
    </div>
  );
}
