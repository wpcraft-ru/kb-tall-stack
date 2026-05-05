---
title: "Плагины Alpine.js"
description: "Обзор 9 официальных плагинов Alpine.js: Mask, Intersect, Resize, Persist, Focus, Collapse, Anchor, Morph, Sort — установка, использование и примеры."
sidebar:
  order: 10
---

## Обзор плагинов

Alpine.js поставляет 9 официальных плагинов. Каждый подключается через CDN или импорт.

| Плагин | Назначение |
|--------|-----------|
| **Mask** | Маска ввода (телефон, дата, карта) |
| **Intersect** | Отслеживание попадания в viewport |
| **Resize** | Реакция на изменение размера элемента |
| **Persist** | Сохранение состояния в localStorage |
| **Focus** | Управление фокусом (`autofocus`, «ловушка фокуса») |
| **Collapse** | Анимация сворачивания/разворачивания |
| **Anchor** | Позиционирование плавающих элементов |
| **Morph** | Морфинг DOM между состояниями |
| **Sort** | Drag-and-drop сортировка |

## Подключение

### CDN (все плагины разом)

```html
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/mask@3/dist/cdn.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3/dist/cdn.min.js"></script>
```

> Важно: скрипты плагинов должны быть **до** основного скрипта Alpine.

### NPM

```bash
npm install @alpinejs/mask
```

```js
import Alpine from 'alpinejs'
import mask from '@alpinejs/mask'

Alpine.plugin(mask)
Alpine.start()
```

## Mask — маска ввода

Форматирует текстовый ввод по мере набора:

```html
<input x-data x-mask="99/99/9999" placeholder="DD/MM/YYYY">
```

### Встроенные маски

```html
<input x-mask="9999-9999-9999-9999">        <!-- Кредитная карта -->
<input x-mask="+7 (999) 999-99-99">          <!-- Телефон -->
<input x-mask="99/99/9999">                   <!-- Дата -->
```

### Динамические маски

```html
<input x-mask:dynamic="$input.startsWith('+') ? '+7 (999) 999-99-99' : '99/99/9999'">
```

### Денежный ввод

```html
<input x-mask:dynamic="$money($input, ',')">
```

## Intersect — отслеживание viewport

Срабатывает, когда элемент попадает в видимую область:

```html
<div x-data="{ visible: false }">
    <div x-intersect="visible = true"></div>
    <span x-show="visible">Элемент в зоне видимости!</span>
</div>
```

### Модификаторы

```html
<div x-intersect:enter="shown = true">        <!-- Только при появлении -->
<div x-intersect:leave="active = false">      <!-- Только при уходе -->
<div x-intersect.half="inView = true">        <!-- 50% элемента видно -->
<div x-intersect.full="fullyVisible = true">  <!-- 100% элемента видно -->
<div x-intersect.threshold.20="...">          <!-- Свой порог (20%) -->
```

### Lazy loading изображений

```html
<img x-data="{ src: '' }" 
     x-intersect="src = $el.dataset.src" 
     :src="src" 
     data-src="/real-image.jpg">
```

## Resize — отслеживание размера

Реагирует на изменение размеров элемента:

```html
<div x-data="{ width: 0, height: 0 }" 
     x-resize="width = $width; height = $height">
    Ширина: <span x-text="width"></span>
    Высота: <span x-text="height"></span>
</div>
```

## Persist — сохранение в localStorage

Сохраняет состояние `x-data` между перезагрузками:

```html
<div x-data="{ filters: { search: '', status: 'all' } }" 
     x-persist="filters">
    <input x-model="filters.search">
    <select x-model="filters.status">...</select>
</div>
```

После обновления страницы значения полей восстановятся.

## Focus — управление фокусом

```html
<!-- Автофокус при показе -->
<input x-show="open" x-focus>

<!-- Ловушка фокуса (Tab внутри модалки) -->
<div x-trap="open" @keydown.escape="open = false">
    <input type="text">
    <button @click="open = false">Закрыть</button>
</div>
```

- `x-focus` — фокус на элементе
- `x-trap="open"` — удерживает фокус внутри элемента (для модальных окон)

## Collapse — анимация сворачивания

Плавное сворачивание/разворачивание с анимацией высоты:

```html
<div x-data="{ expanded: false }">
    <button @click="expanded = !expanded">Toggle</button>
    <div x-show="expanded" x-collapse>
        Много текста внутри...
    </div>
</div>
```

## Anchor — позиционирование

Привязывает плавающий элемент к другому элементу:

```html
<div x-data>
    <button x-ref="trigger" @click="open = !open">Меню</button>
    
    <div x-show="open" x-anchor="$refs.trigger">
        <!-- Привязано к button -->
        Выпадающее меню
    </div>
</div>
```

## Morph — морфинг DOM

Плавно трансформирует один DOM в другой:

```html
<div x-data="{ items: ['A', 'B', 'C'] }">
    <button @click="items = ['C', 'A', 'B']">Перемешать</button>
    
    <template x-for="item in items" :key="item">
        <div x-text="item" x-morph></div>
    </template>
</div>
```

Использует технику «морфинга» для анимированного перехода между состояниями DOM.

## Sort — drag-and-drop сортировка

Добавляет перетаскивание для сортировки:

```html
<div x-data="{ items: ['A', 'B', 'C', 'D'] }" 
     x-sort="items">
    <template x-for="item in items" :key="item">
        <div x-text="item" 
             class="cursor-grab p-2 border"
             x-sort:item></div>
    </template>
</div>
```

- `x-sort="массив"` — на контейнере
- `x-sort:item` — на каждом перетаскиваемом элементе

## Материалы и источники

- [Alpine Mask Plugin](https://alpinejs.dev/plugins/mask)
- [Alpine Intersect Plugin](https://alpinejs.dev/plugins/intersect)
- [Alpine Resize Plugin](https://alpinejs.dev/plugins/resize)
- [Alpine Persist Plugin](https://alpinejs.dev/plugins/persist)
- [Alpine Focus Plugin](https://alpinejs.dev/plugins/focus)
- [Alpine Collapse Plugin](https://alpinejs.dev/plugins/collapse)
- [Alpine Anchor Plugin](https://alpinejs.dev/plugins/anchor)
- [Alpine Morph Plugin](https://alpinejs.dev/plugins/morph)
- [Alpine Sort Plugin](https://alpinejs.dev/plugins/sort)

> Источник: `raw/2026/0312/plugins-*.md`
