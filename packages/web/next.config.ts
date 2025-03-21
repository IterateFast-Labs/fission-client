import type { NextConfig } from 'next';
import path from 'path';

const __dirname = new URL('.', import.meta.url).pathname;

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src/'),
    };
    return config;
  },
};

export default nextConfig;
