const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = ({ isProduction = false, isServer = false }) => {
  const productionPlugins = [
    new CleanWebpackPlugin('build', {}),
  ]
  const developmentPlugins = [
    new webpack.HotModuleReplacementPlugin({}),
  ];
  const plugins = [
    new MiniCssExtractPlugin({
      filename: isProduction ? `css/[name].min.css` : `[name].css`,
      chunkFilename: isProduction ? '[id].css' : '[name].css',
    }),
  ]
  if (isProduction) {
    return productionPlugins.concat(plugins)
  }
  return developmentPlugins.concat(plugins)
}