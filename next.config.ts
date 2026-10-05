import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stc-zlogin.zdn.vn',
      },
    ],
  },
};

export default nextConfig;