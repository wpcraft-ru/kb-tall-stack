---
title: "Alpine.js"
description: "Alpine.js: директивы, состояние, события, магазины, плагины, интеграция с Livewire и Tailwind CSS"
sidebar:
  order: 4
---

Alpine.js — легковесный JavaScript-фреймворк для добавления реактивности прямо в HTML. Работает через атрибуты `x-*`, не требует сборки, идеально дополняет Laravel Livewire и Tailwind CSS.

## 📚 Навигация по разделу

### Основы

- [Установка и начало работы](./installation.md) — CDN, NPM, первый компонент, обновление с V2
- [Состояние и данные (x-data)](./state-and-data.md) — `x-data`, `Alpine.data()`, `x-init`
- [Шаблоны и события](./templating-and-events.md) — `x-text`, `x-show`, `x-if`, `@click`

### Данные и DOM

- [Привязки и модель](./binding.md) — `x-bind`, `x-model`, `x-modelable`
- [Циклы и ссылки на DOM](./loops-and-refs.md) — `x-for`, `x-ref`, `$refs`, `x-id`
- [Анимации и эффекты](./transitions.md) — `x-transition`, `x-teleport`, `x-effect`

### Продвинутые возможности

- [Magics (магические переменные)](./magics.md) — `$el`, `$refs`, `$store`, `$watch`, `$dispatch`
- [Глобальное состояние (Stores)](./stores.md) — `Alpine.store()`, `$store`, `Alpine.bind()`
- [Жизненный цикл и реактивность](./lifecycle.md) — хуки, `$watch`, `x-effect`, `Alpine.reactive()`

### Экосистема

- [Плагины](./plugins.md) — Mask, Intersect, Persist, Focus, Morph и другие
- [UI-компоненты](./components.md) — Dropdown, Modal, интеграции
- [Продвинутые темы](./advanced.md) — кастомные директивы, async, CSP
