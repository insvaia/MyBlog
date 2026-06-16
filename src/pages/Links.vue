<script setup lang="ts">
interface FriendLink {
  name: string
  url: string
  desc: string
}

const links: FriendLink[] = [
  { name: 'Vue.js', url: 'https://cn.vuejs.org', desc: '渐进式 JavaScript 框架' },
  { name: 'Vite', url: 'https://cn.vite.dev', desc: '下一代前端构建工具' },
  { name: 'Naive UI', url: 'https://www.naiveui.com', desc: 'Vue 3 组件库' },
]
</script>

<template>
  <div class="links-page">
    <h2 class="page-title">友链</h2>
    <div class="links-grid">
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener"
        class="link-card"
      >
        <span class="link-name">{{ link.name }}</span>
        <span class="link-desc">{{ link.desc }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.links-page {
  max-width: 860px;
  margin: 0 auto;
  padding: 48px 40px 80px;
}

.page-title {
  font-size: 1.4em;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 24px;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
}

.link-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    border-color: #ccc;
    background: #fafafa;
  }
}

.link-name {
  font-size: 0.95em;
  font-weight: 500;
  color: #333;
}

.link-desc {
  font-size: 0.8em;
  color: #bbb;
}
</style>
