---
title: "Лог операций"
description: "Хронологический лог всех операций с базой знаний"
sidebar:
  order: 99
---

# 📝 Лог операций

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
