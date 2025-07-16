// 组件库入口文件
import * as antd from 'ant-design-vue';
import type { App } from 'vue';

import * as components from './components';
import { Menu } from './components';

// 导出所有组件
export * from './components';

// 导出ant-design-vue中的所有内容（除了组件以外的工具、样式等）
// 不再直接导出所有内容，避免与定制组件冲突
// export * from 'ant-design-vue';

// 手动导出未定制的组件
// 从ant-design-vue中导出Button等未定制组件
export const { Button, Divider, Form, Input, Select, Table, Tabs, Modal, Dropdown, Card } = antd;

// 导出Menu的子组件
export const { MenuItem, SubMenu, MenuDivider, ItemGroup: MenuItemGroup } = Menu;

// 安装所有组件的方法
export const install = (app: App) => {
  // 注册所有组件
  Object.entries(components).forEach(([name, comp]) => {
    if (name !== 'default') {
      app.component(name, comp);
    }
  });

  // 注册未定制的组件
  Object.entries(antd).forEach(([key, value]) => {
    // 检查是否为组件（组件通常有install方法或者是对象）
    if (
      key !== 'default' &&
      !components[key as keyof typeof components] &&
      typeof value === 'object' &&
      value !== null
    ) {
      app.component(key, value as unknown as object);
    }
  });

  // 导出ant-design-vue中的其他内容（非组件）到全局属性
  Object.entries(antd).forEach(([key, value]) => {
    // 检查是否为组件（组件通常有install方法或者是对象）
    if (key !== 'default' && !components[key as keyof typeof components]) {
      // 使用全局属性方式导出非组件内容
      (app.config.globalProperties as Record<string, unknown>)[`$${key}`] = value;
    }
  });

  return app;
};

// 创建一个不包含 install 方法的对象
const exportedComponents = { ...components.default };

// 添加 install 方法
export default {
  ...exportedComponents,
  install,
};
