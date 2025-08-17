import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = process.env.NEXT_PUBLIC_GH_REPO || "wolf-qr";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
};

export default nextConfig;
