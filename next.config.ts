import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "s5ronyp76h.ufs.sh",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
