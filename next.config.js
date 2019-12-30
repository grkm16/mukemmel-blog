module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });

    return config;
  },
  env: {
    MLAB_CONNECTION_STRING: "mongodb://admin:admin123@ds111876.mlab.com:11876/specialproject"
  }
};
