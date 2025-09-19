<template>
  <div class="input-demo">
    <h3>Input 输入框</h3>

    <section class="demo-section">
      <h4>基本用法</h4>
      <p>基础的输入框用法，支持各种输入需求。</p>
      <div class="demo-inputs">
        <Input placeholder="基本输入框" />
        <Input
          v-model:value="inputValue"
          placeholder="受控输入框" />
        <Textarea
          placeholder="文本域"
          :rows="4" />
        <InputPassword placeholder="密码输入框" />
        <div>当前输入值: {{ inputValue }}</div>
      </div>
    </section>

    <section class="demo-section">
      <h4>前缀和后缀</h4>
      <p>可以在输入框上添加前缀或后缀图标，增强交互体验。</p>
      <div class="demo-inputs">
        <Input placeholder="带前缀的输入框">
          <template #prefix>
            <UserOutlined />
          </template>
        </Input>
        <Input placeholder="带后缀的输入框">
          <template #suffix>
            <InfoCircleOutlined />
          </template>
        </Input>
        <Input>
          <template #prefix>
            <UserOutlined />
          </template>
          <template #suffix>
            <InfoCircleOutlined />
          </template>
        </Input>
        <Input
          addon-after=".com"
          addon-before="http://"
          placeholder="网址输入" />
        <Input
          addon-after="元"
          placeholder="金额" />
      </div>
    </section>

    <section class="demo-section">
      <h4>尺寸和状态</h4>
      <p>输入框有不同的尺寸和状态，适应各种场景需求。</p>
      <div class="demo-inputs">
        <Input
          placeholder="大尺寸"
          size="large" />
        <Input placeholder="默认尺寸" />
        <Input
          placeholder="小尺寸"
          size="small" />
        <Input
          placeholder="错误状态"
          status="error" />
        <Input
          placeholder="警告状态"
          status="warning" />
        <Input
          disabled
          placeholder="禁用状态" />
        <Input
          placeholder="只读状态"
          readonly />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { Input, InputPassword, Textarea } from '@/components';
// TODO
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons-vue';

// 定义响应式数据
const inputValue = ref('');
</script>

<style lang="less" scoped>
.input-demo {
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

  .demo-inputs {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 500px;
  }
}
</style>
