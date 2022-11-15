const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPWA(
  withBundleAnalyzer({
    env: {
      NEXT_PUBLIC_ENV: 'PRODUCTION',
    },
  }),
  {
    // next.js config
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
  }
);
