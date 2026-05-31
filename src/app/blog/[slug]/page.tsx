import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FiClock, FiEye, FiCalendar, FiArrowLeft } from "react-icons/fi";
import Badge from "@/components/ui/Badge";
import Comments from "@/components/ui/Comments/Comments";
import { getPostBySlug, getAllPosts } from "@/data/posts";
import { getCategoryGradientBg, formatDate, formatNumber, formatReadingTime, getInitials, absoluteUrl } from "@/lib/utils";
import { getCategoryRoute } from "@/lib/routes";
import ShareButtons from "./ShareButtons";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.seo?.metaTitle ?? post.title,
    description: post.seo?.metaDescription ?? post.excerpt,
    keywords: post.seo?.keywords ?? post.tags.map((t) => t.name),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const gradient = getCategoryGradientBg(post.category.slug);
  const postUrl = absoluteUrl(`/blog/${post.slug}`);

  return (
    <>
      <article className={styles.article}>
        {/* ── Hero ── */}
        <div className={styles.hero} style={{ background: gradient }}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <Link href={getCategoryRoute(post.category.slug)} className={styles.backLink}>
              <FiArrowLeft aria-hidden="true" />
              Back to {post.category.name}
            </Link>

            <Badge
              label={post.category.name}
              variant="category"
              accentColor={post.category.accentColor}
            />

            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.excerpt}>{post.excerpt}</p>

            {/* Author + meta row */}
            <div className={styles.metaRow}>
              <div className={styles.author}>
                <div
                  className={styles.avatar}
                  aria-hidden="true"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  <span className={styles.avatarInitial}>
                    {getInitials(post.author.name)}
                  </span>
                </div>
                <div>
                  <span className={styles.authorName}>{post.author.name}</span>
                  <span className={styles.authorRole}>{post.author.role}</span>
                </div>
              </div>

              <div className={styles.stats}>
                <span className={styles.stat}>
                  <FiCalendar aria-hidden="true" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className={styles.stat}>
                  <FiClock aria-hidden="true" />
                  {formatReadingTime(post.readingTime)}
                </span>
                <span className={styles.stat}>
                  <FiEye aria-hidden="true" />
                  {formatNumber(post.views)} views
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Content ── */}
        <div className={styles.contentWrapper}>
          <div className={styles.contentInner}>
            {/* Article body */}
            <div
              data-prose
              className={styles.body}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className={styles.tags}>
                <span className={styles.tagsLabel}>Tags:</span>
                {post.tags.map((tag) => (
                  <span key={tag.id} className={styles.tag}>#{tag.name}</span>
                ))}
              </div>
            )}

            {/* Share */}
            <ShareButtons title={post.title} url={postUrl} />

            {/* Comments */}
            <Comments />
          </div>
        </div>
      </article>

    </>
  );
}
