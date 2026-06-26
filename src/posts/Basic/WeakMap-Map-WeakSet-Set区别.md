---
title: WeakMap 与 Map、WeakSet 与 Set 的区别
date: 2026-06-26
tags: [Basic]
summary: 深入对比 WeakMap vs Map 和 WeakSet vs Set 的核心差异，包括键类型、垃圾回收、可迭代性、使用场景及实战示例。
---

## 概览

ES6 引入了四种集合类型：`Map`、`WeakMap`、`Set`、`WeakSet`。它们看似两两对应，但在**键/值类型**、**垃圾回收行为**、**可迭代性**等方面有本质区别。

| 特性 | Map | WeakMap | Set | WeakSet |
|------|-----|---------|-----|---------|
| **键/值类型** | 任意类型 | **只能**是对象 | 任意类型 | **只能**是对象 |
| **可迭代** | ✅ 是 | ❌ 否 | ✅ 是 | ❌ 否 |
| **size 属性** | ✅ 有 | ❌ 无 | ✅ 有 | ❌ 无 |
| **clear() 方法** | ✅ 有 | ❌ 无 | ✅ 有 | ❌ 无 |
| **垃圾回收** | 阻止 GC | **不阻止** GC | 阻止 GC | **不阻止** GC |
| **遍历方法** | keys/values/entries/forEach | 无 | keys/values/entries/forEach | 无 |

---

## 一、Map vs WeakMap

### 1. 键的类型

**Map** 的键可以是任意类型：

```javascript
const map = new Map()
map.set('name', 'Alice')           // 字符串作为键
map.set(1, 'one')                   // 数字作为键
map.set(true, 'yes')                // 布尔作为键
map.set({ id: 1 }, 'data')         // 对象作为键
map.set(Symbol('key'), 'symbol')   // Symbol 作为键
```

**WeakMap** 的键**必须是对象**（不能是原始类型）：

```javascript
const wm = new WeakMap()
const obj = { id: 1 }

wm.set(obj, 'some data')   // ✅ 可以

// 以下都会报错 TypeError: Invalid value used as weak map key
wm.set('name', 'Alice')    // ❌ 字符串不行
wm.set(1, 'one')            // ❌ 数字不行
wm.set(true, 'yes')         // ❌ 布尔不行
wm.set(null, 'data')        // ❌ null 不行
```

### 2. 垃圾回收（核心区别）

这是 WeakMap 与 Map **最本质的区别**。

- **Map**：对键是**强引用**，只要 Map 存在，键就不会被垃圾回收，可能导致内存泄漏。
- **WeakMap**：对键是**弱引用**，如果键对象没有其他引用，即使 WeakMap 仍存在，该键也会被 GC 回收。

```javascript
// Map — 强引用，阻止 GC
let obj = { id: 1 }
const map = new Map()
map.set(obj, 'expensive data')

obj = null  // 此时 obj 仍然被 map 引用，不会被 GC 回收
// map 仍然可以访问到原始对象
for (const key of map.keys()) {
  console.log(key) // { id: 1 } — 还在！
}
```

```javascript
// WeakMap — 弱引用，不阻止 GC
let obj = { id: 1 }
const wm = new WeakMap()
wm.set(obj, 'expensive data')

obj = null  // obj 没有任何强引用了，后续 GC 会回收它
// 对应的 wm 中的键值对也会自动消失
```

> **注意**：WeakMap 的"弱"仅指**键**是弱引用，值仍然是强引用。如果值本身引用了键，可能导致键无法被回收，需要留意。

### 3. 可迭代性

- **Map** 是可迭代的，支持 `forEach`、`keys()`、`values()`、`entries()`、`for...of`、`...`扩展运算符。
- **WeakMap** 不可迭代，也没有这些方法 — 这正是因为它的键随时可能被 GC 回收，无法提供稳定的遍历结果。

```javascript
// Map 遍历
const map = new Map([['a', 1], ['b', 2]])

for (const [key, value] of map) { /* ... */ }
map.forEach((value, key) => { /* ... */ })
console.log([...map])         // [['a', 1], ['b', 2]]
console.log(map.size)         // 2

// WeakMap 没有这些能力
const wm = new WeakMap()
// wm.size        // undefined
// wm.forEach()   // TypeError
// for...of wm    // TypeError
```

WeakMap 只有四个方法：

| 方法 | 说明 |
|------|------|
| `wm.set(key, value)` | 设置键值对 |
| `wm.get(key)` | 获取值 |
| `wm.has(key)` | 判断是否存在某个键 |
| `wm.delete(key)` | 删除某个键值对 |

### 4. WeakMap 的典型使用场景

#### 场景一：存储 DOM 相关数据

```javascript
// 使用 WeakMap 存储 DOM 节点的额外信息
const nodeData = new WeakMap()

const btn = document.querySelector('#btn')
const input = document.querySelector('#input')

nodeData.set(btn, { clickCount: 0, lastClicked: null })
nodeData.set(input, { dirty: false, lastValue: '' })

// 当节点从 DOM 中删除后，对应的数据自动被 GC 回收
btn.remove()
// nodeData 中 btn 对应的数据会被自动清理，无需手动 delete
```

#### 场景二：缓存计算结果

```javascript
const cache = new WeakMap()

function computeExpensive(obj) {
  if (cache.has(obj)) {
    console.log('从缓存返回')
    return cache.get(obj)
  }
  console.log('执行计算...')
  const result = /* 昂贵计算 */ obj.value * 2
  cache.set(obj, result)
  return result
}

const data = { value: 42 }
computeExpensive(data) // 执行计算...
computeExpensive(data) // 从缓存返回

// 当 data 不再被引用时，缓存自动失效
data = null
```

#### 场景三：私有属性（ES6 Class）

```javascript
const _private = new WeakMap()

class MyClass {
  constructor(name, secret) {
    _private.set(this, { name, secret })
  }

  getName() {
    return _private.get(this).name
  }

  getSecret() {
    return _private.get(this).secret
  }
}

const instance = new MyClass('Alice', 's3cret')
console.log(instance.getName())    // 'Alice'
console.log(instance.secret)       // undefined — 外部访问不到
console.log(instance.getSecret())  // 's3cret'
```

### 5. Map 的典型使用场景

```javascript
// 需要遍历键值对时
const userRoles = new Map()
userRoles.set('alice', 'admin')
userRoles.set('bob', 'editor')

for (const [user, role] of userRoles) {
  console.log(`${user} is ${role}`)
}

// 需要记录 size
console.log(userRoles.size) // 2

// 需要序列化
const json = JSON.stringify([...userRoles])
```

---

## 二、Set vs WeakSet

### 1. 值的类型

- **Set**：可以存储任意类型的值。
- **WeakSet**：**只能是对象**。

```javascript
const set = new Set()
set.add(1)
set.add('hello')
set.add({ id: 1 })
set.add(true)
set.add(Symbol('s'))
// ✅ 全部可以

const ws = new WeakSet()
const obj = { id: 1 }
ws.add(obj)        // ✅

// 以下都会报错
ws.add(1)          // ❌
ws.add('hello')    // ❌
ws.add(true)       // ❌
ws.add(null)       // ❌
```

### 2. 垃圾回收

和 WeakMap 同理：

- **Set** 对值是**强引用**，值不会被 GC 回收。
- **WeakSet** 对值是**弱引用**，如果没有其他引用，值会被 GC 回收。

```javascript
// Set — 强引用
let obj = { id: 1 }
const set = new Set()
set.add(obj)
obj = null
// obj 仍然被 set 引用，不会被 GC 回收

// WeakSet — 弱引用
let obj2 = { id: 2 }
const ws = new WeakSet()
ws.add(obj2)
obj2 = null
// obj2 会被 GC 回收，ws 中的记录自动消失
```

### 3. 可迭代性

和 WeakMap 一样，WeakSet 不可迭代，只有三个方法：

| 方法 | 说明 |
|------|------|
| `ws.add(value)` | 添加值 |
| `ws.has(value)` | 判断某个值是否存在 |
| `ws.delete(value)` | 删除某个值 |

```javascript
// Set 可以遍历
const set = new Set([1, 2, 3])
console.log(set.size)       // 3
console.log([...set])        // [1, 2, 3]
set.forEach(v => console.log(v))

// WeakSet 不行
const ws = new WeakSet()
// ws.size          // undefined
// for...of ws      // TypeError
// ws.forEach()     // TypeError
```

### 4. WeakSet 的典型使用场景

#### 场景一：标记/标签 — "是否已处理"

```javascript
const processed = new WeakSet()

function process(obj) {
  if (processed.has(obj)) {
    console.log('已处理过，跳过')
    return
  }
  // 执行处理逻辑...
  console.log('处理中...')
  processed.add(obj)
}

const item = { id: 1 }
process(item)  // 处理中...
process(item)  // 已处理过，跳过

// item 不再被引用时，标记自动清除
```

#### 场景二：标记"品牌的"对象（防篡改）

```javascript
const brands = new WeakSet()

class BrandedProduct {
  constructor(name) {
    this.name = name
    brands.add(this) // 打上品牌标记
  }

  isGenuine() {
    return brands.has(this)
  }
}

const p1 = new BrandedProduct('Widget')
console.log(p1.isGenuine()) // true

const fake = Object.create(BrandedProduct.prototype)
fake.name = 'Fake'
Object.assign(fake, { name: 'Fake' })
console.log(fake.isGenuine()) // false — 假冒的！
```

### 5. Set 的典型使用场景

```javascript
// 数组去重
const arr = [1, 2, 2, 3, 3, 3, 4]
const unique = [...new Set(arr)]  // [1, 2, 3, 4]

// 集合运算
const setA = new Set([1, 2, 3, 4])
const setB = new Set([3, 4, 5, 6])

// 交集
const intersection = new Set([...setA].filter(x => setB.has(x)))
// Set { 3, 4 }

// 并集
const union = new Set([...setA, ...setB])
// Set { 1, 2, 3, 4, 5, 6 }

// 差集 (A - B)
const difference = new Set([...setA].filter(x => !setB.has(x)))
// Set { 1, 2 }
```

---

## 三、选择决策速查表

| 场景 | 推荐 |
|------|------|
| 需要存储键值对，键是原始类型（字符串、数字等） | **Map** |
| 需要存储键值对，键是对象，且对象消失时数据也自动消失 | **WeakMap** |
| 需要遍历、获取 size、清空、序列化 | **Map** / **Set** |
| 需要存储一组不重复的值，值可能是任意类型 | **Set** |
| 需要标记"某个对象是否属于某个集合"，且不阻止 GC | **WeakSet** |
| 存储 DOM 节点相关的元数据 | **WeakMap** |
| 缓存函数计算结果，按对象自动清理 | **WeakMap** |
| 数组去重、集合运算（交/并/差） | **Set** |
| 标记对象是否已经过某道工序 | **WeakSet** |
| 实现真正的私有属性（ES6 Class） | **WeakMap** |

---

## 四、内存角度总结

```
强引用（Map / Set）：
  对象 ---被引用---> Map/Set ---阻止---> GC
  结果：只要 Map/Set 还活着，对象就活着

弱引用（WeakMap / WeakSet）：
  对象 ---被弱引用---> WeakMap/WeakSet ---允许---> GC
  结果：外部没有引用时，对象照常被回收，Weak 集合中的记录自动消失
```

选择 Weak 集合的终极判断标准就一句话：**当集合的生命周期比它存储的对象更长时，用 Weak 版本避免内存泄漏。**

## 五、快速记忆口诀

- **Weak** = 弱引用 = **不阻止 GC** = **不能遍历**
- 没有 Weak → 强引用 → 阻止 GC → 可以遍历
- Weak 系列只认**对象**作为键/值
- 四个 Weak 能力：`set/get/has/delete`（WeakSet 没有 get）
