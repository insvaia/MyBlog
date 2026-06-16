<script setup lang="ts">
import type { Post } from '@/utils/posts'
import { getAllPosts } from '@/utils/posts'

const posts = getAllPosts()

// Group posts by year
const archives = computed(() => {
  const groups: { year: string; posts: Post[] }[] = []
  const map = new Map<string, Post[]>()
  for (const post of posts) {
    const year = new Date(post.date).getFullYear().toString()
    if (!map.has(year)) map.set(year, [])
    map.get(year)!.push(post)
  }
  for (const [year, items] of map) {
    groups.push({ year, posts: items })
  }
  return groups
})

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    month: '2-digit',
    day: '2-digit',
  })
}
</script>

<template>
  <div class="archives-page">
    <h2 class="page-title">归档</h2>

    <template v-if="archives.length > 0">
      <section v-for="group in archives" :key="group.year" class="year-group">
        <h3 class="year-title">{{ group.year }}</h3>
        <div class="year-posts">
          <article v-for="post in group.posts" :key="post.slug" class="archive-item">
            <span class="archive-date">{{ formatDate(post.date) }}</span>
            <router-link :to="`/post/${post.slug}`" class="archive-link">
              {{ post.title }}
            </router-link>
          </article>
        </div>
      </section>
    </template>

    <n-empty v-else description="暂无文章" class="empty-state" />
  </div>
</template>

<style scoped lang="scss">
.archives-page {
  max-width: 860px;
  margin: 0 auto;
  padding: 48px 40px 80px;
}

.page-title {
  font-size: 1.4em;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 32px;
}

.year-group {
  margin-bottom: 32px;
}

.year-title {
  font-size: 1.1em;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px;
  padding-bottom: 6px;
  border-bottom: 1px solid #eee;
}

.archive-item {
  display: flex;
  align-items: baseline;
  gap: 16px;
  padding: 8px 0;
}

.archive-date {
  color: #bbb;
  font-size: 0.85em;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.archive-link {
  color: #555;
  text-decoration: none;
  font-size: 0.95em;
  transition: color 0.15s;

  &:hover {
    color: #1a1a1a;
  }
}

.empty-state {
  margin-top: 80px;
}
</style>
