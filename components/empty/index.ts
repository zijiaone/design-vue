/* eslint-disable vue/multi-word-component-names */
import { Empty as AntdEmpty } from 'ant-design-vue';
import type { App, Plugin } from 'vue';
import { defineComponent, h } from 'vue';

import './style';

// 创建自定义Empty组件，继承原Empty组件的所有属性和方法，但覆盖默认props
const Empty = defineComponent({
  // 使用多词组件名称以符合Vue规范，但在注册时仍使用'Empty'
  name: 'DesignEmpty',
  inheritAttrs: true,
  setup(props, { attrs, slots }) {
    return () =>
      h(
        AntdEmpty,
        {
          image: 'https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original',
          ...attrs,
        },
        slots,
      );
  },
  install: (app: App) => {
    app.component('Empty', Empty);
    return app;
  },
});

// 添加静态属性到组件
// @ts-expect-error - 添加静态属性到defineComponent返回的对象
Empty.PRESENTED_IMAGE_DEFAULT = AntdEmpty.PRESENTED_IMAGE_DEFAULT;
// @ts-expect-error - 添加静态属性到defineComponent返回的对象
Empty.PRESENTED_IMAGE_SIMPLE = AntdEmpty.PRESENTED_IMAGE_SIMPLE;
// @ts-expect-error - 添加image静态属性，确保可以通过Empty.image访问
Empty.image = 'https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original';

export { Empty };
export default Empty as typeof AntdEmpty & Plugin;
