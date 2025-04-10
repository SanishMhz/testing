import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "s5ronyp76h.ufs.sh",
        protocol: "https",
      },
      {
        hostname:"82.29.161.226",
        protocol:"http"
      }
    ],
  },
};

export default nextConfig;
