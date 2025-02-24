import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "shreyas-bhujbal-blog.nyc3.cdn.digitaloceanspaces.com" },
    ], // Add domains where your images are hosted
  },
};

export default nextConfig;
