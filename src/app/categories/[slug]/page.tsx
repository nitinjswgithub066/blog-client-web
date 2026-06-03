import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/components/layout/Sidebar";
import { getCategoryBySlug, categories } from "@/data/categories";
import { getPostsByCategory } from "@/data/posts";
import { getCategoryBreadcrumb } from "@/data/navigation";
import InfiniteScrollList from "@/components/ui/InfiniteScrollList";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category Not Found" };
  return {
    title: `${category.name} Articles`,
    description: `Explore all ${category.name} articles on VexiraHub. ${category.description}`,
  };
}

const bannerGradientClassMap: Record<string, string> = {
  technology: styles.bannerTechnology,
  programming: styles.bannerProgramming,
  "web-development": styles.bannerWebDevelopment,
  ai: styles.bannerAi,
  startups: styles.bannerStartups,
  business: styles.bannerBusiness,
  finance: styles.bannerFinance,
  education: styles.bannerEducation,
  career: styles.bannerCareer,
  gaming: styles.bannerGaming,
  entertainment: styles.bannerEntertainment,
  reviews: styles.bannerReviews,
  thoughts: styles.bannerThoughts,
};

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const posts = getPostsByCategory(slug);
  const breadcrumbs = getCategoryBreadcrumb(category.name, slug);
  const bannerClass = bannerGradientClassMap[slug] ?? styles.bannerDefault;

  return (
    <div className={styles.page}>
      {/* Category hero banner */}
      <div className={`${styles.banner} ${bannerClass}`}>
        <div className={styles.bannerOverlay} />
        <div className={styles.bannerContent}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className={styles.breadcrumbItem}>
                {crumb.isActive ? (
                  <span className={styles.breadcrumbActive}>{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className={styles.breadcrumbLink}>
                    {crumb.label}
                  </Link>
                )}
                {i < breadcrumbs.length - 1 && (
                  <span className={styles.breadcrumbSeparator}>/</span>
                )}
              </span>
            ))}
          </nav>
          <h1 className={styles.bannerTitle}>{category.name}</h1>
          <p className={styles.bannerDesc}>{category.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.main}>
            {posts.length > 0 ? (
              <div className={styles.gridContainer}>
                <InfiniteScrollList
                  initialPosts={posts.slice(0, 12)}
                  allPosts={posts}
                  chunkSize={12}
                />
              </div>
            ) : (
              <div className={styles.empty}>
                <p className={styles.emptyText}>
                  No articles in this category yet. Check back soon!
                </p>
              </div>
            )}
          </div>
          <Sidebar className={styles.sidebar} />
        </div>
      </div>
    </div>
  );
}
