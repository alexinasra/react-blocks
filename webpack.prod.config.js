const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const entry = {
    Avatar: './src/components/Avatar/index.jsx',
    Button: './src/components/Button/index.jsx',
    Card: './src/components/Card/index.jsx',
    Divider: './src/components/Divider/index.jsx',
    Icon: './src/components/Icon/index.jsx',
    List: './src/components/List/index.jsx',
    Subheader: './src/components/Subheader/index.jsx',
    Title: './src/components/Title/index.jsx',
    Toolbar: './src/components/Toolbar/index.jsx',
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
    resolve: {
      extensions: ['.js', '.jsx', '.scss', '.css']
    },
    entry,
    output,
    module: { loaders },
    plugins
  };
};
