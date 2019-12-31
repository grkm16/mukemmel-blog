const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

  
module.exports = withCSS(withSass({
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
}));
