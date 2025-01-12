import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com','aceternity.com'], // Add the external domain here
  },
};

export default nextConfig;
