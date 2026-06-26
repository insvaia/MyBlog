<script setup lang="ts">
import { ref, nextTick, onMounted } from 'vue'
import '@/utils/marked' // ensure marked is configured before use
import MarkdownRender from '@/components/MarkdownRender.vue'
import { useTypewriter } from '../composables/useTypewriter'

const baseUrl = import.meta.env.BASE_URL

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  time: string
}

const messages = ref<ChatMessage[]>([])
const inputText = ref('')
const { isTyping, streamMessage } = useTypewriter()
const chatContainerRef = ref<HTMLElement | null>(null)
const textareaRef = ref<HTMLTextAreaElement | null>(null)

// ── Default greeting ──
onMounted(() => {
  messages.value.push({
    role: 'assistant',
    content: '你好，我是"一只做梦的鱼"的 AI 助手，你想要了解什么？',
    time: formatTime(new Date()),
  })
  scrollToBottom()
})

// ── Suggested questions ──
const suggestions = [
  '介绍一下这个博客',
  '博主擅长哪些技术',
  '最近发布了什么文章',
]

function formatTime(date: Date): string {
  return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
}

function scrollToBottom() {
  nextTick(() => {
    if (chatContainerRef.value) {
      chatContainerRef.value.scrollTop = chatContainerRef.value.scrollHeight
    }
  })
}

function autoResize() {
  const el = textareaRef.value
  if (!el) return
  el.style.height = 'auto'
  el.style.height = Math.min(el.scrollHeight, 160) + 'px'
}

async function sendMessage(text?: string) {
  const content = (text || inputText.value).trim()
  if (!content || isTyping.value) return

  messages.value.push({
    role: 'user',
    content,
    time: formatTime(new Date()),
  })
  inputText.value = ''
  nextTick(autoResize)
  scrollToBottom()

  // 构建对话历史
  const history = messages.value
    .filter((m) => m.content)
    .map((m) => ({ role: m.role, content: m.content }))

  // 创建空的 assistant 消息（推入响应式数组后会变 Proxy）
  messages.value.push({
    role: 'assistant',
    content: '',
    time: formatTime(new Date()),
  })
  const msgIdx = messages.value.length - 1
  scrollToBottom()

  // 调用 composable：自动处理流式请求 + 打字机效果
  streamMessage(
    [...history, { role: 'user', content }],
    (char) => {
      // 必须走 messages.value[i] 才能触发 Vue 响应式更新
      messages.value[msgIdx]!.content += char
      scrollToBottom()
    },
    () => scrollToBottom(),
    (error) => {
      messages.value[msgIdx]!.content = `❌ 出错了：${error}`
    },
  )
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    sendMessage()
  }
}
</script>

<template>
  <div class="ai-page">
    <div class="ai-layout">
      <!-- ── Chat Area ── -->
      <main class="ai-chat">
        <!-- Messages -->
        <div ref="chatContainerRef" class="chat-messages">
          <template v-for="(msg, i) in messages" :key="i">
            <div
              :class="['message-row', msg.role === 'user' ? 'message-user' : 'message-assistant']"
            >
              <div class="message-bubble">
                <!-- AI content rendered as markdown -->
                <div
                  v-if="msg.role === 'assistant'"
                  class="message-content"
                >
                  <MarkdownRender :content="msg.content" />
                </div>
                <!-- User content as plain text -->
                <p v-else class="message-content message-text">{{ msg.content }}</p>
                <span class="message-time">{{ msg.time }}</span>
              </div>
            </div>
          </template>

          <!-- Typing indicator -->
          <div v-if="isTyping" class="message-row message-assistant">
            <div class="message-bubble">
              <div class="typing-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Input area -->
        <div class="chat-input-area">
          <!-- Double-Bezel input shell -->
          <div class="input-shell">
            <div class="input-core">
              <textarea
                ref="textareaRef"
                v-model="inputText"
                class="chat-textarea"
                placeholder="输入你的问题…"
                rows="1"
                :disabled="isTyping"
                @keydown="handleKeydown"
                @input="autoResize"
              ></textarea>

              <!-- Button-in-Button send -->
              <button
                class="send-btn"
                :class="{ active: inputText.trim() && !isTyping }"
                :disabled="!inputText.trim() || isTyping"
                @click="sendMessage()"
              >
                <div class="send-btn-core">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M22 2 11 13" />
                    <path d="m22 2-7 20-4-9-9-4 20-7z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <p class="input-hint">Enter 发送 · Shift + Enter 换行</p>
        </div>
      </main>

      <!-- ── Right: AI Identity Panel ── -->
      <aside class="ai-identity">
        <!-- Double-Bezel outer shell -->
        <div class="ai-card-shell">
          <div class="ai-card-core">
            <!-- AI Avatar with glow ring -->
            <div class="ai-avatar-stage">
              <div class="ai-avatar-glow"></div>
              <div class="ai-avatar-ring">
                <div class="ai-avatar-inner">
                  <img class="ai-icon-img" :src="`${baseUrl}imgs/deepseek.jpg`" alt="DeepSeek" />
                </div>
              </div>
            </div>

            <h2 class="ai-name">AI 助手</h2>
            <p class="ai-desc">
              基于"一只做梦的鱼"博客内容训练，可以回答技术问题、搜索文章、提供代码示例。
            </p>

            <!-- Capability tags -->
            <div class="ai-tags">
              <span class="ai-tag">技术问答</span>
              <span class="ai-tag">文章检索</span>
              <span class="ai-tag">代码助手</span>
            </div>

            <!-- Suggested questions -->
            <div class="ai-suggestions">
              <p class="suggest-label">试试问我</p>
              <button
                v-for="q in suggestions"
                :key="q"
                class="suggest-chip"
                @click="sendMessage(q)"
              >
                {{ q }}
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped lang="scss">
// ═══════════════════════════════════════
// Ethereal Glass — AI Chat Page
// ═══════════════════════════════════════

$bg-deep: #1a1a1f;
$glass-outer: rgba(255, 255, 255, 0.025);
$glass-inner: rgba(255, 255, 255, 0.03);
$border-subtle: rgba(255, 255, 255, 0.06);
$border-hairline: rgba(255, 255, 255, 0.08);
$text-primary: rgba(255, 255, 255, 0.9);
$text-secondary: rgba(255, 255, 255, 0.5);
$text-muted: rgba(255, 255, 255, 0.3);
$accent-cool: rgba(140, 160, 210, 0.7);
$accent-warm: rgba(200, 180, 160, 0.5);

// ── Page baseline ──
.ai-page {
  min-height: 100dvh;
  background-color: $bg-deep;
  background-image:
    radial-gradient(circle at 18% 25%, rgba(100, 130, 180, 0.07) 0%, transparent 55%),
    radial-gradient(circle at 82% 60%, rgba(90, 110, 160, 0.04) 0%, transparent 50%),
    radial-gradient(circle at 50% 90%, rgba(140, 150, 180, 0.03) 0%, transparent 45%);
  background-attachment: fixed;
}

.ai-layout {
  display: flex;
  gap: 48px;
  padding: 48px 48px 0;
  height: 100dvh;
  box-sizing: border-box;
}

// ═══════════════════════════════════════
// LEFT — AI Identity Panel
// ═══════════════════════════════════════

.ai-identity {
  width: 300px;
  flex-shrink: 0;
  align-self: flex-start;
  position: sticky;
  top: 48px;
}

// Double-Bezel: Outer Shell
.ai-card-shell {
  background: $glass-outer;
  border: 1px solid $border-subtle;
  border-radius: 1.75rem;
  padding: 1px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 1px 0 rgba(255, 255, 255, 0.04) inset;
}

// Double-Bezel: Inner Core
.ai-card-core {
  background: $glass-inner;
  border-radius: calc(1.75rem - 0.25rem);
  padding: 36px 28px 32px;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

// Avatar stage
.ai-avatar-stage {
  position: relative;
  width: 88px;
  height: 88px;
  margin-bottom: 24px;
}

.ai-avatar-glow {
  position: absolute;
  inset: -16px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(140, 160, 210, 0.15) 0%,
    transparent 70%
  );
  animation: avatarPulse 4s ease-in-out infinite;
}

@keyframes avatarPulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.06); }
}

.ai-avatar-ring {
  position: relative;
  z-index: 1;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  padding: 2px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.03) 50%,
    rgba(255, 255, 255, 0.08) 100%
  );
}

.ai-avatar-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  color: $accent-cool;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.08);
}

.ai-icon-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

// Identity typography
.ai-name {
  font-size: 1.25em;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: $text-primary;
  margin: 0 0 8px;
}

.ai-desc {
  font-size: 0.82em;
  line-height: 1.65;
  color: $text-secondary;
  margin: 0 0 22px;
}

// Capability tags
.ai-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 28px;
}

.ai-tag {
  padding: 4px 14px;
  font-size: 0.72em;
  font-weight: 500;
  color: $text-secondary;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid $border-subtle;
  border-radius: 20px;
  letter-spacing: 0.02em;
}

// Suggested questions
.ai-suggestions {
  width: 100%;
  padding-top: 20px;
  border-top: 1px solid $border-subtle;
}

.suggest-label {
  font-size: 0.7em;
  font-weight: 500;
  color: $text-muted;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin: 0 0 12px;
}

.suggest-chip {
  display: block;
  width: 100%;
  padding: 10px 16px;
  margin-bottom: 8px;
  font-size: 0.82em;
  color: $text-secondary;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid $border-subtle;
  border-radius: 12px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition:
    background 0.3s cubic-bezier(0.32, 0.72, 0, 1),
    border-color 0.3s cubic-bezier(0.32, 0.72, 0, 1),
    color 0.3s cubic-bezier(0.32, 0.72, 0, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: $border-hairline;
    color: $text-primary;
  }

  &:active {
    transform: scale(0.98);
    transition: transform 0.15s cubic-bezier(0.32, 0.72, 0, 1);
  }

  &:last-child {
    margin-bottom: 0;
  }
}

// ═══════════════════════════════════════
// RIGHT — Chat Area
// ═══════════════════════════════════════

.ai-chat {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
  border-right: 1px solid $border-subtle;
  padding-right: 48px;
}

// Messages container
.chat-messages {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 4px 24px 0;

  // Thin custom scrollbar
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.08) transparent;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.08);
    border-radius: 2px;

    &:hover {
      background: rgba(255, 255, 255, 0.16);
    }
  }
}

// Message row
.message-row {
  display: flex;
  margin-bottom: 20px;

  &.message-user {
    justify-content: flex-end;
  }

  &.message-assistant {
    justify-content: flex-start;
  }

  // Entry animation
  animation: messageIn 0.5s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes messageIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Message bubble
.message-bubble {
  max-width: 78%;
  padding: 14px 20px;
  border-radius: 1.25rem;
  position: relative;

  // User bubble — warm glass
  .message-user & {
    background: rgba(200, 185, 160, 0.12);
    border: 1px solid rgba(200, 185, 160, 0.14);
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
  }

  // Assistant bubble — cool glass
  .message-assistant & {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid $border-subtle;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
  }
}

// Message content
.message-content {
  font-size: 0.9em;
  line-height: 1.7;
  color: $text-primary;
  word-break: break-word;

  &.message-text {
    white-space: pre-wrap;
  }

  // ── Override post.scss light-theme defaults for dark AI page ──
  // post.scss sets dark text colors (e.g. #2c2c2c) that are invisible
  // on the AI page's dark background (#1a1a1f). These :deep() overrides
  // pierce through MarkdownRender's .post-content wrapper and restore
  // the dark-theme look.
  :deep(.post-content) {
    color: $text-primary;
    max-width: none;
    margin: 0;

    h1, h2, h3, h4, h5, h6 {
      color: #fff;
      border-bottom-color: rgba(255, 255, 255, 0.08);
    }

    p {
      margin: 0 0 0.8em;
      color: $text-primary;
      &:last-child { margin-bottom: 0; }
    }

    strong {
      font-weight: 600;
      color: #fff;
    }

    em { color: $text-secondary; }

    a {
      color: $accent-cool;
      text-decoration: none;
      border-bottom: 1px solid rgba(140, 160, 210, 0.3);
      transition: border-color 0.2s;
      &:hover { border-bottom-color: $accent-cool; }
    }

    code {
      font-family: 'Cascadia Code', 'Fira Code', 'JetBrains Mono', 'Consolas', monospace;
      font-size: 0.85em;
    }

    :not(pre) > code {
      padding: 2px 6px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 4px;
      color: rgba(255, 255, 255, 0.8);
    }

    pre {
      margin: 0.8em 0;
      padding: 14px 18px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 10px;
      border: 1px solid $border-subtle;
      overflow-x: auto;
      box-shadow: none;

      code {
        background: none;
        color: #c9d1d9;
        font-size: 0.82em;
        line-height: 1.6;
        padding: 0;
      }
    }

    ul, ol {
      margin: 0.5em 0;
      padding-left: 1.4em;
    }

    li { margin-bottom: 0.3em; }

    blockquote {
      margin: 0.6em 0;
      padding: 8px 14px;
      border-left: 3px solid rgba(255, 255, 255, 0.12);
      background: rgba(255, 255, 255, 0.02);
      color: $text-secondary;
    }

    table {
      border-color: rgba(255, 255, 255, 0.06);
    }

    thead {
      background: rgba(255, 255, 255, 0.04);
    }

    th {
      color: #fff;
    }

    th, td {
      border-bottom-color: rgba(255, 255, 255, 0.06);
    }

    tbody tr:nth-child(even) {
      background: rgba(255, 255, 255, 0.02);
    }

    tbody tr:hover {
      background: rgba(255, 255, 255, 0.04);
    }

    hr {
      background: linear-gradient(to right, transparent, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.08) 80%, transparent);
    }
  }
}

.message-time {
  display: block;
  font-size: 0.68em;
  color: $text-muted;
  margin-top: 6px;
  text-align: right;

  .message-assistant & {
    text-align: left;
  }
}

// Typing indicator
.typing-dots {
  display: flex;
  gap: 5px;
  padding: 4px 0;

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.25);
    animation: dotBounce 1.4s ease-in-out infinite;

    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: 0.16s; }
    &:nth-child(3) { animation-delay: 0.32s; }
  }
}

@keyframes dotBounce {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-7px); }
}

// ═══════════════════════════════════════
// INPUT AREA
// ═══════════════════════════════════════

.chat-input-area {
  padding: 20px 0 28px;
}

// Double-Bezel: Input Outer Shell
.input-shell {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid $border-hairline;
  border-radius: 1.5rem;
  padding: 5px;
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.2),
    0 1px 0 rgba(255, 255, 255, 0.03) inset;
  transition: border-color 0.3s cubic-bezier(0.32, 0.72, 0, 1);

  &:focus-within {
    border-color: rgba(255, 255, 255, 0.16);
  }
}

// Double-Bezel: Input Inner Core
.input-core {
  background: rgba(255, 255, 255, 0.02);
  border-radius: calc(1.5rem - 0.25rem);
  padding: 6px 10px 6px 20px;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.03);
}

.chat-textarea {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  color: $text-primary;
  font-size: 0.9em;
  font-family: inherit;
  line-height: 1.6;
  padding: 8px 0;
  min-height: 24px;
  max-height: 160px;

  &::placeholder {
    color: $text-muted;
  }

  &:disabled {
    opacity: 0.5;
  }
}

// Button-in-Button: Send
.send-btn {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.06);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: $text-muted;
  transition:
    background 0.3s cubic-bezier(0.32, 0.72, 0, 1),
    border-color 0.3s cubic-bezier(0.32, 0.72, 0, 1),
    color 0.3s cubic-bezier(0.32, 0.72, 0, 1),
    transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);

  &.active {
    background: rgba(140, 160, 210, 0.25);
    border-color: rgba(140, 160, 210, 0.35);
    color: rgba(255, 255, 255, 0.8);
  }

  &:hover:not(:disabled) {
    transform: translate(1px, -1px);
    border-color: rgba(255, 255, 255, 0.14);

    &.active {
      border-color: rgba(140, 160, 210, 0.5);
    }

    .send-btn-core {
      transform: scale(1.08);
    }
  }

  &:active:not(:disabled) {
    transform: scale(0.94);
    transition: transform 0.1s cubic-bezier(0.32, 0.72, 0, 1);
  }

  &:disabled {
    cursor: not-allowed;
  }
}

.send-btn-core {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);
}

.input-hint {
  text-align: center;
  font-size: 0.68em;
  color: $text-muted;
  margin: 8px 0 0;
}

// ═══════════════════════════════════════
// MOBILE COLLAPSE (< 768px)
// ═══════════════════════════════════════

@media (max-width: 768px) {
  .ai-layout {
    flex-direction: column;
    gap: 24px;
    padding: 20px 16px 0;
    height: 100dvh;
  }

  .ai-identity {
    width: 100%;
    position: static;
    order: -1;
  }

  .ai-chat {
    order: 0;
  }

  .ai-card-core {
    padding: 24px 20px 20px;
  }

  .ai-avatar-stage {
    width: 64px;
    height: 64px;
    margin-bottom: 16px;
  }

  .ai-avatar-ring {
    width: 64px;
    height: 64px;
  }

  .ai-suggestions {
    display: none;
  }

  .ai-chat {
    height: auto;
    flex: 1;
    min-height: 0;
    border-right: none;
    padding-right: 0;
  }

  .message-bubble {
    max-width: 90%;
  }

  .chat-input-area {
    padding: 16px 0 20px;
  }
}
</style>
