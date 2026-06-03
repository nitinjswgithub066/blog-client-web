import Link from "next/link";
import * as FiIcons from "react-icons/fi";
import { formatNumber, cn } from "@/lib/utils";
import { getCategoryRoute } from "@/lib/routes";
import type { Category } from "@/types";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  category: Category;
  postCount?: number;
  className?: string;
}

type FiIconName = keyof typeof FiIcons;

const gradientClassMap: Record<string, string> = {
  technology: styles.gradientTechnology,
  programming: styles.gradientProgramming,
  "web-development": styles.gradientWebDevelopment,
  ai: styles.gradientAi,
  startups: styles.gradientStartups,
  business: styles.gradientBusiness,
  finance: styles.gradientFinance,
  education: styles.gradientEducation,
  career: styles.gradientCareer,
  gaming: styles.gradientGaming,
  entertainment: styles.gradientEntertainment,
  reviews: styles.gradientReviews,
  thoughts: styles.gradientThoughts,
};

const accentClassMap: Record<string, string> = {
  technology: styles.accentTechnology,
  programming: styles.accentProgramming,
  "web-development": styles.accentWebDevelopment,
  ai: styles.accentAi,
  startups: styles.accentStartups,
  business: styles.accentBusiness,
  finance: styles.accentFinance,
  education: styles.accentEducation,
  career: styles.accentCareer,
  gaming: styles.accentGaming,
  entertainment: styles.accentEntertainment,
  reviews: styles.accentReviews,
  thoughts: styles.accentThoughts,
};

export default function CategoryCard({
  category,
  postCount,
  className,
}: CategoryCardProps) {
  const IconComponent = FiIcons[
    category.icon as FiIconName
  ] as React.ComponentType<{ className?: string }>;
  const gradientClass =
    gradientClassMap[category.slug] ?? styles.gradientDefault;
  const accentClass = accentClassMap[category.slug] ?? styles.accentDefault;

  return (
    <Link
      href={getCategoryRoute(category.slug)}
      className={cn(styles.card, className)}
      aria-label={`Browse ${category.name} articles`}
    >
      {/* Icon container with gradient */}
      <div className={cn(styles.iconWrapper, gradientClass)}>
        {IconComponent && <IconComponent className={styles.icon} />}
      </div>

      {/* Info */}
      <div className={styles.info}>
        <h3 className={styles.name}>{category.name}</h3>
        {postCount !== undefined && (
          <span className={styles.count}>
            {formatNumber(postCount)} {postCount === 1 ? "article" : "articles"}
          </span>
        )}
      </div>

      {/* Hover accent bar */}
      <div className={cn(styles.accentBar, accentClass)} />
    </Link>
  );
}
