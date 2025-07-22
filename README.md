# Design Vue

基于 ant-design-vue 的自定义组件库，提供主题定制和组件样式覆盖。

## 特性

- 基于 ant-design-vue 4.x 版本
- 预设自定义主题色（默认为 #e75213）
- 自定义空状态组件背景图
- 支持全量引入和按需引入
- 与 ant-design-vue 使用方式完全一致
- 支持 ES Module 和 CommonJS 两种模块格式
- 完整的 TypeScript 类型支持

## 安装

```bash
npm install design-vue

# 同时需要安装 peer dependencies
npm install ant-design-vue@^4.0.0 vue@^3.2.0
```

## 使用

### 全量引入

```js
import { createApp } from 'vue';
import DesignVue from 'design-vue';
import 'ant-design-vue/dist/reset.css';
import App from './App.vue';

const app = createApp(App);
app.use(DesignVue);
app.mount('#app');
```

### 按需引入

```js
import { Button, Empty, ConfigProvider } from 'design-vue';
```

### 主题定制

组件库预设了默认主题色（#e75213），您可以通过 ConfigProvider 进行覆盖：

```vue
<template>
  <ConfigProvider :theme="{ token: { colorPrimary: '#00b96b' } }">
    <div>内容</div>
  </ConfigProvider>
</template>

<script setup>
import { ConfigProvider } from 'design-vue';
</script>
```

### 国际化支持

```vue
<template>
  <ConfigProvider :locale="locales.en_US">
    <App />
  </ConfigProvider>
</template>

<script setup>
import { ConfigProvider } from 'design-vue';
import { en_US } from 'ant-design-vue/es/locale';

const locales = {
  en_US
};
</script>
```

### 自定义空状态组件

组件库提供了自定义的 Empty 组件，默认使用自定义图片：

```vue
<template>
  <Empty description="暂无数据" />
</template>

<script setup>
import { Empty } from 'design-vue';
</script>
```

## 开发

```bash
# 安装依赖
npm install

# 类型检查
npm run type-check

# 启动开发服务器
npm run dev

# 代码格式化
npm run format

# 代码检查
npm run lint

# 构建组件库
npm run build:lib
```

## 许可证

MIT