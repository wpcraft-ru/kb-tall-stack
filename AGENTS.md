# AGENTS.md — Схема и правила для LLM-агентов

## Обзор проекта

`kb-tallstack` — база знаний по TALL-стеку (Tailwind CSS, Alpine.js, Laravel, Livewire) и его экосистеме. Построена на [Astro Starlight](https://starlight.astro.build/). Все wiki-страницы хранятся в `src/content/docs/` в формате Markdown/MDX.

## Структура проекта

```
kb-tallstack/
├── raw/                          # Неизменяемые исходники — READ ONLY
│   └── YYYY/                     # Год
│       └── MMDD/                 # Месяц + День
│           └── file.md           # Извлечённые статьи
├── src/content/docs/             # ★ WIKI-СТРАНИЦЫ
│   ├── laravel/                  # Ядро Laravel
│   ├── livewire/                 # Livewire
│   ├── tailwind/                 # Tailwind CSS
│   ├── alpine/                   # Alpine.js
│   ├── ecosystem/                # Экосистема (Pest, Inertia, Cashier, Sanctum, etc.)
│   ├── filament/                 # FilamentPHP
│   ├── deployment/               # Деплой и DevOps
│   ├── security/                 # Безопасность
│   ├── performance/              # Производительность
│   ├── testing/                  # Тестирование
│   ├── cheatsheet/               # Шпаргалки и сниппеты
│   ├── how-to/                   # Практические руководства
│   ├── faq/                      # FAQ и сравнения
│   ├── queries/                  # Ответы на вопросы пользователей
│   ├── index.md                  # Каталог всех страниц
│   └── log.md                    # Хронологический лог операций
├── public/                       # Статика (favicon, etc.)
├── AGENTS.md                     # Этот файл
├── astro.config.mjs              # Starlight-конфиг
├── package.json
└── README.md
```

## Правила для LLM-агентов

### 1. raw/ — READ ONLY
- Директория `raw/` содержит **неизменяемые** исходные статьи.
- **НИКОГДА** не редактируй, не перемещай, не удаляй файлы в `raw/`.
- Файлы в `raw/` можно только **читать**. Формат пути: `raw/YYYY/MMDD/file.md`.

### 2. Правила оформления wiki-страниц (src/content/docs/)
Каждая страница должна начинаться с frontmatter:

```yaml
---
title: "Заголовок страницы"
description: "Краткое описание (1-2 предложения)"
sidebar:
  order: 1
---
```

- `title` — заголовок страницы.
- `description` — краткое описание для SEO и навигации.
- `sidebar.order` — порядок в боковом меню (опционально).

### 3. Именование файлов
- Используй **kebab-case** для имён файлов: `eloquent-relationships.md`, `volt-api.md`.
- Для group-pages используй `index.md` внутри каталога: `laravel/index.md`.

### 4. Категории контента

| Каталог | Назначение |
|---|---|
| `laravel/` | Ядро фреймворка: Eloquent, Routing, Queues, Container, Facades, Artisan и т.д. |
| `livewire/` | Livewire: компоненты, Volt API, состояние, события, вложенные компоненты. |
| `tailwind/` | Tailwind CSS: утилитарные классы, кастомизация, плагины, тёмная тема, анимации. |
| `alpine/` | Alpine.js: директивы, store, магия ($wire, $watch), плагины, Framer Motion. |
| `ecosystem/` | Inertia.js, Pest, Laravel Forge/Environ, Cashier, Sanctum, Socialite и др. |
| `filament/` | FilamentPHP: админ-панели, формы, таблицы, виджеты, уведомления, кастомизация. |
| `deployment/` | Деплой: Forge, Envoyer, Docker, GitHub Actions, CI/CD, Octane, supervisor. |
| `security/` | Безопасность: XSS, CSRF, SQL-инъекции, auth, авторизация, политики. |
| `performance/` | Производительность: кеширование, оптимизация запросов, eager loading, очереди. |
| `testing/` | Тестирование: Pest, PHPUnit, Dusk, моки, фабрики, TDD-подходы. |
| `cheatsheet/` | Шпаргалки и сниппеты: быстрые референсы, код-сниппеты, команды artisan. |
| `how-to/` | Практические руководства: пошаговые инструкции для конкретных задач. |
| `faq/` | FAQ: частые вопросы, сравнения (например Livewire vs Inertia vs React). |
| `queries/` | Ответы на вопросы пользователей из чатов/тикетов. |

### 5. Процесс добавления контента

1. **Определи категорию** — в какой раздел попадает материал.
2. **Создай файл** в соответствующем каталоге с правильным именем.
3. **Напиши frontmatter** с title и description.
4. **Используй Starlight-компоненты** для aside, tabs, steps и т.д.
5. **Обнови `index.md`** — добавь ссылку на новую страницу в каталог.
6. **Запиши в `log.md`** — добавь запись о добавлении/изменении.

### 6. Формат записей в log.md

```markdown
## YYYY-MM-DD

### Добавлено
- `[laravel/eloquent-relationships](src/content/docs/laravel/eloquent-relationships.md)` — Отношения Eloquent: hasOne, hasMany, belongsTo, etc.

### Изменено
- `[tailwind/customization](src/content/docs/tailwind/customization.md)` — Обновлена секция про dark mode.

### Удалено
- `[old-file](src/content/docs/old-file.md)` — Устарело.
```

### 7. Использование Starlight-компонентов

```mdx
import { Aside, Tabs, TabItem, Steps, Card, CardGrid } from '@astrojs/starlight/components';

<Aside type="note">Заметка</Aside>
<Aside type="tip">Совет</Aside>
<Aside type="caution">Предупреждение</Aside>
<Aside type="danger">Опасно</Aside>

<Tabs>
  <TabItem label="Laravel 11">

  ```php
  // код для Laravel 11
  ```

  </TabItem>
  <TabItem label="Laravel 10">

  ```php
  // код для Laravel 10
  ```

  </TabItem>
</Tabs>
```

### 8. Интеграция с raw/-источниками

При создании wiki-страницы на основе материала из `raw/`, ставь ссылку на источник внизу:

```markdown
---
> Источник: `raw/2024/0501/laravel-queues.md`
```
