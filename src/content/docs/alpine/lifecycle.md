---
title: "Жизненный цикл и реактивность"
description: "Хуки Alpine.js: x-init, $watch, x-effect, alpine:init, alpine:initialized. Реактивность под капотом: Alpine.reactive() и Alpine.effect()."
sidebar:
  order: 9
---

## Хуки жизненного цикла

### x-init — инициализация элемента

Выполняется, когда Alpine начинает инициализировать элемент:

```html
<button x-init="console.log('Инициализируюсь!')">
```

Можно использовать для загрузки данных, подписки на события, запуска таймеров:

```html
<div x-data="{ posts: [] }" 
     x-init="posts = await (await fetch('/api/posts')).json()">
    <!-- posts загружены до рендера -->
</div>
```

### Автоматический `init()`

Alpine автоматически вызывает метод `init()` на объекте `x-data`:

```js
Alpine.data('dropdown', () => ({
    open: false,
    init() {
        // Вызывается до инициализации элемента
        console.log('Готово');
    }
}))
```

### $watch — реактивное слежение

Отслеживает изменение конкретного свойства:

```html
<div x-data="{ open: false }" 
     x-init="$watch('open', (value, oldValue) => {
        console.log(`Изменилось: ${oldValue} → ${value}`)
     })">
    <button @click="open = !open">Toggle</button>
</div>
```

- Работает с dot-нотацией: `$watch('foo.bar', fn)`
- Колбэк получает `(newValue, oldValue)`
- **Ленивый:** не вызывается до первого изменения
- ⚠️ Не меняйте отслеживаемое свойство внутри колбэка — получите бесконечный цикл

### x-effect — автоматические зависимости

В отличие от `$watch`, `x-effect` сам определяет, от каких данных зависит:

```html
<div x-data="{ count: 0, doubled: 0 }" 
     x-effect="doubled = count * 2">
    <button @click="count++">+1</button>
    <span x-text="count"></span> x2 = <span x-text="doubled"></span>
</div>
```

Отличия от `$watch`:

| | `x-effect` | `$watch` |
|---|---|---|
| Запуск | Немедленно + при изменениях | Только при изменении |
| Зависимости | Автоматически | Явно указанное свойство |
| Старое значение | Не передаётся | Передаётся вторым аргументом |

## Глобальные события Alpine

### `alpine:init`

Срабатывает после загрузки Alpine, но **до** инициализации страницы. Идеально для регистрации плагинов, компонентов, store:

```js
document.addEventListener('alpine:init', () => {
    Alpine.data('dropdown', () => ({ /*...*/ }))
    Alpine.store('darkMode', { /*...*/ })
    Alpine.plugin(MyPlugin)
})
```

```js
// NPM-версия: то же самое, но без alpine:init
Alpine.data('dropdown', () => ({ /*...*/ }))
Alpine.store('darkMode', { /*...*/ })
Alpine.start()
```

### `alpine:initialized`

Срабатывает **после** того, как Alpine полностью инициализировал страницу:

```js
document.addEventListener('alpine:initialized', () => {
    console.log('Alpine готов к работе')
})
```

## Реактивность под капотом

Alpine использует механизм реактивности Vue.js (`@vue/reactivity`). Две ключевые функции:

### Alpine.reactive()

Создаёт реактивную версию объекта через JavaScript Proxy:

```js
let data = { count: 1 }
let reactiveData = Alpine.reactive(data)

reactiveData.count = 2
console.log(data.count) // 2 — оригинальный объект тоже изменился
```

`Alpine.reactive(data)` оборачивает объект в Proxy, перехватывая все `get` и `set`.

### Alpine.effect()

Принимает колбэк и автоматически отслеживает все реактивные данные внутри:

```js
let data = Alpine.reactive({ count: 1 })

Alpine.effect(() => {
    console.log(data.count) // при каждом изменении data.count
})
```

При первом запуске выводит `1`, затем при любом изменении `data.count` — снова выводит новое значение.

### Счётчик без Alpine-директив

Демонстрация чистой реактивности:

```js
let data = Alpine.reactive({ count: 0 })

Alpine.effect(() => {
    document.querySelector('span').textContent = data.count
})

document.querySelector('button').addEventListener('click', () => {
    data.count++
})
```

## Материалы и источники

- [Alpine.js Lifecycle](https://alpinejs.dev/essentials/lifecycle)
- [Alpine.js $watch](https://alpinejs.dev/magics/watch)
- [Alpine.js x-effect](https://alpinejs.dev/directives/effect)
- [Alpine.js Advanced Reactivity](https://alpinejs.dev/advanced/reactivity)

> Источник: `raw/2026/0312/essentials-lifecycle.md`, `raw/2026/0312/magics-watch.md`, `raw/2026/0312/directives-effect.md`, `raw/2026/0312/advanced-reactivity.md`
