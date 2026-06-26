---
title: 双token无感刷新 — 面试讲解文档
date: 2026-06-16
tags: [Project]
summary: 双token无感刷新
---

# 双 Token 无感刷新 — 完整笔记

## 一、项目结构

```
server/
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts                # Koa 入口，注册路由和中间件
│   ├── middleware/
│   │   └── auth.ts             # JWT 鉴权中间件
│   ├── routes/
│   │   ├── auth.ts             # POST /api/login、POST /api/refresh
│   │   └── api.ts              # GET /api/protected（受保护）
│   └── utils/
│       └── jwt.ts              # token 生成/验证核心
└── public/
    └── index.html              # 前端测试页面

client/
├── src/
│   ├── main.ts                 # Vue 入口
│   ├── api/
│   │   └── admin.ts            # 业务接口（登录、受保护请求）
│   └── utils/
│       └── request.ts          # axios 二次封装 + 双 token 无感刷新
```

---

## 二、后端核心设计

### Token 机制

| 类型         | 有效期            | 密钥                           | 用途                   |
| ------------ | ----------------- | ------------------------------ | ---------------------- |
| accessToken  | 15 秒（方便测试） | access_token_secret_key_xiaod  | 每次请求携带，验证身份 |
| refreshToken | 7 天              | refresh_token_secret_key_xiaod | 用于获取新的 token 对  |

> 线上项目 accessToken 一般设 15~30 分钟，refreshToken 设 7~30 天。

### 为什么刷新时双 token 都换新

防止 refreshToken 被盗用后长期有效。每次刷新同时发新的 refreshToken，旧的立即失效。

### 中间件区分 TokenExpiredError

```ts
// f:/前端/code/code/server/src/middleware/auth.ts
try {
  const payload = verifyAccessToken(token);
  ctx.user = payload;
  await next();
} catch (err: any) {
  if (err.name === "TokenExpiredError") {
    // 明确告诉前端：过期了，去刷新
    ctx.body = {
      code: 401,
      message: "access token 已过期，请使用 refresh token 刷新",
    };
  } else {
    // 其他情况：token 伪造、签名不对
    ctx.body = { code: 401, message: "无效的 access token" };
  }
}
```

这样前端可以根据 `message` 精确判断是否需要触发刷新。

---

## 三、axios 二次封装到底封装了什么

**核心思想**：把横切关注点（cross-cutting concerns）从业务代码中抽离，集中管理。

### 没有封装 vs 有封装

没有封装时，每个接口调用都要重复写 baseURL、timeout、挂 token、401 处理：

```ts
// ❌ 每个接口都要写一堆重复的东西
async function login(username: string, password: string) {
  const res = await axios.post(
    "http://localhost:3000/api/login",
    { username, password },
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      timeout: 5000,
    },
  );
  if (res.data.code === 401 && res.data.message.includes("过期")) {
    // 刷新逻辑... （每个接口写一遍）
  }
  return res.data;
}
```

有封装后：

```ts
// ✅ 业务代码只关心业务
async function login(username: string, password: string) {
  const res = await service.post("/login", { username, password });
  return res.data;
}
```

### 封装清单

| 层               | 封装内容                                 | 位置                            |
| ---------------- | ---------------------------------------- | ------------------------------- |
| `axios.create()` | baseURL、timeout、通用配置               | 创建实例                        |
| 请求拦截器       | 自动从 localStorage 取 token 挂到 header | `request.use(config => ...)`    |
| 请求拦截器 error | 请求根本没发出去的异常，直接往外抛       | `request.use(_, error => ...)`  |
| 响应拦截器 正常  | 原样返回响应                             | `response.use(res => res)`      |
| 响应拦截器 异常  | 统一 401 处理、过期刷新、并发锁          | `response.use(_, error => ...)` |

---

## 四、Axios 错误对象解剖

```ts
error: AxiosError
├── message      ← "Request failed with status code 401"
├── name         ← "AxiosError"
├── code         ← "ERR_BAD_REQUEST" | "ERR_NETWORK" | "ECONNABORTED"
├── status       ← HTTP 状态码（error.response.status 的快捷方式）
├── config       ← ✅ 本次请求的完整配置（永远存在）
├── request      ← XMLHttpRequest 实例
├── response     ← ⚠️ 服务端返回的响应（网络断开时为 undefined）
│   ├── status   ← 401
│   ├── data     ← { code: 401, message: "access token 已过期..." }
│   └── headers  ← 响应头
└── toJSON()
```

### `error.response` 的两种情况

**情况 A：服务端回了响应（状态码不是 2xx）**

```ts
{
  message: "Request failed with status code 401",
  code: "ERR_BAD_REQUEST",
  status: 401,
  config: { ... },     // ✅ 存在
  response: {          // ✅ 存在
    status: 401,
    data: {
      code: 401,
      message: "access token 已过期，请使用 refresh token 刷新"
    },
    headers: { "content-type": "application/json" }
  }
}
```

**情况 B：请求根本没到达服务端**

```ts
{
  message: "Network Error",      // 或者 "timeout of 5000ms exceeded"
  code: "ERR_NETWORK",           // 或者 "ECONNABORTED"
  config: { ... },               // ✅ config 存在
  request: XMLHttpRequest { ... },
  response: undefined            // ❌ 没有 response
}
```

### `error.config` — 重放的基石

`error.config` 就是这次失败请求的完整配置，**永远存在**。

```ts
// 你写的调用
service.get("/protected")

// error.config 里存的就是：
{
  url: "/api/protected",
  method: "get",
  headers: {
    Authorization: "Bearer eyJhbG...旧token...",  // 请求拦截器加上的
    Accept: "application/json",
  },
  timeout: 5000,
  baseURL: "/api",
}
```

**重放原理**：修改 config 的 header，然后原样再发一次。

```ts
originalRequest.headers.Authorization = `Bearer ${newAccessToken}`; // 换新 token
originalRequest._retried = true; // 打标记
return service(originalRequest); // 重放
```

### 三个属性的关系总结

| 属性             | 什么时候有       | 什么时候没有           |
| ---------------- | ---------------- | ---------------------- |
| `error.config`   | 永远有           | —                      |
| `error.response` | 服务端回复了响应 | 网络断开 / 超时        |
| `error.request`  | 请求发了出去     | 请求配置错误，根本没发 |

---

## 五、`_retried` 标记 — 防死循环

`_retried` 是我们自定义的属性，不是 Axios 内置的。

### 生命周期

```
第一次请求 → error.config._retried = undefined
                    │
              进入响应拦截器
                    │
         !undefined → true → 允许刷新
                    │
          刷新成功，打标记
                    │
        originalRequest._retried = true
                    │
              用新 token 重放
                    │
          ┌─ 200 → 返回结果
          └─ 401 → 进入响应拦截器
                    │
         !true → false → 不再刷新，直接 reject
```

### 为什么需要

没有 `_retried` 的情况下，如果刷新拿到的新 token 还是 401（比如账号被封），响应拦截器会再次尝试刷新 → 又 401 → 再刷新 → 无限循环。

| 请求次数                   | `_retried` 值 | `!originalRequest._retried` | 行为           |
| -------------------------- | ------------- | --------------------------- | -------------- |
| 第 1 次（老 token 过期）   | `undefined`   | `true`                      | ✅ 去刷新      |
| 第 2 次（新 token 还 401） | `true`        | `false`                     | ❌ 直接 reject |

---

## 六、刷新锁 + 等待队列 — 防并发刷新

### 问题场景

页面同时发出 3 个请求，accessToken 刚好过期。3 个请求几乎同时收到 401。

### 加锁前（❌）

```
请求 A → 401 → 调用 /api/refresh → 拿到 token_A
请求 B → 401 → 调用 /api/refresh → 拿到 token_B
请求 C → 401 → 调用 /api/refresh → 拿到 token_C

问题：
1. 刷了 3 次，浪费请求
2. localStorage 最后存的是 token_C
3. A 用 token_A 重放，可能不匹配
```

### 加锁后（✅）

```
请求 A ──→ 401 ──→ isRefreshing = true ──→ 发 /api/refresh
                          │
请求 B ──→ 401 ──→ 发现 isRefreshing = true ──→ 排队
                          │
请求 C ──→ 401 ──→ 发现 isRefreshing = true ──→ 排队
                          │
                          ↓
                  /api/refresh 返回新 token
                          │
              drainPending(新 token) ──→ 唤醒 B、C
                          │
          ┌───────────────┼───────────────┐
          ↓               ↓               ↓
      A 用新 token 重放   B 用新 token 重放   C 用新 token 重放
```

### 核心数据结构

```ts
// 锁
let isRefreshing = false;

// 等待队列
let pendingQueue: Array<{
  resolve: (token: string) => void; // token 到了 → 重放
  reject: (err: any) => void; // 刷新失败 → 报错
}> = [];
```

### 排队逻辑

```ts
if (isRefreshing) {
  // 锁被持有，返回一个"暂停"的 Promise
  return new Promise<string>((resolve, reject) => {
    addPending(
      // 成功回调：拿到新 token → 换 header → 重放
      (newToken: string) => {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        resolve(service(originalRequest));
      },
      // 失败回调：刷新失败 → 跟着报错
      (err) => reject(err),
    );
  });
}
```

### 唤醒逻辑

```ts
function drainPending(token: string | null, err: any) {
  pendingQueue.forEach((p) => {
    if (token)
      p.resolve(token); // 成功：分发给所有排队者
    else p.reject(err); // 失败：一起报错
  });
  pendingQueue = []; // 清空队列
}
```

> **一句话**：A 是那个去接水的人，B 和 C 拿着杯子在门口排队，水接回来了大家一起喝。不需要三个人各去接一桶水。

---

## 七、完整流程回顾

### 正常访问

```
前端                                         后端
  │                                           │
  │  GET /api/protected                       │
  │  Authorization: Bearer <accessToken>      │
  ├──────────────────────────────────────────►│
  │                                           │ 验证 accessToken
  │  200 { data: user }                       │ token 有效
  │◄──────────────────────────────────────────┤
```

### 过期无感刷新

```
前端                                         后端
  │                                           │
  │  GET /api/protected                       │
  │  Authorization: Bearer <过期token>         │
  ├──────────────────────────────────────────►│
  │                                           │ token 过期
  │  401 { message: "access token 已过期..." } │
  │◄──────────────────────────────────────────┤
  │                                           │
  │  POST /api/refresh                        │
  │  { refreshToken: "..." }                  │
  ├──────────────────────────────────────────►│
  │                                           │ 验证 refreshToken
  │  200 { accessToken, refreshToken }        │ 返回新 token 对
  │◄──────────────────────────────────────────┤
  │                                           │
  │  GET /api/protected  (重放)               │
  │  Authorization: Bearer <新token>           │
  ├──────────────────────────────────────────►│
  │                                           │
  │  200 { data: user }                       │
  │◄──────────────────────────────────────────┤
```

整个过程调用方只写了一行 `getProtected()`，中间发生的 401 → 刷新 → 重放，调用方完全无感知。

---

## 八、Postman 测试

### 1. 登录

```
POST http://localhost:3000/api/login
Content-Type: application/json

{
  "username": "admin",
  "password": "123456"
}
```

### 2. 访问受保护接口

```
GET http://localhost:3000/api/protected
Authorization: Bearer <accessToken>
```

### 3. 刷新 Token

```
POST http://localhost:3000/api/refresh
Content-Type: application/json

{
  "refreshToken": "<refreshToken>"
}
```

### Postman 变量串联技巧

**Login 请求的 Tests 标签页：**

```javascript
const res = pm.response.json();
pm.collectionVariables.set("accessToken", res.data.accessToken);
pm.collectionVariables.set("refreshToken", res.data.refreshToken);
```

**其他接口用 `{{accessToken}}` 和 `{{refreshToken}}` 引用变量。**
