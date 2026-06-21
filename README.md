# 🐟 一只做梦的鱼

个人技术博客，基于 **Vue 3 + TypeScript + Vite** 构建，搭配 **Koa + DeepSeek** 后端实现 AI 智能问答。所有文章以 Markdown 格式编写，支持代码高亮、全文搜索、标签分类归档，以及流式 AI 对话。

## ✨ 功能特性

### 📝 博客系统
- **Markdown 驱动** — 所有文章为 `.md` 文件 + YAML Front Matter（标题、日期、标签、摘要），构建时通过 `import.meta.glob` 自动加载
- **全文搜索** — 首页支持按标题、摘要、标签实时过滤
- **文章目录** — 文章页右侧自动生成目录导航，基于 `IntersectionObserver` 跟踪当前阅读位置
- **代码高亮** — 使用 `marked-highlight` + `highlight.js` 实现代码块语法高亮
- **标签系统** — 标签云展示，支持按标签筛选文章
- **归档页** — 按年份分组展示文章时间线
- **留言板** — 支持用户留言、删除，自动生成彩色头像
- **友情链接** — 展示友情链接页面
- **关于页** — 个人介绍页面
- **头像自定义** — 点击侧边栏头像可上传自定义图片，持久化到 `localStorage`
- **页面过渡动画** — 路由切换时带有淡入 + 滑动过渡效果

### 🤖 AI 对话助手
- **流式响应** — 基于 SSE（Server-Sent Events）的实时打字机效果
- **博客感知** — 后端自动索引博客文章，AI 可引用实际内容回答
- **对话历史** — 多轮对话上下文支持
- **预设问题** — 提供推荐问题快速开始对话
- **独立暗色主题** — AI 页面采用"玻璃拟态"暗色设计

## 🛠 技术栈

### 前端 (`blank-vue-app`)

| 类别 | 技术 | 版本 |
|------|------|------|
| 框架 | Vue 3 (Composition API) | ^3.5 |
| 语言 | TypeScript | ~6.0 |
| 构建 | Vite | ^8.0 |
| UI 库 | Naive UI | ^2.44 |
| 路由 | Vue Router | ^4.6 |
| 状态管理 | Pinia | ^3.0 |
| 样式 | SCSS / Sass | ^1.100 |
| Markdown | marked + highlight.js | latest |
| 字体 | Outfit | — |
| 包管理 | pnpm | — |

### 后端 (`server`)

| 类别 | 技术 |
|------|------|
| 运行时 | Node.js (ESM) |
| 语言 | TypeScript |
| 框架 | Koa 2 |
| 路由 | @koa/router |
| AI | DeepSeek (SSE 流式) |
| 开发工具 | tsx (热重载) |

## 📁 项目结构

```
MyBlog/
├── blank-vue-app/          # 前端博客
│   ├── src/
│   │   ├── main.ts              # 入口：挂载 App + Pinia + Router
│   │   ├── App.vue              # 根组件：Naive UI 全局配置
│   │   ├── router/index.ts      # 路由配置（9 个页面路由）
│   │   ├── layouts/
│   │   │   └── MainLayout.vue   # 主布局：侧边栏 + 内容区
│   │   ├── pages/
│   │   │   ├── Home.vue         # 首页：文章列表 + 搜索
│   │   │   ├── Post.vue         # 文章详情 + 目录导航
│   │   │   ├── Archives.vue     # 归档页
│   │   │   ├── Tags.vue         # 标签云
│   │   │   ├── TagPosts.vue     # 标签筛选结果
│   │   │   ├── Links.vue        # 友情链接
│   │   │   ├── Guestbook.vue    # 留言板
│   │   │   ├── About.vue        # 关于页
│   │   │   └── AI.vue           # AI 对话
│   │   ├── components/
│   │   │   └── MarkdownRender.vue  # 自定义 Markdown 渲染器
│   │   ├── composables/
│   │   │   └── useTypewriter.ts    # 打字机效果 Hook
│   │   ├── stores/                 # Pinia 状态管理
│   │   ├── utils/                  # 工具函数
│   │   ├── styles/                 # 全局样式
│   │   └── posts/                  # 📝 博客文章 (.md)
│   │       ├── Basic/               # 基础分类
│   │       ├── Frame/               # 框架分类
│   │       └── Project/             # 项目分类
│   └── vite.config.ts
│
└── server/                 # 后端 AI 服务
    └── src/
        ├── index.ts             # 入口：Koa 启动
        ├── config.ts            # 环境变量配置
        ├── types.ts             # TypeScript 类型
        ├── router/ai.ts         # 路由：POST /api/ai/chat
        ├── controller/ai.ts     # 控制器：SSE 流式响应
        └── service/
            ├── deepseek.ts      # DeepSeek API 客户端
            └── posts.ts         # 博客文章索引搜索
```

## 🚀 快速开始

### 环境要求

- **Node.js** `^20.19.0 || >=22.12.0`
- **pnpm**（推荐）

### 1. 克隆仓库

```bash
git clone https://github.com/insvaia/MyBlog.git
cd MyBlog
```

### 2. 启动前端

```bash
cd blank-vue-app
pnpm install
pnpm dev        # 开发模式，默认 http://localhost:5173
```

### 3. 启动后端（可选，AI 对话功能需要）

```bash
cd server
pnpm install
cp .env.example .env
```

编辑 `.env` 文件，填入你的 DeepSeek API Key：

```env
DEEPSEEK_API_KEY=sk-xxxxxxxxxxxxxxxx
DEEPSEEK_BASE_URL=https://api.deepseek.com
PORT=3001
```

```bash
pnpm dev        # 开发模式，默认 http://localhost:3001
```

### 4. 构建部署

```bash
# 前端
cd blank-vue-app
pnpm build      # 输出到 dist/
pnpm preview    # 预览构建结果
```

## 📝 编写文章

在 `blank-vue-app/src/posts/` 下创建 `.md` 文件，使用 YAML Front Matter：

```markdown
---
title: 文章标题
date: 2026-06-21
tags: [Vue, TypeScript]
summary: 文章摘要描述
---

文章正文内容...
```

文件会自动被识别并出现在博客首页。

## 📄 License

MIT
