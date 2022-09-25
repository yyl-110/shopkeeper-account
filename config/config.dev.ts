import { defineConfig } from 'umi';

export default defineConfig({
  devtool: 'eval',
  esbuild: {},
  define: {
    APP_ENV: 'dev',
    API_BASE: 'dev',
  },
});
