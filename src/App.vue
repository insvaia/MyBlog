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
  // Subtle warm-neutral ambient gradient (replaced AI blue-purple gradient)
  background-image:
    radial-gradient(circle at 15% 15%, rgba(120, 120, 130, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 85% 75%, rgba(100, 100, 110, 0.04) 0%, transparent 50%);
  background-attachment: fixed;
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
  font-family: "Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: #1e1e1e;
  background: transparent;
  min-height: 100dvh;
  -webkit-font-smoothing: antialiased;
}

// Prevent orphaned words in headlines
h1, h2, h3, h4 {
  text-wrap: balance;
}

// Subtle grain texture overlay — breaks digital flatness
html::after {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}
</style>
