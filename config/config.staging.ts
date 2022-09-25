import { defineConfig } from 'umi';

export default defineConfig({
  devtool: 'eval',
  esbuild: {},
  define: {
    APP_ENV: 'staging',
    API_BASE: 'staging',
  },
});
