module.exports = {
  images: {
    domains: ['localhost'], // Allow images from your localhost
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
