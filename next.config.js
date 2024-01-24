/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',

  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
    // unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/editor',
        destination: '/builder',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
