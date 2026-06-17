<script setup lang="ts">
</script>

<template>
  <div class="about-page">
    <h2 class="page-title">关于</h2>

    <div class="about-content">
      <p>这是一个基于 Vue 3 + TypeScript + Vite 构建的个人博客。</p>

      <h3>技术栈</h3>
      <ul>
        <li>Vue 3 — 渐进式前端框架</li>
        <li>TypeScript — 类型安全</li>
        <li>Vite — 极速构建工具</li>
        <li>Naive UI — Vue 3 组件库</li>
        <li>Markdown — 文章编写格式</li>
      </ul>

      <h3>联系</h3>
      <p>GitHub: <a href="https://github.com" target="_blank">@fishinadream</a></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-page {
  max-width: 860px;
  margin: 0 auto;
  padding: 48px 40px 80px;
}

.page-title {
  font-size: 1.4em;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #1a1a1a;
  margin: 0 0 24px;
}

.about-content {
  line-height: 1.85;
  color: #555;

  h3 {
    font-size: 1.05em;
    font-weight: 600;
    color: #333;
    margin: 24px 0 10px;
  }

  ul {
    padding-left: 1.5em;
    margin: 0;
  }

  li {
    margin-bottom: 4px;
  }

  a {
    color: #666;
    text-decoration: underline;

    &:hover {
      color: #333;
    }
  }

  p {
    margin: 0 0 10px;
  }
}
</style>
