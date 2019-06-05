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
        terserOptions: {
           compress: {
               drop_console: isProduction,
           },
        },
        parallel: isProduction,
        sourceMap: !isProduction, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 0,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}
