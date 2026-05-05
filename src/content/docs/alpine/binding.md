---
title: "Привязки и модель (x-bind, x-model)"
description: "Динамические атрибуты через x-bind, двустороннее связывание через x-model, работа с формами, x-modelable для вложенных компонентов."
sidebar:
  order: 4
---

## x-bind — динамические атрибуты

Директива `x-bind` (сокращение `:`) устанавливает HTML-атрибуты на основе JavaScript-выражений:

```html
<div x-data="{ placeholderText: 'Введите текст...' }">
    <input type="text" x-bind:placeholder="placeholderText">
    <!-- тоже самое c сокращением: -->
    <input type="text" :placeholder="placeholderText">
</div>
```

Можно связывать любые атрибуты: `:href`, `:src`, `:disabled`, `:class`, `:style` и т.д.

### Управление классами

Самый частый случай — динамические CSS-классы:

```html
<div x-data="{ open: false }">
    <button @click="open = !open">Toggle</button>
    <div :class="open ? '' : 'hidden'">
        Содержимое...
    </div>
</div>
```

Краткая форма с оператором `||`:

```html
<div :class="open || 'hidden'">
```

Использование объекта для классов:

```html
<div :class="{ 'bg-blue-500': active, 'text-white': active }">
```

### x-bind без имени атрибута

Можно передать целый объект атрибутов:

```html
<button x-bind="ButtonAttributes">Click</button>

<script>
Alpine.bind('ButtonAttributes', () => ({
    type: 'button',
    '@click'() { this.doSomething() },
    ':disabled'() { return this.shouldDisable },
}))
</script>
```

Полезно для переиспользования наборов атрибутов.

## x-model — двустороннее связывание

`x-model` связывает значение элемента формы с данными Alpine в обе стороны:

```html
<div x-data="{ message: '' }">
    <input type="text" x-model="message">
    <span x-text="message"></span>
</div>
```

При вводе в поле — `message` обновляется. При изменении `message` из кода — поле обновляется.

### Поддерживаемые элементы форм

- `<input type="text">` — строка
- `<textarea>` — строка
- `<input type="checkbox">` — boolean / массив
- `<input type="radio">` — значение
- `<select>` — значение / массив (с `multiple`)
- `<input type="range">` — число

### Модификаторы x-model

```html
<input x-model.lazy="search">         <!-- Обновление по change, а не input -->
<input x-model.number="age">          <!-- Приведение к числу -->
<input x-model.trim="name">           <!-- Обрезка пробелов -->
<input x-model.debounce.500ms="q">    <!-- Задержка 500 мс -->
<input x-model.throttle.500ms="q">    <!-- Не чаще чем раз в 500 мс -->
```

## x-modelable — проброс x-model

`x-modelable` позволяет вложенному компоненту принимать `x-model` снаружи:

```html
<div x-data="{ number: 5 }">
    <div x-data="{ count: 0 }" 
         x-modelable="count" 
         x-model="number">
        <button @click="count++">+1</button>
    </div>
    Число: <span x-text="number"></span>
</div>
```

Теперь `number` из внешнего `x-data` связан с `count` внутреннего. Идеально для создания «компонентов-обёрток» в Blade и других шаблонизаторах.

## Материалы и источники

- [Alpine.js x-bind](https://alpinejs.dev/directives/bind)
- [Alpine.js x-model](https://alpinejs.dev/directives/model)
- [Alpine.js x-modelable](https://alpinejs.dev/directives/modelable)
- [Alpine.js Alpine.bind()](https://alpinejs.dev/globals/alpine-bind)

> Источник: `raw/2026/0312/directives-bind.md`, `raw/2026/0312/directives-model.md`, `raw/2026/0312/directives-modelable.md`, `raw/2026/0312/globals-alpine-bind.md`
