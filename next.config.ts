import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Removed output: 'export' to let Vercel handle the deployment natively
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
