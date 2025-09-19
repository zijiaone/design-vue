<template>
  <div class="site-layout">
    <header class="site-header fixed">
      <div class="logo">Design Vue</div>
      <nav class="main-nav"></nav>
    </header>

    <div class="site-content">
      <aside class="site-sidebar">
        <div
          v-for="(title, category) in componentCategories"
          :key="category"
          class="sidebar-category">
          <h3 class="category-title">{{ title }}</h3>
          <ul class="component-list">
            <li
              v-for="route in getComponentsByCategory(category)"
              :key="route.path">
              <RouterLink
                :class="{ active: $route.path === '/' + route.path }"
                :to="{ path: route.path }">
                {{ route.meta.title }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </aside>

      <main class="site-main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import { componentCategories } from '../router';

export default defineComponent({
  name: 'SiteLayout',
  setup() {
    const router = useRouter();
    // const route = useRoute();

    const getComponentsByCategory = (category: string) => {
      return router
        .getRoutes()
        .filter((route) => route.meta?.category === category)
        .map((route) => ({
          path: route.path,
          meta: route.meta,
        }));
    };

    return {
      componentCategories,
      getComponentsByCategory,
    };
  },
});
</script>

<style lang="less" scoped>
.site-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

.site-header {
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 24px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);

  &.fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
  }
}

.logo {
  font-size: 18px;
  font-weight: bold;
  color: #1890ff;
}

.main-nav {
  display: flex;
  gap: 24px;

  a {
    color: #333;
    text-decoration: none;

    &:hover {
      color: #1890ff;
    }
  }
}

.site-content {
  position: fixed;
  inset: 64px 0 0;
  display: flex;
  flex: 1;
  height: calc(100vh - 64px); /* 减去头部高度 */
  overflow: hidden; /* 防止整体滚动 */
}

.site-sidebar {
  width: 260px;
  height: 100%;
  overflow-y: auto;
  background-color: #fff;
  border-right: 1px solid #f0f0f0;
}

.sidebar-category {
  margin-bottom: 16px;
}

.category-title {
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.component-list {
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    margin: 4px 0;
  }
}

.component-list a {
  display: block;
  padding: 8px 24px 8px 32px;
  font-size: 14px;
  color: #666;
  text-decoration: none;
}

.component-list a:hover {
  color: #1890ff;
  background-color: #e6f7ff;
}

.component-list a.router-link-active {
  position: relative;
  padding-left: 29px;
  color: #1890ff;
  background-color: #e6f7ff;
  border-left: 3px solid #1890ff;
}

.site-main {
  flex: 1;
  height: 100%;
  padding: 24px;
  overflow-y: auto;
  background-color: #f5f5f5;
}
</style>
