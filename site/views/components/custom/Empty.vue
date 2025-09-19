<template>
  <div class="empty-demo">
    <h3>Empty 空状态</h3>

    <section class="demo-section">
      <h4>基本用法</h4>
      <p>基础的空状态组件，用于在没有数据时展示的占位图。</p>
      <div class="demo-container">
        <Empty />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Empty } from '@/components';
</script>

<style lang="less" scoped>
.empty-demo {
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
}
</style>
