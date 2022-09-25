module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
  },
  globals: {
    APP_ENV: true,
    APP_CODE: true,
    CHANNEL_CODE: true,
    APP_VERSION_CODE: true,
    API_BASE: true,
    API_DOCTOR: true,
    API_CHRONIC: true,
    WX_REDIRECT: true,
    SENTRY: true,
  },
  rules: {
    // 强制语句有分号结尾
    semi: [2, 'always'],
    // 强制使用单引号
    quotes: [2, 'single'],
    // jsx属性中强制使用双引号
    'jsx-quotes': [2, 'prefer-double'],
    // 允许使用console.log
    'no-console': 0,
    // 禁止在jsx对象引用括号里两边加空格
    'react/jsx-curly-spacing': [2, 'never'],
    // 操作符前后必须有空格
    'space-infix-ops': 2,
    // 对象字面量中冒号前面禁止有空格，后面必须有空格
    'key-spacing': 2,
    // 对象内首尾必须空格
    'object-curly-spacing': 2,
    // if, function 等的大括号之前必须要有空格
    'space-before-blocks': 2,
    // 箭头函数前后必须有空格
    'arrow-spacing': 2,
    // 禁止多余的空格
    'no-multi-spaces': 2,
    // 禁止代码行结束后面有多余空格
    'no-trailing-spaces': 2,
    // 禁止多余空行
    'no-multiple-empty-lines': 2,
    // 允许标识符中使用悬空下划线
    'no-underscore-dangle': 0,
    'func-names': 0,
    'react/no-array-index-key': 2,
    'consistent-return': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'no-unused-expressions': 0,
    'no-restricted-syntax': 0,
    'no-nested-ternary': 0,
    'no-shadow': 0,
    'no-param-reassign': 0,
    'react/no-danger': 0,
    'jsx-a11y/media-has-caption': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/no-unused-expressions': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
    polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
  },
  globals: {
    page: true,
    API_BASE: true,
    API_DOCTOR: true,
    API_CHRONIC: true,
  },
  rules: {
    'object-curly-spacing': ['error', 'always'],
  },
};
