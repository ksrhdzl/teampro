import type { NextConfig } from 'next';

export default {
  reactStrictMode: true,
  reactCompiler: true,
  distDir: 'dist',
  output: 'standalone',
  typescript: { ignoreBuildErrors: true },
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
  experimental: {
    // ppr: true,
    // useCache: true,
    typedRoutes: true,
  },
  // trailingSlash: true,
} satisfies NextConfig;
