// 导入所有组件样式
import 'ant-design-vue/dist/reset.css';
import './themes/index.less';

// 导出主题变量，方便用户自定义主题
// 不能直接从 Less 文件导出，这里只导入样式，不导出变量
// 用户可以通过 ConfigProvider 组件设置主题变量
