import { defineStore } from 'pinia'

export interface GuestbookMessage {
  id: string
  nickname: string
  content: string
  time: string
}

export const useGuestbookStore = defineStore('guestbook', () => {
  const messages = ref<GuestbookMessage[]>([])

  function addMessage(msg: GuestbookMessage) {
    messages.value.unshift(msg)
  }

  function removeMessage(index: number) {
    messages.value.splice(index, 1)
  }

  return { messages, addMessage, removeMessage }
})
