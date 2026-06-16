import type { Token, Tokens } from 'marked'

export interface TocHeading {
  level: number
  text: string
  id: string
}

export function headingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w一-鿿]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function extractTocHeadings(tokens: Token[]): TocHeading[] {
  const headings: TocHeading[] = []
  for (const token of tokens) {
    if (token.type === 'heading') {
      const h = token as Tokens.Heading
      const text = extractText(h.tokens)
      headings.push({ level: h.depth, text, id: headingId(text) })
    }
  }
  return headings
}

function extractText(tokens: Token[]): string {
  return tokens
    .map((t) => {
      if (t.type === 'text') return (t as Tokens.Text).text
      return t.type === 'strong' || t.type === 'em' || t.type === 'del'
        ? extractText((t as Tokens.Strong).tokens)
        : ''
    })
    .join('')
}
