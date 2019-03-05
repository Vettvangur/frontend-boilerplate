const path = require('path');
const CURRENT_WORKING_DIR = process.cwd();

const {
  isProduction,
  isDebug,
  port,
  appName
} = require('../config/app');

module.exports = {
  app: path.resolve(CURRENT_WORKING_DIR, 'src'),
  root: path.resolve(CURRENT_WORKING_DIR),
  configs: path.resolve(CURRENT_WORKING_DIR, 'config'),
  build: path.resolve(CURRENT_WORKING_DIR, 'build'),
  components: path.resolve(CURRENT_WORKING_DIR, 'src/components'),
  helpers: path.resolve(CURRENT_WORKING_DIR, 'src/utils'),
  localhost: `http://localhost:${port}/`,
  modules: path.resolve(CURRENT_WORKING_DIR, 'node_modules'),
  styles: path.resolve(CURRENT_WORKING_DIR, 'styles'),

  assets: path.resolve(CURRENT_WORKING_DIR, 'assets'),

  public: `/content/${appName}/`,
  devServerContent: path.resolve(CURRENT_WORKING_DIR, 'public'),
};