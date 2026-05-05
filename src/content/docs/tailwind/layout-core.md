---
title: "Layout: Flexbox, Grid и позиционирование"
description: "Управление раскладкой в Tailwind CSS v4: Display, Flexbox, Grid, Position, Spacing, Width/Height"
sidebar:
  order: 6
---

> Источник: `raw/2026/0207/display.md`, `raw/2026/0207/flex.md`, `raw/2026/0207/grid-template-columns.md`, `raw/2026/0207/position.md`, `raw/2026/0207/padding.md`, `raw/2026/0207/margin.md`

## Display

```html
<div class="flex">...</div>
<div class="grid">...</div>
<div class="hidden">...</div>
<div class="inline-block">...</div>
<div class="contents">...</div>
```

## Flexbox

### Контейнер

```html
<div class="flex items-center justify-between gap-4">
```

| Класс | Свойство |
|---|---|
| `flex-row` / `flex-col` | Направление |
| `flex-wrap` / `flex-nowrap` | Перенос |
| `items-center` / `items-start` | align-items |
| `justify-between` / `justify-center` | justify-content |
| `gap-4` / `gap-x-2` | Промежутки |

### Дочерние элементы

```html
<div class="flex-1">Растянуть</div>
<div class="flex-none">Не сжимать</div>
<div class="grow">Заполнить</div>
<div class="shrink-0">Не сжиматься</div>
```

## Grid

### Базовая сетка

```html
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

### Продвинутые сетки

```html
<div class="grid grid-cols-[200px_minmax(900px,1fr)_100px]">
<div class="grid grid-rows-4 grid-flow-col">
<div class="col-span-2 row-span-2">
```

| Класс | Свойство |
|---|---|
| `grid-cols-3` | 3 колонки |
| `grid-rows-2` | 2 ряда |
| `col-span-2` | Растянуть на 2 колонки |
| `row-span-3` | Растянуть на 3 ряда |
| `auto-rows-min` | Высота по содержимому |

## Position

```html
<div class="relative">
  <div class="absolute top-0 right-0">...</div>
  <div class="fixed bottom-4 right-4">...</div>
  <div class="sticky top-0">...</div>
</div>
```

## Spacing (margin/padding)

```html
<div class="m-4">Margin: 1rem</div>
<div class="mx-auto">Центрирование</div>
<div class="mt-2 mb-4">Сверху/снизу</div>
<div class="p-6">Padding: 1.5rem</div>
<div class="px-4 py-2">X/Y раздельно</div>
```

Шкала: `0` → `0.5` → `1` → ... → `96` (0 → 24rem).

## Width / Height

```html
<div class="w-64">Ширина 16rem</div>
<div class="w-full">100%</div>
<div class="w-screen">100vw</div>
<div class="max-w-md">Максимальная ширина</div>
<div class="min-h-screen">Минимальная высота: экран</div>
<div class="size-16">Ширина и высота</div>
```

## Связанные страницы

- [Утилитарный подход и основы](./utility-first-fundamentals.md)
- [Адаптивный дизайн](./responsive-design.md)
- [Типографика и фоны](./typography-backgrounds.md)
