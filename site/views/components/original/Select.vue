<template>
  <div class="select-demo">
    <h3>Select 选择器</h3>

    <section class="demo-section">
      <h4>基本用法</h4>
      <p>基础的选择器用法，支持单选、搜索和清除功能。</p>
      <div class="demo-selects">
        <Select
          v-model:value="selectedValue"
          placeholder="请选择"
          style="width: 200px">
          <SelectOption value="option1">选项一</SelectOption>
          <SelectOption value="option2">选项二</SelectOption>
          <SelectOption value="option3">选项三</SelectOption>
        </Select>

        <Select
          :filter-option="filterOption"
          placeholder="可搜索"
          show-search
          style="width: 200px">
          <SelectOption value="beijing">北京</SelectOption>
          <SelectOption value="shanghai">上海</SelectOption>
          <SelectOption value="guangzhou">广州</SelectOption>
          <SelectOption value="shenzhen">深圳</SelectOption>
        </Select>

        <Select
          allow-clear
          placeholder="可清除"
          style="width: 200px">
          <SelectOption value="option1">选项一</SelectOption>
          <SelectOption value="option2">选项二</SelectOption>
          <SelectOption value="option3">选项三</SelectOption>
        </Select>

        <div>当前选择: {{ selectedValue }}</div>
      </div>
    </section>

    <section class="demo-section">
      <h4>多选和标签</h4>
      <p>支持多选、自定义标签和动态加载选项。</p>
      <div class="demo-selects">
        <Select
          v-model:value="multipleValues"
          mode="multiple"
          placeholder="多选模式"
          style="width: 100%">
          <SelectOption
            v-for="i in 10"
            :key="i"
            :value="`option${i}`">
            选项 {{ i }}
          </SelectOption>
        </Select>

        <Select
          v-model:value="tagValues"
          mode="tags"
          placeholder="标签模式"
          style="width: 100%">
          <SelectOption value="red">红色</SelectOption>
          <SelectOption value="green">绿色</SelectOption>
          <SelectOption value="blue">蓝色</SelectOption>
        </Select>

        <Select
          :options="dynamicOptions"
          placeholder="动态选项"
          style="width: 100%"></Select>
      </div>
    </section>

    <section class="demo-section">
      <h4>尺寸和状态</h4>
      <p>选择器有不同的尺寸和状态，适应各种场景需求。</p>
      <div class="demo-selects">
        <Select
          placeholder="大尺寸"
          size="large"
          style="width: 200px">
          <SelectOption value="option1">选项一</SelectOption>
          <SelectOption value="option2">选项二</SelectOption>
        </Select>

        <Select
          placeholder="默认尺寸"
          style="width: 200px">
          <SelectOption value="option1">选项一</SelectOption>
          <SelectOption value="option2">选项二</SelectOption>
        </Select>

        <Select
          placeholder="小尺寸"
          size="small"
          style="width: 200px">
          <SelectOption value="option1">选项一</SelectOption>
          <SelectOption value="option2">选项二</SelectOption>
        </Select>

        <Select
          placeholder="错误状态"
          status="error"
          style="width: 200px">
          <SelectOption value="option1">选项一</SelectOption>
          <SelectOption value="option2">选项二</SelectOption>
        </Select>

        <Select
          disabled
          placeholder="禁用状态"
          style="width: 200px">
          <SelectOption value="option1">选项一</SelectOption>
          <SelectOption value="option2">选项二</SelectOption>
        </Select>

        <Select
          loading
          placeholder="加载状态"
          style="width: 200px">
          <SelectOption value="option1">选项一</SelectOption>
          <SelectOption value="option2">选项二</SelectOption>
        </Select>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { Select, SelectOption } from '@/components';

// 定义响应式数据
const selectedValue = ref('');
const multipleValues = ref([]);
const tagValues = ref([]);

// 动态选项
const dynamicOptions = [
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' },
  { value: 'option3', label: '选项3' },
  { value: 'option4', label: '选项4' },
];

// 搜索过滤函数
const filterOption = (input: string, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
</script>

<style lang="less" scoped>
.select-demo {
  .demo-section {
    margin-bottom: 32px;

    h4 {
      margin-bottom: 16px;
      font-size: 18px;
    }

    p {
      margin-bottom: 16px;
      color: #666;
    }
  }

  .demo-selects {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 600px;
  }
}
</style>
