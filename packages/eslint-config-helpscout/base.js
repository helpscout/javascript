module.exports = {
  extends: [
    'eslint-config-helpscout/legacy',
    'eslint-config-helpscout/rules/es6',
  ].map(require.resolve),
  rules: {}
};
