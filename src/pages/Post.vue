<script setup lang="ts">
import { getPostBySlug } from '@/utils/posts'
import type { Post } from '@/utils/posts'
import MarkdownRender from '@/components/MarkdownRender.vue'
import type { TocHeading } from '@/utils/headings'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const post = computed<Post | undefined>(() => getPostBySlug(slug.value))

const mdRef = ref<InstanceType<typeof MarkdownRender> | null>(null)
const activeId = ref('')

const toc = computed<TocHeading[]>(() => {
  return mdRef.value?.headings ?? []
})

// ── TOC observer ──
let observer: IntersectionObserver | null = null

function setupObserver() {
  cleanupObserver()
  nextTick(() => {
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
  })
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
</script>

<template>
  <div class="post-page">
    <template v-if="post">
      <!-- TOC + Content -->
      <div class="post-body">
        <!-- Content area -->
        <div class="content-area">
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

          <main class="content-wrapper">
            <MarkdownRender
              :key="slug"
              ref="mdRef"
              :content="post.content"
            />
          </main>
        </div>

        <!-- TOC (right side) -->
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
      </div>
    </template>

    <!-- 404 -->
    <n-empty v-else description="文章不存在" class="not-found" />
  </div>
</template>

<style scoped lang="scss">
.post-page {
  padding-bottom: 80px;
}

.post-body {
  display: flex;
  justify-content: center;
  gap: 56px;
  padding: 48px 40px 0;
}

// Content area (centered)
.content-area {
  min-width: 0;
  flex: 1;
  max-width: 860px;
}

.post-header {
  margin: 0 0 24px;
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

// Content wrapper
.content-wrapper {
  min-width: 0;
}

// TOC sidebar (right side)
.toc-sidebar {
  position: sticky;
  top: 40px;
  width: 220px;
  flex-shrink: 0;
  align-self: flex-start;
  max-height: calc(100vh - 80px);
  overflow-y: auto;

  @media (max-width: 1024px) {
    display: none;
  }
}

.toc-title {
  font-size: 0.88em;
  font-weight: 600;
  color: #bbb;
  margin: 0 0 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-item {
  padding: 5px 0 5px 14px;
  font-size: 0.9em;
  color: #999;
  cursor: pointer;
  transition: color 0.15s;
  line-height: 1.5;
  border-left: 2px solid transparent;

  &.toc-level-2 { padding-left: 22px; }
  &.toc-level-3 { padding-left: 30px; font-size: 0.85em; }

  &:hover {
    color: #333;
  }

  &.active {
    color: #1a1a1a;
    font-weight: 500;
    border-left-color: #999;
  }
}

.not-found {
  padding-top: 120px;
}
</style>
