const paths = require('./paths');

module.exports = {
  extensions: [
    '.ts',
    '.tsx',
    '.js',
    '.jsx',
    '.scss',
  ],

  modules: [
    'node_modules',
    paths.modules,
    paths.styles,
    paths.app,
  ],

  alias: paths,
};