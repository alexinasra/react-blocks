const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const entry = {
    Avatar: './src/components/Avatar/Avatar',
    'foodle-ui': [
      './src/FoodleUI.scss'
    ]
  };

  const output = {
    path: path.join(__dirname, './dist/'),
    filename: '[name].js',
    libraryTarget: 'umd',
    publicPath: '/dist/'
  };


  const loaders = [
    {
      test: /\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      include: path.join(__dirname, 'src'),
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader?sourceMap!sass-loader? sourceMap'
      })
    }
  ];

  const plugins = [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
      disable: false
    })
  ];
  return {
    devtool: 'source-map',
    entry,
    output,
    module: { loaders },
    plugins
  };
};
