# Design Vue

基于 ant-design-vue 定制的组件库，使用方式与 ant-design-vue 完全一致。

## 项目结构

```
├── assets/            # 资源文件目录
│   └── images/        # 图片资源
├── components/        # 组件库源码
│   ├── empty/         # 空状态组件
│   ├── menu/          # 导航菜单组件
│   ├── result/        # 结果组件
│   ├── style/         # 样式文件
│   ├── components.ts  # 组件导出
│   ├── index.ts       # 入口文件
│   └── vite.config.ts # 构建配置
└── site/              # 示例站点
```

## 特性

- 与 ant-design-vue 使用方式完全一致
- 支持全量引入和按需引入
- 定制主题色和样式变量
- 定制导航菜单组件配色
- 定制结果组件插图
- 定制空状态组件背景图

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 构建

```bash
# 构建示例站点
npm run build

# 构建组件库
npm run lib:build-all
```

## 使用方式

详细使用方式请参考 [组件库文档](./components/README.md)。

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
