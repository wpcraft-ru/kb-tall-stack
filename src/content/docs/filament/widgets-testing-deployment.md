---
title: "Виджеты, тестирование и деплой"
description: "Дашборд-виджеты, тестирование компонентов Filament и деплой в production"
sidebar:
  order: 8
---

> Источник: `raw/2025/1202/widgets-overview.md`, `raw/2025/1202/testing-overview.md`, `raw/2025/1202/deployment.md`

## Виджеты

Виджеты отображаются на дашборде и могут встраиваться на страницы ресурсов.

### Stats Overview

```php
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Users', User::count())
                ->description('32% increase')
                ->descriptionIcon('heroicon-m-arrow-trending-up')
                ->color('success'),
            Stat::make('Revenue', '$' . number_format(Order::sum('total') / 100, 2))
                ->description('7% decrease')
                ->descriptionIcon('heroicon-m-arrow-trending-down')
                ->color('danger'),
            Stat::make('Average Order', '$' . number_format(Order::avg('total') / 100, 2)),
        ];
    }
}
```

### Chart Widgets

```php
use Filament\Widgets\ChartWidget;

class OrdersChart extends ChartWidget
{
    protected function getData(): array
    {
        return [
            'datasets' => [
                [
                    'label' => 'Orders',
                    'data' => Order::selectRaw('COUNT(*), DATE(created_at) as date')
                        ->groupBy('date')
                        ->pluck(0),
                ],
            ],
            'labels' => Order::selectRaw('DATE(created_at) as date')
                ->groupBy('date')
                ->pluck('date'),
        ];
    }

    protected function getType(): string
    {
        return 'line'; // line, bar, pie, doughnut
    }
}
```

### Регистрация виджета

```php
// В AdminPanelProvider
->widgets([
    Widgets\AccountWidget::class,
    Widgets\StatsOverview::class,
    Widgets\OrdersChart::class,
])
```

## Тестирование

Filament предоставляет вспомогательные методы для тестирования компонентов.

### Тестирование ресурсов

```php
use function Pest\Livewire\livewire;

it('renders posts list', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(PostResource::getUrl('index'))
        ->assertSuccessful()
        ->assertSee('Posts');
});

it('creates a post', function () {
    $user = User::factory()->create();

    livewire(CreatePost::class)
        ->fillForm(['title' => 'New Post'])
        ->call('create')
        ->assertHasNoFormErrors();

    $this->assertDatabaseHas('posts', ['title' => 'New Post']);
});
```

### Тестирование таблиц

```php
it('can filter posts by status', function () {
    $post = Post::factory()->published()->create();

    livewire(ListPosts::class)
        ->filterTable('status', 'published')
        ->assertTableHasRecords([$post]);
});
```

### Тестирование форм

```php
it('validates required fields', function () {
    livewire(CreatePost::class)
        ->fillForm(['title' => null])
        ->call('create')
        ->assertHasFormErrors(['title' => 'required']);
});
```

## Деплой

### Сборка ассетов

```bash
php artisan filament:assets
```

Компилирует CSS и JS компоненты Filament.

### Оптимизация

```bash
php artisan filament:optimize
```

Очищает и перегенерирует кеш, аналогично `php artisan optimize`.

### Кеширование иконок

Filament использует Heroicons (Blade-icons). Для production кешируйте иконки:

```bash
php artisan icons:cache
```

### Переменные окружения

Важные переменные для production:

```env
FILAMENT_FILESYSTEM_DISK=public
FILAMENT_EMAIL_VERIFICATION=true
```

## Связанные страницы

- [Что такое Filament и установка](./introduction-installation.md)
- [Панели и конфигурация](./panels-and-configuration.md)
- [Infolists, Actions и Notifications](./infolists-actions-notifications.md)
- [Тестирование через Pest](../../testing/pest-testing-guide.md)
- [Деплой Laravel](../../deployment/laravel-deployment-guide.md)
