const path = require('path');
const CURRENT_WORKING_DIR = process.cwd();

const {
  port,
  appName,
  buildFolder,
  absolutePublicPath
} = require('../config/app');

module.exports = {
  public: absolutePublicPath,
  localhost: `http://localhost:${port}/`,
  devServerContent: path.resolve(CURRENT_WORKING_DIR, 'public'),

  components: path.resolve(CURRENT_WORKING_DIR, 'src/components'),
  interfaces: path.resolve(CURRENT_WORKING_DIR, 'src/interfaces'),
  helpers: path.resolve(CURRENT_WORKING_DIR, 'src/utils'),
  styles: path.resolve(CURRENT_WORKING_DIR, 'styles'),
  assets: path.resolve(CURRENT_WORKING_DIR, 'assets'),

  root: path.resolve(CURRENT_WORKING_DIR),
  app: path.resolve(CURRENT_WORKING_DIR, 'src'),
  configs: path.resolve(CURRENT_WORKING_DIR, 'config'),
  build: path.resolve(CURRENT_WORKING_DIR, buildFolder),
  modules: path.resolve(CURRENT_WORKING_DIR, 'node_modules'),
};
