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
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test: /(react|react-dom|react-dom-router|babel-polyfill)/,
              chunks: 'all',
              priority: 100
            },
            antd: {
              name: "antd",
              test: /antd/,
              chunks: "async",
              priority: 90
            },
          },
        },
      },
    });
  },
});
