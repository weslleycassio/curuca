/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

module.exports = {
  async rewrites() {
      return [
        {
          source: '/addRow',
          destination: 'http://localhost:3009',
        },
      ]
    },
};

module.exports = nextConfig;
