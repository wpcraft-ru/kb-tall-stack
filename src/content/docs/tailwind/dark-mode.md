---
title: "Тёмная тема"
description: "Dark mode в Tailwind CSS v4: prefers-color-scheme, ручное переключение, data-атрибуты и системная тема"
sidebar:
  order: 4
---

> Источник: `raw/2026/0207/dark-mode.md`

## По умолчанию: prefers-color-scheme

```html
<div class="bg-white dark:bg-gray-800">
  <h3 class="text-gray-900 dark:text-white">Writes upside-down</h3>
  <p class="text-gray-500 dark:text-gray-400">
    The Zero Gravity Pen can be used to write in any orientation.
  </p>
</div>
```

`dark:` применяет стили, когда ОС в тёмной теме.

## Ручное переключение через класс

Переопределяем `dark`-вариант на CSS-селектор:

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

Теперь `dark:*` работает при наличии класса `.dark` в дереве:

```html
<html class="dark">
  <body>
    <div class="bg-white dark:bg-black">...</div>
  </body>
</html>
```

### JavaScript-переключатель

```js
// Установка тёмной темы
localStorage.theme = 'dark'
document.documentElement.classList.add('dark')

// Установка светлой темы
localStorage.theme = 'light'
document.documentElement.classList.remove('dark')

// Системная тема
localStorage.removeItem('theme')
```

## Data-атрибут вместо класса

```css
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

```html
<html data-theme="dark">
```

## Системная тема с ручным переопределением

```js
document.documentElement.classList.toggle(
  'dark',
  localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
)
```

## Связанные страницы

- [Утилитарный подход и основы](./utility-first-fundamentals.md)
- [Кастомизация](./customization.md)
