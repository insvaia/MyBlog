<script setup lang="ts">
import { getPostBySlug, headingId } from '@/utils/posts'
import type { Heading, Post } from '@/utils/posts'

const route = useRoute()
const router = useRouter()
const slug = computed(() => route.params.slug as string)

const post = computed<Post | undefined>(() => getPostBySlug(slug.value))

const activeId = ref('')

// Build TOC from headings
const toc = computed<Heading[]>(() => {
  if (!post.value) return []
  return post.value.headings.map((h) => ({
    ...h,
    id: headingId(h.text),
  }))
})

// IntersectionObserver: highlight current TOC item
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

function goBack() {
  router.push('/')
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

onMounted(() => {
  nextTick(setupObserver)
})

onUnmounted(cleanupObserver)

watch(slug, () => {
  nextTick(setupObserver)
})

// Override heading IDs in rendered HTML
function processContent(html: string, headings: Heading[]): string {
  let result = html
  for (const h of headings) {
    // Replace heading tags without IDs with ones that have IDs
    const tagLevel = h.level
    const escapedText = h.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // Try to match the heading and add id
    const regex = new RegExp(
      `(<h${tagLevel}[^>]*)>(${escapedText})</h${tagLevel}>`,
      'i',
    )
    result = result.replace(regex, `$1 id="${h.id}">$2</h${tagLevel}>`)
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
    <!-- Top bar -->
    <div class="top-bar">
      <n-button text @click="goBack" class="back-btn">
        ← 返回
      </n-button>
    </div>

    <template v-if="post">
      <!-- Article header -->
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

      <!-- TOC sidebar + Content -->
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

        <main
          class="post-content"
          v-html="renderedContent"
        />
      </div>
    </template>

    <!-- 404 -->
    <n-empty v-else description="文章不存在" class="not-found">
      <template #extra>
        <n-button @click="goBack">返回首页</n-button>
      </template>
    </n-empty>
  </div>
</template>

<style scoped lang="scss">
.post-page {
  min-height: 100vh;
}

.top-bar {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #f0f0f0;
}

.back-btn {
  font-size: 14px;
  color: #666;
}

.post-header {
  max-width: 720px;
  margin: 0 auto;
  padding: 40px 20px 20px;
}

.post-title {
  font-size: 2em;
  font-weight: 700;
  line-height: 1.35;
  color: #1a1a1a;
  margin: 0 0 16px;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.post-date {
  color: #bbb;
  font-size: 0.9em;
}

.post-tags {
  display: flex;
  gap: 6px;
}

.post-body {
  display: flex;
  justify-content: center;
  gap: 48px;
  padding: 24px 20px 80px;
}

// TOC sidebar
.toc-sidebar {
  position: sticky;
  top: 80px;
  width: 200px;
  flex-shrink: 0;
  align-self: flex-start;
  max-height: calc(100vh - 120px);
  overflow-y: auto;

  @media (max-width: 1024px) {
    display: none;
  }
}

.toc-title {
  font-size: 0.82em;
  font-weight: 600;
  color: #999;
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
  padding: 4px 0 4px 0;
  font-size: 0.85em;
  color: #999;
  cursor: pointer;
  transition: color 0.15s;
  line-height: 1.5;
  border-left: 2px solid transparent;
  padding-left: 12px;

  &.toc-level-2 { padding-left: 20px; }
  &.toc-level-3 { padding-left: 28px; font-size: 0.8em; }

  &:hover {
    color: #333;
  }

  &.active {
    color: #1a1a1a;
    font-weight: 500;
    border-left-color: #999;
  }
}

// Main content
.post-content {
  min-width: 0;
  flex: 1;
}

.not-found {
  padding-top: 120px;
}
</style>
