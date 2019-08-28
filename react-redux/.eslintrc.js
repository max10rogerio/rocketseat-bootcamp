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
          ['services', './src/services'],
          ['store', './src/store'],
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
    'prettier'
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
    'no-console': ['error', { allow: ['tron'] }],
    'no-inline-comments': 2,
    'multiline-comment-style': [
      2,
      'starred-block'
    ],
    'no-param-reassign': 'off'
  },
};
