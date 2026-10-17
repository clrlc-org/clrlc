import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/team",
        destination: "/about#team",
        permanent: true,
      },
      {
        source: "/events",
        destination: "/community#community-at-work",
        permanent: true,
      },
      {
        source: "/gallery",
        destination: "/community#community-at-work",
        permanent: true,
      },
      {
        source: "/research/langture-bench",
        destination: "/langture",
        permanent: true,
      },
      {
        source: "/partners",
        destination: "/partnerships",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
