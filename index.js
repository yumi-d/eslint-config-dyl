/*
 * @Author: dengyl@hrtps.com
 * @Date: 2023-03-31 15:47:02
 * @LastEditors: dengyl dengyl@hrtps.com
 * @LastEditTime: 2023-05-22 17:45:56
 * @FilePath: /eslint-config-dyl/index.js
 */

module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {},
    },
  ],
  rules: {
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'react/jsx-runtime': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-no-literals': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-max-depth': 0,
    'arrow-body-style': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/require-default-props': 0,
    'no-unused-expressions': [1, {
      allowShortCircuit: true,
    }],
  },
};
