<script setup lang="ts">
import { marked, hljs } from '@/utils/marked'
import type { Token, Tokens } from 'marked'
import { headingId, extractTocHeadings } from '@/utils/headings'
import type { TocHeading } from '@/utils/headings'

// ── Inline token → HTML ──
function renderInline(tokens: Token[] | undefined): string {
  if (!tokens) return ''
  return tokens
    .map((token) => {
      switch (token.type) {
        case 'text':
          return escapeHtml((token as Tokens.Text).text)
        case 'strong':
          return `<strong>${renderInline((token as Tokens.Strong).tokens)}</strong>`
        case 'em':
          return `<em>${renderInline((token as Tokens.Em).tokens)}</em>`
        case 'del':
          return `<del>${renderInline((token as Tokens.Del).tokens)}</del>`
        case 'codespan':
          return `<code>${escapeHtml((token as Tokens.Codespan).text)}</code>`
        case 'link': {
          const link = token as Tokens.Link
          const target = link.href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''
          return `<a href="${link.href}"${target}>${renderInline(link.tokens)}</a>`
        }
        case 'image': {
          const img = token as Tokens.Image
          return `<img src="${img.href}" alt="${img.text}" loading="lazy" />`
        }
        case 'br':
          return '<br />'
        case 'html':
        case 'escape':
          return escapeHtml((token as any).text || (token as any).raw || '')
        default:
          // Fallback: render text content for any unknown inline token type
          return escapeHtml((token as any).text || (token as any).raw || '')
      }
    })
    .join('')
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function extractText(tokens: Token[] | undefined): string {
  if (!tokens) return ''
  return tokens
    .map((t) => {
      if (t.type === 'text') return (t as Tokens.Text).text
      return t.type === 'strong' || t.type === 'em' || t.type === 'del'
        ? extractText((t as Tokens.Strong).tokens)
        : ''
    })
    .join('')
}

function highlightCode(code: string, lang: string | undefined): string {
  if (lang && hljs.getLanguage(lang)) {
    return hljs.highlight(code, { language: lang }).value
  }
  return hljs.highlightAuto(code).value
}

// ── Props ──
const props = defineProps<{
  content: string
}>()

// ── Expose headings ──
const headings = ref<TocHeading[]>([])

const tokens = computed<Token[]>(() => {
  const result = marked.lexer(props.content)
  headings.value = extractTocHeadings(result)
  return result
})

defineExpose({ headings })
</script>

<template>
  <div class="post-content">
    <template v-for="(token, i) in tokens" :key="i">
      <!-- ── Heading ── -->
      <component
        v-if="token.type === 'heading'"
        :is="`h${token.depth}`"
        :id="headingId(extractText(token.tokens))"
        v-html="renderInline(token.tokens)"
      />

      <!-- ── Paragraph ── -->
      <p v-else-if="token.type === 'paragraph'" v-html="renderInline(token.tokens)" />

      <!-- ── Code Block ── -->
      <pre v-else-if="token.type === 'code'">
        <code
          class="hljs"
          :class="token.lang ? `language-${token.lang}` : ''"
          v-html="highlightCode(token.text, token.lang)"
        />
      </pre>

      <!-- ── Blockquote ── -->
      <blockquote v-else-if="token.type === 'blockquote'">
        <template v-for="(bt, bj) in token.tokens" :key="bj">
          <p v-if="bt.type === 'paragraph' || bt.type === 'text'" v-html="renderInline(bt.tokens)" />
          <h2 v-else-if="bt.type === 'heading' && bt.depth === 2" v-html="renderInline(bt.tokens)" />
          <h3 v-else-if="bt.type === 'heading' && bt.depth === 3" v-html="renderInline(bt.tokens)" />
        </template>
      </blockquote>

      <!-- ── List ── -->
      <ul v-else-if="token.type === 'list' && !token.ordered">
        <li v-for="(item, li) in token.items" :key="li">
          <template v-for="(it, ik) in item.tokens" :key="ik">
            <p v-if="it.type === 'paragraph' || it.type === 'text'" v-html="renderInline(it.tokens)" />
            <ul v-else-if="it.type === 'list' && !it.ordered">
              <li v-for="(sub, sl) in it.items" :key="sl">
                <template v-for="(subToken, sk) in sub.tokens" :key="sk">
                  <p v-if="subToken.type === 'paragraph' || subToken.type === 'text'" v-html="renderInline(subToken.tokens)" />
                </template>
              </li>
            </ul>
            <ol v-else-if="it.type === 'list' && it.ordered">
              <li v-for="(sub, sl) in it.items" :key="sl">
                <template v-for="(subToken, sk) in sub.tokens" :key="sk">
                  <p v-if="subToken.type === 'paragraph' || subToken.type === 'text'" v-html="renderInline(subToken.tokens)" />
                </template>
              </li>
            </ol>
          </template>
        </li>
      </ul>

      <ol v-else-if="token.type === 'list' && token.ordered">
        <li v-for="(item, li) in token.items" :key="li">
          <template v-for="(it, ik) in item.tokens" :key="ik">
            <p v-if="it.type === 'paragraph' || it.type === 'text'" v-html="renderInline(it.tokens)" />
          </template>
        </li>
      </ol>

      <!-- ── Table ── -->
      <table v-else-if="token.type === 'table'">
        <thead>
          <tr>
            <th v-for="(cell, ci) in token.header" :key="ci" v-html="renderInline(cell.tokens)" />
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, ri) in token.rows" :key="ri">
            <td v-for="(cell, ci) in row" :key="ci" v-html="renderInline(cell.tokens)" />
          </tr>
        </tbody>
      </table>

      <!-- ── Horizontal Rule ── -->
      <hr v-else-if="token.type === 'hr'" />
    </template>
  </div>
</template>

<style lang="scss">
@use '@/styles/post.scss';
</style>
