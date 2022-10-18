const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
  inlineImageLimit: 16384,
  experimental: {
    //outputStandalone: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Perform customizations to webpack config
    // Important: return the modified config

    config.resolve.extensions = [
      ...config.resolve.extensions,
      '.ts', '.tsx', '.json'
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname)
    }

    config.resolve.fallback = {
      ...config.resolve.fallback,
      'fs': false,
      'path': false
    }

    return config;

  }
}

module.exports = nextConfig
