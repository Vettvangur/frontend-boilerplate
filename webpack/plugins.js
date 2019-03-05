const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const paths = require('./paths');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let cleanOptions = {
  verbose:  true,
  dry:      false,
  allowExternal: true,
}


module.exports = ({ isProduction = false, isServer = false }) => {
  const productionPlugins = [
    new CleanWebpackPlugin(paths.build, cleanOptions),
  ]
  const developmentPlugins = [
  ];
  const plugins = [
    new MiniCssExtractPlugin({
      filename: isProduction ? `css/[name].min.css` : `css/[name].css`,
      chunkFilename: isProduction ? 'css/[id].css' : 'css/[id].css',
    }),
  ]
  if (isProduction) {
    return productionPlugins.concat(plugins)
  }
  return developmentPlugins.concat(plugins)
}