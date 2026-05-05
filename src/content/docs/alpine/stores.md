---
title: "Глобальное состояние (Stores)"
description: "Глобальное состояние в Alpine.js: Alpine.store(), $store, Alpine.bind() для переиспользования атрибутов."
sidebar:
  order: 8
---

## Alpine.store() — глобальные хранилища

Глобальное состояние, доступное из любого компонента на странице:

```html
<button x-data @click="$store.darkMode.toggle()">Тёмная тема</button>

<div x-data :class="$store.darkMode.on && 'bg-black'">
    ...
</div>

<script>
document.addEventListener('alpine:init', () => {
    Alpine.store('darkMode', {
        on: false,
        toggle() {
            this.on = !this.on
        }
    })
})
</script>
```

### Отличие от Alpine.data()

| | `Alpine.store()` | `Alpine.data()` |
|---|---|---|
| Область видимости | Глобально на всей странице | Только внутри `x-data="имя"` |
| Доступ | `$store.имя` | `x-data="имя"` |
| Назначение | Состояние приложения (тема, корзина, пользователь) | Локальные компоненты (dropdown, modal) |

### Простые значения

Хранилище не обязано быть объектом — можно хранить любое значение:

```html
<button @click="$store.count++">+1</button>
<span x-text="$store.count"></span>

<script>
Alpine.store('count', 0)
</script>
```

### Реактивность store

Как и `x-data`, все свойства store **реактивны**. Изменение `$store.darkMode.on` автоматически обновит все элементы, которые на него ссылаются.

### NPM-импорт

```js
import Alpine from 'alpinejs'

Alpine.store('darkMode', {
    on: false,
    toggle() { this.on = !this.on }
})

Alpine.start()
```

## Alpine.bind() — переиспользование атрибутов

Позволяет вынести набор атрибутов в переиспользуемый объект:

```html
<!-- Вместо ручного связывания: -->
<button type="button" @click="doSomething()" :disabled="shouldDisable">Click</button>

<!-- Используем Alpine.bind(): -->
<button x-bind="SomeButton">Click</button>

<script>
document.addEventListener('alpine:init', () => {
    Alpine.bind('SomeButton', () => ({
        type: 'button',
        '@click'() { this.doSomething() },
        ':disabled'() { return this.shouldDisable },
    }))
})
</script>
```

Особенности `Alpine.bind()`:
- Можно использовать в любом `x-bind`-выражении
- Возвращает объект, где ключи — имена атрибутов, а значения — JavaScript-выражения
- Поддерживает `@click`, `:disabled`, `@keyup.enter` и любые другие Alpine-директивы как ключи

## Совместное использование

Stores и binds можно комбинировать с `Alpine.plugin()` для организации кода:

```js
// darkMode.js
export default function DarkModePlugin(Alpine) {
    Alpine.store('darkMode', {
        on: localStorage.getItem('darkMode') === 'true',
        toggle() {
            this.on = !this.on
            localStorage.setItem('darkMode', this.on)
        }
    })
}

// app.js
import Alpine from 'alpinejs'
import DarkModePlugin from './darkMode.js'

Alpine.plugin(DarkModePlugin)
Alpine.start()
```

## Материалы и источники

- [Alpine.js Alpine.store()](https://alpinejs.dev/globals/alpine-store)
- [Alpine.js Alpine.bind()](https://alpinejs.dev/globals/alpine-bind)
- [Alpine.js $store](https://alpinejs.dev/magics/store)

> Источник: `raw/2026/0312/globals-alpine-store.md`, `raw/2026/0312/globals-alpine-bind.md`, `raw/2026/0312/magics-store.md`
