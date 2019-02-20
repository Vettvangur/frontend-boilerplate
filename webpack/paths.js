const path = require('path');
const settings = require('../config/settings')
const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  app: path.resolve(CURRENT_WORKING_DIR, 'src'),
  configs: path.resolve(CURRENT_WORKING_DIR, 'config'),
  build: path.resolve(CURRENT_WORKING_DIR, 'build'),
  components: path.resolve(CURRENT_WORKING_DIR, 'src/components'),
  helpers: path.resolve(CURRENT_WORKING_DIR, 'src/utils/helpers'),
  modules: path.resolve(CURRENT_WORKING_DIR, 'node_modules'),
  styles: path.resolve(CURRENT_WORKING_DIR, 'styles'),
  fonts: path.resolve(CURRENT_WORKING_DIR, 'assets/fonts'),
  assets: path.resolve(CURRENT_WORKING_DIR, 'assets'),
  localhost: `http://localhost:${settings.port}/`,
  public: settings.publicPath,
};