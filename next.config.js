/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
    // Allow builds even when there are ESLint errors
    ignoreBuildErrors: true,
  },
  images: { 
    unoptimized: true, 
    // Add allowed domains for external image sources
    domains: ['cryptologos.cc', 'upload.wikimedia.org', 'app.uploadcare.com'],
  },
  webpack: (config, { isServer }) => {
    // Webpack configuration for WSL
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
      ignored: [
        '**/node_modules',
        '**/.git',
        '**/.next',
        '**/dist',
        '/mnt/c/pagefile.sys',
        '/mnt/c/swapfile.sys',
        '/mnt/c/hiberfil.sys'
      ]
    };

    // Disable caching for development
    if (process.env.NODE_ENV === 'development') {
      config.cache = false;
    }

    return config;
  },
  // Increase timeout for development
  experimental: {
    workerThreads: true,
    cpus: 1
  }
};

module.exports = nextConfig;
