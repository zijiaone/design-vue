import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 使用 es 模块
      // 'ant-design-vue$': '/node_modules/ant-design-vue/es/index.js',
      // 使用 lib 模块
      // 'ant-design-vue': '/node_modules/ant-design-vue/lib/index.js',
    },
  },
  server: {
    port: 3001,
  },
});
