const paths = require('./paths');

module.exports = {
  extensions: [
    '.js',
  ],

  modules: [
    'node_modules',
    paths.modules,
  ],

  alias: paths,
};