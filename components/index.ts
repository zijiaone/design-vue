import type { App } from 'vue';

import * as AntdComponentsRaw from './components'; // 未定制的原始组件
import ConfigProvider from './config-provider';
import Empty from './empty';

/**
 * 导出所有应用了默认主题的 Ant Design Vue 组件
 * 这些组件已经预配置了自定义主题，可以直接使用
 */
export * from './components';

/**
 * 导出定制化组件
 * 这些组件在原有功能基础上进行了增强或定制
 */
export { default as ConfigProvider } from './config-provider';
export { default as Empty } from './empty';

/**
 * 导出主题相关配置
 * - defaultTheme: 默认主题配置
 * - theme: Ant Design Vue 原始主题对象
 */
export { defaultTheme, theme } from './theme';

/**
 * 组件库插件接口
 * 扩展了 Vue 的 Plugin 接口，添加了组件库特有的属性
 */
interface DesignVuePlugin {
  /** Vue 插件安装方法 */
  install: (app: App, options?: InstallOptions) => void;
  /** 组件库版本号 */
  version?: string;
  /** 所有组件的集合 */
  [key: string]: unknown;
}

/**
 * 组件注册选项
 */
interface InstallOptions {
  /** 是否启用调试模式 */
  debug?: boolean;
  /** 自定义组件名前缀 */
  prefix?: string;
}

/**
 * 检查是否为有效的 Vue 组件
 * @param component 待检查的组件
 * @returns 是否为有效组件
 */
function isValidComponent(component: unknown): boolean {
  return (
    typeof component === 'object' &&
    component !== null &&
    ('name' in component || 'render' in component || 'setup' in component)
  );
}

/**
 * 安全注册组件的工具函数
 * @param app Vue 应用实例
 * @param name 组件名称
 * @param component 组件对象
 * @param options 安装选项
 */
function safeRegisterComponent(app: App, name: string, component: unknown, options: InstallOptions = {}): void {
  try {
    const { prefix = '', debug = false } = options;
    const componentName = prefix ? `${prefix}${name}` : name;

    if (isValidComponent(component)) {
      app.component(componentName, component as Record<string, unknown>);

      if (debug) {
        console.log(`[DesignVue] 成功注册组件: ${componentName}`);
      }
    } else if (debug) {
      console.warn(`[DesignVue] 跳过非组件属性: ${name}`);
    }
  } catch (error) {
    console.error(`[DesignVue] 注册组件 ${name} 时发生错误:`, error);
  }
}

/**
 * Design Vue 组件库主插件
 * 提供完整的 Ant Design Vue 组件集合，并应用了自定义主题
 *
 * @example
 * ```typescript
 * // 全量引入
 * import { createApp } from 'vue'
 * import DesignVue from 'design-vue'
 *
 * const app = createApp(App)
 * app.use(DesignVue)
 *
 * // 按需引入
 * import { Button, ConfigProvider } from 'design-vue'
 * ```
 */
const DesignVue: DesignVuePlugin = {
  /**
   * Vue 插件安装方法
   * @param app Vue 应用实例
   * @param options 安装选项
   */
  install(app: App, options: InstallOptions = {}) {
    const { debug = false } = options;

    if (debug) {
      console.log('[DesignVue] 开始安装组件库...');
    }

    // 注册所有应用了默认主题的原始组件
    // AntdComponentsRaw 包含了所有未定制但已应用主题的 Ant Design Vue 组件
    Object.entries(AntdComponentsRaw).forEach(([name, component]) => {
      safeRegisterComponent(app, name, component, options);
    });

    // 注册定制化组件（这些组件会覆盖原始组件）
    const customComponents = {
      ConfigProvider,
      Empty,
    };

    Object.entries(customComponents).forEach(([name, component]) => {
      safeRegisterComponent(app, name, component, options);
    });

    if (debug) {
      console.log('[DesignVue] 组件库安装完成');
    }
  },

  // 导出所有应用了默认主题的原始组件
  ...AntdComponentsRaw,

  // 导出定制化组件（确保覆盖原始组件）
  ConfigProvider,
  Empty,
};

/**
 * 默认导出 Design Vue 组件库插件
 * 支持全量引入和按需引入两种使用方式
 */
export default DesignVue;
