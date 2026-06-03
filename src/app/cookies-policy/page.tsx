import type { Metadata } from "next";
import Link from "next/link";
import styles from "../privacy-policy/page.module.css";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description: "Learn how VexiraHub uses cookies to enhance your experience.",
};

export default function CookiesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Cookies Policy</h1>
          <p className={styles.meta}>Last updated: May 30, 2026</p>
        </header>
        <div data-prose className={styles.prose}>
          <p>
            VexiraHub uses cookies and similar tracking technologies to enhance
            your experience on our platform. This policy explains what cookies
            we use and why.
          </p>
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device by websites you
            visit. They are widely used to make websites work efficiently and to
            provide information to website owners.
          </p>
          <h2>2. Cookies We Use</h2>
          <p>
            <strong>Essential cookies</strong> are required for the platform to
            function. These include cookies that remember your theme preference
            (dark/light mode) and session information.
          </p>
          <p>
            <strong>Analytics cookies</strong> help us understand how visitors
            interact with our platform so we can improve it. These are only set
            with your consent.
          </p>
          <h2>3. Managing Cookies</h2>
          <p>
            You can control and/or delete cookies as you wish through your
            browser settings. Deleting cookies may affect certain features of
            our platform, such as theme preferences.
          </p>
          <h2>4. Contact</h2>
          <p>
            For questions about our Cookies Policy, please visit our{" "}
            <Link href="/contact">Contact page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
