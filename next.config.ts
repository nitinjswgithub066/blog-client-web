import type { NextConfig } from "next";

const nextConfig: NextConfig & { allowedDevOrigins: string[] } = {
  allowedDevOrigins: ["10.92.92.201"],
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/admin",
          destination: "https://blog-admin-dashboard-lilac.vercel.app/admin",
        },
        {
          source: "/admin/:path*",
          destination: "https://blog-admin-dashboard-lilac.vercel.app/admin/:path*",
        },
        {
          source: "/api/:path*",
          destination: "https://vexirahub-api.onrender.com/api/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
