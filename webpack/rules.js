const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globImporter = require('node-sass-glob-importer');
const paths = require('./paths');
const path = require('path');


module.exports = ({
  isProduction = false,
  isServer = false
}) => {
  const typescript = {
    test: /\.(js|jsx|ts|tsx)$/,
    test: /\.m?ts$/,
    exclude: /node_modules/,
    use: [{
      loader: 'awesome-typescript-loader',
    }, ],
  };
  const scss = {
    test: /\.s?css$/,
    exclude: /node_modules/,
    use: [
      ...(!isProduction ? ['css-hot-loader'] : []),
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: false,
          // localIdentName: isProduction ? '[name]__[local]--[hash:base64:5]' : '[name]__[local]',
          sourceMap: isProduction ? false : true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: paths.configs
          }
        }
      },
      {
        loader: 'sass-loader',
        options: {
          importer: globImporter(),
          includePaths: [
            path.resolve(__dirname, 'styles/base/**/*.scss'),
            //path.resolve(__dirname, 'node_modules/foundation-sites/scss'), for foundation
          ]
        },
      },
      {
        loader: '@epegzz/sass-vars-loader',
        options: {
          syntax: 'scss',
          files: [
            path.resolve(__dirname, '../styles/resources/colors.js'),
            path.resolve(__dirname, '../styles/resources/media-breakpoints.js')
          ],
        },
      },
      {
        // Imports resources into all SCSS files.
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.resolve(__dirname, '../styles/resources/functions/*.scss'),
            path.resolve(__dirname, '../styles/resources/mixins/*.scss'),
          ]
        },
      },
    ],
  };
  const fonts = [{
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
          name: 'fonts/[name].[ext]',

          publicPath: (url, resourcePath, context) => {
            if (isProduction) {
              return paths.public + url;
            }
            return '/assets/' + url;
          },
        },
      }],
    },
    {
      test: /\.(ttf)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          mimetype: 'application/font-ttf',
          name: 'fonts/[name].[ext]',

          publicPath: (url, resourcePath, context) => {
            if (isProduction) {
              return paths.public + url;
            }
            return '/assets/' + url;
          },
        },
      }],
    }
  ]

  return [typescript, scss, ...fonts];
}