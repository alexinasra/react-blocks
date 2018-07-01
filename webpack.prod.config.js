const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const entry = {
    Avatar: './src/components/Avatar/index.jsx',
    BottomLine: './src/components/BottomLine/index.jsx',
    Button: './src/components/Button/index.jsx',
    Card: './src/components/Card/index.jsx',
    Collapse: './src/components/Collapse/index.jsx',
    Divider: './src/components/Divider/index.jsx',
    Dropdown: './src/components/Dropdown/index.jsx',
    Form: './src/components/Form/index.jsx',
    GridLayout: './src/components/GridLayout/index.jsx',
    GridList: './src/components/GridList/index.jsx',
    Icon: './src/components/Icon/index.jsx',
    List: './src/components/List/index.jsx',
    Menu: './src/components/Menu/index.jsx',
    Nav: './src/components/Nav/index.jsx',
    Scrollbar: './src/components/Scrollbar/index.jsx',
    Subheader: './src/components/Subheader/index.jsx',
    TextCounter: './src/components/TextCounter/index.jsx',
    Title: './src/components/Title/index.jsx',
    Toolbar: './src/components/Toolbar/index.jsx',
    LocaleContext: './src/context/LocaleContext',
    ThemeContext: './src/context/ThemeContext',
    CssClassToggle: './src/hocs/CssClassToggle',
    'react-blocks': [
      './src/react-blocks.scss'
    ]
  };

  const output = {
    path: path.join(__dirname, './dist/'),
    filename: '[name].js',
    library: 'ReactBlocks',
    libraryTarget: 'commonjs2',
    publicPath: '/dist/'
  };


  const loaders = [
    {
      test: /\.jsx$/,
      use: [{
        loader: 'babel-loader?cacheDirectory'
      }, {
        loader: 'eslint-loader'
      }],
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      include: path.join(__dirname, 'src'),
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader?sourceMap!sass-loader? sourceMap'
      })
    }
  ];

  const plugins = [
    new webpack.LoaderOptionsPlugin({
         // test: /\.xxx$/, // may apply this only for some modules
         options: {
           external: ['react', 'react-dom' ,'prop-types', 'classnames'],
         }
       }),
    new ExtractTextPlugin('[name].css')
  ];
  return {
    mode: 'production',
    target: 'node',
    resolve: {
      extensions: ['.js', '.jsx', '.scss', '.css'],
      alias: {
        '@hocs': path.resolve(__dirname, 'src/hocs'),
        '@context': path.resolve(__dirname, 'src/context'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@scss-mixins': path.resolve(__dirname, 'src/mixins')
      }
    },
    entry,
    output,
    module: { rules: loaders },
    plugins
  };
};
