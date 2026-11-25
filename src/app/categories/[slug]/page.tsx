import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/components/layout/Sidebar";
import BlogCard from "@/components/cards/BlogCard";
import { getCategoryPosts } from "@/lib/api";
import { getCategoryBreadcrumb } from "@/data/navigation";
import styles from "./page.module.css";

interface PageProps { params: Promise<{ slug: string }> }
const bannerGradientClassMap: Record<string, string> = {
  technology: styles.bannerTechnology, programming: styles.bannerProgramming, "web-development": styles.bannerWebDevelopment,
  ai: styles.bannerAi, startups: styles.bannerStartups, business: styles.bannerBusiness, finance: styles.bannerFinance,
  education: styles.bannerEducation, career: styles.bannerCareer, gaming: styles.bannerGaming,
  entertainment: styles.bannerEntertainment, reviews: styles.bannerReviews, thoughts: styles.bannerThoughts,
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const result = await getCategoryPosts(slug, 1, 1);
    return { title: `${result.category.name} Articles`, description: result.category.description };
  } catch { return { title: "Category Not Found" }; }
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  let result;
  try { result = await getCategoryPosts(slug, 1, 50); }
  catch { notFound(); }
  const { category, items } = result;
  const breadcrumbs = getCategoryBreadcrumb(category.name, slug);
  const bannerClass = bannerGradientClassMap[slug] ?? styles.bannerDefault;
  return (
    <div className={styles.page}>
      <div className={`${styles.banner} ${bannerClass}`}><div className={styles.bannerOverlay} /><div className={styles.bannerContent}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">{breadcrumbs.map((crumb, i) => <span key={crumb.href} className={styles.breadcrumbItem}>{crumb.isActive ? <span className={styles.breadcrumbActive}>{crumb.label}</span> : <Link href={crumb.href} className={styles.breadcrumbLink}>{crumb.label}</Link>}{i < breadcrumbs.length - 1 && <span className={styles.breadcrumbSeparator}>/</span>}</span>)}</nav>
        <h1 className={styles.bannerTitle}>{category.name}</h1><p className={styles.bannerDesc}>{category.description}</p>
      </div></div>
      <div className={styles.container}><div className={styles.layout}><div className={styles.main}>
        {items.length ? <div className={styles.gridContainer}><div className={styles.grid}>{items.map(post => <BlogCard key={post.id} post={post} />)}</div></div> : <div className={styles.empty}><p className={styles.emptyText}>No articles in this category yet. Check back soon!</p></div>}
      </div><Sidebar className={styles.sidebar} /></div></div>
    </div>
  );
}
