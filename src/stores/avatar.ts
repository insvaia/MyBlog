import { defineStore } from 'pinia'

const DEFAULT_AVATAR = '/imgs/shantian.jpg'

export const useAvatarStore = defineStore('avatar', () => {
  const avatarSrc = ref(DEFAULT_AVATAR)

  function setAvatar(src: string) {
    avatarSrc.value = src
    try {
      localStorage.setItem('blog-avatar', src)
    } catch {
      // localStorage full or unavailable
    }
  }

  function loadAvatar() {
    try {
      const saved = localStorage.getItem('blog-avatar')
      if (saved) avatarSrc.value = saved
    } catch {
      // ignore
    }
  }

  return { avatarSrc, setAvatar, loadAvatar }
})
