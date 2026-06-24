<script setup lang="ts">
import type { MenuOption } from "naive-ui";
import { getAllTags } from "@/utils/posts";
import { useAvatarStore } from "@/stores/avatar";
import { useThemeStore } from "@/stores/theme";

const router = useRouter();
const route = useRoute();
const avatarStore = useAvatarStore();
const themeStore = useThemeStore();
const { avatarSrc } = storeToRefs(avatarStore);
const { isDark } = storeToRefs(themeStore);

const showAvatarModal = ref(false);
const fileInputRef = ref<HTMLInputElement | null>(null);

function openAvatarPreview() {
  showAvatarModal.value = true;
}

function triggerFileSelect() {
  fileInputRef.value?.click();
}

function handleFileChange(e: Event) {
  const input = e.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    avatarStore.setAvatar(reader.result as string);
  };
  reader.readAsDataURL(file);
  // Reset so the same file can be selected again
  input.value = "";
}

onMounted(() => {
  avatarStore.loadAvatar();
});

const tags = getAllTags();

const menuOptions: MenuOption[] = [
  { label: "首页", key: "home" },
  { label: "归档", key: "archives" },
  {
    label: "标签",
    key: "tags",
    children: tags.map((tag) => ({ label: tag, key: `tag-${tag}` })),
  },
  { label: "友链", key: "links" },
  { label: "留言", key: "guestbook" },
  { label: "关于", key: "about" },
  { label: "AI助理", key: "ai" },
];

const activeKey = computed(() => {
  if (route.path === "/") return "home";
  if (route.path === "/archives") return "archives";
  if (route.path === "/links") return "links";
  if (route.path === "/guestbook") return "guestbook";
  if (route.path === "/about") return "about";
  if (route.path === "/tags") return "tags";
  if (route.path === "/ai") return "ai";
  if (route.path.startsWith("/tag/")) return `tag-${route.params.tag}`;
  return null;
});

const menuRouteMap: Record<string, string> = {
  home: "/",
  archives: "/archives",
  tags: "/tags",
  links: "/links",
  guestbook: "/guestbook",
  about: "/about",
  ai: "/ai",
};

function handleMenuClick(key: string) {
  if (menuRouteMap[key]) {
    router.push(menuRouteMap[key]);
  } else if (key.startsWith("tag-")) {
    const tag = key.replace("tag-", "");
    router.push(`/tag/${tag}`);
  }
}
</script>

<template>
  <!-- Skip to content — accessibility -->
  <a href="#main-content" class="skip-link">跳到主要内容</a>

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
            <img class="avatar" :src="avatarSrc" alt="avatar" />
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
        <button class="theme-toggle" @click="themeStore.toggle()" :title="isDark ? '切换浅色模式' : '切换深色模式'">
          <!-- Sun icon (shown in dark mode) -->
          <svg v-if="isDark" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <!-- Moon icon (shown in light mode) -->
          <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <span class="toggle-label">{{ isDark ? '浅色' : '深色' }}</span>
        </button>
        <span class="footer-text">Powered by Vue 3</span>
      </div>
    </n-layout-sider>

    <!-- Right content -->
    <n-layout-content id="main-content" class="content">
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
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style="vertical-align: -4px; margin-right: 5px"
        >
          <path
            d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z"
          />
          <circle cx="12" cy="13" r="4" /></svg
        >更换头像
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
  height: 100dvh;
  background-color: #fafafc;
  background-image:
    radial-gradient(
      circle at 15% 15%,
      rgba(120, 120, 130, 0.06) 0%,
      transparent 55%
    ),
    radial-gradient(
      circle at 85% 75%,
      rgba(100, 100, 110, 0.04) 0%,
      transparent 50%
    );
  background-attachment: fixed;
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
  height: 100dvh;
  overflow-y: auto;
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
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150%;
    height: 150%;
    background: radial-gradient(
      circle,
      rgba(160, 170, 180, 0.18) 0%,
      transparent 70%
    );
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
    0 8px 20px rgba(55, 60, 70, 0.06),
    0 0 0 1px rgba(255, 255, 255, 0.5) inset;
  overflow: hidden;
  margin: 0 auto;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition:
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(55, 60, 70, 0.12);
  }

  &:active {
    transform: scale(0.98);
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

// Theme toggle button
.theme-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  background: #fafafa;
  color: #666;
  cursor: pointer;
  font-size: 0.78em;
  font-family: inherit;
  transition: all 0.25s cubic-bezier(0.32, 0.72, 0, 1);

  svg {
    flex-shrink: 0;
    display: block;
  }

  &:hover {
    border-color: #bbb;
    color: #333;
    background: #f0f0f0;
  }

  &:active {
    transform: scale(0.95);
  }
}

.toggle-label {
  white-space: nowrap;
}

.footer-text {
  font-size: 0.72em;
  color: #ccc;
}

.content {
  height: 100dvh;
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
    0 12px 36px rgba(55, 60, 70, 0.1),
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
// Skip to content — hidden until focused
.skip-link {
  position: absolute;
  top: -100px;
  left: 16px;
  z-index: 1000;
  padding: 10px 20px;
  background: #1a1a1a;
  color: #f5f5f5;
  border-radius: 8px;
  font-size: 0.9em;
  font-weight: 500;
  text-decoration: none;
  transition: top 0.2s;

  &:focus {
    top: 16px;
  }
}

// Page transition
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

// ═══════════════════════════════════════
// Dark theme — sidebar overrides
// ═══════════════════════════════════════
html.dark {
  .sidebar {
    background: rgba(30, 30, 35, 0.8);
  }

  .app-layout {
    background-color: #1a1a1f;
  }

  .blog-name {
    color: rgba(255, 255, 255, 0.85);
    &:hover { color: rgba(255, 255, 255, 0.6); }
  }

  .sidebar-header {
    border-bottom-color: rgba(255, 255, 255, 0.06);
  }

  .sidebar-footer {
    border-top-color: rgba(255, 255, 255, 0.06);
  }

  .footer-text {
    color: rgba(255, 255, 255, 0.2);
  }

  .theme-toggle {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.5);

    &:hover {
      border-color: rgba(255, 255, 255, 0.2);
      color: rgba(255, 255, 255, 0.75);
      background: rgba(255, 255, 255, 0.08);
    }
  }
}
</style>
