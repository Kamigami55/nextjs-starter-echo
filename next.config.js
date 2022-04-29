module.exports = {
  reactStrictMode: true,
  // SWC minification for build performance
  // https://nextjs.org/docs/advanced-features/compiler#minification
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    // Enable AVIF support
    formats: ['image/avif', 'image/webp'],
  },
}
