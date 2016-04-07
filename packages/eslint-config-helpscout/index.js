module.exports = {
  extends: [
    'eslint-config-helpscout/base',
    'eslint-config-helpscout/rules/strict',
    'eslint-config-helpscout/rules/react',
  ].map(require.resolve),
  rules: {}
};
