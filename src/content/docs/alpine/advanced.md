---
title: "Продвинутые темы Alpine.js"
description: "Расширение Alpine: кастомные директивы и magics, асинхронные операции, CSP-режим, отладка реактивности."
sidebar:
  order: 12
---

## Расширение Alpine

Alpine имеет открытую архитектуру — все встроенные директивы и magics используют те же API, что доступны вам.

### Порядок расширения

API расширения должны быть вызваны **после** загрузки Alpine, но **до** `Alpine.start()`:

```js
// CDN: слушаем alpine:init
document.addEventListener('alpine:init', () => {
    Alpine.directive('my-directive', (el, { expression }, { evaluate }) => {
        // расширение
    })
})

// NPM: до Alpine.start()
import Alpine from 'alpinejs'

Alpine.directive('my-directive', (el, { expression }, { evaluate }) => {
    // расширение
})

Alpine.start()
```

### Пользовательские директивы

```js
Alpine.directive('uppercase', (el, { expression }, { evaluate, effect }) => {
    effect(() => {
        el.textContent = evaluate(expression).toUpperCase()
    })
})
```

Использование:

```html
<span x-data="{ name: 'hello' }" x-uppercase="name"></span>
<!-- HELLO -->
```

### Пользовательские магии (magics)

```js
Alpine.magic('clipboard', () => {
    return (subject) => navigator.clipboard.writeText(subject)
})
```

Использование:

```html
<button @click="$clipboard('Скопированный текст')">Копировать</button>
```

## Асинхронные операции

Alpine полностью поддерживает `async/await` внутри выражений:

```html
<div x-data="{ posts: [] }" 
     x-init="posts = await (await fetch('/api/posts')).json()">
    <template x-for="post in posts">
        <div x-text="post.title"></div>
    </template>
</div>
```

### Загрузочные состояния

```html
<div x-data="{ loading: false, data: null }">
    <button @click="loading = true; data = await fetchData(); loading = false">
        Загрузить
    </button>
    
    <div x-show="loading">Загрузка...</div>
    <div x-show="data" x-text="data"></div>
</div>
```

### Await в событиях

```html
<form @submit.prevent="await handleSubmit()">
```

### Обработка ошибок

```html
<button @click="try { await riskyOp() } catch(e) { error = e.message }">
    Попробовать
</button>
```

## Content Security Policy (CSP)

Alpine может работать без `eval()`, что делает его безопасным для CSP-строгих окружений.

### Сборка с CSP

Вместо CDN используйте NPM + сборщик:

```bash
npm install alpinejs
```

```js
// app.js
import Alpine from 'alpinejs'

// Все данные и компоненты должны быть определены здесь
Alpine.data('dropdown', () => ({
    open: false,
    toggle() { this.open = !this.open }
}))

Alpine.store('theme', 'light')

Alpine.start()
```

### Что нельзя при CSP

- `x-data="{ ... }"` — инлайн-JSON запрещён
- `@click="выражение"` — инлайн-код запрещён
- `x-text="выражение"` — инлайн-код запрещён

**Решение:** весь код выносится в `Alpine.data()`, `Alpine.store()`, а в HTML используются только ссылки на них.

### CSP-friendly шаблон

```html
<!-- НЕ работает при CSP -->
<div x-data="{ count: 0 }">
    <button @click="count++">+1</button>
</div>

<!-- РАБОТАЕТ при CSP -->
<div x-data="counter">
    <button @click="increment">+1</button>
</div>

<script>
Alpine.data('counter', () => ({
    count: 0,
    increment() { this.count++ }
}))
</script>
```

## Расширенная реактивность

### Alpine.reactive() и Alpine.effect()

Создание реактивных объектов и эффектов за пределами директив:

```js
let state = Alpine.reactive({ count: 0 })

Alpine.effect(() => {
    document.querySelector('#counter').textContent = state.count
})
```

Этот код работает без какого-либо HTML с директивами Alpine — чистая реактивность.

### Отладка реактивности

```js
const state = Alpine.reactive({
    user: {
        name: 'John'
    }
})

Alpine.effect(() => {
    // Автоматически отслеживает state.user.name
    console.log(state.user.name)
})
```

## Итоговый обзор разделов Alpine.js

| Раздел | Ключевые концепции |
|--------|-------------------|
| [Установка](./installation.md) | CDN, NPM, первый компонент |
| [Состояние и данные](./state-and-data.md) | `x-data`, `Alpine.data()`, `x-init` |
| [Шаблоны и события](./templating-and-events.md) | `x-text`, `x-show`, `x-if`, `@click` |
| [Привязки](./binding.md) | `x-bind`, `x-model`, `x-modelable` |
| [Циклы и DOM](./loops-and-refs.md) | `x-for`, `x-ref`, `$refs`, `x-id` |
| [Анимации](./transitions.md) | `x-transition`, `x-teleport`, `x-effect` |
| [Magics](./magics.md) | `$el`, `$refs`, `$store`, `$watch`, `$dispatch` |
| [Stores](./stores.md) | `Alpine.store()`, `$store`, `Alpine.bind()` |
| [Жизненный цикл](./lifecycle.md) | `x-init`, `$watch`, `x-effect`, реактивность |
| [Плагины](./plugins.md) | Mask, Intersect, Persist, Focus, Morph и др. |
| [Компоненты](./components.md) | Dropdown, Modal, интеграции |
| [Продвинутые темы](./advanced.md) | Расширение, async, CSP |

## Материалы и источники

- [Alpine.js Extending](https://alpinejs.dev/advanced/extending)
- [Alpine.js Async](https://alpinejs.dev/advanced/async)
- [Alpine.js CSP](https://alpinejs.dev/advanced/csp)
- [Alpine.js Reactivity](https://alpinejs.dev/advanced/reactivity)

> Источник: `raw/2026/0312/advanced-*.md`
