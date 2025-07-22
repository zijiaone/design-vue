import { createApp } from 'vue';

import App from './App.vue';

const app = createApp(App);

// 全局注册组件库
// import DesignVue from '../components';
// app.use(DesignVue);

app.mount('#app');
