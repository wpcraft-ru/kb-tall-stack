---
title: "Панели и конфигурация"
description: "Мульти-панельная архитектура Filament, создание панелей, конфигурация путей, доменов, рендер-хуков"
sidebar:
  order: 3
---

> Источник: `raw/2025/1202/panel-configuration.md`, `raw/2025/1202/introduction-installation.md`

## Что такое Panel

**Panel** — изолированное пространство со своим набором ресурсов, страниц, виджетов, настроек аутентификации и брендинга. Одно Laravel-приложение может содержать несколько панелей.

Типичный сценарий — `/admin` для администраторов и `/app` для пользователей. У каждой свои ресурсы, своя навигация и логика доступа.

## Конфигурация по умолчанию

После установки создаётся `app/Providers/Filament/AdminPanelProvider.php`:

```php
use Filament\Panel;

public function panel(Panel $panel): Panel
{
    return $panel
        ->default()
        ->id('admin')
        ->path('admin')
        ->login()
        ->colors(['primary' => Color::Amber])
        ->discoverResources(in: app_path('Filament/Resources'), for: 'App\\Filament\\Resources')
        ->discoverPages(in: app_path('Filament/Pages'), for: 'App\\Filament\\Pages')
        ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\\Filament\\Widgets')
        ->middleware(['web'])
        ->authMiddleware(['authenticate']);
}
```

Здесь же добавляются плагины: `->plugin(TopNavigation::class)`.

## Создание новой панели

```bash
php artisan make:filament-panel app
```

Создаёт `app/Providers/Filament/AppPanelProvider.php`. Панель доступна по `/app`.

Важно: провайдер нужно зарегистрировать в `bootstrap/providers.php` (Laravel 11+). Filament делает это автоматически, но если панель недоступна — проверьте регистрацию.

## Настройки панели

### Путь

```php
->path('admin')    // /admin
->path('app')      // /app
->path('')         // Корень сайта (осторожно — конфликтует с web.php)
```

### Домен

```php
->domain('admin.example.com')
```

Привязка панели к конкретному домену, аналогично `Route::domain()`.

### Брендинг

```php
->brandName('My App')
->brandLogo(asset('images/logo.svg'))
->brandLogoHeight('3rem')
->favicon(asset('images/favicon.ico'))
->darkModeBrandLogo(asset('images/logo-dark.svg'))
```

### Цветовая схема

```php
->colors([
    'primary' => Color::Blue,
    'secondary' => Color::Gray,
    'gray' => Color::Slate,
    'success' => Color::Green,
    'warning' => Color::Amber,
    'danger' => Color::Red,
    'info' => Color::Cyan,
])
```

### Тёмная тема

```php
->darkMode(false)           // Отключить
->darkMode(true, 'class')   // CSS-класс
->darkMode(true, 'media')   // Системные настройки
```

### Рендер-хуки

Вставка произвольного Blade-контента в ключевые точки интерфейса:

```php
use Filament\View\PanelsRenderHook;

->renderHook(
    PanelsRenderHook::BODY_START,
    fn (): string => Blade::render('@livewire(\'my-component\')'),
)
```

Доступные хуки: `HEAD_START`, `HEAD_END`, `BODY_START`, `BODY_END`, `CONTENT_START`, `CONTENT_END`, `SIDEBAR_NAV_START`, `SIDEBAR_NAV_END` и другие.

## Плагины

Подключение плагинов панели:

```php
->plugins([
    \Filament\Actions\ActionPlugin::make(),
    \Hasnayeen\Themes\ThemesPlugin::make(),
])
```

## Связанные страницы

- [Что такое Filament и установка](./introduction-installation.md)
- [Быстрый старт в Filament](./getting-started.md)
- [Resources: CRUD-интерфейсы](./resources-crud.md)
