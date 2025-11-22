/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'pukllay.s3.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

