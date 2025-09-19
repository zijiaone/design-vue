<template>
  <ConfigProvider
    :locale="locales[currentLocale]"
    :render-empty="customRenderEmpty"
    :theme="themes[currentTheme]">
    <div class="config-controls">
      <div class="theme-switch">
        <span>主题切换：</span>
        <RadioGroup
          v-model:value="currentTheme"
          button-style="solid">
          <RadioButton value="default">默认主题</RadioButton>
          <RadioButton value="dark">暗黑主题</RadioButton>
          <RadioButton value="custom">自定义主题</RadioButton>
        </RadioGroup>
      </div>
      <div class="locale-switch">
        <span>语言切换：</span>
        <RadioGroup
          v-model:value="currentLocale"
          button-style="solid">
          <RadioButton value="zh_CN">中文</RadioButton>
          <RadioButton value="en_US">English</RadioButton>
        </RadioGroup>
      </div>
    </div>
    <div class="app-container">
      <h1>{{ pageTitle }}</h1>
      <div class="component-demo">
        <h2>按钮组件</h2>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
      </div>

      <div class="component-demo">
        <h2>Checkbox 组件</h2>
        <div class="checkbox-demo">
          <Checkbox v-model:checked="checkboxValues.checkbox1">Checkbox 1</Checkbox>
          <Checkbox v-model:checked="checkboxValues.checkbox2">Checkbox 2</Checkbox>
          <Checkbox
            v-model:checked="checkboxValues.checkbox3"
            disabled>
            禁用的 Checkbox
          </Checkbox>
        </div>
        <div class="checkbox-group-demo">
          <h3>Checkbox 组</h3>
          <CheckboxGroup
            v-model:value="checkboxGroupValues"
            :options="checkboxOptions" />
        </div>
        <div class="selected-values">
          <p>选中的值: {{ checkboxValues }}</p>
          <p>选中的组值: {{ checkboxGroupValues }}</p>
        </div>
      </div>

      <div class="component-demo">
        <h2>Radio 组件</h2>
        <div class="radio-demo">
          <Radio
            v-model:checked="radioValue"
            :value="1">
            选项 1
          </Radio>
          <Radio
            v-model:checked="radioValue"
            :value="2">
            选项 2
          </Radio>
          <Radio
            v-model:checked="radioValue"
            disabled
            :value="3">
            禁用的选项
          </Radio>
        </div>
        <div class="radio-group-demo">
          <h3>Radio 组</h3>
          <RadioGroup
            v-model:value="radioGroupValue"
            :options="radioOptions" />
        </div>
        <div class="radio-button-demo">
          <h3>Radio 按钮</h3>
          <RadioGroup
            v-model:value="radioButtonValue"
            button-style="solid">
            <RadioButton value="a">选项 A</RadioButton>
            <RadioButton value="b">选项 B</RadioButton>
            <RadioButton value="c">选项 C</RadioButton>
            <RadioButton
              disabled
              value="d">
              选项 D
            </RadioButton>
          </RadioGroup>
        </div>
        <div class="selected-values">
          <p>选中的值: {{ radioValue }}</p>
          <p>选中的组值: {{ radioGroupValue }}</p>
          <p>选中的按钮值: {{ radioButtonValue }}</p>
        </div>
      </div>

      <div class="component-demo">
        <h2>分页组件</h2>
        <div class="pagination-demo">
          <h3>基础分页</h3>
          <Pagination
            v-model:current="paginationCurrent"
            :total="500" />
        </div>
        <div class="pagination-demo">
          <h3>简洁分页</h3>
          <Pagination
            v-model:current="paginationSimpleCurrent"
            simple
            :total="50" />
        </div>
        <div class="pagination-demo">
          <h3>自定义分页</h3>
          <Pagination
            v-model:current="paginationCustomCurrent"
            v-model:page-size="paginationPageSize"
            :page-size-options="['10', '20', '50', '100']"
            show-size-changer
            :total="500" />
        </div>
        <div class="selected-values">
          <p>当前页: {{ paginationCurrent }}</p>
          <p>简洁模式当前页: {{ paginationSimpleCurrent }}</p>
          <p>自定义当前页: {{ paginationCustomCurrent }}</p>
          <p>每页条数: {{ paginationPageSize }}</p>
        </div>
      </div>

      <div class="component-demo">
        <h2>开关组件</h2>
        <div class="switch-demo">
          <h3>基础开关</h3>
          <Switch v-model:checked="switchValue" />
        </div>
        <div class="switch-demo">
          <h3>带文字的开关</h3>
          <Switch
            v-model:checked="switchWithTextValue"
            checked-children="开"
            un-checked-children="关" />
        </div>
        <div class="switch-demo">
          <h3>不同尺寸的开关</h3>
          <Switch
            v-model:checked="switchSizeValue"
            size="small"
            style="margin-right: 10px" />
          <Switch v-model:checked="switchSizeValue" />
        </div>
        <div class="switch-demo">
          <h3>禁用状态</h3>
          <Switch
            v-model:checked="switchDisabledValue"
            disabled />
        </div>
        <div class="selected-values">
          <p>开关状态: {{ switchValue ? '开启' : '关闭' }}</p>
          <p>带文字开关状态: {{ switchWithTextValue ? '开启' : '关闭' }}</p>
          <p>不同尺寸开关状态: {{ switchSizeValue ? '开启' : '关闭' }}</p>
          <p>禁用开关状态: {{ switchDisabledValue ? '开启' : '关闭' }}</p>
        </div>
      </div>

      <div class="component-demo">
        <h2>表单组件</h2>
        <Form
          :label-col="{ span: 6 }"
          :model="formState"
          :wrapper-col="{ span: 18 }">
          <FormItem
            label="用户名"
            name="username">
            <Input v-model:value="formState.username" />
          </FormItem>
          <FormItem
            label="密码"
            name="password">
            <InputPassword v-model:value="formState.password" />
          </FormItem>
          <FormItem
            label="记住我"
            name="remember">
            <Checkbox v-model:checked="formState.remember">记住我</Checkbox>
          </FormItem>
          <FormItem :wrapper-col="{ offset: 6, span: 18 }">
            <Button
              type="primary"
              @click="onSubmit">
              提交
            </Button>
          </FormItem>
        </Form>
      </div>

      <div class="component-demo">
        <h2>空状态组件（自定义背景图）</h2>
        <Empty />
      </div>

      <div class="component-demo">
        <h2>表格组件</h2>
        <Table
          :columns="tableColumns"
          :data-source="tableData" />
      </div>
    </div>
  </ConfigProvider>
</template>

<script setup lang="ts">
// 从自定义组件库导入组件
// 导入国际化配置
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { computed, h, reactive, ref } from 'vue';

import {
  Button,
  Checkbox,
  CheckboxGroup,
  ConfigProvider,
  defaultTheme,
  Empty,
  Form,
  FormItem,
  Input,
  InputPassword,
  Pagination,
  Radio,
  RadioButton,
  RadioGroup,
  Switch,
  Table,
  theme,
} from '../components';

// 表格数据
interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}

const tableColumns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
];

const tableData: DataItem[] = [
  {
    key: '1',
    name: '张三',
    age: 32,
    address: '北京市朝阳区',
  },
  {
    key: '2',
    name: '李四',
    age: 42,
    address: '上海市浦东新区',
  },
  {
    key: '3',
    name: '王五',
    age: 32,
    address: '广州市天河区',
  },
];

// 表单数据
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});

const onSubmit = () => {
  console.log('表单提交:', formState);
};

// Checkbox 相关数据
const checkboxValues = reactive({
  checkbox1: true,
  checkbox2: false,
  checkbox3: false,
});

const checkboxOptions = [
  { label: '选项 A', value: 'A' },
  { label: '选项 B', value: 'B' },
  { label: '选项 C', value: 'C', disabled: true },
];

const checkboxGroupValues = ref(['A']);

// Radio 相关数据
const radioValue = ref(1);
const radioGroupValue = ref('a');
const radioButtonValue = ref('a');

const radioOptions = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' },
  { label: '选项 D', value: 'd', disabled: true },
];

// 分页组件相关数据
const paginationCurrent = ref(1);
const paginationSimpleCurrent = ref(1);
const paginationCustomCurrent = ref(1);
const paginationPageSize = ref(10);

// 开关组件相关数据
const switchValue = ref(false);
const switchWithTextValue = ref(true);
const switchSizeValue = ref(true);
const switchDisabledValue = ref(false);

// ConfigProvider 相关配置
// 主题配置
const currentTheme = ref('default');

const themes = {
  default: defaultTheme,
  dark: {
    algorithm: theme.darkAlgorithm,
    token: {
      ...defaultTheme.token, // 确保继承默认主题的token
    },
  },
  custom: {
    token: {
      colorPrimary: '#722ED1', // 紫色主题
      colorSuccess: '#52C41A',
      colorWarning: '#FAAD14',
      colorError: '#FF4D4F',
      colorInfo: '#1677FF',
      borderRadius: 8,
      wireframe: false,
    },
  },
};

// 国际化配置
const currentLocale = ref('zh_CN');
const locales = {
  zh_CN: zhCN,
  en_US: enUS,
};

// 自定义渲染空状态
const customRenderEmpty = () => {
  return h(Empty, {
    image: Empty.PRESENTED_IMAGE_CUSTOM,
    description: currentLocale.value === 'zh_CN' ? '暂无数据' : 'No Data',
    // 不直接使用defaultTheme，而是使用当前主题
    style: {
      color: themes[currentTheme.value].token.colorPrimary,
    },
  });
};

// 页面标题计算属性
const pageTitle = computed(() => {
  return currentLocale.value === 'zh_CN' ? 'Design Vue 组件库' : 'Design Vue Components';
});

// const FormItem = Form.Item;
</script>

<style scoped>
/* 配置控制区域样式 */
.config-controls {
  display: flex;
  justify-content: center;
  padding: 16px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #eee;
}

.theme-switch,
.locale-switch {
  margin: 0 16px;
}

.theme-switch span,
.locale-switch span {
  margin-right: 8px;
  font-weight: 500;
}

/* 主体内容样式 */
.app-container {
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
}

.component-demo {
  padding: 20px;
  margin-bottom: 40px;
  border: 1px solid #eee;
  border-radius: 8px;
}

h1 {
  margin-bottom: 40px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  font-size: 18px;
  color: #333;
}

button {
  margin-right: 10px;
}

/* 表格样式 */
:deep(.ant-table) {
  margin-top: 16px;
}

/* 表单样式 */
:deep(.ant-form) {
  max-width: 600px;
}

/* Checkbox、Radio、Pagination 和 Switch 样式 */
.checkbox-demo,
.radio-demo,
.pagination-demo,
.switch-demo {
  margin-bottom: 16px;
}

.checkbox-demo > :deep(.ant-checkbox-wrapper),
.radio-demo > :deep(.ant-radio-wrapper) {
  margin-right: 16px;
  margin-bottom: 8px;
}

.checkbox-group-demo,
.radio-group-demo,
.radio-button-demo,
.pagination-demo,
.switch-demo {
  margin-bottom: 16px;
}

.switch-demo :deep(.ant-switch) {
  margin-right: 8px;
}

h3 {
  margin-bottom: 12px;
  font-size: 16px;
  color: #555;
}

.selected-values {
  padding: 12px;
  margin-top: 16px;
  background-color: #f5f5f5;
  border-radius: 4px;
}
</style>
