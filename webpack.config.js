/* eslint-disable import/no-extraneous-dependencies */


// Initialization
const webpack = require('webpack');

// File ops
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Folder ops
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

/* eslint-enable import/no-extraneous-dependencies */

// Constants
const SRC = path.join(__dirname, 'src');
const BUILD = path.join(__dirname, 'build');
const NODE_MODULES = path.join(__dirname, 'node_modules');
const STYLE = path.join(__dirname, 'src', 'FoodleUI.scss');

const DEMO = path.join(__dirname, 'demo');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

module.exports = {
  entry: {
    // Components
    // Button: path.join(COMPONENTS, 'Button'),

    // Style:
    // 'react-ui': STYLE,

    // Demo App
    main: [
      path.join(DEMO, 'main'),
      path.join(DEMO, 'main.scss')
    ]
  },
  output: {
    path: BUILD,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css']
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader?sourceMap',
            options: {
              importLoaders: 1
            }
          },
          { loader: 'sass-loader?sourceMap' }
        ],
        include: [DEMO, STYLE, NODE_MODULES]
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader?cacheDirectory'],
        exclude: NODE_MODULES
      },
      {
        test: /\.json$/,
        use: ['json-loader'],
        include: [SRC, NODE_MODULES]
      }
    ]
  },
  // Source maps used for debugging information
  devtool: 'eval-source-map',
  // webpack-dev-server configuration
  devServer: {
    historyApiFallback: true,
    hot: true,
    // progress: true,

    stats: 'errors-only',

    host: HOST,
    port: PORT,

    // CopyWebpackPlugin: This is required for webpack-dev-server.
    // The path should be an absolute path to your build destination.
    contentBase: BUILD
  },
  // Webpack plugins
  plugins: [
    // Required to inject NODE_ENV within React app.
    // Reduntant package.json script entry does not do that, but required for .babelrc
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development') // eslint-disable-line quote-props
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: path.join(DEMO, 'public'), to: BUILD }
    ],
    {
      ignore: [
        // Doesn't copy Mac storage system files
        '.DS_Store'
      ]
    }
    ),
    new HtmlWebpackPlugin({
      template: path.join(DEMO, 'index.html'),
      // JS placed at the bottom of the body element
      inject: 'body'
    })
  ]
};
