# Design Vue 组件库

基于 ant-design-vue 定制的组件库，使用方式与 ant-design-vue 完全一致。

## 特性

- 与 ant-design-vue 使用方式完全一致
- 支持全量引入和按需引入
- 定制主题色和样式变量
- 定制导航菜单组件配色
- 定制结果组件插图
- 定制空状态组件背景图

## 安装

```bash
npm install design-vue
```

## 使用方式

### 全量引入

```js
import { createApp } from 'vue';
import DesignVue from 'design-vue';
import 'design-vue/dist/style.css';
import App from './App.vue';

const app = createApp(App);
app.use(DesignVue);
app.mount('#app');
```

### 按需引入

```js
import { createApp } from 'vue';
import { Button, Menu } from 'design-vue';
import 'design-vue/es/button/style';
import 'design-vue/es/menu/style';
import App from './App.vue';

const app = createApp(App);
app.use(Button);
app.use(Menu);
app.mount('#app');
```

### 使用组件

```vue
<template>
  <div>
    <Button type="primary">按钮</Button>
    <Menu mode="horizontal">
      <MenuItem key="1">菜单项 1</MenuItem>
      <MenuItem key="2">菜单项 2</MenuItem>
    </Menu>
  </div>
</template>

<script setup>
import { Button, Menu, MenuItem } from 'design-vue';
</script>
```

## 主题定制

### 使用 ConfigProvider 进行主题定制

```vue
<template>
  <ConfigProvider :theme="{ token: { colorPrimary: '#00b96b' } }">
    <App />
  </ConfigProvider>
</template>

<script setup>
import { ConfigProvider } from 'design-vue';
import App from './App.vue';
</script>
```

### 使用 Less 变量进行主题定制

在 vite.config.js 中配置：

```js
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#00b96b',
          'menu-bg-light': '#f0f2f5',
          'menu-bg-dark': '#001529',
        },
        javascriptEnabled: true,
      },
    },
  },
});
```

## 国际化

```vue
<template>
  <ConfigProvider :locale="zhCN">
    <App />
  </ConfigProvider>
</template>

<script setup>
import { ConfigProvider } from 'design-vue';
import zhCN from 'design-vue/es/locale/zh_CN';
import App from './App.vue';
</script>
```

## 定制组件

本组件库对以下组件进行了定制：

- Menu：导航菜单组件配色定制
- Result：结果组件插图定制
- Empty：空状态组件背景图定制

其他组件与 ant-design-vue 保持一致。