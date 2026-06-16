<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { getAllTags } from '@/utils/posts'

const router = useRouter()
const route = useRoute()

const tags = getAllTags()

const menuOptions: MenuOption[] = [
  { label: '首页', key: 'home' },
  { label: '归档', key: 'archives' },
  {
    label: '标签',
    key: 'tags',
    children: tags.map((tag) => ({ label: tag, key: `tag-${tag}` })),
  },
  { label: '友链', key: 'links' },
  { label: '留言', key: 'guestbook' },
  { label: '关于', key: 'about' },
]

const activeKey = computed(() => {
  if (route.path === '/') return 'home'
  if (route.path === '/archives') return 'archives'
  if (route.path === '/links') return 'links'
  if (route.path === '/guestbook') return 'guestbook'
  if (route.path === '/about') return 'about'
  if (route.path === '/tags') return 'tags'
  if (route.path.startsWith('/tag/')) return `tag-${route.params.tag}`
  return null
})

const menuRouteMap: Record<string, string> = {
  home: '/',
  archives: '/archives',
  tags: '/tags',
  links: '/links',
  guestbook: '/guestbook',
  about: '/about',
}

function handleMenuClick(key: string) {
  if (menuRouteMap[key]) {
    router.push(menuRouteMap[key])
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
        <n-avatar
          :size="64"
          src="/imgs/shantian.jpg"
          fallback-src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23ccc' d='M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2c0 .66.54 1.2 1.2 1.2h16.8c.66 0 1.2-.54 1.2-1.2v-1.2c0-3.2-6.4-4.8-9.6-4.8z'/%3E%3C/svg%3E"
          class="avatar"
        />
        <router-link to="/" class="blog-name">一只做梦的鱼</router-link>
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
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
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
  padding: 36px 20px 20px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.avatar {
  display: block;
  margin: 0 auto 12px;
}

.blog-name {
  font-size: 1.15em;
  font-weight: 600;
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

<style lang="scss">
// Page transition
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
