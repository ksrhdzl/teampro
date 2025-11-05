import type { NextConfig } from 'next';

export default {
  reactStrictMode: true,
  distDir: 'dist',
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '9000',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
} satisfies NextConfig;
