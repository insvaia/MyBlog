<script setup lang="ts">
import type { Post } from '@/utils/posts'
import { getAllPosts } from '@/utils/posts'

const route = useRoute()
const tag = computed(() => route.params.tag as string)

const posts = computed<Post[]>(() =>
  getAllPosts().filter((p) => p.tags.includes(tag.value)),
)

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <div class="tag-posts">
    <h2 class="page-title"># {{ tag }}</h2>

    <div v-if="posts.length > 0" class="post-list">
      <article v-for="post in posts" :key="post.slug" class="post-card">
        <router-link :to="`/post/${post.slug}`" class="post-link">
          <h3 class="post-title">{{ post.title }}</h3>
          <p class="post-summary">{{ post.summary }}</p>
          <span class="post-date">{{ formatDate(post.date) }}</span>
        </router-link>
      </article>
    </div>

    <n-empty v-else description="该标签下暂无文章" class="empty-state" />
  </div>
</template>

<style scoped lang="scss">
.tag-posts {
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
  }
}

.post-title {
  font-size: 1.05em;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 6px;
}

.post-summary {
  color: #888;
  font-size: 0.88em;
  line-height: 1.6;
  margin: 0 0 8px;
}

.post-date {
  color: #bbb;
  font-size: 0.8em;
}

.empty-state {
  margin-top: 80px;
}
</style>
