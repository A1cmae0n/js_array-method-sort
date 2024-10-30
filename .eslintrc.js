module.exports = {
  env: {
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2015
  },
  rules: {
    'no-proto': 0
  },
  plugins: ['jest']
};
