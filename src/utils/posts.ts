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
