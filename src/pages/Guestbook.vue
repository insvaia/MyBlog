<script setup lang="ts">
const message = useMessage()

const nickname = ref('')
const content = ref('')
const submitting = ref(false)
const messages = ref<{ nickname: string; content: string; time: string }[]>([])

function submit() {
  if (!nickname.value.trim() || !content.value.trim()) {
    message.warning('请填写昵称和内容')
    return
  }
  submitting.value = true
  // Simulate submission
  setTimeout(() => {
    messages.value.unshift({
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
</script>

<template>
  <div class="guestbook-page">
    <h2 class="page-title">留言</h2>

    <!-- Form -->
    <div class="form-card">
      <n-input
        v-model:value="nickname"
        placeholder="你的昵称"
        maxlength="20"
        class="form-input"
      />
      <n-input
        v-model:value="content"
        type="textarea"
        placeholder="说点什么..."
        maxlength="200"
        show-count
        :rows="3"
        class="form-input"
      />
      <n-button
        type="primary"
        :loading="submitting"
        @click="submit"
        block
      >
        提交留言
      </n-button>
    </div>

    <!-- Messages -->
    <div v-if="messages.length > 0" class="message-list">
      <div v-for="(msg, i) in messages" :key="i" class="message-card">
        <div class="msg-header">
          <span class="msg-nickname">{{ msg.nickname }}</span>
          <span class="msg-time">{{ msg.time }}</span>
        </div>
        <p class="msg-content">{{ msg.content }}</p>
      </div>
    </div>

    <n-empty v-else description="暂无留言，来说两句吧" class="empty-state" />
  </div>
</template>

<style scoped lang="scss">
.guestbook-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 48px 40px 80px;
}

.page-title {
  font-size: 1.4em;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 24px;
}

.form-card {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fafafa;
}

.form-input {
  margin-bottom: 12px;
}

.message-list {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.message-card {
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;
}

.msg-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 6px;
}

.msg-nickname {
  font-size: 0.9em;
  font-weight: 500;
  color: #333;
}

.msg-time {
  font-size: 0.72em;
  color: #ccc;
}

.msg-content {
  font-size: 0.92em;
  line-height: 1.7;
  color: #555;
  margin: 0;
}

.empty-state {
  margin-top: 60px;
}
</style>
