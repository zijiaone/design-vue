import { createRouter, createWebHistory } from 'vue-router';

import Layout from '../components/Layout.vue';

// 组件分类
const componentCategories = {
  custom: '定制组件',
  original: '原始组件',
};

// 组件路由配置
const componentRoutes = [
  // 定制组件
  {
    path: 'custom/empty',
    name: 'EmptyComponent',
    component: () => import('../views/components/custom/Empty.vue'),
    meta: { title: 'Empty 空状态', category: 'custom' },
  },
  {
    path: 'custom/config-provider',
    name: 'ConfigProvider',
    component: () => import('../views/components/custom/ConfigProvider.vue'),
    meta: { title: 'ConfigProvider 全局配置', category: 'custom' },
  },

  // 原始组件
  {
    path: 'original/button',
    name: 'Button',
    component: () => import('../views/components/original/Button.vue'),
    meta: { title: 'Button 按钮', category: 'original' },
  },
  {
    path: 'original/input',
    name: 'Input',
    component: () => import('../views/components/original/Input.vue'),
    meta: { title: 'Input 输入框', category: 'original' },
  },
  {
    path: 'original/select',
    name: 'Select',
    component: () => import('../views/components/original/Select.vue'),
    meta: { title: 'Select 选择器', category: 'original' },
  },
];

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        redirect: '/custom/empty',
      },
      ...componentRoutes,
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export { componentCategories };
export default router;
