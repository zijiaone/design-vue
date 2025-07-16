<!-- eslint-disable vue/component-name-in-template-casing -->
<template>
  <!--
  基本用法：仅设置主题色
  <ConfigProvider :theme="{ token: { colorPrimary: '#1890ff' } }">

  使用国际化配置：
  <ConfigProvider :locale="zhCN" :theme="{ token: { colorPrimary: '#1890ff' } }">
  -->
  <ConfigProvider
    :locale="arEG"
    :theme="{ token: { colorPrimary: '#333' } }">
    <div class="app-container">
      <h1>Design Vue 组件库示例</h1>

      <Input placeholder="请输入内容" />

      <section class="component-section">
        <h2>按钮组件</h2>
        <div class="component-demo">
          <Button type="primary">主要按钮</Button>
          <Button>默认按钮</Button>
          <Button type="dashed">虚线按钮</Button>
          <Button type="text">文本按钮</Button>
          <Button type="link">链接按钮</Button>
        </div>
      </section>

      <section class="component-section">
        <h2>菜单组件（定制）</h2>
        <div class="component-demo">
          <Menu
            mode="horizontal"
            :selected-keys="['1']">
            <MenuItem key="1">首页</MenuItem>
            <MenuItem key="2">产品</MenuItem>
            <MenuItem key="3">服务</MenuItem>
            <SubMenu
              key="4"
              title="更多">
              <MenuItem key="4-1">选项1</MenuItem>
              <MenuItem key="4-2">选项2</MenuItem>
            </SubMenu>
          </Menu>
        </div>
      </section>

      <section class="component-section">
        <h2>结果组件（定制）</h2>
        <div class="component-demo">
          <Result
            status="404"
            sub-title="请等待系统处理完成"
            title="操作成功">
            <template #extra>
              <Button type="primary">返回</Button>
            </template>
          </Result>
        </div>
      </section>

      <section class="component-section">
        <h2>空状态组件（定制）</h2>
        <div class="component-demo">
          <Empty />
        </div>
      </section>

      <section class="component-section">
        <h2>表单组件</h2>
        <div class="component-demo">
          <Form
            class="form-container"
            layout="vertical"
            :model="formModel"
            :rules="formRules">
            <Form.Item
              label="用户名"
              name="username">
              <Input
                v-model:value="formModel.username"
                placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password">
              <Input.Password
                v-model:value="formModel.password"
                placeholder="请输入密码" />
            </Form.Item>
            <Form.Item>
              <Button type="primary">提交</Button>
              <Button style="margin-left: 10px">重置</Button>
            </Form.Item>
          </Form>
        </div>
      </section>

      <section class="component-section">
        <h2>表格组件</h2>
        <div class="component-demo">
          <Table
            bordered
            class="table-container"
            :columns="tableColumns"
            :data-source="tableData" />
        </div>
      </section>
    </div>
  </ConfigProvider>
</template>

<script setup lang="ts">
// 从 Vue 导入响应式 API
// 导入阿拉伯语言包
import arEG from 'ant-design-vue/es/locale/ar_EG';
import { reactive } from 'vue';

// 从定制组件库导入组件
import { Button, ConfigProvider, Empty, Form, Input, Menu, MenuItem, Result, SubMenu, Table } from '../components';
// 可选：导入中文语言包
// import zhCN from 'ant-design-vue/es/locale/zh_CN';

// ConfigProvider 使用示例：
// 1. 主题定制
// const theme = {
//   token: {
//     colorPrimary: '#1890ff',
//     borderRadius: 4,
//   },
// };

// 2. 国际化配置
// 如需使用国际化，取消注释上方的 import zhCN 语句，并在 ConfigProvider 中添加 :locale="zhCN" 属性

// 表单相关数据
const formModel = reactive({
  username: '',
  password: '',
});

const formRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
  ],
};

// 表格相关数据
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

const tableData = [
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
    age: 28,
    address: '广州市天河区',
  },
];
</script>

<style scoped>
.app-container {
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
}

.component-section {
  padding: 20px;
  margin-bottom: 40px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
}

.component-section h2 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 18px;
  color: #1890ff;
}

.component-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.component-demo :deep(.ant-menu) {
  width: 100%;
}

.component-demo :deep(.ant-result) {
  width: 100%;
}

.component-demo :deep(.ant-empty) {
  width: 100%;
}

.form-container {
  width: 100%;
  max-width: 500px;
}

.table-container {
  width: 100%;
}
</style>
