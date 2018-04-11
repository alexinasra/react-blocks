const path = require('path');

module.exports = {
  components: 'src/components/**/*.jsx',
  template: path.join(__dirname, 'styleguide/index.html'),
  require: [
      path.join(__dirname, './src/react-blocks.scss')
  ],
  ignore: ['**/index.jsx']
};
