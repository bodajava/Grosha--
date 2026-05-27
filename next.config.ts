import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/catalog',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/catalog/:id',
        destination: '/products/:id',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
