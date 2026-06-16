import fm from 'front-matter'
import { marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'

export interface PostMeta {
  title: string
  date: string
  tags: string[]
  summary: string
  slug: string
}

export interface Heading {
  level: number
  text: string
  id: string
}

export interface Post extends PostMeta {
  content: string
  headings: Heading[]
}

// Configure marked with highlight.js
marked.use(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code: string, lang: string) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value
      }
      return hljs.highlightAuto(code).value
    },
  }),
)

// Generate ID from heading text
export function headingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w一-鿿]+/g, '-')
    .replace(/^-|-$/g, '')
}

// Extract headings from raw markdown
function extractHeadings(raw: string): Heading[] {
  const headings: Heading[] = []
  const lines = raw.split('\n')
  for (const line of lines) {
    const match = line.match(/^(#{1,3})\s+(.+)/)
    if (match && match[1] && match[2]) {
      const level = match[1].length
      const text = match[2].trim()
      headings.push({ level, text, id: headingId(text) })
    }
  }
  return headings
}

// Load all posts
const postModules = import.meta.glob<string>('@/posts/*.md', {
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
      const { attributes, body } = fm<{
        title: string
        date: string
        tags: string[]
        summary: string
      }>(raw)

      return {
        ...attributes,
        slug,
        content: marked.parse(body) as string,
        headings: extractHeadings(body),
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
