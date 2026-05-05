---
title: "Лог операций"
description: "Хронологический лог всех операций с базой знаний"
sidebar:
  order: 99
---

# 📝 Лог операций

## 2026-05-05 — ingest | Alpine.js Documentation (53 страницы)

### Добавлено
- `[alpine/installation](src/content/docs/alpine/installation.md)` — Способы подключения: CDN, NPM. Быстрый старт. Обновление с V2 на V3.
- `[alpine/state-and-data](src/content/docs/alpine/state-and-data.md)` — x-data, вложенные данные, Alpine.data() для переиспользования, x-init.
- `[alpine/templating-and-events](src/content/docs/alpine/templating-and-events.md)` — x-text, x-html, x-show, x-if, x-on (@) — события, модификаторы, кастомные события.
- `[alpine/binding](src/content/docs/alpine/binding.md)` — x-bind, x-model, x-modelable, Alpine.bind().
- `[alpine/loops-and-refs](src/content/docs/alpine/loops-and-refs.md)` — x-for, ключи, x-ref, $refs, x-id.
- `[alpine/transitions](src/content/docs/alpine/transitions.md)` — x-transition, x-teleport, x-cloak, x-ignore, x-effect.
- `[alpine/magics](src/content/docs/alpine/magics.md)` — Полный справочник magics: $el, $refs, $store, $watch, $dispatch, $nextTick, $root, $data, $id.
- `[alpine/stores](src/content/docs/alpine/stores.md)` — Глобальное состояние: Alpine.store(), $store, Alpine.bind().
- `[alpine/lifecycle](src/content/docs/alpine/lifecycle.md)` — Хуки: x-init, $watch, x-effect, alpine:init. Реактивность: Alpine.reactive(), Alpine.effect().
- `[alpine/plugins](src/content/docs/alpine/plugins.md)` — 9 официальных плагинов: Mask, Intersect, Resize, Persist, Focus, Collapse, Anchor, Morph, Sort.
- `[alpine/components](src/content/docs/alpine/components.md)` — UI-компоненты: Dropdown, Modal, интеграции со сторонними библиотеками.
- `[alpine/advanced](src/content/docs/alpine/advanced.md)` — Расширение: кастомные директивы/magics. Async/await. CSP-режим.
- `[alpine/index](src/content/docs/alpine/index.md)` — Обновлён: навигационный хаб по всему разделу.
- Обновлён `index.md` — добавлены 12 страниц Alpine.js в каталог.

### Источник
`raw/2026/0312/` — 53 страницы официальной документации Alpine.js (alpinejs.dev), скачаны через `summarize`.

## 2026-05-05 — ingest | FilamentPHP 5.x Docs

### Добавлено
- `[filament/introduction-installation](src/content/docs/filament/introduction-installation.md)` — Что такое Filament, требования, установка
- `[filament/getting-started](src/content/docs/filament/getting-started.md)` — Быстрый старт: первый Resource, навигация, дашборд
- `[filament/panels-and-configuration](src/content/docs/filament/panels-and-configuration.md)` — Панели, мульти-панели, конфигурация, брендинг, рендер-хуки
- `[filament/resources-crud](src/content/docs/filament/resources-crud.md)` — Resources: создание, CRUD, отношения, авторизация, глобальный поиск
- `[filament/forms-and-fields](src/content/docs/filament/forms-and-fields.md)` — Form Builder: типы полей, валидация, Repeater, Builder, кастомные поля
- `[filament/tables-and-filters](src/content/docs/filament/tables-and-filters.md)` — Table Builder: колонки, фильтры, actions, группировка, summaries
- `[filament/infolists-actions-notifications](src/content/docs/filament/infolists-actions-notifications.md)` — Infolists, Actions, Database/Broadcast Notifications
- `[filament/widgets-testing-deployment](src/content/docs/filament/widgets-testing-deployment.md)` — Виджеты, тестирование, деплой
- 161 страница документации скачана в `raw/2025/1202/`
- Обновлён `index.md`

### Источник
`raw/2025/1202/` — документация FilamentPHP 5.x с [filamentphp.com/docs](https://filamentphp.com/docs/5.x)

## 2026-05-04

### Создано
- Инициализация структуры проекта KB TALLstack
- Созданы все директории разделов wiki
- Добавлен `AGENTS.md` с правилами для LLM-агентов
- Настроен `astro.config.mjs` (Starlight)
- Создан `package.json`

### Добавлено
- `[filament/index](src/content/docs/filament/index.md)` — Раздел FilamentPHP: админ-панели, формы, таблицы, виджеты, уведомления, кастомизация.
- Раздел FilamentPHP добавлен в `astro.config.mjs`, `index.md`, `AGENTS.md`.

## 2026-05-04 — ingest | Clean Code in Laravel (Ahmad Mayahi)

### Добавлено
- `[laravel/clean-architecture](src/content/docs/laravel/clean-architecture.md)` — Thin Controllers, Action Pattern, DI, View Models, Services vs Actions
- `[laravel/dto-enums-type-safety](src/content/docs/laravel/dto-enums-type-safety.md)` — DTO, spatie/laravel-data, Backed Enums, Value Objects, State Pattern
- `[laravel/eloquent-best-practices](src/content/docs/laravel/eloquent-best-practices.md)` — Чистые модели, Custom Query Builders, N+1 prevention, индексы
- `[laravel/jobs-queues-pipelines](src/content/docs/laravel/jobs-queues-pipelines.md)` — Jobs, Chaining, Batching, Workers, Pipeline Pattern
- `[laravel/apis-webhooks](src/content/docs/laravel/apis-webhooks.md)` — API Resources, пагинация, приём и отправка Webhooks
- `[laravel/validation-authorization](src/content/docs/laravel/validation-authorization.md)` — Form Requests, Gates, Policies, spatie/laravel-permission
- `[laravel/naming-conventions](src/content/docs/laravel/naming-conventions.md)` — Полный гид по naming: модели, контроллеры, методы, Jobs, Events
- `[testing/pest-testing-guide](src/content/docs/testing/pest-testing-guide.md)` — Pest: синтаксис, expect API, Feature vs Unit, тесты для Actions/Jobs/API
- `[ecosystem/spatie-packages](src/content/docs/ecosystem/spatie-packages.md)` — Обзор ключевых Spatie-пакетов и философия выбора зависимостей
- `[deployment/laravel-deployment-guide](src/content/docs/deployment/laravel-deployment-guide.md)` — Полная последовательность деплоя: 7 шагов, инструменты
- `[performance/rate-limiting](src/content/docs/performance/rate-limiting.md)` — HTTP Rate Limiting и Rate Limiting для Jobs через Spatie
- Обновлён `index.md` — добавлены все новые страницы в каталог

### Источник
`raw/2025/1103/` — 28 глав книги Ahmad Mayahi «Clean Code in Laravel» (Laravel 13, PHP 8.5)
