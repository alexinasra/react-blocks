const path = require('path');

module.exports = {
  components: 'src/components/**/*.jsx',
  styleguideDir: path.join(__dirname, 'styleguide'),
  require: [
      path.join(__dirname, './src/react-blocks.scss')
  ],
  ignore: ['**/index.jsx']
};
