import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/libraries/i18n/request.ts');

export default withNextIntl({
  reactStrictMode: true,
  reactCompiler: true,
  distDir: 'dist',
  output: 'standalone',
  typescript: { ignoreBuildErrors: true },
  experimental: {
    // ppr: true,
    // useCache: true,
    typedRoutes: true,
  },
  // trailingSlash: true,
}) satisfies NextConfig;
