<script setup lang="ts">
import { getAllTags, getAllPosts } from '@/utils/posts'

const router = useRouter()
const tags = getAllTags()
const posts = getAllPosts()

const tagCounts = computed(() => {
  const counts: Record<string, number> = {}
  for (const post of posts) {
    for (const tag of post.tags) {
      counts[tag] = (counts[tag] || 0) + 1
    }
  }
  return tags.map((tag) => ({ name: tag, count: counts[tag] ?? 0 }))
})

function goTag(tag: string) {
  router.push(`/tag/${tag}`)
}
</script>

<template>
  <div class="tags-page">
    <h2 class="page-title">标签</h2>
    <div class="tag-grid">
      <div
        v-for="item in tagCounts"
        :key="item.name"
        class="tag-card"
        @click="goTag(item.name)"
      >
        <span class="tag-name">{{ item.name }}</span>
        <span class="tag-count">{{ item.count }} 篇</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tags-page {
  max-width: 720px;
  margin: 0 auto;
  padding: 48px 40px 80px;
}

.page-title {
  font-size: 1.4em;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 24px;
}

.tag-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tag-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 18px 28px;
  border: 1px solid #eee;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 90px;

  &:hover {
    border-color: #ccc;
    background: #fafafa;
  }
}

.tag-name {
  font-size: 0.95em;
  font-weight: 500;
  color: #333;
}

.tag-count {
  font-size: 0.75em;
  color: #bbb;
}
</style>
