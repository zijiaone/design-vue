import { createApp } from 'vue';

import '../components/style'; // 引入定制样式

import DesignVue from '../components'; // 引入定制组件库

import App from './App.vue';

const app = createApp(App);
app.use(DesignVue); // 注册定制组件
app.mount('#app');
