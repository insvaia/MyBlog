import { ref } from 'vue'
import { fetchStream } from '../utils/request'

const CHUNK_DELAY = 15 // ms between rendering chunks — fast but still smooth

export function useTypewriter() {
  const isTyping = ref(false)
  const queue: string[] = []
  let streamEnded = false

  /** 后台消费队列，按 chunk 粒度输出（不再拆成单字符） */
  async function consume(onChunk: (text: string) => void, onDone: () => void) {
    while (queue.length > 0 || !streamEnded) {
      if (queue.length > 0) {
        onChunk(queue.shift()!)
        await new Promise((r) => setTimeout(r, CHUNK_DELAY))
      } else {
        await new Promise((r) => setTimeout(r, 30))
      }
    }
    isTyping.value = false
    onDone()
  }

  /**
   * 发起流式请求，自动处理打字机效果
   * @param messages 对话历史
   * @param onChunk 每收到一个文本片段的回调
   * @param onDone 全部完成回调
   * @param onError 出错回调
   */
  async function streamMessage(
    messages: { role: string; content: string }[],
    onChunk: (text: string) => void,
    onDone: () => void,
    onError: (error: string) => void,
  ) {
    isTyping.value = true
    queue.length = 0
    streamEnded = false

    // 不 await，让消费者在后台跑
    consume(onChunk, onDone)

    await fetchStream(
      '/api/ai/chat',
      { messages },
      // 直接按 chunk 粒度推入队列，不再拆成单字符
      (chunk) => {
        queue.push(chunk)
      },
      // 流结束，等待队列消费完
      () => {
        streamEnded = true
      },
      // 出错
      (error) => {
        queue.length = 0
        streamEnded = true
        onError(error)
      },
    )
  }

  return { isTyping, streamMessage }
}
