---
title: "Eloquent: лучшие практики"
description: "Чистые модели, Custom Query Builders, предотвращение N+1, оптимизация запросов — как держать Eloquent под контролем"
sidebar:
  order: 3
---

> Источник: `raw/2025/1103/001-eloquent-models-done-right.md`, `raw/2025/1103/002-custom-query-builders-and-collections.md`, `raw/2025/1103/005-database-best-practices.md`

## Анатомия чистой модели

Модель фокусируется на трёх вещах: **определение данных**, **отношения**, **доступ к данным**. Всё остальное — в Actions, Services, Jobs, Policies, API Resources.

```php
#[Fillable(['user_id', 'shipping_address_id', 'subtotal', 'tax', 'discount', 'total', 'status', 'notes', 'placed_at'])]
class Order extends Model
{
    use HasFactory, SoftDeletes;

    protected function casts(): array
    {
        return [
            'status' => OrderStatus::class,
            'subtotal' => MoneyCast::class,
            'tax' => MoneyCast::class,
            'placed_at' => 'datetime',
        ];
    }

    public function user(): BelongsTo { /* ... */ }
    public function items(): HasMany { /* ... */ }
    public function payments(): HasMany { /* ... */ }

    protected function isPaid(): Attribute
    {
        return Attribute::make(
            get: fn (): bool => $this->status === OrderStatus::Paid,
        );
    }
}
```

Чего в этой модели **нет**: отправка email, генерация PDF, сложная бизнес-логика. Она определяет форму данных, отношения и несколько вычисляемых свойств.

### Порядок внутри модели

Структура — соглашение команды, ускоряющее чтение: attributes → traits → properties → casts → relationships → accessors → scopes.

## Предотвращение N+1

Самая распространённая проблема производительности в Laravel. Возникает, когда вы загружаете коллекцию моделей и обращаетесь к отношению на каждой:

```php
// N+1: 1 запрос на orders + N запросов на users
$orders = Order::all();
foreach ($orders as $order) {
    echo $order->user->name; // Каждая итерация → запрос
}
```

100 заказов = 101 запрос. Исправление — eager loading:

```php
// 2 запроса: 1 на orders + 1 на users
$orders = Order::with('user')->get();
```

### Принудительное предотвращение в разработке

```php
// app/Providers/AppServiceProvider.php
public function boot(): void
{
    Model::preventLazyLoading(! app()->isProduction());
}
```

Выбрасывает `LazyLoadingViolationException` при любом ленивом доступе к отношению. **Одна строка предотвращает больше проблем, чем любой code review.**

### Вложенный eager loading

```php
$orders = Order::with([
    'user',
    'items.product.category',
    'shippingAddress',
    'payments',
])->get();
```

Каждый уровень через точку — один дополнительный запрос. Пример выше — 5 запросов, независимо от количества заказов.

### Условный eager loading

```php
$orders = Order::query()
    ->with(['items.product'])
    ->when($request->has('include_user'), fn ($q) => $q->with('user'))
    ->get();
```

### Загрузка количества без самих моделей

```php
$users = User::withCount(['orders', 'reviews'])->get();
// $user->orders_count, $user->reviews_count — без дополнительных запросов
```

## Custom Query Builders

Скоупы не масштабируются. Модель с 30 скоупами делает две работы: данные и запросы. **Custom Query Builder** выносит всю логику запросов в отдельный класс:

```php
use Illuminate\Database\Eloquent\Builder;

class OrderBuilder extends Builder
{
    public function active(): self
    {
        return $this->where('is_active', true);
    }

    public function forStatus(OrderStatus $status): self
    {
        return $this->where('status', $status);
    }

    public function placedBetween(Carbon $from, Carbon $to): self
    {
        return $this->whereBetween('placed_at', [$from, $to]);
    }

    public function highValue(float $threshold = 100.00): self
    {
        return $this->where('total', '>=', $threshold);
    }

    public function search(string $term): self
    {
        return $this->where(function ($query) use ($term) {
            $query->where('order_number', 'like', "%{$term}%");
        });
    }

    public function withItemCount(): self
    {
        return $this->withCount('items');
    }
}
```

Привязка к модели через атрибут `#[UseEloquentBuilder]`:

```php
#[UseEloquentBuilder(OrderBuilder::class)]
class Order extends Model { /* ... */ }
```

Использование:

```php
Order::active()
    ->placedThisMonth()
    ->highValue()
    ->withItemCount()
    ->get();
```

### Когда Builder НЕ нужен

3-5 скоупов на модели — оставьте их. Проблема появляется на 20-30 скоупах. Не создавайте Builder ради двух методов.

## Индексирование

Правильные индексы делают запросы быстрыми. Неправильные (или отсутствующие) — медленными.

```php
// Миграция
$table->index('user_id');                    // Обычный индекс
$table->unique('email');                     // Уникальный
$table->index(['status', 'placed_at']);      // Составной (порядок важен!)
```

**Правило для составных индексов:** колонки с `=` в WHERE — первыми, колонки с `>` или `BETWEEN` — последними.

```php
// Запрос: WHERE status = 'shipped' AND placed_at > '2024-01-01'
Schema::table('orders', function (Blueprint $table) {
    $table->index(['status', 'placed_at']); // status первым (=), placed_at вторым (>)
});
```

## Связанные страницы

- [Чистая архитектура в Laravel](./clean-architecture.md)
- [DTO, Enums и типобезопасность](./dto-enums-type-safety.md)
- [Jobs, Queues и Pipelines](./jobs-queues-pipelines.md)
