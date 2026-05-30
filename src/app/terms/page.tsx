import type { Metadata } from "next";
import Link from "next/link";
import styles from "../privacy-policy/page.module.css";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "VexiraHub Terms of Service — the rules and conditions for using our platform.",
};

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.meta}>Last updated: May 30, 2026</p>
        </header>
        <div data-prose className={styles.prose}>
          <p>By accessing or using VexiraHub, you agree to be bound by these Terms of Service. Please read them carefully before using our platform.</p>
          <h2>1. Use of Our Platform</h2>
          <p>VexiraHub grants you a limited, non-exclusive, non-transferable license to use our platform for personal, non-commercial purposes. You agree not to use the platform for any unlawful purpose or in any way that could harm VexiraHub or other users.</p>
          <h2>2. Content</h2>
          <p>All content published on VexiraHub is the intellectual property of VexiraHub or its contributors. You may not reproduce, distribute, or create derivative works without our explicit permission.</p>
          <h2>3. Newsletter Subscriptions</h2>
          <p>By subscribing to our newsletter, you agree to receive periodic emails from VexiraHub. You may unsubscribe at any time using the link provided in each email.</p>
          <h2>4. Limitation of Liability</h2>
          <p>VexiraHub shall not be liable for any indirect, incidental, or consequential damages arising from your use of our platform or any content published therein.</p>
          <h2>5. Changes to Terms</h2>
          <p>We may update these Terms from time to time. Continued use of the platform after any changes constitutes your acceptance of the new Terms.</p>
          <h2>6. Contact</h2>
          <p>For questions about these Terms, please visit our <Link href="/contact">Contact page</Link>.</p>
        </div>
      </div>
    </div>
  );
}
