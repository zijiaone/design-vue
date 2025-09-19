import type { ConfigProviderProps } from 'ant-design-vue';
import { ConfigProvider as AntConfigProvider } from 'ant-design-vue';
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context';
import { defineComponent, h } from 'vue';

import { defaultTheme } from '../../theme';

/**
 * 合并主题配置的工具函数
 * @param userTheme 用户提供的主题配置
 * @returns 合并后的主题配置
 */
function mergeThemeConfig(userTheme: unknown): ThemeConfig {
  // 如果用户没有提供主题，直接返回默认主题
  if (!userTheme) {
    return defaultTheme;
  }

  // 确保用户主题是对象类型
  if (typeof userTheme !== 'object' || userTheme === null) {
    console.warn('[ConfigProvider] 主题配置必须是对象类型，将使用默认主题');
    return defaultTheme;
  }

  const themeObj = userTheme as ThemeConfig;

  // 如果用户主题没有token配置，使用默认token
  if (!themeObj.token) {
    return {
      ...themeObj,
      token: defaultTheme.token,
    };
  }

  // 合并默认token和用户token，用户token优先级更高
  if (defaultTheme.token) {
    return {
      ...themeObj,
      token: {
        ...defaultTheme.token,
        ...themeObj.token,
      },
    };
  }

  return themeObj;
}

/**
 * 自定义ConfigProvider组件
 *
 * 基于ant-design-vue的ConfigProvider组件，提供以下增强功能：
 * 1. 自动应用默认主题配置
 * 2. 合并用户自定义主题与默认主题
 * 3. 保持与原组件的完全兼容性
 */
export default defineComponent({
  name: 'ConfigProvider',
  inheritAttrs: true,
  setup(_: ConfigProviderProps, { attrs, slots }) {
    /**
     * 渲染函数
     * 处理主题合并逻辑并渲染ant-design-vue的ConfigProvider组件
     */
    return () => {
      // 复制所有传入的属性
      const customProps = { ...attrs };

      // 处理主题配置合并
      customProps.theme = mergeThemeConfig(customProps.theme);

      // 渲染原始的ant-design-vue ConfigProvider组件
      return h(AntConfigProvider, customProps, slots);
    };
  },
});

// 导出原始组件的所有属性和方法
export * from 'ant-design-vue/es/config-provider';
