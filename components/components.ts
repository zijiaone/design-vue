import type * as AntdTypes from 'ant-design-vue';
import * as AntdComponents from 'ant-design-vue';
import { defineComponent, h, inject } from 'vue';

const { ConfigProvider } = AntdComponents;

// ConfigProvider的注入键
import { configProviderKey } from 'ant-design-vue/es/config-provider/context';

// 导入默认主题
import { defaultTheme } from './theme';

/**
 * 应用默认主题
 *
 * @param {Record<string, unknown>} Component - 需要应用主题的原始组件
 * @returns {ReturnType<typeof defineComponent>} - 应用了默认主题的新组件
 *
 * 1. 如果组件已经在ConfigProvider上下文中，直接渲染原组件，支持主题切换
 * 2. 如果组件不在ConfigProvider上下文中，用ConfigProvider包装并应用默认主题
 */
const applyDefaultTheme = (Component: Record<string, unknown>) => {
  return defineComponent({
    // 为主题化组件添加前缀，便于调试和识别
    name: `Themed${(Component.name as string) || 'Component'}`,
    // 继承原组件的所有属性
    inheritAttrs: true,
    setup(_, { attrs, slots }) {
      return () => {
        // 检测是否已经在ConfigProvider上下文中
        // 通过尝试注入ConfigProvider的上下文来判断
        const configContext = inject(configProviderKey, null);

        // 如果已经在ConfigProvider上下文中，直接渲染原组件
        // 这样可以继承父级ConfigProvider的主题配置，支持主题切换
        if (configContext) {
          return h(Component, attrs, slots);
        }

        // 如果不在ConfigProvider上下文中，用ConfigProvider包装并应用默认主题
        return h(
          ConfigProvider,
          // 应用默认主题
          { theme: defaultTheme },
          {
            // 在主题上下文中渲染原始组件，传递所有属性和插槽
            default: () => h(Component, attrs, slots),
          },
        );
      };
    },
  });
};

/**
 * 存储应用了默认主题的组件集合
 * 该对象保持与原始 AntdComponents 相同的结构，但组件已被应用了自定义主题
 * @type {Record<string, unknown>} - 键为组件名，值为应用了主题的组件或原始非组件属性
 */
const ThemedComponents: Record<string, unknown> = {};

/**
 * 遍历所有 ant-design-vue 组件，为每个组件应用默认主题
 * 只处理组件对象，保留非组件属性（如工具函数、常量等）
 */
Object.entries(AntdComponents).forEach(([key, component]) => {
  // 检查是否为组件对象（排除工具函数、常量等非组件属性）
  if (typeof component === 'object' && component !== null) {
    // 应用默认主题并存储到 ThemedComponents 集合中
    ThemedComponents[key] = applyDefaultTheme(component as Record<string, unknown>);
  } else {
    ThemedComponents[key] = component;
  }
});

/**
 * 导出所有应用了默认主题的组件
 * 每个组件都保持与原始 ant-design-vue 组件相同的类型，但已应用了自定义主题
 * 这样用户可以直接导入这些组件，无需手动应用主题
 */
export const Affix = ThemedComponents.Affix as typeof AntdTypes.Affix;
export const Alert = ThemedComponents.Alert as typeof AntdTypes.Alert;
export const Anchor = ThemedComponents.Anchor as typeof AntdTypes.Anchor;
export const AutoComplete = ThemedComponents.AutoComplete as typeof AntdTypes.AutoComplete;
export const Avatar = ThemedComponents.Avatar as typeof AntdTypes.Avatar;
export const BackTop = ThemedComponents.BackTop as typeof AntdTypes.BackTop;
export const Badge = ThemedComponents.Badge as typeof AntdTypes.Badge;
export const Breadcrumb = ThemedComponents.Breadcrumb as typeof AntdTypes.Breadcrumb;
export const BreadcrumbItem = ThemedComponents.BreadcrumbItem as typeof AntdTypes.BreadcrumbItem;
export const BreadcrumbSeparator = ThemedComponents.BreadcrumbSeparator as typeof AntdTypes.BreadcrumbSeparator;
export const Button = ThemedComponents.Button as typeof AntdTypes.Button;
export const Calendar = ThemedComponents.Calendar as typeof AntdTypes.Calendar;
export const Card = ThemedComponents.Card as typeof AntdTypes.Card;
export const CardGrid = ThemedComponents.CardGrid as typeof AntdTypes.CardGrid;
export const CardMeta = ThemedComponents.CardMeta as typeof AntdTypes.CardMeta;
export const Carousel = ThemedComponents.Carousel as typeof AntdTypes.Carousel;
export const Cascader = ThemedComponents.Cascader as typeof AntdTypes.Cascader;
export const Checkbox = ThemedComponents.Checkbox as typeof AntdTypes.Checkbox;
export const CheckboxGroup = ThemedComponents.CheckboxGroup as typeof AntdTypes.CheckboxGroup;
export const Col = ThemedComponents.Col as typeof AntdTypes.Col;
export const Collapse = ThemedComponents.Collapse as typeof AntdTypes.Collapse;
export const CollapsePanel = ThemedComponents.CollapsePanel as typeof AntdTypes.CollapsePanel;
export const Comment = ThemedComponents.Comment as typeof AntdTypes.Comment;
export const DatePicker = ThemedComponents.DatePicker as typeof AntdTypes.DatePicker;
export const MonthPicker = ThemedComponents.MonthPicker as typeof AntdTypes.MonthPicker;
export const RangePicker = ThemedComponents.RangePicker as typeof AntdTypes.RangePicker;
export const WeekPicker = ThemedComponents.WeekPicker as typeof AntdTypes.WeekPicker;
export const Descriptions = ThemedComponents.Descriptions as typeof AntdTypes.Descriptions;
export const DescriptionsItem = ThemedComponents.DescriptionsItem as typeof AntdTypes.DescriptionsItem;
export const Divider = ThemedComponents.Divider as typeof AntdTypes.Divider;
export const Drawer = ThemedComponents.Drawer as typeof AntdTypes.Drawer;
export const Dropdown = ThemedComponents.Dropdown as typeof AntdTypes.Dropdown;
export const DropdownButton = ThemedComponents.DropdownButton as typeof AntdTypes.DropdownButton;
export const FloatButton = ThemedComponents.FloatButton as typeof AntdTypes.FloatButton;
export const FloatButtonGroup = ThemedComponents.FloatButtonGroup as typeof AntdTypes.FloatButtonGroup;
export const Form = ThemedComponents.Form as typeof AntdTypes.Form;
export const FormItem = ThemedComponents.FormItem as typeof AntdTypes.FormItem;
export const Grid = ThemedComponents.Grid as typeof AntdTypes.Grid;
export const Image = ThemedComponents.Image as typeof AntdTypes.Image;
export const Input = ThemedComponents.Input as typeof AntdTypes.Input;
export const InputPassword = ThemedComponents.InputPassword as typeof AntdTypes.InputPassword;
export const InputSearch = ThemedComponents.InputSearch as typeof AntdTypes.InputSearch;
export const Textarea = ThemedComponents.Textarea as typeof AntdTypes.Textarea;
export const InputGroup = ThemedComponents.InputGroup as typeof AntdTypes.InputGroup;
export const InputNumber = ThemedComponents.InputNumber as typeof AntdTypes.InputNumber;
export const Layout = ThemedComponents.Layout as typeof AntdTypes.Layout;
export const LayoutHeader = ThemedComponents.LayoutHeader as typeof AntdTypes.LayoutHeader;
export const LayoutContent = ThemedComponents.LayoutContent as typeof AntdTypes.LayoutContent;
export const LayoutFooter = ThemedComponents.LayoutFooter as typeof AntdTypes.LayoutFooter;
export const LayoutSider = ThemedComponents.LayoutSider as typeof AntdTypes.LayoutSider;
export const List = ThemedComponents.List as typeof AntdTypes.List;
export const ListItem = ThemedComponents.ListItem as typeof AntdTypes.ListItem;
export const ListItemMeta = ThemedComponents.ListItemMeta as typeof AntdTypes.ListItemMeta;
export const Mentions = ThemedComponents.Mentions as typeof AntdTypes.Mentions;
export const MentionsOption = ThemedComponents.MentionsOption as typeof AntdTypes.MentionsOption;
export const Menu = ThemedComponents.Menu as typeof AntdTypes.Menu;
export const MenuItem = ThemedComponents.MenuItem as typeof AntdTypes.MenuItem;
export const SubMenu = ThemedComponents.SubMenu as typeof AntdTypes.SubMenu;
export const MenuItemGroup = ThemedComponents.MenuItemGroup as typeof AntdTypes.MenuItemGroup;
export const MenuDivider = ThemedComponents.MenuDivider as typeof AntdTypes.MenuDivider;
export const Modal = ThemedComponents.Modal as typeof AntdTypes.Modal;
export const Pagination = ThemedComponents.Pagination as typeof AntdTypes.Pagination;
export const Popconfirm = ThemedComponents.Popconfirm as typeof AntdTypes.Popconfirm;
export const Popover = ThemedComponents.Popover as typeof AntdTypes.Popover;
export const Progress = ThemedComponents.Progress as typeof AntdTypes.Progress;
export const Radio = ThemedComponents.Radio as typeof AntdTypes.Radio;
export const RadioGroup = ThemedComponents.RadioGroup as typeof AntdTypes.RadioGroup;
export const RadioButton = ThemedComponents.RadioButton as typeof AntdTypes.RadioButton;
export const Rate = ThemedComponents.Rate as typeof AntdTypes.Rate;
export const Result = ThemedComponents.Result as typeof AntdTypes.Result;
export const Row = ThemedComponents.Row as typeof AntdTypes.Row;
export const Select = ThemedComponents.Select as typeof AntdTypes.Select;
export const SelectOption = ThemedComponents.SelectOption as typeof AntdTypes.SelectOption;
export const SelectOptGroup = ThemedComponents.SelectOptGroup as typeof AntdTypes.SelectOptGroup;
export const Skeleton = ThemedComponents.Skeleton as typeof AntdTypes.Skeleton;
export const SkeletonAvatar = ThemedComponents.SkeletonAvatar as typeof AntdTypes.SkeletonAvatar;
export const SkeletonButton = ThemedComponents.SkeletonButton as typeof AntdTypes.SkeletonButton;
export const SkeletonImage = ThemedComponents.SkeletonImage as typeof AntdTypes.SkeletonImage;
export const SkeletonInput = ThemedComponents.SkeletonInput as typeof AntdTypes.SkeletonInput;
export const Slider = ThemedComponents.Slider as typeof AntdTypes.Slider;
export const Space = ThemedComponents.Space as typeof AntdTypes.Space;
export const Spin = ThemedComponents.Spin as typeof AntdTypes.Spin;
export const Statistic = ThemedComponents.Statistic as typeof AntdTypes.Statistic;
export const StatisticCountdown = ThemedComponents.StatisticCountdown as typeof AntdTypes.StatisticCountdown;
export const Steps = ThemedComponents.Steps as typeof AntdTypes.Steps;
export const Step = ThemedComponents.Step as typeof AntdTypes.Step;
export const Switch = ThemedComponents.Switch as typeof AntdTypes.Switch;
export const Table = ThemedComponents.Table as typeof AntdTypes.Table;
export const TableColumn = ThemedComponents.TableColumn as typeof AntdTypes.TableColumn;
export const TableColumnGroup = ThemedComponents.TableColumnGroup as typeof AntdTypes.TableColumnGroup;
export const Tabs = ThemedComponents.Tabs as typeof AntdTypes.Tabs;
export const TabPane = ThemedComponents.TabPane as typeof AntdTypes.TabPane;
export const Tag = ThemedComponents.Tag as typeof AntdTypes.Tag;
export const TimePicker = ThemedComponents.TimePicker as typeof AntdTypes.TimePicker;
export const Timeline = ThemedComponents.Timeline as typeof AntdTypes.Timeline;
export const TimelineItem = ThemedComponents.TimelineItem as typeof AntdTypes.TimelineItem;
export const Tooltip = ThemedComponents.Tooltip as typeof AntdTypes.Tooltip;
export const Tour = ThemedComponents.Tour as typeof AntdTypes.Tour;
export const Transfer = ThemedComponents.Transfer as typeof AntdTypes.Transfer;
export const Tree = ThemedComponents.Tree as typeof AntdTypes.Tree;
export const TreeNode = ThemedComponents.TreeNode as typeof AntdTypes.TreeNode;
export const TreeSelect = ThemedComponents.TreeSelect as typeof AntdTypes.TreeSelect;
export const TreeSelectNode = ThemedComponents.TreeSelectNode as typeof AntdTypes.TreeSelectNode;
export const Typography = ThemedComponents.Typography as typeof AntdTypes.Typography;
export const TypographyText = ThemedComponents.TypographyText as typeof AntdTypes.TypographyText;
export const TypographyTitle = ThemedComponents.TypographyTitle as typeof AntdTypes.TypographyTitle;
export const TypographyParagraph = ThemedComponents.TypographyParagraph as typeof AntdTypes.TypographyParagraph;
export const TypographyLink = ThemedComponents.TypographyLink as typeof AntdTypes.TypographyLink;
export const Upload = ThemedComponents.Upload as typeof AntdTypes.Upload;
export const UploadDragger = ThemedComponents.UploadDragger as typeof AntdTypes.UploadDragger;

// 导出其他非组件API
export const message = ThemedComponents.message as typeof AntdTypes.message;
export const notification = ThemedComponents.notification as typeof AntdTypes.notification;
export const App = ThemedComponents.App as typeof AntdTypes.App;
export const version = ThemedComponents.version as typeof AntdTypes.version;
