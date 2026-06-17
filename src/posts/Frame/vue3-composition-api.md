---
title: Vue 3 Composition API 实践指南
date: 2026-06-14
tags: [Frame]
summary: 深入理解 Composition API 的设计思想与实战技巧。
---

## 从 Options API 到 Composition API

Vue 3 引入的 Composition API 并不是为了替代 Options API，而是提供了一种更灵活的代码组织方式。

### Setup 语法糖

`<script setup>` 是目前最简洁的写法：

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">
    Count: {{ count }} (doubled: {{ doubled }})
  </button>
</template>
```

### 自定义 Hook

逻辑复用的最佳方式：

```typescript
// useCounter.ts
export function useCounter(initial = 0) {
  const count = ref(initial)
  const doubled = computed(() => count.value * 2)

  function increment() { count.value++ }
  function decrement() { count.value-- }

  return { count, doubled, increment, decrement }
}
```

## 与 TypeScript 的配合

Composition API 天然适合 TypeScript，类型推导非常流畅：

```typescript
interface Post {
  title: string
  date: string
  tags: string[]
}

const posts = ref<Post[]>([])
// 完美的类型提示
```

## 小结

- Composition API ≠ 更好的 Options API，而是解决不同问题
- `<script setup>` + TypeScript 是推荐组合
- 善用自定义 Hook 抽离逻辑
