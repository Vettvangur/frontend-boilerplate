const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { isProduction, isDebug } = require('../config/app');

module.exports = ({
  isProduction = false,
  isServer = false
}) => {
  return {
    minimizer: [
      new TerserPlugin({
        cache: isProduction ? false : true,
        terserOptions: {
          
        },
        parallel: isProduction ? true : false,
        sourceMap: isProduction ? false : true, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  }
}
