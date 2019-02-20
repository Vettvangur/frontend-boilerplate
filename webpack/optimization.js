const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = ({
  isProduction = false,
  isServer = false
}) => {
  const Optimization = {
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
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          filename: isProduction ? 'vendor.min.js' : 'vendor.js',
          chunks: 'all',
        },
      },
    }
  }
  return Optimization;
}
