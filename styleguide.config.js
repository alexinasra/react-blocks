const path = require('path');
const process = require('process');
process.traceDeprecation = true;

module.exports = {
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
