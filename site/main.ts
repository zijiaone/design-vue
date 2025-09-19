import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

// 全局注册组件库
// import DesignVue from '../components';

const app = createApp(App);

// 注册路由
app.use(router);

// 注册组件库
// app.use(DesignVue);

app.mount('#app');
