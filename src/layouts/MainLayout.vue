<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { getAllTags } from '@/utils/posts'
import { useAvatarStore } from '@/stores/avatar'

const router = useRouter()
const route = useRoute()
const avatarStore = useAvatarStore()
const { avatarSrc } = storeToRefs(avatarStore)

const showAvatarModal = ref(false)
const fileInputRef = ref<HTMLInputElement | null>(null)

function openAvatarPreview() {
  showAvatarModal.value = true
}

function triggerFileSelect() {
  fileInputRef.value?.click()
}

function handleFileChange(e: Event) {
  const input = e.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    avatarStore.setAvatar(reader.result as string)
  }
  reader.readAsDataURL(file)
  // Reset so the same file can be selected again
  input.value = ''
}

onMounted(() => {
  avatarStore.loadAvatar()
})

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
      :width="260"
      class="sidebar"
    >
      <div class="sidebar-header">
        <div class="avatar-container" @click="openAvatarPreview">
          <div class="avatar-wrap">
            <img
              class="avatar"
              :src="avatarSrc"
              alt="avatar"
            />
          </div>
        </div>
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

  <!-- Avatar preview modal -->
  <n-modal
    v-model:show="showAvatarModal"
    :mask-closable="true"
    transform-origin="center"
  >
    <div class="avatar-modal">
      <div class="avatar-preview-large">
        <img :src="avatarSrc" alt="avatar preview" />
      </div>
      <n-button
        type="primary"
        round
        size="large"
        class="change-avatar-btn"
        @click="triggerFileSelect"
      >
        📷 更换头像
      </n-button>
    </div>
  </n-modal>

  <!-- Hidden file input -->
  <input
    ref="fileInputRef"
    type="file"
    accept="image/*"
    style="display: none"
    @change="handleFileChange"
  />
</template>

<style scoped lang="scss">
.app-layout {
  height: 100vh;
  background-color: #FAFAFC;
  background-image: radial-gradient(circle at 10% 20%, rgba(53, 117, 255, 0.15) 0%, rgba(207, 107, 251, 0.10) 30%, transparent 70%);
}

// Punch through Naive UI's internal opaque layers in content area
.content {
  :deep(*) {
    background-color: transparent;
  }
  // But restore code block backgrounds
  :deep(pre),
  :deep(pre code) {
    background-color: #0d1117;
  }
  :deep(:not(pre) > code) {
    background-color: #f0f0f0;
  }
}

.sidebar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: rgba(255, 255, 255, 0.6);
}

.sidebar-header {
  padding: 36px 20px 20px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

// ── Avatar with glow ring ──
.avatar-container {
  position: relative;
  width: 130px;
  height: 130px;
  margin: 0 auto 16px;
  cursor: pointer;

  // Glow halo behind avatar
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150%;
    height: 150%;
    background: radial-gradient(circle, rgba(144, 238, 200, 0.22) 0%, transparent 70%);
    z-index: 0;
  }
}

.avatar-wrap {
  position: relative;
  z-index: 1;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(255, 255, 255, 0.5) inset;
  overflow: hidden;
  margin: 0 auto;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }
}

.blog-name {
  font-size: 1.15em;
  font-weight: 600;
  letter-spacing: -0.02em;
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
  background: transparent;
}

// ── Avatar modal ──
.avatar-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 24px;
}

.avatar-preview-large {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(255, 255, 255, 0.9);
  box-shadow:
    0 12px 36px rgba(0, 0, 0, 0.1),
    0 0 0 2px rgba(255, 255, 255, 0.5) inset;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.change-avatar-btn {
  --n-color: #1a1a1a !important;
  --n-color-hover: #333 !important;
  --n-text-color: #f5f5f5 !important;
  font-weight: 600;
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
