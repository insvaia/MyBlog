<script setup lang="ts">
import { getPostBySlug, getRelatedPosts } from '@/utils/posts'
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

const relatedPosts = computed<Post[]>(() => {
  return getRelatedPosts(slug.value, 3)
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

          <!-- Related posts -->
          <section v-if="relatedPosts.length > 0" class="related-section">
            <h3 class="related-title">相关推荐</h3>
            <div class="related-grid">
              <article
                v-for="rp in relatedPosts"
                :key="rp.slug"
                class="related-card"
              >
                <router-link :to="`/post/${rp.slug}`" class="related-link">
                  <h4 class="related-post-title">{{ rp.title }}</h4>
                  <p class="related-post-summary">{{ rp.summary }}</p>
                  <div class="related-post-tags">
                    <n-tag
                      v-for="tag in rp.tags"
                      :key="tag"
                      size="tiny"
                      :bordered="false"
                    >
                      {{ tag }}
                    </n-tag>
                  </div>
                </router-link>
              </article>
            </div>
          </section>
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
  font-weight: 600;
  letter-spacing: -0.02em;
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
  max-height: calc(100dvh - 80px);
  overflow-y: auto;
  overflow-x: hidden;

  // Thin custom scrollbar
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.12) transparent;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.12);
    border-radius: 2px;

    &:hover {
      background: rgba(0, 0, 0, 0.22);
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
}

.toc-title {
  font-size: 0.88em;
  font-weight: 700;
  color: #666;
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

  &:active {
    opacity: 0.7;
  }

  &:focus-visible {
    outline: 2px solid rgba(44, 95, 110, 0.4);
    outline-offset: 2px;
    border-radius: 2px;
  }

  &.active {
    color: #1a1a1a;
    font-weight: 500;
    border-left-color: #999;
  }
}

// Related posts
.related-section {
  margin-top: 56px;
  padding-top: 36px;
  border-top: 2px solid #f0f0f0;
}

.related-title {
  font-size: 1.1em;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #1a1a1a;
  margin: 0 0 20px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 12px;
}

.related-card {
  border: 1px solid #eee;
  border-radius: 10px;
  background: #fff;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;

  &:hover {
    border-color: #ddd;
    box-shadow: 0 2px 12px rgba(55, 60, 70, 0.06);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
}

.related-link {
  display: block;
  padding: 18px 20px;
  text-decoration: none;
}

.related-post-title {
  font-size: 0.95em;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 6px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.related-post-summary {
  font-size: 0.82em;
  line-height: 1.55;
  color: #999;
  margin: 0 0 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.related-post-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.not-found {
  padding-top: 120px;
}
</style>
