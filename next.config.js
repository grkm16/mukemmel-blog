const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

  
module.exports = withCSS(withSass({
  webpack: (config,{isServer}) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });

    if(!isServer){
      config.node = {
        fs : 'empty',
        net : 'empty',
        tls : 'empty'
      }
    }

    return config;
  },
  env: {
    MLAB_CONNECTION_STRING: "mongodb://admin:admin123@ds111876.mlab.com:11876/specialproject",
    WEBPATH:"http://gorkembayraktar.herokuapp.com",
    GOOGLE_UA:"UA-156499554-1"
  },
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  }
}));
