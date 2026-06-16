---
title: Vue中reactive的简单实现
date: 2026-06-15
tags: [Vue, JavaScript, 前端]
summary: 深入理解Vue响应式原理，手写reactive、依赖收集track与触发更新trigger的实现。
---

## vue中reactive的简单实现

要想实现vue中的reactive，首先我们要了解响应式的原理，其实就是Proxy +  **依赖收集（track）** 与 **触发更新（trigger）**。

由于我是在node.js中使用的**ES Modules**

第一步:

```bash
npm init
```

在生成的package.json中添加type属性，并设值为module

```json
{
  "name": "demo4",
  "version": "1.0.0",
  "description": "",
  "type": "module", // 加入这一属性
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "packageManager": "pnpm@10.28.2"
}

```

在当前文件目录下创建reactive.js文件，该文件就是我们要实现的reactive。

创建一个handlers的文件夹，在handlers文件加下创建index.js文件和一个behavior的文件夹，在behavior文件夹下面创建getHandler.js, setHandler.js, hasHandler.js, ownKeysHandler.js, deleteHandler.js。在index.js默认导出的是一个对象如下代码示例

```js
import getHandler from "./behavior/getHandler.js";
import setHandler from "./behavior/setHandler.js";
import hasHandler from "./behavior/hasHandler.js";
import ownKeysHandler from "./behavior/ownKeysHandler.js";
import deleteHandler from "./behavior/deleteHandler.js";

export default {
  get: getHandler,
  set: setHandler,
  has: hasHandler,
  ownKeys: ownKeysHandler,
  deleteProperty: deleteHandler,
};

```

在 Vue 3 的 `reactive` 实现中，`handlers` 是一个**捕获器对象**，它定义了代理对象 `proxy` 对各种操作（如属性读取、赋值、删除等）的自定义行为。正是通过这个对象，Vue 实现了依赖收集（`track`）和触发更新（`trigger`）



接下来在与reactive.js同级目录下创建一个utils.js的文件，用来存储需要用到的通用方法。

判断target是否为一个对象

```js
// 判断是否为一个对象
export function isObject(value) {
  return typeof value === "object" && value !== null;
}

```

然后准备工作做的差不多了, 在reactive.js中写下面的代码

```js
import handlers from "./handlers/index.js";
import { isObject } from "./utils.js"; 

const proxyMap = new WeakMap();

export default function reactive(target) {
  // 判断target是否为一个对象
  if (!isObject(target)) {
    return target;
  }

  if (proxyMap.has(target)) {
    return proxyMap.get(target);
  }

  const proxy = new Proxy(target, handlers);

  proxyMap.set(target, proxy);

  return proxy;
}

```

# WeakMap vs Map 的关键区别



| 特性             | Map                                   | WeakMap                                                    |
| ---------------- | ------------------------------------- | ---------------------------------------------------------- |
| **键的类型**     | 任意值（对象、原始类型）              | **只能是对象**                                             |
| **对键的引用**   | **强引用**                            | **弱引用**                                                 |
| **垃圾回收影响** | 只要 Map 存在，键对象就不会被 GC 回收 | 键对象若没有其他引用，可被 GC 回收，WeakMap 自动删除该条目 |
| **可迭代性**     | 可迭代，有 `size`、`forEach` 等方法   | 不可迭代，无 `size`，无法获取所有键                        |

## 2. 为什么这里必须用 WeakMap？

`proxyMap` 的作用是**缓存原始对象 → 代理对象**的映射，避免重复代理。

- 如果用 `Map`：当你不再需要原始对象 `target` 时（比如 `target = null`），由于 `proxyMap` 中仍然持有 `target` 这个键（强引用），垃圾回收器无法回收 `target` 对象。**内存会一直保留**，导致内存泄漏。
- 如果用 `WeakMap`：键是弱引用，当 `target` 没有其他引用时（如变量被置空、函数执行完毕），垃圾回收器可以回收 `target`，同时 `WeakMap` 中对应的条目会自动消失。**不会造成内存泄漏**。

## 3. 实际场景举例

js

```
let obj = { a: 1 };
const rObj = reactive(obj);      // proxyMap 中存入 { obj → rObj }
obj = null;                      // 原对象不再被使用

// 如果 proxyMap 是 Map -> obj 仍然被 Map 引用，无法回收，内存泄漏
// 如果 proxyMap 是 WeakMap -> obj 可以被回收，WeakMap 自动清理条目
```

在大型应用或长期运行的 Node.js 服务中，这种区别至关重要。

## 4. 为什么不直接用 Map 并手动删除？

理论上你可以在不需要时调用 `proxyMap.delete(target)`，但：

- 开发者容易忘记手动删除，导致泄漏。
- 响应式系统内部无法知道外部何时不再需要原始对象。
- `WeakMap` 自动管理，零成本、更安全。

## 5. 其他细节

- `WeakMap` 的键必须是对象，而 `target` 正好是对象（`reactive` 只代理对象，原始值直接返回），类型匹配。
- `WeakMap` 不可迭代，此处不需要遍历，只需要通过 `target` 精确查找代理，完全满足需求。

**结论**：用 `WeakMap` 是为了让不再使用的原始对象能被垃圾回收，防止内存泄漏，这也是 Vue 3 响应式系统设计的精妙之处。



然后就是核心，创建一个effect的文件夹，在文件夹里面有两个文件，一个是track.js另一个是trigger.js，分别代表依赖收集和派发更新

先在utils.js文件中新增trackOpType，表定义跟踪操作类型

```js
// 判断是否为一个对象
export function isObject(value) {
  return typeof value === "object" && value !== null;
}

// 定义跟踪操作类型
export const trackOpType = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate",
};

```

下面是track.js中的代码

```js
// 依赖收集
import { trackOpType } from "../utils.js";

// 控制是否进行依赖收集
let activeEffect = true;

// 暂停依赖收集
export function pauseTracking() {
  activeEffect = false;
}

// 恢复依赖收集
export function resumeTracking() {
  activeEffect = true;
}

export default function track(target, key, type) {
  // 先进性依赖收集的判断，如果当前不需要进行依赖收集，则直接返回
  if (!activeEffect) {
    return;
  }

  // 追踪迭代操作时，key为ITERATE_KEY
  if (type === trackOpType.ITERATE) {
    console.log(`追踪器: 代理对象的${key}属性的${type}属性被追踪`);
    return;
  }

  console.log(`追踪器: 代理对象的${key}属性的${type}属性被追踪`);
}

```

下面是trigger.js中的代码

```js
// 派发更新
export default function trigger(target, key, type) {
  console.log(`触发器: 代理对象的${key}属性的${type}属性被拦截`);
}

```

ok, 接下来该分别实现getHandler.js, setHandler.js, hasHandler.js, ownKeysHandler.js, deleteHandler.js文件中的内容。

首先先实现getHandler.js文件

```js
import track from "../../effect/track.js";
import { trackOpType, isObject } from "../../utils.js";
import reactive from "../../reactive.js";

export default function (target, key) {
  // 拦截到get操作后需要进行的一些操作, 就是依赖收集
  track(target, key, trackOpType.GET);

  const result = Reflect.get(target, key);

  // 如果获取到的结果是一个对象, 则需要继续进行代理
  if (isObject(result)) {
    return reactive(result);
  }

  return result;
}

```

接下来是实现setHandler.js文件

```js
import trigger from "../../effect/trigger.js";
import { triggerOpType, hasChange } from "../../utils.js";

export default function set(target, key, value) {
  // 先判断key属性是否是已有属性，如果是已有属性，则是修改操作，否则是新增操作
  const hasKey = target.hasOwnProperty(key)
    ? triggerOpType.SET
    : triggerOpType.ADD;

  // 先存target的旧值，方便下面的新旧值比较，如果新值等于旧值，触发器就不用触发
  const oldValue = target[key];

  const result = Reflect.set(target, key, value);

  // 判断新旧值是否相等
  if (hasChange(oldValue, value)) {
    trigger(target, key, hasKey);
  }

  return result;
}

```

此时的utils.js文件又新增了一些内容

```js
// 判断是否为一个对象
export function isObject(value) {
  return typeof value === "object" && value !== null;
}

// 判断新旧值是否相等
export function hasChange(oldValue, newValue) {
  return !Object.is(oldValue, newValue);
}

// 定义跟踪操作类型
export const trackOpType = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate",
};

// 定义触发操作类型
export const triggerOpType = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
};

```

接下来就是实现hasHandler.js文件

```js
import track from "../../effect/track.js";
import { trackOpType } from "../../utils.js";

export default function (target, key) {
  track(target, key, trackOpType.HAS);
  const result = Reflect.has(target, key);
  return result;
}

```

接下来就是实现ownKeysHandler.js文件

```js
import track from "../../effect/track.js";
import { trackOpType } from "../../utils.js";

export default function (target) {
  track(target, undefined, trackOpType.ITERATE);
  const result = Reflect.ownKeys(target);
  return result;
}

```

接下来就是实现deleteHandler.js文件

```js
import trigger from "../../effect/trigger.js";
import { triggerOpType } from "../../utils.js";

export default function (target, key) {
  // 先判断target中是否存在key属性
  const hasKey = target.hasOwnProperty(key);

  const result = Reflect.deleteProperty(target, key);

  // 如果删除成功，并且target中存在key属性，则说明是删除操作，触发器需要触发
  if (result && hasKey) {
    trigger(target, key, triggerOpType.DELETE);
  }

  return result;
}

```

至此reactive的功能完成的差不多了，但是，还没有出处理当target为数组的情况，对于数组的处理，相对来说比较复杂，没关系，一点一点的去实现







