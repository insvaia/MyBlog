<script setup lang="ts">
</script>

<template>
  <n-config-provider>
    <n-dialog-provider>
      <n-message-provider>
        <router-view />
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<style lang="scss">
// highlight.js dark theme (matches dark code block background)
@use 'highlight.js/styles/github-dark.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    'Segoe UI', 'Microsoft YaHei', 'PingFang SC',
    'Hiragino Sans GB', sans-serif;
  color: #333;
  background: linear-gradient(180deg, #fff 0%, #fffef9 40%, #fffdf0 100%);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}
</style>
