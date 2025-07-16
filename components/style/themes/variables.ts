// 主题变量定义 - TypeScript 版本

// 导出主题变量对象
export const theme = {
  // 主题色定制
  primaryColor: '#1890ff', // 主色调
  primaryColorHover: '#40a9ff', // 主色调悬停色
  primaryColorActive: '#096dd9', // 主色调激活色
  primaryColorOutline: 'rgba(24, 144, 255, 0.2)', // 主色调轮廓色

  // 功能色
  successColor: '#52c41a', // 成功色
  warningColor: '#faad14', // 警告色
  errorColor: '#f5222d', // 错误色
  infoColor: '#1890ff', // 信息色

  // 中性色
  textColor: 'rgba(0, 0, 0, 0.85)', // 主要文本色
  textColorSecondary: 'rgba(0, 0, 0, 0.45)', // 次要文本色
  disabledColor: 'rgba(0, 0, 0, 0.25)', // 禁用色
  borderColor: '#d9d9d9', // 边框色
  backgroundColor: '#f5f5f5', // 背景色

  // 菜单组件配色定制
  menuBgLight: '#ffffff', // 亮色主题背景色
  menuBgDark: '#001529', // 暗色主题背景色
  menuItemSelectedColor: '#1890ff', // 选中项文字颜色
  menuItemSelectedBg: 'rgba(24, 144, 255, 0.1)', // 选中项背景色
  menuItemSelectedBgHover: 'rgba(24, 144, 255, 0.2)', // 选中项悬停背景色
  menuItemHoverColor: '#1890ff', // 悬停项文字颜色
  menuItemHoverBg: 'rgba(24, 144, 255, 0.05)', // 悬停项背景色

  // 结果组件插图定制
  resultSuccessColor: '#52c41a',
  resultInfoColor: '#1890ff',
  resultWarningColor: '#faad14',
  resultErrorColor: '#f5222d',

  // 结果组件图片路径
  resultSuccessImage: '/assets/images/result-success.svg',
  resultInfoImage: '/assets/images/result-info.svg',
  resultWarningImage: '/assets/images/result-warning.svg',
  resultErrorImage: '/assets/images/result-error.svg',
  result404Image: '/assets/images/result-404.svg',
  result403Image: '/assets/images/result-403.svg',
  result500Image: '/assets/images/result-500.svg',

  // 空状态组件背景图
  emptyImageDefault: '/assets/images/empty-default.svg',
  emptyImageSimple: '/assets/images/empty-simple.svg',
};

// 导出默认主题
export default theme;
