const path = require('path');
require('dotenv').config();

module.exports = {
  env: {
    SERVICE_URL: process.env.SERVICE_URL,
    MINIO_URL: process.env.MINIO_URL,
    REQUEST_DEMO_URL: process.env.REQUEST_DEMO_URL,
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
          // emitError: true,
          emitWarning: true,
          // configFile: path.join(__dirname, '/../.eslintrc')

          configFile: path.join(__dirname, './.eslintrc.js')

        }
      });
    }
    return config
  }
}