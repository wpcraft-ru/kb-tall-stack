---
title: "Что такое Filament и установка"
description: "Обзор FilamentPHP 5.x, системные требования, установка Panel Builder и Blade-компонентов"
sidebar:
  order: 1
---

> Источник: `raw/2025/1202/introduction-overview.md`, `raw/2025/1202/introduction-installation.md`

## Что такое Filament

Filament — фреймворк для быстрой разработки админ-панелей на Laravel. Построен на **Livewire**, использует **Tailwind CSS** и глубоко интегрирован с Eloquent.

Filament предоставляет:
- **Panel Builder** — полноценные админ-панели с аутентификацией, навигацией, дашбордами
- **Form Builder** — декларативное создание форм с 20+ типами полей
- **Table Builder** — таблицы с сортировкой, поиском, фильтрацией, actions
- **Infolists** — read-only отображение данных
- **Actions** — кнопки и модальные окна
- **Notifications** — flash-уведомления и database-уведомления
- **Widgets** — дашборд-виджеты (статистика, графики)

## Системные требования

- PHP 8.2+
- Laravel 11.28+
- Tailwind CSS v4.1+

## Варианты установки

### Panel Builder

Создание полноценной админ-панели:

```bash
composer require filament/filament:"^5.0"
php artisan filament:install --panels
```

После установки появляется файл `app/Providers/Filament/AdminPanelProvider.php` — конфигурация панели по умолчанию. Панель доступна по адресу `/admin`.

Дополнительные опции при установке:
- `--panels` — установка Panel Builder
- `--forms` — только Form Builder
- `--tables` — только Table Builder
- `--notifications` — только система уведомлений
- `--widgets` — дашборд-виджеты

### Использование компонентов в Blade

Для использования Filament-компонентов вне панели (в любом Blade-шаблоне):

```bash
composer require filament/filament:"^5.0"
php artisan filament:install
```

Компоненты доступны через Blade-директивы:

```blade
<x-filament::button>Click me</x-filament::button>
<x-filament::modal>Modal content</x-filament::modal>
```

### Пользователи и аутентификация

При первом входе на `/admin` нужно создать пользователя:

```bash
php artisan make:filament-user
```

Команда запрашивает имя, email и пароль. Пользователь получает доступ к панели.

## Структура после установки

```
app/
├── Filament/
│   ├── Pages/           # Кастомные страницы панели
│   ├── Resources/       # CRUD-ресурсы
│   └── Widgets/         # Дашборд-виджеты
└── Providers/
    └── Filament/
        └── AdminPanelProvider.php  # Конфигурация панели
```

## Связанные страницы

- [Быстрый старт в Filament](./getting-started.md)
- [Панели и конфигурация](./panels-and-configuration.md)
- [Resources: CRUD-интерфейсы](./resources-crud.md)
