const path = require('path');

module.exports = {
  components: 'src/components/**/*.jsx',
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    }
  },
  require: [
      path.join(__dirname, './src/react-blocks.scss')
  ],
  ignore: ['**/index.jsx']
};
