<script setup lang="ts">
import type { Post } from '@/utils/posts'
import { getAllPosts, getAllTags } from '@/utils/posts'

const posts = ref<Post[]>(getAllPosts())
const tags = getAllTags()

const activeTag = ref<string | null>(null)
const searchQuery = ref('')

const filteredPosts = computed(() => {
  let result = posts.value

  if (activeTag.value) {
    result = result.filter((p) => p.tags.includes(activeTag.value!))
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)),
    )
  }

  return result
})

function toggleTag(tag: string) {
  activeTag.value = activeTag.value === tag ? null : tag
}

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
    <!-- Header -->
    <header class="header">
      <h1 class="site-title">Blog</h1>
      <p class="site-desc">记录技术与生活</p>
    </header>

    <!-- Search -->
    <div class="search-bar">
      <n-input
        v-model:value="searchQuery"
        placeholder="搜索文章..."
        clearable
        round
        size="large"
      >
        <template #prefix>
          <span class="search-icon">🔍</span>
        </template>
      </n-input>
    </div>

    <!-- Tag filter -->
    <div class="tag-bar">
      <n-tag
        v-for="tag in tags"
        :key="tag"
        :type="activeTag === tag ? 'primary' : 'default'"
        :bordered="false"
        class="tag-chip"
        @click="toggleTag(tag)"
      >
        {{ tag }}
      </n-tag>
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
              <n-tag
                v-for="tag in post.tags"
                :key="tag"
                size="small"
                :bordered="false"
              >
                {{ tag }}
              </n-tag>
            </span>
          </div>
        </router-link>
      </article>
    </div>

    <!-- Empty state -->
    <n-empty v-else description="没有找到匹配的文章" class="empty-state" />
  </div>
</template>

<style scoped lang="scss">
.home {
  max-width: 720px;
  margin: 0 auto;
  padding: 80px 20px 60px;
}

.header {
  text-align: center;
  margin-bottom: 48px;
}

.site-title {
  font-size: 2.2em;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.5px;
  margin: 0;
}

.site-desc {
  margin-top: 8px;
  color: #999;
  font-size: 0.95em;
}

.search-bar {
  margin-bottom: 20px;
}

.search-icon {
  font-size: 14px;
  opacity: 0.4;
}

.tag-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 36px;
  justify-content: center;
}

.tag-chip {
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-1px);
  }
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.post-card {
  border-bottom: 1px solid #f0f0f0;

  &:first-child {
    border-top: 1px solid #f0f0f0;
  }
}

.post-link {
  display: block;
  padding: 24px 0;
  text-decoration: none;
  transition: padding-left 0.2s;

  &:hover {
    padding-left: 8px;

    .post-title {
      color: #000;
    }
  }
}

.post-title {
  font-size: 1.2em;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 6px;
  transition: color 0.2s;
}

.post-summary {
  color: #888;
  font-size: 0.92em;
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

.empty-state {
  margin-top: 60px;
}
</style>
