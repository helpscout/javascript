module.exports = {
  extends: [
    'eslint-config-helpscout/rules/best-practices',
    'eslint-config-helpscout/rules/errors',
    'eslint-config-helpscout/rules/legacy',
    'eslint-config-helpscout/rules/node',
    'eslint-config-helpscout/rules/style',
    'eslint-config-helpscout/rules/variables'
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};
