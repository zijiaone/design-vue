import type { EmptyProps } from 'ant-design-vue';
import { Empty as AntEmpty } from 'ant-design-vue';
import { defineComponent, h } from 'vue';

import ConfigProvider from '../config-provider';

/**
 * 获取默认空状态图片的工具函数
 * @returns 默认空状态图片的URL
 */
function getDefaultEmptyImage(): string {
  try {
    // 使用相对路径引用assets目录下的自定义空状态图片
    return new URL('../assets/empty.svg', import.meta.url).href;
  } catch (error) {
    console.warn('[Empty] 无法加载自定义空状态图片，将使用默认图片:', error);
    // 如果加载失败，返回undefined让ant-design-vue使用默认图片
    return '';
  }
}

/**
 * 处理Empty组件属性的工具函数
 * @param userProps 用户传入的属性
 * @returns 处理后的属性对象
 */
function processEmptyProps(userProps: Record<string, unknown>): Record<string, unknown> {
  const customProps = { ...userProps };

  // 如果用户没有指定image属性，则使用自定义的默认图片
  if (!customProps.image) {
    const defaultImage = getDefaultEmptyImage();
    if (defaultImage) {
      customProps.image = defaultImage;
    }
  }

  return customProps;
}

/**
 * 自定义Empty组件
 *
 * 基于ant-design-vue的Empty组件，提供以下增强功能：
 * 1. 自动应用自定义的默认空状态图片
 * 2. 继承外层ConfigProvider的主题配置
 * 3. 保持与原组件的完全兼容性
 * 4. 提供更好的错误处理机制
 */
export default defineComponent({
  name: 'EmptyPlaceholder',
  inheritAttrs: true,
  setup(_: EmptyProps, { attrs, slots }) {
    /**
     * 渲染函数
     * 处理属性配置并渲染包装在ConfigProvider中的ant-design-vue Empty组件
     */
    return () => {
      // 处理组件属性，包括默认图片设置
      const customProps = processEmptyProps(attrs);

      // 使用ConfigProvider包装AntEmpty组件以确保主题一致性
      // 不设置theme属性，这样可以继承外层ConfigProvider的主题配置
      // 如果没有外层ConfigProvider，自定义ConfigProvider会应用默认主题
      return h(
        ConfigProvider,
        {}, // 空配置对象，让组件能够继承外层ConfigProvider的主题设置
        {
          // 在主题上下文中渲染AntEmpty组件，传递处理后的属性和所有插槽
          default: () => h(AntEmpty, customProps, slots),
        },
      );
    };
  },
});

// 导出原始组件的所有属性和方法
export * from 'ant-design-vue/es/empty';
