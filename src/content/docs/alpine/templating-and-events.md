---
title: "Шаблоны и события"
description: "Управление DOM в Alpine.js: x-text, x-html, x-show, x-if, x-on (@) — реакции на события, клавиатурные модификаторы, кастомные события."
sidebar:
  order: 3
---

## Управление текстовым содержимым

### x-text

Устанавливает текстовое содержимое элемента в результат JavaScript-выражения:

```html
<div x-data="{ title: 'Привет, Alpine!' }">
    <h1 x-text="title"></h1>
</div>
```

При изменении `title` содержимое `<h1>` обновится автоматически. Можно использовать любые выражения:

```html
<span x-text="1 + 2"></span>  <!-- 3 -->
<span x-text="count * 2"></span>
```

### x-html

Аналог `innerHTML` — вставляет HTML-строку. **Осторожно: XSS!** Используйте только с проверенным контентом:

```html
<div x-data="{ markup: '<strong>жирный текст</strong>' }">
    <div x-html="markup"></div>
</div>
```

## Показ и скрытие элементов

### x-show

Добавляет `display: none;` когда выражение ложно:

```html
<div x-data="{ open: false }">
    <button @click="open = !open">Toggle</button>
    <div x-show="open">Содержимое...</div>
</div>
```

Элемент остаётся в DOM, но скрывается через CSS.

### x-if

Полностью удаляет/добавляет элемент из DOM. **Обязательно** использовать на `<template>`:

```html
<div x-data="{ open: false }">
    <button @click="open = !open">Toggle</button>

    <template x-if="open">
        <div>Появляется и удаляется из DOM</div>
    </template>
</div>
```

> **Важно:** `<template x-if>` должен содержать **ровно один** корневой элемент. `x-if` не поддерживает `x-transition`.

### x-show vs x-if

| | x-show | x-if |
|---|--------|------|
| DOM | Элемент всегда в DOM | Элемент добавляется/удаляется |
| Производительность | Быстрее при частых переключениях | Легче при редком показе |
| x-transition | Поддерживает | Не поддерживает |
| init() | Вызывается сразу | Вызывается при первом показе |

## События — x-on / @

Директива `x-on` (сокращение `@`) слушает события браузера:

```html
<button x-on:click="count++">+1</button>
<!-- то же самое -->
<button @click="count++">+1</button>
```

Поддерживаются любые события: `@mouseenter`, `@keyup`, `@submit`, `@change`, `@focus`, etc.

### Модификаторы клавиш

```html
<input @keyup.enter="submit()">         <!-- Только Enter -->
<input @keyup.shift.enter="submit()">   <!-- Shift+Enter -->
<input @keydown.escape="close()">       <!-- Escape -->
<input @keydown.arrow-up="prev()">      <!-- Стрелка вверх -->
```

### Модификаторы поведения

```html
<form @submit.prevent="handleSubmit()">  <!-- event.preventDefault() -->
<button @click.stop="doSomething()">    <!-- event.stopPropagation() -->
<div @click.outside="close()">          <!-- Клик вне элемента -->
<button @click.once="runOnce()">        <!-- Только один раз -->
```

### Доступ к объекту события

Alpine автоматически предоставляет магическую переменную `$event`:

```html
<button @click="$event.target.remove()">Удалить меня</button>
<input @keyup="console.log($event.key)">
```

### Модификаторы клавиатуры по ключу

Можно указать конкретную клавишу через `@keyup.enter`, `@keydown.tab` и т.д. Можно комбинировать:

```html
<input @keydown.ctrl.s="save()">  <!-- Ctrl+S -->
```

## Кастомные события

Отправка собственных событий через `$dispatch`:

```html
<div @foo="console.log('foo получен!')">
    <button @click="$dispatch('foo')">Отправить foo</button>
</div>
```

Позволяет Alpine-компонентам общаться друг с другом. Можно передавать данные и пузырить события вверх по DOM.

## Материалы и источники

- [Alpine.js Templating](https://alpinejs.dev/essentials/templating)
- [Alpine.js Events](https://alpinejs.dev/essentials/events)
- [Alpine.js x-on](https://alpinejs.dev/directives/on)
- [Alpine.js x-text](https://alpinejs.dev/directives/text)
- [Alpine.js x-html](https://alpinejs.dev/directives/html)
- [Alpine.js x-show](https://alpinejs.dev/directives/show)
- [Alpine.js x-if](https://alpinejs.dev/directives/if)

> Источник: `raw/2026/0312/essentials-templating.md`, `raw/2026/0312/essentials-events.md`, `raw/2026/0312/directives-*.md`
