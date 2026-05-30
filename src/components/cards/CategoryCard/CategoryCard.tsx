import Link from "next/link";
import * as FiIcons from "react-icons/fi";
import { getCategoryGradientBg, formatNumber, cn } from "@/lib/utils";
import { getCategoryRoute } from "@/lib/routes";
import type { Category } from "@/types";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  category: Category;
  postCount?: number;
  className?: string;
}

type FiIconName = keyof typeof FiIcons;

export default function CategoryCard({ category, postCount, className }: CategoryCardProps) {
  const gradient = getCategoryGradientBg(category.slug);
  const IconComponent = FiIcons[category.icon as FiIconName] as React.ComponentType<{ className?: string }>;

  return (
    <Link
      href={getCategoryRoute(category.slug)}
      className={cn(styles.card, className)}
      aria-label={`Browse ${category.name} articles`}
    >
      {/* Icon container with gradient */}
      <div className={styles.iconWrapper} style={{ background: gradient }}>
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
      <div
        className={styles.accentBar}
        style={{ background: category.accentColor }}
      />
    </Link>
  );
}
