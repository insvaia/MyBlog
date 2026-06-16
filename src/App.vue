<script setup lang="ts">
</script>

<template>
  <n-config-provider>
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<style lang="scss">
// highlight.js github theme
@use 'highlight.js/styles/github.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  color: #333;
  background: #fff;
  -webkit-font-smoothing: antialiased;
}
</style>
