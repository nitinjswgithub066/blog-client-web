import NewsletterCard from "@/components/cards/NewsletterCard";
import styles from "./NewsletterSection.module.css";

export default function NewsletterSection() {
  return (
    <section className={styles.section} aria-labelledby="newsletter-heading">
      <div className={styles.container}>
        <NewsletterCard />
      </div>
    </section>
  );
}
