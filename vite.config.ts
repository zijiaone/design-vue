import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

// 通用的assetFileNames处理函数
const getAssetFileNames = (options = {}) => {
  const { styleDir = 'style', fixedCssName = null } = options;
  return (assetInfo) => {
    if (assetInfo.name?.endsWith('.css')) {
      return fixedCssName || `${styleDir}/[name][extname]`;
    }
    return 'assets/[name][extname]';
  };
};

// 判断构建模式
const buildMode = process.env.BUILD_MODE;
const isLibBuild = buildMode === 'lib';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          '@ant-primary-color': '#000',
          // 其他 ant-design 变量
        },
        javascriptEnabled: true,
      },
    },
  },
  // 构建配置
  build: {
    lib: {
      entry: resolve(__dirname, 'components/index.ts'),
      name: 'DesignVue',
      fileName: 'index',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: isLibBuild
        ? [
            // ES模块输出
            {
              format: 'es',
              // 配置按需引入的目录结构
              preserveModules: true,
              preserveModulesRoot: 'components',
              // 明确禁用inlineDynamicImports，因为它与preserveModules不兼容
              inlineDynamicImports: false,
              // 为ES格式指定输出目录
              dir: 'es',
              // 确保CSS文件正确输出
              assetFileNames: getAssetFileNames({ styleDir: 'style' }),
              // 在 ES 构建模式下为这些外部化的依赖提供一个全局变量
              globals: {
                vue: 'Vue',
              },
              entryFileNames: '[name].js',
              exports: 'named',
            },
            // CommonJS模块输出
            {
              format: 'cjs',
              // 配置按需引入的目录结构
              preserveModules: true,
              preserveModulesRoot: 'components',
              // 明确禁用inlineDynamicImports，因为它与preserveModules不兼容
              inlineDynamicImports: false,
              // 为CommonJS格式指定输出目录
              dir: 'lib',
              // 确保CSS文件正确输出
              assetFileNames: getAssetFileNames({ styleDir: 'style' }),
              // 在 CJS 构建模式下为这些外部化的依赖提供一个全局变量
              globals: {
                vue: 'Vue',
              },
              entryFileNames: '[name].cjs',
              exports: 'named',
            },
          ]
        : [
            // UMD输出
            {
              format: 'umd',
              // 为UMD格式指定输出目录
              dir: 'dist',
              // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
              globals: {
                vue: 'Vue',
              },
              // UMD构建使用固定的CSS文件名
              assetFileNames: getAssetFileNames({ fixedCssName: 'design-vue.css' }),
              exports: 'named',
              entryFileNames: 'design-vue.umd.js',
              // UMD格式需要指定name
              name: 'DesignVue',
            },
          ],
    },
    // 确保CSS被提取和处理
    cssCodeSplit: isLibBuild,
  },
  server: {
    port: 3001,
  },
});
