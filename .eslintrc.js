const path = require('path');

module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "flowtype",
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
    "flowtype/boolean-style": [
      2,
      "boolean"
    ],
    "flowtype/define-flow-type": 1,
    "flowtype/delimiter-dangle": [
      2,
      "never"
    ],
    "flowtype/generic-spacing": [
      2,
      "never"
    ],
    "flowtype/no-primitive-constructor-types": 2,
    "flowtype/no-types-missing-file-annotation": 0,
    "flowtype/no-weak-types": 2,
    "flowtype/object-type-delimiter": [
      2,
      "comma"
    ],
    "flowtype/require-parameter-type": 2,
    "flowtype/require-return-type": [
      2,
      "always",
      {
        "annotateUndefined": "never"
      }
    ],
    "flowtype/require-valid-file-annotation": 2,
    "flowtype/semi": [
      2,
      "always"
    ],
    "flowtype/space-after-type-colon": [
      2,
      "always"
    ],
    "flowtype/space-before-generic-bracket": [
      2,
      "never"
    ],
    "flowtype/space-before-type-colon": [
      2,
      "never"
    ],
    "flowtype/type-id-match": 0,
    "flowtype/union-intersection-spacing": [
      2,
      "always"
    ],
    "flowtype/use-flow-type": 1,
    "flowtype/valid-syntax": 1,
    "react/jsx-indent": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-filename-extension": 0,
    "react/destructuring-assignment": [1, "never"],
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
    },
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
  }
};
