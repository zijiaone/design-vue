// 导出所有定制组件
import * as antd from 'ant-design-vue';

import { Empty } from './empty';
// 导入定制的组件
import { Menu } from './menu';
import { Result } from './result';

// 不再直接导出所有ant-design-vue组件，避免冲突
// export * from 'ant-design-vue';

// 导出定制的组件
export { Menu };
export { Result };
export { Empty };

// 导出未定制的组件
// 这里我们从 antd 中导出所有组件，但在 index.ts 中我们会手动导出常用的未定制组件
// 这样可以确保所有组件都被包含在构建产物中
export * from 'ant-design-vue';

// 导出其他所有未定制的组件
const exportedComponents = {
  ...antd,
  Menu,
  Result,
  Empty,
};

export default exportedComponents;
