const paths = require('./paths');
const settings = require('../config/settings')

module.exports = {
  contentBase: paths.assets,
  compress: settings.minifyDevelopment,
  port: settings.port,
  open: false,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  disableHostCheck: true, // Temp fix: https://github.com/webpack/webpack-dev-server/issues/1604
}