<script setup lang="ts">
import { getPostBySlug, headingId } from '@/utils/posts'
import type { Heading, Post } from '@/utils/posts'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const post = computed<Post | undefined>(() => getPostBySlug(slug.value))

const activeId = ref('')

const toc = computed<Heading[]>(() => {
  if (!post.value) return []
  return post.value.headings.map((h) => ({
    ...h,
    id: headingId(h.text),
  }))
})

let observer: IntersectionObserver | null = null

function setupObserver() {
  cleanupObserver()
  const headingEls = document.querySelectorAll('.post-content h1, .post-content h2, .post-content h3')
  if (headingEls.length === 0) return

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
          break
        }
      }
    },
    { rootMargin: '-80px 0px -60% 0px' },
  )

  headingEls.forEach((el) => observer!.observe(el))
}

function cleanupObserver() {
  if (observer) {
    observer.disconnect()
    observer = null
  }
}

function scrollToHeading(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

onMounted(() => nextTick(setupObserver))
onUnmounted(cleanupObserver)
watch(slug, () => nextTick(setupObserver))

function processContent(html: string, headings: Heading[]): string {
  let result = html
  for (const h of headings) {
    const escapedText = h.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(
      `(<h${h.level}[^>]*)>(${escapedText})</h${h.level}>`,
      'i',
    )
    result = result.replace(regex, `$1 id="${h.id}">$2</h${h.level}>`)
  }
  return result
}

const renderedContent = computed(() => {
  if (!post.value) return ''
  return processContent(post.value.content, toc.value)
})
</script>

<template>
  <div class="post-page">
    <template v-if="post">
      <header class="post-header">
        <h1 class="post-title">{{ post.title }}</h1>
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
      </header>

      <div class="post-body">
        <aside v-if="toc.length > 0" class="toc-sidebar">
          <nav class="toc-nav">
            <h4 class="toc-title">目录</h4>
            <ul class="toc-list">
              <li
                v-for="item in toc"
                :key="item.id"
                :class="[
                  'toc-item',
                  `toc-level-${item.level}`,
                  { active: activeId === item.id },
                ]"
                @click="scrollToHeading(item.id)"
              >
                {{ item.text }}
              </li>
            </ul>
          </nav>
        </aside>

        <main class="post-content" v-html="renderedContent" />
      </div>
    </template>

    <n-empty v-else description="文章不存在" class="not-found" />
  </div>
</template>

<style scoped lang="scss">
.post-page {
  padding-bottom: 80px;
}

.post-header {
  max-width: 720px;
  margin: 0 auto;
  padding: 48px 40px 16px;
}

.post-title {
  font-size: 1.8em;
  font-weight: 700;
  line-height: 1.35;
  color: #1a1a1a;
  margin: 0 0 14px;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.post-date {
  color: #bbb;
  font-size: 0.85em;
}

.post-tags {
  display: flex;
  gap: 6px;
}

.post-body {
  display: flex;
  justify-content: center;
  gap: 48px;
  padding: 20px 40px 0;
}

.toc-sidebar {
  position: sticky;
  top: 40px;
  width: 180px;
  flex-shrink: 0;
  align-self: flex-start;
  max-height: calc(100vh - 80px);
  overflow-y: auto;

  @media (max-width: 1024px) {
    display: none;
  }
}

.toc-title {
  font-size: 0.78em;
  font-weight: 600;
  color: #bbb;
  margin: 0 0 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-item {
  padding: 4px 0 4px 12px;
  font-size: 0.83em;
  color: #999;
  cursor: pointer;
  transition: color 0.15s;
  line-height: 1.5;
  border-left: 2px solid transparent;

  &.toc-level-2 { padding-left: 20px; }
  &.toc-level-3 { padding-left: 28px; font-size: 0.78em; }

  &:hover {
    color: #333;
  }

  &.active {
    color: #1a1a1a;
    font-weight: 500;
    border-left-color: #999;
  }
}

.post-content {
  min-width: 0;
  flex: 1;
  max-width: 720px;
}

.not-found {
  padding-top: 120px;
}
</style>
