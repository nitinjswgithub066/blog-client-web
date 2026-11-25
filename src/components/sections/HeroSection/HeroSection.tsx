import HeroSectionClient from "./HeroSectionClient";
import { getFeaturedPosts, getLatestPosts } from "@/lib/api";

export default async function HeroSection() {
  try {
    const featured = await getFeaturedPosts();
    const posts = featured.length ? featured : (await getLatestPosts(1, 3)).items;
    if (!posts.length) return null;
    return <HeroSectionClient hero={posts[0]} secondary={posts.slice(1, 3)} />;
  } catch (error) {
    console.error("[HOME_HERO] Unable to load public posts:", error);
    return null;
  }
}
