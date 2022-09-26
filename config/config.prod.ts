import { defineConfig } from 'umi';

export default defineConfig({
  esbuild: {},
  define: {
    APP_ENV: 'prod',
    API_BASE: 'prod',
  },
  chainWebpack(config) {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          minSize: 30000,
          minChunks: 2,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test: /(react|react-dom|react-dom-router|babel-polyfill)/,
              chunks: 'all',
              priority: 100,
            },
            antd: {
              name: 'antd',
              test: /antd/,
              chunks: 'async',
              priority: 90,
            },
            commons: {
              // 其余同步加载包
              chunks: 'all',
              minChunks: 2,
              name: 'commons',
              priority: 80,
              // 这里需要注意下，webpack5会有问题， 需加上这个 enforce: true，
              // refer: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/257#issuecomment-432594711
              enforce: true,
            },
          },
        },
      },
    });
  },
});
