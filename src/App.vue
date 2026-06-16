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

html {
  background-color: #FAFAFC;
  background-image: radial-gradient(circle at 10% 20%, rgba(53, 117, 255, 0.15) 0%, rgba(207, 107, 251, 0.10) 30%, transparent 70%);
}

#app {
  background: transparent;
}

// Naive UI provider wrappers must be transparent
.n-config-provider,
.n-dialog-provider,
.n-message-provider {
  background: transparent;
}

body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: #1e1e1e;
  background: transparent;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}
</style>
