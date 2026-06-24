import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)

  function toggle() {
    isDark.value = !isDark.value
    applyTheme()
    save()
  }

  function applyTheme() {
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  function save() {
    try {
      localStorage.setItem('blog-theme', isDark.value ? 'dark' : 'light')
    } catch {
      // ignore
    }
  }

  function load() {
    try {
      const saved = localStorage.getItem('blog-theme')
      if (saved === 'dark') {
        isDark.value = true
      } else if (saved === 'light') {
        isDark.value = false
      } else {
        // 无存储时跟随系统偏好
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      }
    } catch {
      // ignore
    }
    applyTheme()
  }

  return { isDark, toggle, load }
})
