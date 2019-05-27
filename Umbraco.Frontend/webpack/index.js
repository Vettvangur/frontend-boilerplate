const devServer = require('./devServer');
const optimize = require('./optimization');
const paths = require('./paths');
const plugins = require('./plugins');
const resolve = require('./resolve');
const rules = require('./rules');


module.exports = (env = {
  production: false,
  server: false
}) => {
  const isProduction = env && env.production;
  const isServer = env && env.server;

  const config = {
    isProduction,
    isServer,
  };
  return {
    entry: isProduction ? {
      main: '../src/index.ts',
      styles: '../styles/styles.scss'
    } : {
        main: '../src/index.ts',
        styles: '../styles/styles.ts'
      },

    output: {
      path: paths.build,
      filename: isProduction ? '[name].min.js' : '[name].js',
      chunkFilename: isProduction ? '[name].[chunkhash:6].js' : '[name].js',
      publicPath: isProduction ? paths.public : paths.localhost,
    },

    context: paths.app,

    devServer,

    devtool: isProduction ? 'cheap-module-source-map' : 'eval-source-map',

    mode: isProduction ? 'production' : 'development',

    module: {
      rules: rules(config),
    },

    plugins: plugins(config),

    optimization: optimize(config),

    resolve,


    watch: !isProduction,
  }
}