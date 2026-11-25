import HeroSectionClient from "./HeroSectionClient";
import { getFeaturedPosts, getLatestPosts } from "@/lib/api";

export default async function HeroSection() {
  const posts = await (async () => {
    try {
      const featured = await getFeaturedPosts();
      return featured.length ? featured : (await getLatestPosts(1, 3)).items;
    } catch (error) {
      console.error("[HOME_HERO] Unable to load public posts:", error);
      return null;
    }
  })();

  if (!posts?.length) return null;

  return <HeroSectionClient hero={posts[0]} secondary={posts.slice(1, 3)} />;
}
