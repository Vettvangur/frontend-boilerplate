const paths = require('./paths');
const {
  port
} = require('../config/app');

module.exports = {
  contentBase: paths.devServerContent,
  compress: false,
  port: port,
  open: false,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  disableHostCheck: true, // Temp fix: https://github.com/webpack/webpack-dev-server/issues/1604
}