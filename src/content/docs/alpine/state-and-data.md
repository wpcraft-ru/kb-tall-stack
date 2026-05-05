---
title: "Состояние и данные (x-data)"
description: "Реактивное состояние в Alpine.js: x-data, вложенные данные, Alpine.data() для переиспользования, x-init и инициализация."
sidebar:
  order: 2
---

## x-data — локальное состояние

Всё в Alpine начинается с `x-data`. Внутри этой директивы вы объявляете JavaScript-объект с данными, за которыми Alpine будет следить реактивно:

```html
<div x-data="{ open: false }">
    <!-- open доступно везде внутри этого элемента -->
</div>
```

Любое изменение свойства автоматически обновляет всё, что от него зависит.

### Вложенность данных

`x-data` можно вкладывать — дочерний элемент имеет доступ к данным родителя (аналогично областям видимости в JavaScript):

```html
<div x-data="{ open: false }">
    <div x-data="{ label: 'Content:' }">
        <span x-text="label"></span>    <!-- 'Content:' — из дочернего -->
        <span x-show="open"></span>      <!-- false — из родительского -->
    </div>
</div>
```

Если у дочернего `x-data` есть свойство с таким же именем, как у родителя — приоритет у дочернего.

### Данные на одном элементе

Alpine позволяет объявить `x-data` и использовать его на том же элементе:

```html
<button x-data="{ label: 'Click Here' }" x-text="label"></button>
```

### x-data без данных

Если вам нужна функциональность Alpine, но не нужно реактивное состояние, `x-data` можно указать без значения:

```html
<button x-data @click="alert('Clicked!')">Click Me</button>
```

Это включает Alpine на элементе, не создавая объект данных.

## Alpine.data() — переиспользуемые компоненты

Для повторного использования логики используйте `Alpine.data()`:

```html
<div x-data="dropdown">
    <button @click="toggle">Toggle</button>
    <div x-show="open">Content...</div>
</div>

<script>
document.addEventListener('alpine:init', () => {
    Alpine.data('dropdown', () => ({
        open: false,
        toggle() {
            this.open = !this.open
        }
    }))
})
</script>
```

### Параметры инициализации

Вы можете передавать параметры при вызове `x-data="dropdown(true)"`:

```html
<div x-data="dropdown(true)">
```

```js
Alpine.data('dropdown', (initialOpen) => ({
    open: initialOpen,
    toggle() { this.open = !this.open }
}))
```

### Импорт из отдельных файлов (NPM)

```js
// dropdown.js
export default () => ({
    open: false,
    toggle() { this.open = !this.open }
})

// app.js
import Alpine from 'alpinejs'
import dropdown from './dropdown.js'

Alpine.data('dropdown', dropdown)
Alpine.start()
```

## x-init — инициализация

Директива `x-init` выполняет JavaScript при инициализации элемента Alpine:

```html
<button x-init="console.log('Инициализируюсь!')">
```

Полезна для начальной настройки, загрузки данных, запуска таймеров.

### Автоматический init()

Если у объекта `x-data` (или `Alpine.data()`) есть метод `init()`, Alpine вызовет его автоматически:

```js
Alpine.data('dropdown', () => ({
    open: false,
    init() {
        // Выполнится до инициализации элемента
        console.log('Dropdown готов');
    },
    toggle() { this.open = !this.open }
}))
```

Теперь `x-init="init()"` можно не писать явно — Alpine сделает это сам.

## Материалы и источники

- [Alpine.js State](https://alpinejs.dev/essentials/state)
- [Alpine.js x-data](https://alpinejs.dev/directives/data)
- [Alpine.js x-init](https://alpinejs.dev/directives/init)
- [Alpine.js Alpine.data()](https://alpinejs.dev/globals/alpine-data)

> Источник: `raw/2026/0312/essentials-state.md`, `raw/2026/0312/directives-data.md`, `raw/2026/0312/directives-init.md`, `raw/2026/0312/globals-alpine-data.md`
