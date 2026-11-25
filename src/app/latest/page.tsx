import type { Post } from "@/types";
import type { Metadata } from "next";
import { FiClock } from "react-icons/fi";
import Sidebar from "@/components/layout/Sidebar";
import BlogCard from "@/components/cards/BlogCard";
import { getLatestPosts } from "@/lib/api";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Latest Articles", description: "Browse the latest published articles on VexiraHub." };

export default async function LatestPage() {
  let posts: Post[] = [];
  try { posts = (await getLatestPosts(1, 50)).items; }
  catch (error) { console.error("[LATEST_PAGE] Unable to load posts:", error); }
  return (
    <div className={styles.page}><div className={styles.container}>
      <header className={styles.pageHeader}><div className={styles.headerBadge}><FiClock aria-hidden="true" /><span>Latest</span></div><h1 className={styles.pageTitle}>Latest Articles</h1><p className={styles.pageSubtitle}>Fresh content published across all topics.</p></header>
      <div className={styles.layout}><div className={styles.gridContainer}>{posts.length ? <div className={styles.grid}>{posts.map(post => <BlogCard key={post.id} post={post} />)}</div> : <p>No published articles yet.</p>}</div><Sidebar className={styles.sidebar} /></div>
    </div></div>
  );
}
