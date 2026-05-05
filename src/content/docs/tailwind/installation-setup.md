---
title: "Установка и настройка"
description: "Установка Tailwind CSS v4 через Vite, PostCSS, CLI и Play CDN для разных фреймворков"
sidebar:
  order: 1
---

> Источник: `raw/2026/0207/installation.md`, `raw/2026/0207/installation-using-vite.md`

## Через Vite (рекомендуется)

Самый плавный способ интеграции с Laravel, SvelteKit, React Router, Nuxt, SolidJS.

```bash
npm install tailwindcss @tailwindcss/vite
```

Добавить плагин в `vite.config.js`:

```js
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```

Импортировать Tailwind в CSS:

```css
@import "tailwindcss";
```

В HTML:

```html
<link href="/src/style.css" rel="stylesheet">
<h1 class="text-3xl font-bold underline">Hello world!</h1>
```

## Через PostCSS

```bash
npm install tailwindcss @tailwindcss/postcss
```

`postcss.config.mjs`:

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

## Tailwind CLI

```bash
npm install tailwindcss @tailwindcss/cli
npx tailwindcss -i input.css -o output.css --watch
```

## Play CDN

Для прототипов и демо — без установки:

```html
<head>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
```

Не для продакшена — большой размер и нет tree-shaking.

## Связанные страницы

- [Утилитарный подход и основы](./utility-first-fundamentals.md)
- [Адаптивный дизайн](./responsive-design.md)
- [Кастомизация](./customization.md)
