<script setup lang="ts">
import { useGuestbookStore } from '@/stores/guestbook'

const message = useMessage()
const dialog = useDialog()
const store = useGuestbookStore()

const { messages } = storeToRefs(store)

const nickname = ref('')
const content = ref('')
const submitting = ref(false)

// Generate a consistent color from a string
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
  // Take first character (supports Chinese)
  return name.trim().slice(0, 1) || '?'
}

function submit() {
  if (!nickname.value.trim() || !content.value.trim()) {
    message.warning('请填写昵称和内容')
    return
  }
  submitting.value = true
  setTimeout(() => {
    store.addMessage({
      nickname: nickname.value.trim(),
      content: content.value.trim(),
      time: new Date().toLocaleString('zh-CN'),
    })
    nickname.value = ''
    content.value = ''
    submitting.value = false
    message.success('留言成功')
  }, 500)
}

function deleteMessage(index: number) {
  dialog.warning({
    title: '删除留言',
    content: '确定要删除这条留言吗？删除后无法恢复。',
    positiveText: '确认删除',
    negativeText: '取消',
    onPositiveClick: () => {
      store.removeMessage(index)
      message.success('已删除')
    },
  })
}
</script>

<template>
  <div class="guestbook-page">
    <h2 class="page-title">留言</h2>
    <p class="page-subtitle">留下你的足迹，说点什么吧～</p>

    <!-- Form card -->
    <div class="form-card">
      <div class="form-header">
        <svg class="form-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span>写下你的留言</span>
      </div>

      <div class="form-body">
        <div class="form-row">
          <div class="avatar-preview" :style="{ background: avatarColor(nickname || '?') }">
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

        <n-input
          v-model:value="content"
          type="textarea"
          placeholder="写下你想说的话..."
          maxlength="300"
          show-count
          :rows="4"
          size="large"
          round
          class="form-textarea"
        />

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
            <span v-if="!submitting">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -4px; margin-right: 5px;"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>提交留言
            </span>
          </template>
        </n-button>
      </div>
    </div>

    <!-- Message count & divider -->
    <div v-if="messages.length > 0" class="section-header">
      <span class="section-count">{{ messages.length }} 条留言</span>
      <div class="section-line" />
    </div>

    <!-- Messages -->
    <div v-if="messages.length > 0" class="message-list">
      <div v-for="(msg, i) in messages" :key="i" class="message-card">
        <div class="msg-avatar" :style="{ background: avatarColor(msg.nickname) }">
          {{ initials(msg.nickname) }}
        </div>
        <div class="msg-body">
          <div class="msg-header">
            <span class="msg-nickname">{{ msg.nickname }}</span>
            <span class="msg-time">{{ msg.time }}</span>
            <span v-if="i === 0" class="msg-badge">最新</span>
            <button class="msg-delete" title="删除" @click="deleteMessage(i)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
            </button>
          </div>
          <p class="msg-content">{{ msg.content }}</p>
        </div>
      </div>
    </div>

    <!-- Empty state -->
    <div v-else class="empty-state">
      <svg class="empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
      <p class="empty-text">还没有留言，来做第一个留言的人吧！</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.guestbook-page {
  max-width: 860px;
  margin: 0 auto;
  padding: 48px 40px 80px;
}

.page-title {
  font-size: 1.5em;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #1a1a1a;
  margin: 0 0 4px;
}

.page-subtitle {
  font-size: 0.9em;
  color: #bbb;
  margin: 0 0 28px;
}

// ── Form card ──
.form-card {
  border: 1px solid #eee;
  border-radius: 14px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(55, 60, 70, 0.05);
}

.form-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  background: #fafafa;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.9em;
  font-weight: 500;
  color: #555;
}

.form-icon {
  display: block;
  opacity: 0.5;
  flex-shrink: 0;
}

.form-body {
  padding: 24px;
}

.form-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}

.avatar-preview {
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
  transition: background 0.3s;
}

.form-nickname {
  flex: 1;
}

.form-textarea {
  margin-bottom: 16px;
}

.submit-btn {
  --n-color: #1a1a1a !important;
  --n-color-hover: #333 !important;
  --n-color-pressed: #000 !important;
  --n-text-color: #f5f5f5 !important;
  height: 46px;
  font-size: 0.95em;
  font-weight: 600;
  letter-spacing: 0.01em;
  border-radius: 23px;
  transition: transform 0.15s ease;

  &:active {
    transform: scale(0.97);
  }
}

// ── Section header ──
.section-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 36px 0 16px;
}

.section-count {
  font-size: 0.85em;
  color: #bbb;
  white-space: nowrap;
}

.section-line {
  flex: 1;
  height: 1px;
  background: #f0f0f0;
}

// ── Message list ──
.message-list {
  display: flex;
  flex-direction: column;
}

.message-card {
  display: flex;
  gap: 14px;
  padding: 20px 0;
  border-bottom: 1px solid #f5f5f5;

  &:first-child {
    padding-top: 0;
  }
}

.msg-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 0.9em;
  flex-shrink: 0;
  margin-top: 2px;
}

.msg-body {
  flex: 1;
  min-width: 0;
}

.msg-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
}

.msg-nickname {
  font-size: 0.92em;
  font-weight: 600;
  color: #333;
}

.msg-time {
  font-size: 0.72em;
  color: #ccc;
}

.msg-badge {
  font-size: 0.65em;
  padding: 2px 8px;
  border-radius: 10px;
  background: #f0f7ff;
  color: #5b9bd5;
  font-weight: 500;
}

.msg-delete {
  margin-left: auto;
  border: none;
  background: none;
  color: #ccc;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  line-height: 0;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: #e05a5a;
    background: #fef0f0;
  }

  &:active {
    transform: scale(0.9);
  }
}

.msg-content {
  font-size: 0.93em;
  line-height: 1.75;
  color: #555;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
}

// ── Empty state ──
.empty-state {
  margin-top: 80px;
  text-align: center;
}

.empty-icon {
  display: block;
  margin: 0 auto 12px;
  opacity: 0.35;
  color: #999;
}

.empty-text {
  font-size: 0.95em;
  color: #ccc;
  margin: 0;
}
</style>
