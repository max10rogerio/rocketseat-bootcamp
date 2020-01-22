module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['assets', './src/assets'],
          ['components', './src/components'],
          ['configs', './src/configs'],
          ['pages', './src/pages'],
          ['utils', './src/utils'],
          ['routes', './src/routes'],
          ['store', './src/store'],
          ['services', './src/services'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.css']
      }
    },
    'import/core-modules': [
      'prop-types',
    ]
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: [
          '.jsx',
          '.js'
        ]
      }
    ],
    'import/prefer-default-export': 'off',
    'no-console': 2,
    'no-inline-comments': 2,
    'no-param-reassign': 0,
    'multiline-comment-style': [
      2,
      'starred-block'
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    'no-underscore-dangle': 'off',
    'camelcase': 'off'
  },
  overrides: [
    {
      files: ["ReactotronConfig.js"],
      rules: {
        'no-console': 'off',
      }
    }
  ]
};
