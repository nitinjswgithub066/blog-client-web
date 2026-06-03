import type { NextConfig } from "next";

const nextConfig: NextConfig & { allowedDevOrigins: string[] } = {
  allowedDevOrigins: ["10.92.92.201"],
};

export default nextConfig;
