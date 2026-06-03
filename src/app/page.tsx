import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrendingSection from "@/components/sections/TrendingSection";
import CategorySection from "@/components/sections/CategorySection";
import LatestPostsSection from "@/components/sections/LatestPostsSection";

export const metadata: Metadata = {
  title: "VexiraHub — Fullstack Blog and News Platform",
  description:
    "Explore trending articles on Technology, AI, Programming, Startups, Finance, Career, Gaming, and more. VexiraHub — where curiosity meets great content.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrendingSection />
      <CategorySection />
      <LatestPostsSection limit={9} showSidebar />
    </>
  );
}
