---
title: "Кастомизация"
description: "Настройка Tailwind CSS v4: @theme, цвета, шрифты, breakpoints, @utility и @custom-variant"
sidebar:
  order: 5
---

> Источник: `raw/2026/0207/functions-and-directives.md`, `raw/2026/0207/theme.md`, `raw/2026/0207/adding-custom-styles.md`

## @theme — дизайн-токены

Вместо `tailwind.config.js` (v3) — CSS-переменные в `@theme`:

```css
@import "tailwindcss";
@theme {
  --font-display: "Satoshi", sans-serif;
  --color-avocado-500: oklch(0.84 0.18 117.33);
  --breakpoint-3xl: 120rem;
  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);
}
```

Использование:

```html
<h1 class="font-display text-avocado-500 3xl:text-2xl">Hello</h1>
```

## Цвета

Определение custom-палитры:

```css
@theme {
  --color-avocado-100: oklch(0.99 0 0);
  --color-avocado-500: oklch(0.84 0.18 117.33);
  --color-avocado-600: oklch(0.53 0.12 118.34);
}
```

Все стандартные утилиты работают: `bg-avocado-500`, `text-avocado-600`, `border-avocado-100`.

## Произвольные значения

Для разовых значений — квадратные скобки:

```html
<button class="bg-[#316ff6]">Facebook</button>
<div class="grid grid-cols-[24rem_2.5rem_minmax(0,1fr)]">
<div class="max-h-[calc(100dvh-(--spacing(6)))]">
```

CSS-переменные:

```html
<div class="[--gutter-width:1rem] lg:[--gutter-width:2rem]">
```

## @utility — кастомные утилиты

```css
@utility tab-4 {
  tab-size: 4;
}
```

Работает со всеми variants: `hover:tab-4`, `md:tab-8`.

## @custom-variant — кастомные варианты

```css
@custom-variant theme-midnight (&:where([data-theme="midnight"] *));
```

Использование:

```html
<div class="theme-midnight:bg-black theme-midnight:text-white">
```

## @apply — встраивание утилит в CSS

```css
.select2-dropdown {
  @apply rounded-b-lg shadow-md;
}
.select2-results__group {
  @apply text-lg font-bold text-gray-900;
}
```

## @source — указание исходных файлов

```css
@source "../node_modules/@my-company/ui-lib";
```

Для файлов, которые Tailwind не находит автоматически.

## --spacing() и --alpha()

```css
.my-element {
  margin: --spacing(4);        /* calc(var(--spacing) * 4) */
  color: --alpha(var(--color-lime-300) / 50%);
}
```

В HTML:

```html
<div class="py-[calc(--spacing(4)-1px)]">...</div>
```

## Связанные страницы

- [Утилитарный подход и основы](./utility-first-fundamentals.md)
- [Адаптивный дизайн](./responsive-design.md)
- [Тёмная тема](./dark-mode.md)
