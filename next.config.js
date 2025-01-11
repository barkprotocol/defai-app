/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  eslint: {
    ignoreDuringBuilds: true,  // Ignore ESLint errors during build
    ignoreBuildErrors: true,   // Allow builds even when there are ESLint errors
  },

  images: { 
    unoptimized: true,  // Disable optimization for images
    // Add allowed domains for external image sources
    domains: ['cryptologos.cc', 'upload.wikimedia.org', 'app.uploadcare.com'],
  },

  webpack: (config, { isServer }) => {
    // Webpack configuration for WSL (Windows Subsystem for Linux)
    config.watchOptions = {
      poll: 1000,  // Set polling interval for file changes
      aggregateTimeout: 300,  // Delay before rebuilding
      ignored: [
        '**/node_modules',
        '**/.git',
        '**/.next',
        '**/dist',
        '/mnt/c/pagefile.sys',
        '/mnt/c/swapfile.sys',
        '/mnt/c/hiberfil.sys'
      ],
    };

    // Disable caching for development to prevent issues with stale data
    if (process.env.NODE_ENV === 'production') {
      config.cache = false;
    }

    return config;
  },

  // Experimental configuration for better development experience
  experimental: {
    workerThreads: true,  // Enable worker threads for parallel execution
    cpus: 1,  // Limit the number of CPUs to 1 (typically for debugging)
    // Optimize CSS in development mode for performance
    optimizeCss: true, 
  },

  // Customize build directory for static exports (optional)
  distDir: 'build', 

  // Enable SWC for faster build times (default behavior)
  swcMinify: true,  
};

module.exports = nextConfig;
