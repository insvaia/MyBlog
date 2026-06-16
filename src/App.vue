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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
