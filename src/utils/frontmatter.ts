/**
 * Minimal front-matter parser for browser environments.
 * Parses YAML-like metadata between --- delimiters.
 */
export interface FrontMatterResult<T> {
  attributes: T
  body: string
}

export function parseFrontMatter<T extends Record<string, unknown>>(raw: string): FrontMatterResult<T> {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  if (!match) {
    return { attributes: {} as T, body: raw }
  }

  const yamlBlock = match[1]!
  const body = raw.slice(match[0].length)

  const attributes = {} as Record<string, unknown>

  for (const line of yamlBlock.split(/\r?\n/)) {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) continue

    const key = line.slice(0, colonIdx).trim()
    const rawValue = line.slice(colonIdx + 1).trim()

    // Parse array value: [a, b, c]
    if (rawValue.startsWith('[') && rawValue.endsWith(']')) {
      attributes[key] = rawValue
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
    } else {
      attributes[key] = rawValue
    }
  }

  return { attributes: attributes as T, body }
}
