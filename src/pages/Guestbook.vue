<script setup lang="ts">
import { useGuestbookStore } from '@/stores/guestbook'

const message = useMessage()
const dialog = useDialog()
const store = useGuestbookStore()

const { messages } = storeToRefs(store)

const nickname = ref('')
const content = ref('')
const submitting = ref(false)

// 跟踪已曝光和删除中的留言状态
const revealedIds = ref<Set<string>>(new Set())
const deletingId = ref<string | null>(null)

const messageRefs = ref<Map<string, HTMLElement>>(new Map())

// 唯一 ID 计数器
let idCounter = 0

function genId(): string {
  return `${Date.now()}-${++idCounter}-${Math.random().toString(36).slice(2, 8)}`
}

// 根据字符串生成固定颜色
function avatarColor(name: string): string {
  const colors = [
    '#f7a8b8', '#f9c87a', '#8ecae6', '#90be6d',
    '#c77dff', '#ff9f1c', '#48bfe3', '#e07a5f',
  ]
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return colors[Math.abs(hash) % colors.length]!
}

function initials(name: string): string {
  return name.trim().slice(0, 1) || '?'
}

// ── IntersectionObserver 滚动曝光 ──
let observer: IntersectionObserver | null = null

function setupObserver() {
  if (observer) observer.disconnect()
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-msg-id')
          if (id) {
            revealedIds.value = new Set([...revealedIds.value, id])
          }
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
  )
  messageRefs.value.forEach((el, id) => {
    if (!revealedIds.value.has(id)) observer!.observe(el)
  })
}

function revealVisible() {
  messageRefs.value.forEach((el, id) => {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      revealedIds.value = new Set([...revealedIds.value, id])
    }
  })
}

function setMessageRef(id: string, el: Element | ComponentPublicInstance | null) {
  if (el && el instanceof HTMLElement) {
    messageRefs.value.set(id, el)
  } else {
    messageRefs.value.delete(id)
  }
}

onMounted(() => {
  nextTick(() => {
    revealVisible()
    setupObserver()
  })
})

watch(() => messages.value.length, () => nextTick(() => setupObserver()))

// ── 提交留言 ──
function submit() {
  if (!nickname.value.trim() || !content.value.trim()) {
    message.warning('请填写昵称和内容')
    return
  }
  submitting.value = true
  setTimeout(() => {
    store.addMessage({
      id: genId(),
      nickname: nickname.value.trim(),
      content: content.value.trim(),
      time: new Date().toLocaleString('zh-CN'),
    })
    nextTick(() => {
      const newMsg = messages.value[0]
      if (newMsg) revealedIds.value = new Set([...revealedIds.value, newMsg.id])
    })
    nickname.value = ''
    content.value = ''
    submitting.value = false
    message.success('留言成功')
  }, 400)
}

// ── 删除留言 ──
function deleteMessage(index: number, msgId: string) {
  dialog.warning({
    title: '删除留言',
    content: '确定要删除这条留言吗？删除后无法恢复。',
    positiveText: '确认删除',
    negativeText: '取消',
    onPositiveClick: () => {
      deletingId.value = msgId
      setTimeout(() => {
        store.removeMessage(index)
        deletingId.value = null
        message.success('已删除')
      }, 380)
    },
  })
}
</script>

<template>
  <div class="guestbook-page">
    <!-- 氛围光球 — 营造页面深度 -->
    <div class="ambient-orb orb-1" aria-hidden="true"></div>
    <div class="ambient-orb orb-2" aria-hidden="true"></div>

    <!-- 页面标题 -->
    <div class="page-header">
      <h2 class="page-title">留言</h2>
      <p class="page-subtitle">留下一串气泡，让它们浮上水面</p>
    </div>

    <!-- ════════════════════════════════
         表单卡片 — 双层嵌套玻璃结构
         ════════════════════════════════ -->
    <div class="form-stage">
      <!-- 外层渐变边框壳 -->
      <div class="form-outer">
        <!-- 内层毛玻璃核心 -->
        <div class="form-inner">
          <!-- 表单头部栏 -->
          <div class="form-header">
            <svg class="form-header-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span>写下你的留言</span>
            <span class="form-header-hint">Enter ↵ 发送</span>
          </div>

          <div class="form-body">
            <!-- 头像 + 昵称 -->
            <div class="form-top-row">
              <div
                class="form-avatar"
                :style="{ background: avatarColor(nickname || '?') }"
              >
                {{ initials(nickname || '?') }}
              </div>
              <n-input
                v-model:value="nickname"
                placeholder="你的昵称"
                maxlength="20"
                size="large"
                round
                class="form-nickname"
              />
            </div>

            <!-- 文字输入区 + 打字光标 -->
            <div class="textarea-stage">
              <n-input
                v-model:value="content"
                type="textarea"
                placeholder="说点什么..."
                maxlength="300"
                show-count
                :rows="4"
                size="large"
                round
                class="form-textarea"
              />
              <span class="typing-cursor" aria-hidden="true"></span>
            </div>

            <!-- 提交按钮 -->
            <n-button
              type="primary"
              :loading="submitting"
              @click="submit"
              size="large"
              block
              round
              class="submit-btn"
            >
              <template #default>
                <span v-if="!submitting" class="submit-label">
                  <svg class="submit-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  发送留言
                </span>
              </template>
            </n-button>
          </div>
        </div>
      </div>
    </div>

    <!-- 计数 + 分割线 -->
    <div v-if="messages.length > 0" class="section-header">
      <span class="section-count">{{ messages.length }} 条留言</span>
      <div class="section-line" />
    </div>

    <!-- ════════════════════════════════
         留言列表 — 玻璃卡片
         ════════════════════════════════ -->
    <TransitionGroup
      v-if="messages.length > 0"
      name="glass-msg"
      tag="div"
      class="message-list"
    >
      <div
        v-for="(msg, i) in messages"
        :key="msg.id"
        :ref="(el: any) => setMessageRef(msg.id, el)"
        :data-msg-id="msg.id"
        :style="{ '--i': i }"
        class="msg-stage"
        :class="{
          'msg-revealed': revealedIds.has(msg.id),
          'msg-deleting': deletingId === msg.id,
          'msg-newest': i === 0 && revealedIds.has(msg.id),
        }"
      >
        <!-- 发光圆点 -->
        <div
          class="msg-glow-dot"
          :style="{ '--dot-color': avatarColor(msg.nickname) }"
          aria-hidden="true"
        ></div>

        <!-- 玻璃卡片：外层壳 + 内层核心 -->
        <div class="msg-outer">
          <div class="msg-inner">
            <!-- 头像 -->
            <div
              class="msg-avatar"
              :style="{ background: avatarColor(msg.nickname) }"
            >
              {{ initials(msg.nickname) }}
            </div>

            <!-- 留言正文 -->
            <div class="msg-body">
              <div class="msg-header">
                <span class="msg-nickname">{{ msg.nickname }}</span>
                <span class="msg-time">{{ msg.time }}</span>
                <span v-if="i === 0" class="msg-badge">最新</span>
                <button class="msg-delete" title="删除" @click="deleteMessage(i, msg.id)">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                </button>
              </div>
              <p class="msg-content">{{ msg.content }}</p>
            </div>
          </div>
        </div>

        <!-- 悬停光扫描效果 -->
        <div class="msg-sweep" aria-hidden="true"></div>
      </div>
    </TransitionGroup>

    <!-- 空白状态 -->
    <div v-else class="empty-stage">
      <div class="empty-illustration">
        <svg class="empty-icon" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
      </div>
      <p class="empty-text">还没有留言，来做第一个留言的人吧</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
// ═══════════════════════════════════════
// 设计令牌
// ═══════════════════════════════════════
$ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
$ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
$ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
$glass-bg: rgba(255, 255, 255, 0.45);
$glass-border: rgba(255, 255, 255, 0.55);
$glass-highlight: rgba(255, 255, 255, 0.75);
$glass-shadow: 0 8px 32px rgba(55, 60, 70, 0.07), 0 2px 8px rgba(55, 60, 70, 0.04);

// ═══════════════════════════════════════
// 页面容器
// ═══════════════════════════════════════
.guestbook-page {
  position: relative;
  max-width: 780px;
  margin: 0 auto;
  padding: 48px 40px 100px;
  isolation: isolate;
}

// ── 氛围光球 ──
.ambient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
  opacity: 0.07;
}

.orb-1 {
  width: 380px;
  height: 380px;
  top: -40px;
  right: -100px;
  background: radial-gradient(circle, #8ecae6 0%, transparent 70%);
}

.orb-2 {
  width: 320px;
  height: 320px;
  bottom: 100px;
  left: -80px;
  background: radial-gradient(circle, #c77dff 0%, transparent 70%);
}

// ═══════════════════════════════════════
// 页面标题
// ═══════════════════════════════════════
.page-header {
  position: relative;
  z-index: 1;
  margin-bottom: 32px;
}

.page-title {
  font-size: 1.6em;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: #1a1a1a;
  margin: 0 0 4px;
}

.page-subtitle {
  font-size: 0.88em;
  color: #b0b0b0;
  margin: 0;
}

// ═══════════════════════════════════════
// 表单 — 双层嵌套玻璃结构
// ═══════════════════════════════════════
.form-stage {
  position: relative;
  z-index: 1;
  margin-bottom: 18px;
}

// 外层壳
.form-outer {
  border-radius: 20px;
  padding: 1.5px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.3) 40%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(200, 210, 220, 0.6) 100%
  );
  box-shadow:
    0 4px 20px rgba(55, 60, 70, 0.06),
    0 0 0 1px rgba(0, 0, 0, 0.03);
  transition:
    box-shadow 0.4s $ease-out-expo,
    transform 0.4s $ease-out-expo;

  &:hover {
    box-shadow:
      0 8px 36px rgba(55, 60, 70, 0.1),
      0 0 0 1px rgba(0, 0, 0, 0.04);
    transform: translateY(-1px);
  }
}

// 内层核心
.form-inner {
  border-radius: 18.5px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(24px) saturate(160%);
  -webkit-backdrop-filter: blur(24px) saturate(160%);
  overflow: hidden;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
}

// 头部栏
.form-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  background: rgba(255, 255, 255, 0.35);
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  font-size: 0.85em;
  font-weight: 500;
  color: #777;
}

.form-header-icon {
  opacity: 0.5;
  flex-shrink: 0;
}

.form-header-hint {
  margin-left: auto;
  font-size: 0.75em;
  color: #ccc;
  font-weight: 400;
}

// 表单体
.form-body {
  padding: 24px;
}

.form-top-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}

// 头像
.form-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 1em;
  flex-shrink: 0;
  transition: transform 0.35s $ease-out-back;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  .form-stage:focus-within & {
    transform: scale(1.1);
  }
}

.form-nickname {
  flex: 1;
}

// 文字输入区
.textarea-stage {
  position: relative;
  margin-bottom: 16px;
}

// 打字光标
.typing-cursor {
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 2px;
  height: 1.15em;
  background: #c0c0c0;
  border-radius: 1px;
  opacity: 0;
  pointer-events: none;
  z-index: 2;

  .textarea-stage:focus-within & {
    animation: cursorPulse 1.15s ease-in-out infinite;
  }
}

@keyframes cursorPulse {
  0%, 100% { opacity: 0; }
  45%, 65% { opacity: 1; }
}

// 提交按钮
.submit-btn {
  --n-color: #1a1a1a !important;
  --n-color-hover: #2a2a2a !important;
  --n-color-pressed: #000 !important;
  --n-text-color: #f5f5f5 !important;
  --n-ripple-color: rgba(255, 255, 255, 0.15) !important;
  height: 48px;
  font-size: 0.95em;
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 24px;
  transition: transform 0.15s $ease-out-expo;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);

  &:hover {
    box-shadow: 0 6px 22px rgba(0, 0, 0, 0.18);
  }

  &:active {
    transform: scale(0.97);
  }
}

.submit-label {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

// 纸飞机图标
.submit-arrow {
  flex-shrink: 0;
  transition: transform 0.4s $ease-out-back;
  margin-right: 4px;
}

.submit-btn:hover .submit-arrow {
  transform: translateX(3px) translateY(-2px);
}

// ═══════════════════════════════════════
// 区域标题（计数 + 分割线）
// ═══════════════════════════════════════
.section-header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 40px 0 20px;
  padding-left: 4px;
}

.section-count {
  font-size: 0.8em;
  color: #bbb;
  white-space: nowrap;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.section-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, #e8e8e8 0%, transparent 100%);
}

// ═══════════════════════════════════════
// 留言列表
// ═══════════════════════════════════════
.message-list {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

// ── 每条留言的外层容器 ──
.msg-stage {
  position: relative;
  padding-left: 32px; // 为发光圆点留出空间
  opacity: 0;
  transform: translateY(20px);

  &.msg-revealed {
    animation:
      msgGlassEnter 0.6s $ease-out-expo forwards;
    animation-delay: calc(var(--i, 0) * 75ms);
  }

  &.msg-newest {
    animation-name: msgGlassSlideIn;
    animation-duration: 0.55s;
    animation-timing-function: $ease-out-expo;
    animation-delay: 0s;
  }

  &.msg-deleting {
    animation: msgGlassFadeOut 0.35s ease-in forwards;
    pointer-events: none;
  }

  // 曝光后悬浮微动（模仿水下浮力感）
  &.msg-revealed:not(.msg-deleting) {
    animation:
      msgGlassEnter 0.6s $ease-out-expo forwards,
      msgGlassFloat 5s ease-in-out calc(var(--i, 0) * 75ms + 0.7s) infinite;
    animation-delay: calc(var(--i, 0) * 75ms), calc(var(--i, 0) * 75ms + 0.7s);
  }
}

// 玻璃卡片入场动画
@keyframes msgGlassEnter {
  0% {
    opacity: 0;
    transform: translateY(24px) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

// 新留言滑入动画
@keyframes msgGlassSlideIn {
  0% {
    opacity: 0;
    transform: translateX(50px) scale(0.94);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

// 删除淡出动画
@keyframes msgGlassFadeOut {
  0% {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
  100% {
    opacity: 0;
    transform: scale(0.92);
    filter: blur(4px);
  }
}

// 悬浮微动（模仿水下浮力）
@keyframes msgGlassFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}

// ── 发光圆点 ──
.msg-glow-dot {
  position: absolute;
  left: 0;
  top: 28px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--dot-color, #8ecae6);
  z-index: 2;
  transform: scale(0);
  opacity: 0;
  transition:
    transform 0.4s $ease-out-back,
    opacity 0.3s ease;

  // 外部光晕
  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: transparent;
    box-shadow: 0 0 12px 3px var(--dot-color, #8ecae6);
    opacity: 0.5;
  }

  .msg-revealed & {
    transform: scale(1);
    opacity: 1;
    transition-delay: calc(var(--i, 0) * 75ms + 0.15s);
  }
}

// ── 玻璃卡片外层壳 ──
.msg-outer {
  border-radius: 18px;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.45) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.4) 100%
  );
  box-shadow: $glass-shadow;
  transition:
    box-shadow 0.4s $ease-out-expo,
    transform 0.4s $ease-out-expo;

  .msg-stage:hover & {
    box-shadow:
      0 12px 40px rgba(55, 60, 70, 0.1),
      0 3px 12px rgba(55, 60, 70, 0.05);
    transform: translateY(-1px);
  }
}

// ── 玻璃卡片内层核心 ──
.msg-inner {
  border-radius: 17px;
  background: $glass-bg;
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  padding: 20px 22px;
  display: flex;
  gap: 16px;
  box-shadow: inset 0 1px 0 $glass-highlight;
  overflow: hidden; // 裁剪光扫描溢出
}

// ── 头像 ──
.msg-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 0.95em;
  flex-shrink: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  transition: transform 0.35s $ease-out-back;

  .msg-stage:hover & {
    transform: scale(1.1);
  }
}

// ── 留言正文 ──
.msg-body {
  flex: 1;
  min-width: 0;
}

.msg-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 7px;
}

.msg-nickname {
  font-size: 0.9em;
  font-weight: 600;
  color: #3a3a3a;
}

.msg-time {
  font-size: 0.7em;
  color: #c5c5c5;
}

// "最新"徽章
.msg-badge {
  font-size: 0.62em;
  padding: 3px 10px;
  border-radius: 10px;
  background: rgba(142, 202, 230, 0.2);
  color: #5b9bd5;
  font-weight: 600;
  letter-spacing: 0.04em;
  animation: badgeGlow 2.8s ease-in-out infinite;
}

@keyframes badgeGlow {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(91, 155, 213, 0.25);
    background: rgba(142, 202, 230, 0.2);
  }
  50% {
    box-shadow: 0 0 0 5px rgba(91, 155, 213, 0);
    background: rgba(142, 202, 230, 0.35);
  }
}

// 删除按钮
.msg-delete {
  margin-left: auto;
  border: none;
  background: none;
  color: #d0d0d0;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  line-height: 0;
  transition:
    color 0.2s,
    background 0.2s,
    transform 0.25s $ease-out-back;

  &:hover {
    color: #e05a5a;
    background: rgba(224, 90, 90, 0.08);
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.88);
  }
}

// 留言内容文字
.msg-content {
  font-size: 0.9em;
  line-height: 1.78;
  color: #666;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
}

// ── 悬停光扫描 ──
.msg-sweep {
  position: absolute;
  inset: 0;
  border-radius: 18px;
  pointer-events: none;
  z-index: 3;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.35s ease;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -120%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      105deg,
      transparent 0%,
      rgba(255, 255, 255, 0.35) 45%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0.35) 55%,
      transparent 100%
    );
    transform: skewX(-18deg);
    transition: left 0.65s $ease-out-expo;
  }

  .msg-stage:hover & {
    opacity: 1;
    &::after {
      left: 130%;
    }
  }
}

// ═══════════════════════════════════════
// TransitionGroup 过渡动画
// ═══════════════════════════════════════
.glass-msg-move {
  transition: transform 0.45s $ease-out-expo;
}

.glass-msg-enter-active {
  transition:
    opacity 0.4s $ease-out-expo,
    transform 0.4s $ease-out-expo;
}

.glass-msg-leave-active {
  transition:
    opacity 0.3s ease-in,
    transform 0.3s ease-in;
  position: absolute;
  width: 100%;
}

.glass-msg-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.glass-msg-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

// ═══════════════════════════════════════
// 空白状态
// ═══════════════════════════════════════
.empty-stage {
  position: relative;
  z-index: 1;
  margin-top: 80px;
  text-align: center;
  animation: emptyReveal 0.9s $ease-out-expo;
}

@keyframes emptyReveal {
  0% {
    opacity: 0;
    transform: translateY(32px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

// 空白状态图标容器（毛玻璃圆形底座）
.empty-illustration {
  display: inline-block;
  padding: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow:
    0 4px 20px rgba(55, 60, 70, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  margin-bottom: 16px;
  animation: emptyFloat 4.5s ease-in-out infinite;
}

// 上下漂浮
@keyframes emptyFloat {
  0%, 100% { transform: translateY(0); }
  40% { transform: translateY(-7px); }
  80% { transform: translateY(-2px); }
}

.empty-icon {
  display: block;
  opacity: 0.3;
  color: #999;
}

.empty-text {
  font-size: 0.92em;
  color: #c5c5c5;
  margin: 0;
}
</style>

<!-- ═══════════════════════════════════════
     暗色模式 — 全局样式覆盖
     ═══════════════════════════════════════ -->
<style lang="scss">
html.dark {
  // ── 氛围光球（暗色下提高亮度）──
  .guestbook-page .orb-1 {
    opacity: 0.12;
  }
  .guestbook-page .orb-2 {
    opacity: 0.1;
  }

  // ── 页面标题 ──
  .guestbook-page .page-title {
    color: rgba(255, 255, 255, 0.88) !important;
  }
  .guestbook-page .page-subtitle {
    color: rgba(255, 255, 255, 0.28) !important;
  }

  // ── 表单外层渐变边框 ──
  .guestbook-page .form-outer {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0.06) 40%,
      rgba(255, 255, 255, 0.1) 60%,
      rgba(200, 210, 230, 0.12) 100%
    ) !important;
    box-shadow:
      0 4px 24px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.06) !important;
  }

  .guestbook-page .form-inner {
    background: rgba(30, 32, 40, 0.55) !important;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
  }

  .guestbook-page .form-header {
    background: rgba(255, 255, 255, 0.03) !important;
    border-bottom-color: rgba(255, 255, 255, 0.05) !important;
    color: rgba(255, 255, 255, 0.5) !important;
  }

  .guestbook-page .form-header-hint {
    color: rgba(255, 255, 255, 0.18) !important;
  }

  // ── 打字光标 ──
  .guestbook-page .typing-cursor {
    background: rgba(255, 255, 255, 0.4) !important;
  }

  // ── 分割线 ──
  .guestbook-page .section-line {
    background: linear-gradient(to right, rgba(255,255,255,0.08) 0%, transparent 100%) !important;
  }
  .guestbook-page .section-count {
    color: rgba(255, 255, 255, 0.25) !important;
  }

  // ── 留言玻璃外层 ──
  .guestbook-page .msg-outer {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.04) 50%,
      rgba(255, 255, 255, 0.08) 100%
    ) !important;
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.18),
      0 2px 8px rgba(0, 0, 0, 0.1) !important;
  }

  .guestbook-page .msg-inner {
    background: rgba(30, 32, 40, 0.45) !important;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08) !important;
  }

  // ── 光扫描（暗色下更明显）──
  .guestbook-page .msg-sweep::after {
    background: linear-gradient(
      105deg,
      transparent 0%,
      rgba(255, 255, 255, 0.12) 45%,
      rgba(255, 255, 255, 0.18) 50%,
      rgba(255, 255, 255, 0.12) 55%,
      transparent 100%
    ) !important;
  }

  // ── 文字颜色 ──
  .guestbook-page .msg-nickname {
    color: rgba(255, 255, 255, 0.75) !important;
  }
  .guestbook-page .msg-time {
    color: rgba(255, 255, 255, 0.22) !important;
  }
  .guestbook-page .msg-content {
    color: rgba(255, 255, 255, 0.5) !important;
  }

  // ── 徽章 ──
  .guestbook-page .msg-badge {
    background: rgba(142, 202, 230, 0.15) !important;
    color: #7ab8cc !important;
  }

  @keyframes badgeGlowDark {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(122, 184, 204, 0.3);
      background: rgba(142, 202, 230, 0.15);
    }
    50% {
      box-shadow: 0 0 0 5px rgba(122, 184, 204, 0);
      background: rgba(142, 202, 230, 0.28);
    }
  }
  .guestbook-page .msg-badge {
    animation-name: badgeGlowDark !important;
  }

  // ── 删除按钮 ──
  .guestbook-page .msg-delete {
    color: rgba(255, 255, 255, 0.2) !important;
    &:hover {
      color: #e05a5a !important;
      background: rgba(224, 90, 90, 0.12) !important;
    }
  }

  // ── 空白状态 ──
  .guestbook-page .empty-illustration {
    background: rgba(255, 255, 255, 0.06) !important;
    box-shadow:
      0 4px 24px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.06) !important;
  }
  .guestbook-page .empty-icon {
    color: rgba(255, 255, 255, 0.12) !important;
  }
  .guestbook-page .empty-text {
    color: rgba(255, 255, 255, 0.2) !important;
  }
}
</style>
