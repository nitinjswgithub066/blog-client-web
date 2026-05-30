import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogCard from "@/components/cards/BlogCard";
import Sidebar from "@/components/layout/Sidebar";
import { getCategoryBySlug, categories } from "@/data/categories";
import { getPostsByCategory } from "@/data/posts";
import InfiniteScrollList from "@/components/ui/InfiniteScrollList";
import { getCategoryGradientBg } from "@/lib/utils";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category Not Found" };
  return {
    title: `${category.name} Articles`,
    description: `Explore all ${category.name} articles on VexiraHub. ${category.description}`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const posts = getPostsByCategory(slug);
  const gradient = getCategoryGradientBg(slug);

  return (
    <div className={styles.page}>
      {/* Category hero banner */}
      <div className={styles.banner} style={{ background: gradient }}>
        <div className={styles.bannerOverlay} />
        <div className={styles.bannerContent}>
          <p className={styles.bannerCount}>{posts.length} articles</p>
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
                <p className={styles.emptyText}>No articles in this category yet. Check back soon!</p>
              </div>
            )}
          </div>
          <Sidebar className={styles.sidebar} />
        </div>
      </div>
    </div>
  );
}
