---
title: "Установка и начало работы"
description: "Способы подключения Alpine.js: CDN, NPM, сборка. Быстрый старт, первый компонент и обновление с V2 на V3."
sidebar:
  order: 1
---

## Способы подключения

Alpine.js можно подключить **двумя способами**: через CDN (без сборки) или как NPM-модуль (со сборочным инструментом).

### CDN (рекомендуется для начала)

Добавьте один тег `<script>` в `<head>`:

```html
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3/dist/cdn.min.js"></script>
```

Атрибут `defer` гарантирует, что Alpine загрузится после HTML, но до события `DOMContentLoaded`. Никакой сборки не требуется — просто добавьте скрипт и начинайте использовать директивы в HTML.

### NPM (для проектов со сборкой)

```bash
npm install alpinejs
```

Затем импортируйте и запустите:

```js
import Alpine from 'alpinejs'

// Регистрируйте плагины, компоненты, store до start()
Alpine.plugin(/*...*/)
Alpine.data('dropdown', () => ({ /*...*/ }))

Alpine.start()
```

> **Важно:** `Alpine.start()` обязателен при использовании NPM. Без него Alpine не инициализирует страницу.

## Быстрый старт

Создайте HTML-файл и проверьте, что Alpine работает:

```html
<html>
<head>
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3/dist/cdn.min.js"></script>
</head>
<body>
    <h1 x-data="{ message: 'I ❤️ Alpine' }" x-text="message"></h1>
</body>
</html>
```

Если на странице отобразилось «I ❤️ Alpine» — всё готово.

### Первый компонент: счётчик

```html
<div x-data="{ count: 0 }">
    <button @click="count++">Increment</button>
    <span x-text="count"></span>
</div>
```

Три элемента Alpine в этом примере:
1. **`x-data`** — объявляет реактивное состояние `{ count: 0 }`
2. **`@click`** (сокращение `x-on:click`) — реагирует на клик, вызывает `count++`
3. **`x-text`** — связывает текстовое содержимое с JavaScript-выражением

## Обновление с Alpine V2 на V3

Основные критические изменения при переходе на V3:

| Изменение | V2 | V3 |
|-----------|----|----|
| `$el` — текущий элемент | Корень компонента | Элемент, на котором выполняется выражение |
| `$root` | Не было | Всегда корень компонента |
| `x-spread` | Отдельная директива | Заменено на `x-bind` |
| `x-show.transition` | Модификатор `x-show` | Отдельная директива `x-transition` |
| `init()` на x-data | Нужно вызывать вручную | Вызывается автоматически |
| `Alpine.start()` | Не требовался для CDN | Обязателен при NPM-импорте |
| `x-if` + `x-transition` | Работало | Не поддерживается |
| IE11 | Поддерживался | Не поддерживается |

> **Livewire + Alpine V3:** если вы используете Laravel Livewire, для Alpine V3 требуется Livewire v2.5.1 или выше.

## Материалы и источники

- [Alpine.js Installation](https://alpinejs.dev/essentials/installation)
- [Alpine.js Start Here](https://alpinejs.dev/start-here)
- [Alpine.js Upgrade Guide](https://alpinejs.dev/upgrade-guide)

> Источник: `raw/2026/0312/essentials-installation.md`, `raw/2026/0312/start-here.md`, `raw/2026/0312/upgrade-guide.md`
