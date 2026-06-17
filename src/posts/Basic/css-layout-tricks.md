---
title: CSS 布局技巧：Flex 与 Grid 实战
date: 2026-06-13
tags: [Basic]
summary: 梳理 Flexbox 和 Grid 的核心用法与常见布局模式。
---

## Flexbox 核心概念

Flex 解决的是一维布局问题——要么横向、要么纵向。

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
```

### 常用布局模式

- **导航栏**：两端对齐 + 居中
- **卡片列表**：`flex-wrap: wrap` + `gap`
- **垂直居中**：`align-items: center` + `justify-content: center`

## Grid 核心概念

Grid 解决的是二维布局——行和列同时控制。

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
```

### Grid  vs Flex

| 场景 | 选择 |
|------|------|
| 一维排列（导航、列表） | Flexbox |
| 二维布局（页面、仪表盘） | Grid |
| 响应式卡片 | Grid（auto-fill） |

## 小结

两者不是互斥的，实际项目中经常混用——外层用 Grid 分区域，内层用 Flex 排列内容。
