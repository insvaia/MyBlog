<script setup lang="ts">
import type { Post } from '@/utils/posts'
import { getAllPosts } from '@/utils/posts'

const posts = ref<Post[]>(getAllPosts())
const searchQuery = ref('')

const filteredPosts = computed(() => {
  if (!searchQuery.value.trim()) return posts.value

  const q = searchQuery.value.toLowerCase()
  return posts.value.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)),
  )
})

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <div class="home">
    <!-- Search -->
    <div class="search-bar">
      <n-input
        v-model:value="searchQuery"
        placeholder="搜索文章..."
        clearable
        round
      >
        <template #prefix>
          <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        </template>
      </n-input>
    </div>

    <!-- Post list -->
    <div v-if="filteredPosts.length > 0" class="post-list">
      <article
        v-for="post in filteredPosts"
        :key="post.slug"
        class="post-card"
      >
        <router-link :to="`/post/${post.slug}`" class="post-link">
          <h2 class="post-title">{{ post.title }}</h2>
          <p class="post-summary">{{ post.summary }}</p>
          <div class="post-meta">
            <span class="post-date">{{ formatDate(post.date) }}</span>
            <span class="post-tags">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="tag-chip"
              >
                {{ tag }}
              </span>
            </span>
          </div>
        </router-link>
      </article>
    </div>

    <n-empty v-else description="没有找到匹配的文章" class="empty-state" />
  </div>
</template>

<style scoped lang="scss">
.home {
  max-width: 860px;
  margin: 0 auto;
  padding: 48px 40px 80px;
}

.search-bar {
  margin-bottom: 28px;
}

.search-icon {
  display: block;
  opacity: 0.35;
}

.post-list {
  display: flex;
  flex-direction: column;
}

.post-card {
  border-bottom: 1px solid #f0f0f0;

  &:first-child {
    border-top: 1px solid #f0f0f0;
  }
}

.post-link {
  display: block;
  padding: 22px 0;
  text-decoration: none;
  transition: padding-left 0.2s;

  &:hover {
    padding-left: 8px;

    .post-title {
      color: #000;
    }
  }

  &:active {
    transform: scale(0.995);
  }

  &:focus-visible {
    outline: 2px solid rgba(44, 95, 110, 0.4);
    outline-offset: 2px;
    border-radius: 4px;
  }
}

.post-title {
  font-size: 1.15em;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #1a1a1a;
  margin: 0 0 6px;
  transition: color 0.2s;
}

.post-summary {
  color: #888;
  font-size: 0.9em;
  line-height: 1.6;
  margin: 0 0 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.post-date {
  color: #bbb;
  font-size: 0.82em;
}

.post-tags {
  display: flex;
  gap: 6px;
}

.tag-chip {
  display: inline-block;
  padding: 2px 10px;
  font-size: 0.75em;
  color: #777;
  background: rgba(128, 128, 128, 0.08);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(128, 128, 128, 0.12);
  border-radius: 10px;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(128, 128, 128, 0.15);
    border-color: rgba(128, 128, 128, 0.22);
  }
}

.empty-state {
  margin-top: 80px;
}
</style>
