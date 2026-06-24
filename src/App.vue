<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)

onMounted(() => {
  themeStore.load()
})
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : undefined">
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

// ═══════════════════════════════════════
// Dark theme overrides
// ═══════════════════════════════════════
html.dark {
  background-color: #1a1a1f;
  background-image:
    radial-gradient(circle at 15% 15%, rgba(100, 130, 180, 0.07) 0%, transparent 55%),
    radial-gradient(circle at 85% 75%, rgba(90, 110, 160, 0.04) 0%, transparent 50%);

  body {
    color: rgba(255, 255, 255, 0.85);
  }

  // Invert grain for dark — lighter specks
  &::after {
    opacity: 0.03;
    filter: invert(1);
  }

  // ── Page titles ──
  .page-title, .post-title {
    color: rgba(255, 255, 255, 0.9) !important;
  }
  .page-subtitle { color: rgba(255, 255, 255, 0.35); }

  // ── Cards & dividers ──
  .post-card {
    border-color: rgba(255, 255, 255, 0.06) !important;
  }
  .tag-card, .link-card {
    border-color: rgba(255, 255, 255, 0.08) !important;
    &:hover {
      border-color: rgba(255, 255, 255, 0.16) !important;
      background: rgba(255, 255, 255, 0.03) !important;
    }
  }
  .related-card {
    border-color: rgba(255, 255, 255, 0.08) !important;
    background: rgba(255, 255, 255, 0.02) !important;
    &:hover { border-color: rgba(255, 255, 255, 0.16) !important; }
  }
  .related-section { border-top-color: rgba(255, 255, 255, 0.06) !important; }
  .year-title { color: rgba(255, 255, 255, 0.7); border-bottom-color: rgba(255, 255, 255, 0.06); }
  .section-line { background: rgba(255, 255, 255, 0.06); }
  .message-card { border-bottom-color: rgba(255, 255, 255, 0.06) !important; }

  // ── Text colors ──
  .post-summary, .post-date, .archive-date { color: rgba(255, 255, 255, 0.35) !important; }
  .archive-link { color: rgba(255, 255, 255, 0.6) !important; &:hover { color: rgba(255, 255, 255, 0.85) !important; } }
  .post-link:hover .post-title { color: rgba(255, 255, 255, 0.9) !important; }
  .tag-name, .link-name { color: rgba(255, 255, 255, 0.75) !important; }
  .tag-count, .link-desc { color: rgba(255, 255, 255, 0.3) !important; }
  .tag-chip { color: rgba(255, 255, 255, 0.5) !important; background: rgba(255, 255, 255, 0.06) !important; border-color: rgba(255, 255, 255, 0.1) !important; }
  .empty-text { color: rgba(255, 255, 255, 0.25); }

  // ── Guestbook ──
  .form-card {
    border-color: rgba(255, 255, 255, 0.08) !important;
    background: rgba(255, 255, 255, 0.02) !important;
    box-shadow: none !important;
  }
  .form-header { background: rgba(255, 255, 255, 0.03) !important; border-bottom-color: rgba(255, 255, 255, 0.06) !important; color: rgba(255, 255, 255, 0.6) !important; }
  .msg-nickname { color: rgba(255, 255, 255, 0.75) !important; }
  .msg-time { color: rgba(255, 255, 255, 0.25) !important; }
  .msg-content { color: rgba(255, 255, 255, 0.55) !important; }
  .section-count { color: rgba(255, 255, 255, 0.3); }

  // ── About ──
  .about-content { color: rgba(255, 255, 255, 0.6);
    h3 { color: rgba(255, 255, 255, 0.75); }
    a { color: rgba(255, 255, 255, 0.5); &:hover { color: rgba(255, 255, 255, 0.75); } }
  }

  // ── Post content ──
  .post-content {
    color: rgba(255, 255, 255, 0.8);
    h1, h2, h3, h4, h5, h6 { color: rgba(255, 255, 255, 0.9); }
    h2 { border-bottom-color: rgba(255, 255, 255, 0.08); }
    blockquote { background: rgba(255, 255, 255, 0.03); border-left-color: rgba(255, 255, 255, 0.2); color: rgba(255, 255, 255, 0.55); }
    strong { color: rgba(255, 255, 255, 0.9); }
    em { color: rgba(255, 255, 255, 0.6); }
    hr { background: linear-gradient(to right, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent); }
    :not(pre) > code { background: rgba(255, 255, 255, 0.08); color: #f0a0b0; }
    a { color: #7ab8cc; border-bottom-color: rgba(122, 184, 204, 0.3); &:hover { color: #9cd0e0; border-bottom-color: #9cd0e0; } }
    table { border-color: rgba(255, 255, 255, 0.1); }
    thead { background: rgba(255, 255, 255, 0.04); }
    th { color: rgba(255, 255, 255, 0.8); }
    th, td { border-bottom-color: rgba(255, 255, 255, 0.06); }
    tbody tr:nth-child(even) { background: rgba(255, 255, 255, 0.02); }
    tbody tr:hover { background: rgba(255, 255, 255, 0.04); }
  }

  // ── TOC ──
  .toc-title { color: rgba(255, 255, 255, 0.4); }
  .toc-item { color: rgba(255, 255, 255, 0.35); &:hover { color: rgba(255, 255, 255, 0.6); } &.active { color: rgba(255, 255, 255, 0.8); border-left-color: rgba(255, 255, 255, 0.3); } }

  // ── Post meta ──
  .post-meta .post-date { color: rgba(255, 255, 255, 0.35); }

  // ── Empty icon ──
  .empty-icon { color: rgba(255, 255, 255, 0.15); }
}
</style>
