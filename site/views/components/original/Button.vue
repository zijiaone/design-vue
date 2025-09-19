<template>
  <div class="button-demo">
    <h3>Button 按钮</h3>

    <section class="demo-section">
      <h4>基础用法</h4>
      <p>按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。</p>
      <div class="demo-buttons">
        <Button type="primary">主按钮</Button>
        <Button>默认按钮</Button>
        <Button type="dashed">虚线按钮</Button>
        <Button type="text">文本按钮</Button>
        <Button type="link">链接按钮</Button>
      </div>
    </section>

    <section class="demo-section">
      <h4>按钮状态</h4>
      <p>按钮可以设置为不同的状态：危险、禁用、加载中。</p>
      <div class="demo-buttons">
        <Button
          danger
          type="primary">
          危险按钮
        </Button>
        <Button danger>危险按钮</Button>
        <Button
          disabled
          type="primary">
          禁用按钮
        </Button>
        <Button
          loading
          type="primary">
          加载中
        </Button>
      </div>
    </section>

    <section class="demo-section">
      <h4>按钮尺寸</h4>
      <p>按钮有大、中、小三种尺寸。</p>
      <div class="demo-buttons">
        <Button
          size="large"
          type="primary">
          大按钮
        </Button>
        <Button type="primary">默认按钮</Button>
        <Button
          size="small"
          type="primary">
          小按钮
        </Button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components';
</script>

<style lang="less" scoped>
.button-demo {
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

  .demo-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;

    &.ghost-background {
      padding: 24px;
      background-color: #1890ff;
    }
  }
}
</style>
