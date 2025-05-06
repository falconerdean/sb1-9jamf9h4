/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: './',
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    loader: 'default',
    path: '',
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'try-insite.github.io',
        pathname: '/site-data/**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ]
  }
};

module.exports = nextConfig;