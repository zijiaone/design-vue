import { resolve } from 'path';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

// 判断是否为库构建模式
const isLibBuild = process.env.BUILD_MODE === 'lib';

export default defineConfig({
  plugins: [
    vue(),
    // 暂时禁用 dts 插件，因为遇到 TypeScript 内部错误
    // 如果需要生成类型声明文件，可以考虑使用其他方法
  ].filter(Boolean),

  // 优化依赖处理
  optimizeDeps: {
    include: ['ant-design-vue'],
    exclude: ['vue'],
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 启用 Less 内联 JavaScript
      },
    },
  },
  resolve: {
    alias: {
      // 使用 es 模块
      // 'ant-design-vue$': '/node_modules/ant-design-vue/es/index.js',
      // 使用 lib 模块
      // 'ant-design-vue': '/node_modules/ant-design-vue/lib/index.js',
      '@': resolve(__dirname, './'),
      'design-vue': resolve(__dirname, './components/'),
    },
  },
  server: {
    port: 3001,
  },

  // 库构建模式的配置
  ...(isLibBuild
    ? {
        build: {
          // 构建产物输出目录
          outDir: 'dist',
          // 构建库模式
          lib: {
            // 入口文件
            entry: resolve(__dirname, 'components/index.ts'),
            // 库名称
            name: 'DesignVue',
            // 文件名称
            fileName: (format) => `design-vue.${format}.js`,
            // 暂时只构建 ES 和 CJS 格式，UMD 格式存在问题
            formats: ['es', 'cjs'],
          },
          // 构建配置
          rollupOptions: {
            // 外部依赖，只保留 vue，移除 ant-design-vue 使其被打包到产物中
            external: ['vue'],
            // 输出配置
            output: [
              // ES模块输出
              {
                format: 'es',
                dir: 'es',
                preserveModules: true,
                preserveModulesRoot: 'components',
                entryFileNames: '[name].js',
                exports: 'named', // 使用命名导出，避免 default 导出警告
              },
              // CommonJS模块输出
              {
                format: 'cjs',
                dir: 'lib',
                preserveModules: true,
                preserveModulesRoot: 'components',
                entryFileNames: '[name].js',
                exports: 'named', // 使用命名导出，避免 default 导出警告
              },
              // UMD模块输出暂时移除，等待后续解决
              // {
              //   format: 'umd',
              //   name: 'DesignVue',
              //   exports: 'auto',
              //   globals: {
              //     vue: 'Vue'
              //   },
              //   interop: 'auto',
              //   generatedCode: {
              //     constBindings: true,
              //     objectShorthand: true,
              //     arrowFunctions: true,
              //     preset: 'es2015'
              //   }
              // },
            ],
          },
          // 完全禁用压缩，避免_typeof.default错误
          minify: false,
          // CSS代码分割
          cssCodeSplit: true,
          // Source Map
          sourcemap: true,
          // 设置目标环境
          target: 'es2015',
        },
      }
    : {}),
});
