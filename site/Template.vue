<template>
  <Layout style="min-height: 100vh">
    <LayoutSider
      style="background: #fff"
      width="250">
      <div
        class="logo"
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          color: white;
          background: #e75213;
        ">
        Design Vue
      </div>
      <Menu
        v-model:selected-keys="selectedKeys"
        class="component-menu"
        mode="inline"
        @select="handleMenuClick">
        <!-- 定制组件 -->
        <MenuItemGroup
          key="custom"
          title="定制组件">
          <MenuItem
            v-for="component in customComponentList"
            :key="component.name">
            {{ component.name }}
          </MenuItem>
        </MenuItemGroup>
        <!-- 未定制组件 -->
        <MenuItemGroup
          key="standard"
          title="未定制组件">
          <MenuItem
            v-for="component in standardComponentList"
            :key="component.name">
            {{ component.name }}
          </MenuItem>
        </MenuItemGroup>
      </Menu>
    </LayoutSider>
    <LayoutContent style="padding: 24px; background: #fff">
      <div style="min-height: 360px">
        <!-- 组件示例将在这里展示 -->
        <div v-if="selectedKeys.length > 0">
          <h2>{{ selectedKeys[0] }} 组件示例</h2>
          <div class="component-demo">
            <!-- 动态渲染选中的组件 -->
            <component
              :is="currentComponent"
              v-if="currentComponent" />
            <div v-else>无法渲染该组件</div>
          </div>
        </div>
        <div v-else>
          <h2>请从左侧选择一个组件</h2>
        </div>
      </div>
    </LayoutContent>
  </Layout>
</template>

<script setup lang="ts">
import { Layout, LayoutContent, LayoutSider, Menu, MenuItem, MenuItemGroup } from 'ant-design-vue';
import { onMounted, ref } from 'vue';

import * as Components from '../components/components.ts';
import * as CustomComponents from '../components/index.ts';

// 获取组件列表
const customComponentList = ref<{ name: string; component: unknown }[]>([]);
const standardComponentList = ref<{ name: string; component: unknown }[]>([]);
const selectedKeys = ref<string[]>([]);
const currentComponent = ref<unknown>();

// 定制组件列表
const customComponentNames = ['ConfigProvider', 'Empty'];

onMounted(() => {
  // 过滤出组件，排除非组件属性如 message, notification, version 等
  const componentEntries = Object.entries(Components).filter(([key]) => {
    return !['message', 'notification', 'App', 'version'].includes(key);
  });

  // 获取定制组件
  const customEntries = Object.entries(CustomComponents)
    .filter(([key]) => customComponentNames.includes(key))
    .map(([key, component]) => ({ name: key, component }));

  // 标准组件
  const standardEntries = componentEntries
    .filter(([name]) => !customComponentNames.includes(name))
    .map(([name, component]) => ({ name, component }));

  // 将组件按字母顺序排序
  customComponentList.value = customEntries.sort((a, b) => a.name.localeCompare(b.name));

  standardComponentList.value = standardEntries.sort((a, b) => a.name.localeCompare(b.name));

  // 默认选中第一个组件
  const allComponents = [...customEntries, ...standardEntries];
  if (allComponents.length > 0) {
    selectedKeys.value = [allComponents[0].name];
    currentComponent.value = allComponents[0].component;
  }
});

// 处理菜单项点击
const handleMenuClick = (e: { key: string }) => {
  selectedKeys.value = [e.key];

  // 先从定制组件中查找
  let component = customComponentList.value.find((item) => item.name === e.key)?.component;

  // 如果定制组件中没有找到，则从标准组件中查找
  if (!component) {
    component = standardComponentList.value.find((item) => item.name === e.key)?.component;
  }

  if (component) {
    currentComponent.value = component;
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

.component-menu {
  height: calc(100vh - 48px); /* 固定高度 */
  overflow-y: auto; /* 垂直滚动条 */
  border-right: 1px solid #f0f0f0;
}

/* 美化滚动条样式 */
.component-menu::-webkit-scrollbar {
  width: 6px;
}

.component-menu::-webkit-scrollbar-thumb {
  background-color: rgb(0 0 0 / 20%);
  border-radius: 3px;
}

.component-menu::-webkit-scrollbar-track {
  background-color: rgb(0 0 0 / 5%);
}
</style>
