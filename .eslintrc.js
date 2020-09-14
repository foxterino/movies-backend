module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: '2018',
    sourceType: 'module',
  },
  plugins: ['react', 'pretty-imports', 'prettier'],
  rules: {
    'pretty-imports/sorted': 'warn',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
  },
};
