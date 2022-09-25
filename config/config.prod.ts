import { defineConfig } from 'umi';

export default defineConfig({
  esbuild: {},
  define: {
    APP_ENV: 'prod',
    API_BASE: 'prod',
  },
});
