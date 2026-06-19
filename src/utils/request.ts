interface StreamChunk {
  type?: string;
  content?: string;
  done?: boolean;
  error?: string;
}

export async function fetchStream(
  url: string,
  data: Record<string, any>, // 或保持 any，完全兼容你原来的传参
  onChunk: (content: string) => void,
  onComplete: () => void,
  onError: (error: string) => void,
): Promise<void> {
  // 中止的请求控制器
  const controller: AbortController = new AbortController();
  // 发起一个请求
  const BASE_URL = 'http://localhost:3001'
  const response: Response = await fetch(`${BASE_URL}${url}`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(data),
    signal: controller.signal, // controller中有一个signal属性
  });

  // 获取响应体的可读流读取器
  const reader: ReadableStreamDefaultReader<Uint8Array> =
    response.body!.getReader();
  // 将二进制流数据解码为文本
  const decoder: TextDecoder = new TextDecoder();

  // 流数据解码
  while (true) {
    const { done, value }: ReadableStreamReadResult<Uint8Array> =
      await reader.read();
    if (done) break;
    const chunk: string = decoder.decode(value, { stream: true });
    const lines: string[] = chunk
      .split('\n')
      .filter((line: string) => line.trim());
    for (const line of lines) {
      if (line.startsWith("data: ")) {
        const jsonStr: string = line.substring(6);
        const jsonData: StreamChunk = JSON.parse(jsonStr); // 这里用了你原有的 any 逻辑，我仅显式标注了类型
        // 返回每一块数据
        if (jsonData.type === "chunk") {
          onChunk(jsonData.content as string); // 由于你原有逻辑未做空判断，保持原样
        } else if (jsonData.done) {
          onComplete();
        } else if (jsonData.error) {
          onError(jsonData.error);
        }
      }
    }
  }
  controller.abort();
}
