---
title: "Циклы и ссылки на DOM (x-for, x-ref)"
description: "Итерация данных через x-for, ключи для оптимизации, доступ к DOM-элементам через x-ref и $refs, x-id для уникальных ID."
sidebar:
  order: 5
---

## x-for — итерация по массиву

Директива `x-for` создаёт DOM-элементы на основе массива данных:

```html
<ul x-data="{ colors: ['Red', 'Orange', 'Yellow'] }">
    <template x-for="color in colors">
        <li x-text="color"></li>
    </template>
</ul>
```

### Два важных правила

1. `x-for` **обязан** быть на элементе `<template>`
2. Внутри `</template>` должен быть **ровно один корневой элемент**

### Итерация по объекту

```html
<ul x-data="{ car: { make: 'Jeep', model: 'Grand Cherokee', color: 'Black' } }">
    <template x-for="(value, index) in car">
        <li>
            <span x-text="index"></span>: <span x-text="value"></span>
        </li>
    </template>
</ul>
```

### Ключи (keys)

Если вы переупорядочиваете элементы, обязательно указывайте уникальные ключи:

```html
<ul x-data="{ colors: [
    { id: 1, label: 'Red' },
    { id: 2, label: 'Orange' },
    { id: 3, label: 'Yellow' },
]}">
    <template x-for="color in colors" :key="color.id">
        <li x-text="color.label"></li>
    </template>
</ul>
```

Без ключей Alpine может запутаться при перестановке элементов, что вызовет странные побочные эффекты.

### Доступ к индексу (числовой)

```html
<template x-for="(color, index) in colors">
    <li>
        <span x-text="index + 1"></span>. <span x-text="color"></span>
    </li>
</template>
```

## x-ref и $refs — ссылки на DOM

`x-ref` и магическая переменная `$refs` заменяют `getElementById` и `querySelector`:

```html
<div x-data>
    <button @click="$refs.text.remove()">Удалить текст</button>
    <span x-ref="text">Привет 👋</span>
</div>
```

- `x-ref="имя"` — маркирует элемент
- `$refs.имя` — возвращает DOM-элемент
- Доступны внутри того же `x-data`-контекста

### Несколько ссылок

```html
<div x-data>
    <button @click="$refs.items.forEach(el => el.remove())">Удалить все</button>
    
    <template x-for="item in items">
        <div x-ref="items">...</div>
    </template>
</div>
```

Если `x-ref` используется внутри `x-for`, `$refs.items` вернёт **массив** всех элементов.

## x-id — уникальные идентификаторы

Директива `x-id` генерирует уникальные ID для связывания label/input, aria-атрибутов и т.д.:

```html
<div x-data="{ items: ['One', 'Two', 'Three'] }">
    <template x-for="item in items">
        <div x-id="['input-id']">
            <label :for="$id('input-id')" x-text="item"></label>
            <input type="checkbox" :id="$id('input-id')">
        </div>
    </template>
</div>
```

`x-id` принимает массив имён, а `$id('имя')` возвращает гарантированно уникальный ID. Особенно полезно в циклах, где нужны уникальные `for`/`id` пары.

## Материалы и источники

- [Alpine.js x-for](https://alpinejs.dev/directives/for)
- [Alpine.js x-ref](https://alpinejs.dev/directives/ref)
- [Alpine.js x-id](https://alpinejs.dev/directives/id)
- [Alpine.js $refs](https://alpinejs.dev/magics/refs)

> Источник: `raw/2026/0312/directives-for.md`, `raw/2026/0312/directives-ref.md`, `raw/2026/0312/directives-id.md`, `raw/2026/0312/magics-refs.md`
