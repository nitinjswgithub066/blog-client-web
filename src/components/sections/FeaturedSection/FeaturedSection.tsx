import Link from "next/link";
import { FiBookmark } from "react-icons/fi";
import BlogCard from "@/components/cards/BlogCard";
import { getPostsByCategory } from "@/data/posts";
import { ROUTES } from "@/lib/routes";
import styles from "./FeaturedSection.module.css";

interface FeaturedSectionProps {
  title?: string;
  subtitle?: string;
}

const posts = getPostsByCategory("technology", 4);

export default function FeaturedSection({
  title = "Editor's Picks",
  subtitle = "Hand-picked articles from our editorial team",
}: FeaturedSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <FiBookmark className={styles.headerIcon} aria-hidden="true" />
            <div>
              <h2 id="featured-heading" className={styles.title}>{title}</h2>
              <p className={styles.subtitle}>{subtitle}</p>
            </div>
          </div>
          <Link href={ROUTES.LATEST} className={styles.viewAll}>
            See all
          </Link>
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} orientation="vertical" />
          ))}
        </div>
      </div>
    </section>
  );
}
