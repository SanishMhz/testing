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
  webpack(config, { isServer }) {
    // Option 1: Disable persistent caching (temp fix)
    config.cache = false;

    // OR Option 2: Limit cache memory usage
    // config.cache = {
    //   type: "filesystem",
    //   cacheDirectory: path.resolve(__dirname, ".webpack_cache"),
    //   compression: "gzip",
    //   maxMemoryGenerations: 1,
    // };

    return config;
  },
};

export default nextConfig;
