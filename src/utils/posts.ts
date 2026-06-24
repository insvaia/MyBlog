import { parseFrontMatter } from '@/utils/frontmatter'

export interface PostMeta {
  title: string
  date: string
  tags: string[]
  summary: string
  slug: string
}

export interface Post extends PostMeta {
  content: string
}

// Load all posts
const postModules = import.meta.glob<string>('@/posts/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

let _posts: Post[] | null = null

export function getAllPosts(): Post[] {
  if (_posts) return _posts

  _posts = Object.entries(postModules)
    .map(([filepath, raw]) => {
      const filename = filepath.split('/').pop() ?? ''
      const slug = filename.replace(/\.md$/, '')
      const { attributes, body } = parseFrontMatter<{
        title: string
        date: string
        tags: string[]
        summary: string
      }>(raw)

      return {
        ...attributes,
        slug,
        content: body,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return _posts
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug)
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      tags.add(tag)
    }
  }
  return Array.from(tags).sort()
}

/**
 * 根据标签重合度推荐相关文章
 * @param slug - 当前文章 slug
 * @param limit - 最多返回几篇
 */
export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const current = getPostBySlug(slug)
  if (!current) return []

  const others = getAllPosts().filter((p) => p.slug !== slug)
  if (others.length === 0) return []

  const currentTags = new Set(current.tags)

  const scored = others.map((post) => {
    const overlap = post.tags.filter((t) => currentTags.has(t)).length
    // 加分项：同标签越多分数越高
    return { post, score: overlap }
  })

  // 过滤掉完全没交集的，按分数降序
  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post)
}
