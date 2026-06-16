<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { getAllTags } from '@/utils/posts'

const router = useRouter()
const route = useRoute()

const tags = getAllTags()

const menuOptions: MenuOption[] = [
  { label: '首页', key: 'home' },
  {
    label: '标签',
    key: 'tags',
    children: tags.map((tag) => ({ label: tag, key: `tag-${tag}` })),
  },
  { label: '关于', key: 'about' },
]

const activeKey = computed(() => {
  if (route.path === '/') return 'home'
  if (route.path === '/about') return 'about'
  if (route.path === '/tags') return 'tags'
  if (route.path.startsWith('/tag/')) return `tag-${route.params.tag}`
  // For post detail, try to find a matching tag or default to home
  return null
})

function handleMenuClick(key: string) {
  if (key === 'home') {
    router.push('/')
  } else if (key === 'tags') {
    router.push('/tags')
  } else if (key === 'about') {
    router.push('/about')
  } else if (key.startsWith('tag-')) {
    const tag = key.replace('tag-', '')
    router.push(`/tag/${tag}`)
  }
}
</script>

<template>
  <n-layout has-sider class="app-layout">
    <!-- Left sidebar -->
    <n-layout-sider
      bordered
      collapse-mode="transform"
      :collapsed-width="0"
      :width="240"
      class="sidebar"
    >
      <div class="sidebar-header">
        <router-link to="/" class="blog-name">Blog</router-link>
        <p class="blog-desc">记录技术与生活</p>
      </div>

      <n-menu
        :value="activeKey"
        :options="menuOptions"
        :root-indent="20"
        :indent="12"
        @update:value="handleMenuClick"
      />

      <div class="sidebar-footer">
        <span class="footer-text">Powered by Vue 3</span>
      </div>
    </n-layout-sider>

    <!-- Right content -->
    <n-layout-content class="content">
      <router-view />
    </n-layout-content>
  </n-layout>
</template>

<style scoped lang="scss">
.app-layout {
  height: 100vh;
}

.sidebar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #fafafa;
}

.sidebar-header {
  padding: 28px 20px 20px;
  border-bottom: 1px solid #eee;
}

.blog-name {
  font-size: 1.3em;
  font-weight: 700;
  color: #1a1a1a;
  text-decoration: none;

  &:hover {
    color: #666;
  }
}

.blog-desc {
  margin: 4px 0 0;
  font-size: 0.78em;
  color: #bbb;
}

:deep(.n-menu) {
  flex: 1;
  padding-top: 12px;
}

.sidebar-footer {
  padding: 16px 20px;
  border-top: 1px solid #eee;
}

.footer-text {
  font-size: 0.72em;
  color: #ccc;
}

.content {
  height: 100vh;
  overflow-y: auto;
  background: #fff;
}
</style>
