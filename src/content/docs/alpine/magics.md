---
title: "Magics (магические переменные)"
description: "Полный справочник магических переменных Alpine.js: $el, $refs, $store, $watch, $dispatch, $nextTick, $root, $data, $id."
sidebar:
  order: 7
---

Magics («магические переменные») — встроенные хелперы Alpine.js, доступные внутри любых выражений. Всегда начинаются с `$`.

## $el — текущий элемент

Возвращает DOM-элемент, на котором выполняется выражение:

```html
<div x-data>
    <button @click="$el.remove()">Удалить меня</button>
</div>
```

В Alpine V3 `$el` — это всегда **текущий** элемент, не корень компонента (для корня используйте `$root`).

## $refs — ссылки на DOM

Доступ к элементам, помеченным `x-ref`:

```html
<div x-data>
    <button @click="$refs.input.focus()">Фокус</button>
    <input x-ref="input" type="text">
</div>
```

При использовании внутри `x-for` — возвращает массив:

```html
<template x-for="item in items">
    <div x-ref="items">...</div>
</template>
<!-- $refs.items — массив всех div'ов -->
```

## $store — глобальное состояние

Доступ к глобальным хранилищам, созданным через `Alpine.store()`:

```html
<button @click="$store.darkMode.toggle()">Переключить тему</button>
<div :class="$store.darkMode.on && 'bg-black'">
    ...
</div>
```

Подробнее — на странице [Глобальное состояние (Stores)](./stores.md).

## $watch — отслеживание изменений

Реактивное слежение за изменением свойства:

```html
<div x-data="{ open: false }" 
     x-init="$watch('open', value => console.log(value))">
    <button @click="open = !open">Toggle</button>
</div>
```

### Отслеживание вложенных свойств

Используйте dot-нотацию:

```html
<div x-data="{ foo: { bar: 'baz' } }" 
     x-init="$watch('foo.bar', value => console.log(value))">
</div>
```

### Старое значение

Второй аргумент колбэка — предыдущее значение:

```html
$watch('open', (newValue, oldValue) => {
    console.log(`Было: ${oldValue}, стало: ${newValue}`)
})
```

### Глубокое отслеживание

При отслеживании объекта (`$watch('foo', ...)`) колбэк получает весь объект при изменении любого вложенного свойства:

```html
$watch('foo', (value, oldValue) => {
    console.log(value, oldValue) // { bar: 'bob' } { bar: 'baz' }
})
```

> ⚠️ Изменение отслеживаемого свойства внутри колбэка `$watch` вызовет бесконечный цикл.

## $dispatch — отправка событий

Отправляет кастомные события (всплывают вверх по DOM):

```html
<div @custom-event="handleIt()">
    <button @click="$dispatch('custom-event')">Отправить</button>
</div>
```

### Передача данных

```html
<button @click="$dispatch('custom-event', { id: 1, name: 'Test' })">
```

На принимающей стороне:

```html
<div @custom-event="console.log($event.detail)">
```

## $nextTick — после обновления DOM

Выполняет код после того, как Alpine обновит DOM:

```html
<div x-data="{ count: 0 }">
    <button @click="count++; $nextTick(() => $refs.item.focus())">
        +1 и фокус
    </button>
    <input x-ref="item">
</div>
```

Аналог `Vue.nextTick()` и `Livewire.$nextTick()`.

## $root — корень компонента

Возвращает корневой DOM-элемент текущего Alpine-компонента:

```html
<div x-data>
    <button @click="console.log($root)">Показать корень</button>
</div>
```

Полезно, когда `$el` — дочерний элемент, а нужен корневой.

## $data — все данные компонента

Возвращает весь объект данных `x-data`:

```html
<div x-data="{ count: 0, name: 'Alpine' }">
    <button @click="console.log($data)">
        <!-- { count: 0, name: 'Alpine' } -->
    </button>
</div>
```

## $id — уникальный идентификатор

Используется вместе с `x-id` для генерации уникальных ID (особенно в циклах):

```html
<template x-for="item in items">
    <div x-id="['input-id']">
        <label :for="$id('input-id')" x-text="item"></label>
        <input :id="$id('input-id')">
    </div>
</template>
```

## Шпаргалка по magics

| Magic | Назначение | Пример |
|-------|-----------|--------|
| `$el` | Текущий DOM-элемент | `$el.remove()` |
| `$refs` | Элементы по `x-ref` | `$refs.input.focus()` |
| `$store` | Глобальное состояние | `$store.darkMode.on` |
| `$watch` | Отслеживание данных | `$watch('open', fn)` |
| `$dispatch` | Кастомные события | `$dispatch('event', data)` |
| `$nextTick` | После обновления DOM | `$nextTick(() => ...)` |
| `$root` | Корень компонента | `$root.querySelector(...)` |
| `$data` | Все данные | `$data.count` |
| `$id` | Уникальный ID | `$id('input-id')` |

## Материалы и источники

- [Alpine.js Magics: $el](https://alpinejs.dev/magics/el)
- [Alpine.js Magics: $refs](https://alpinejs.dev/magics/refs)
- [Alpine.js Magics: $store](https://alpinejs.dev/magics/store)
- [Alpine.js Magics: $watch](https://alpinejs.dev/magics/watch)
- [Alpine.js Magics: $dispatch](https://alpinejs.dev/magics/dispatch)
- [Alpine.js Magics: $nextTick](https://alpinejs.dev/magics/nextTick)
- [Alpine.js Magics: $root](https://alpinejs.dev/magics/root)
- [Alpine.js Magics: $data](https://alpinejs.dev/magics/data)
- [Alpine.js Magics: $id](https://alpinejs.dev/magics/id)

> Источник: `raw/2026/0312/magics-*.md`
