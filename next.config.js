const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    loader: 'default',
    domains: ['cdn.weatherapi.com']
  }
};

module.exports = nextConfig;
