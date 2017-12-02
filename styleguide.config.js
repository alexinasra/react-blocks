const path = require('path');

module.exports = {
  components: 'src/components/**/*.jsx',
  template: path.join(__dirname, 'styleguide/index.html'),
  ignore: ['**/index.jsx']
};
