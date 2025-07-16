import { Result as AntdResult } from 'ant-design-vue';
import type { App, Plugin } from 'vue';

import './style';

// 继承原Result组件的所有属性和方法
const Result = Object.assign({}, AntdResult, {
  install: (app: App) => {
    // eslint-disable-next-line vue/multi-word-component-names
    app.component('Result', AntdResult);
    app.component('AResult', AntdResult);

    return app;
  },
});

export { Result };
export default Result as typeof AntdResult & Plugin;
