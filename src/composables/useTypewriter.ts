import { ref } from 'vue'
import { fetchStream } from '../utils/request'

const TYPING_SPEED = 30 // 每个字符间隔 ms

export function useTypewriter() {
  const isTyping = ref(false)
  const queue: string[] = []
  let streamEnded = false

  /** 后台消费队列，逐字吐出 */
  async function consume(onChar: (char: string) => void, onDone: () => void) {
    while (queue.length > 0 || !streamEnded) {
      if (queue.length > 0) {
        onChar(queue.shift()!)
        await new Promise((r) => setTimeout(r, TYPING_SPEED))
      } else {
        await new Promise((r) => setTimeout(r, 50))
      }
    }
    isTyping.value = false
    onDone()
  }

  /**
   * 发起流式请求，自动处理打字机效果
   * @param messages 对话历史
   * @param onChar 每输出一个字符的回调（参数为单字符）
   * @param onDone 全部完成回调
   * @param onError 出错回调
   */
  async function streamMessage(
    messages: { role: string; content: string }[],
    onChar: (char: string) => void,
    onDone: () => void,
    onError: (error: string) => void,
  ) {
    isTyping.value = true
    queue.length = 0
    streamEnded = false

    // 不 await，让消费者在后台跑
    consume(onChar, onDone)

    await fetchStream(
      '/api/ai/chat',
      { messages },
      // chunk → 拆成单字符推入队列
      (chunk) => {
        for (const char of chunk) {
          queue.push(char)
        }
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
