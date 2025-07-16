/* eslint-disable vue/no-reserved-component-names */
import { Menu as AntdMenu } from 'ant-design-vue';
import type { App, Plugin } from 'vue';

import './style';

// 创建一个新的对象，包含 AntdMenu 的所有属性和方法
interface CustomMenu extends Omit<typeof AntdMenu, 'install'> {
  install: (app: App) => App;
  Item: typeof AntdMenu.Item;
  SubMenu: typeof AntdMenu.SubMenu;
  Divider: typeof AntdMenu.Divider;
  ItemGroup: typeof AntdMenu.ItemGroup;
}

// 使用类型断言创建自定义 Menu 组件
const Menu = {} as CustomMenu;

// 复制 AntdMenu 的属性到 Menu
Object.keys(AntdMenu).forEach((key) => {
  if (key !== 'install') {
    (Menu as unknown)[key] = (AntdMenu as unknown)[key];
  }
});

// 添加自定义 install 方法
Menu.install = (app: App) => {
  // eslint-disable-next-line vue/multi-word-component-names
  app.component('Menu', AntdMenu);
  app.component('AMenu', AntdMenu);
  app.component('MenuItem', AntdMenu.Item);
  app.component('AMenuItem', AntdMenu.Item);
  app.component('SubMenu', AntdMenu.SubMenu);
  app.component('ASubMenu', AntdMenu.SubMenu);
  app.component('MenuDivider', AntdMenu.Divider);
  app.component('AMenuDivider', AntdMenu.Divider);
  app.component('MenuItemGroup', AntdMenu.ItemGroup);
  app.component('AMenuItemGroup', AntdMenu.ItemGroup);

  return app;
};

// 设置子组件
Menu.Item = AntdMenu.Item;
Menu.SubMenu = AntdMenu.SubMenu;
Menu.Divider = AntdMenu.Divider;
Menu.ItemGroup = AntdMenu.ItemGroup;

export { Menu };
export default Menu as typeof AntdMenu & Plugin;
