const nextConfig = {
  experimental: {
    appDir: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  images: {
    loader: 'default',
    domains: ['cdn.weatherapi.com']
  }
};

module.exports = nextConfig;
