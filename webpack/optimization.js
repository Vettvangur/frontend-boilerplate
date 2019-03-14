const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { isProduction, isDebug } = require('../config/app');

module.exports = ({
  isProduction = false,
}) => {
  return {
    minimizer: [
      new TerserPlugin({
        cache: !isProduction,
        terserOptions: {},
        parallel: isProduction,
        sourceMap: !isProduction, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  }
}
