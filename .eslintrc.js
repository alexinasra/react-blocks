const path = require('path');

module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true
  },
  "rules": {
    "strict": 0,
    'import/no-unresolved': [2, {commonjs: true, amd: true}],
    'import/named': 2,
    'import/namespace': 2,
    "import/default": 2,
    'import/export': 2,
    'import/extensions': 2,
    "react/jsx-indent": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-filename-extension": 0,
    "import/no-extraneous-dependencies": 0,
    "object-property-newline": 0,
    "no-console": "warn",
    "jsx-a11y/href-no-hash": 0,
    'object-curly-newline': 0,
    "comma-dangle": [
      "warn",
      "never"
    ],
    "indent": [
      "warn",
      2
    ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    /* Advanced Rules*/
    "no-unused-expressions": "warn",
    "no-useless-concat": "warn",
    "block-scoped-var": "error",
    "consistent-return": "error",
    "no-unused-vars": "warn"
  },
  settings: {
    "import/resolver": {
      "webpack": {
        "config": "webpack.config.js"
      }
    }
  }
};
