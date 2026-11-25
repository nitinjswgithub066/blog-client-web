import type { Metadata } from "next";
import { FiFeather } from "react-icons/fi";
import BlogCard from "@/components/cards/BlogCard";
import Sidebar from "@/components/layout/Sidebar";
import { getThoughtPosts } from "@/lib/api";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Thoughts", description: "Personal essays, opinions, and reflections published on VexiraHub." };

export default async function ThoughtsPage() {
  let posts = [];
  try { posts = (await getThoughtPosts(1, 50)).items; }
  catch (error) { console.error("[THOUGHTS_PAGE] Unable to load posts:", error); }
  return (
    <div className={styles.page}><div className={styles.container}>
      <header className={styles.pageHeader}><div className={styles.headerBadge}><FiFeather aria-hidden="true" /><span>Thoughts</span></div><h1 className={styles.pageTitle}>Personal Thoughts</h1><p className={styles.pageSubtitle}>Short-form opinions, personal essays, and reflections.</p></header>
      {posts.length ? <div className={styles.layout}><div className={styles.main}><div className={styles.grid}>{posts.map(post => <BlogCard key={post.id} post={post} />)}</div></div><Sidebar className={styles.sidebar} /></div> : <div className={styles.empty}><span aria-hidden="true" className={styles.emptyIcon}>✍️</span><h2 className={styles.emptyTitle}>Coming soon</h2><p className={styles.emptyText}>Personal thoughts and essays will appear here.</p></div>}
    </div></div>
  );
}
