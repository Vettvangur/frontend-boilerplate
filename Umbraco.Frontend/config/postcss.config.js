const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      browsers: ["> 0.5%", "last 2 versions", "Firefox ESR", "not dead", "not ie <= 11"]
    }),
    cssnano({
      preset: 'default',
    }),
  ]
});