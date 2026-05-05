---
title: "DTO, Enums и типобезопасность"
description: "Data Transfer Objects, Backed Enums, Value Objects и State Pattern — инструменты типобезопасного Laravel"
sidebar:
  order: 2
---

> Источник: `raw/2025/1103/003-data-transfer-objects.md`, `raw/2025/1103/003-enums-value-objects-and-type-safety.md`, `raw/2025/1103/004-the-state-pattern.md`

## Почему типобезопасность важна

Строки — самый опасный тип данных в программировании:

```php
$order->update(['status' => 'pending']);
$order->update(['status' => 'pneding']);  // Опечатка — нет ошибки, нет предупреждения
$order->update(['status' => 'banana']);   // Нонсенс — тоже нет ошибки

if ($order->status === 'shiped') {        // Опечатка в сравнении — всегда false
    // Этот код никогда не выполнится, а вы час дебажите
}
```

**Сдвиг с типобезопасностью:** баги переезжают из рантайма (продакшен, клиенты, 3 часа ночи) в момент разработки (красные подчёркивания в IDE).

## Data Transfer Objects (DTO)

Массивы гибкие и простые — и это источник бесчисленных багов. Вы передаёте `$orderData` в метод и понятия не имеете, какие там ключи и какого они типа.

### Простой PHP DTO

```php
readonly class PlaceOrderData
{
    public function __construct(
        public int $userId,
        public int $shippingAddressId,
        public Collection $items,
        public ?string $couponCode = null,
    ) {}
}
```

Теперь сигнатура Action говорит сама за себя:

```php
public function execute(PlaceOrderData $data): Order
{
    // $data->userId гарантированно int
    // $data->items гарантированно Collection
    // $data->couponCode — string или null
}
```

`readonly` (PHP 8.2+) гарантирует, что после создания DTO его свойства не изменятся.

### Spatie Laravel Data

Пакет [`spatie/laravel-data`](https://spatie.be/docs/laravel-data) добавляет валидацию, трансформацию и сериализацию прямо в DTO:

```bash
composer require spatie/laravel-data
```

```php
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Attributes\Validation\Required;
use Spatie\LaravelData\Attributes\Validation\Exists;

class PlaceOrderData extends Data
{
    public function __construct(
        #[Required, Exists('users', 'id')]
        public int $userId,
        #[Required, Exists('addresses', 'id')]
        public int $shippingAddressId,
        /** @var Collection<int, OrderItemData> */
        public Collection $items,
        public ?string $couponCode = null,
    ) {}
}
```

## Backed Enums (PHP 8.1+)

Типобезопасная замена строковым и числовым константам:

```php
enum OrderStatus: string
{
    case Pending = 'pending';
    case Processing = 'processing';
    case Shipped = 'shipped';
    case Delivered = 'delivered';
    case Cancelled = 'cancelled';

    public function label(): string
    {
        return match ($this) {
            self::Pending => 'Ожидает',
            self::Processing => 'В обработке',
            self::Shipped => 'Отправлен',
            self::Delivered => 'Доставлен',
            self::Cancelled => 'Отменён',
        };
    }

    public function color(): string
    {
        return match ($this) {
            self::Pending => 'yellow',
            self::Processing => 'blue',
            self::Shipped => 'indigo',
            self::Delivered => 'green',
            self::Cancelled => 'red',
        };
    }
}
```

Каст в модели:

```php
class Order extends Model
{
    protected function casts(): array
    {
        return [
            'status' => OrderStatus::class,
        ];
    }
}
```

Теперь `$order->status` возвращает `OrderStatus::Pending`, а не строку `'pending'`.

## Value Objects

Value Object — иммутабельный объект, представляющий доменное значение. В отличие от примитива, он сам проверяет свою валидность:

```php
readonly class Money
{
    public function __construct(
        public int $amountInCents,
        public string $currency = 'USD',
    ) {
        if ($this->amountInCents < 0) {
            throw new InvalidArgumentException('Amount cannot be negative');
        }
    }

    public function add(self $other): self
    {
        if ($this->currency !== $other->currency) {
            throw new InvalidArgumentException('Currencies must match');
        }
        return new self($this->amountInCents + $other->amountInCents, $this->currency);
    }
}
```

## State Pattern

Три уровня зрелости управления состоянием:

### Уровень 1: строки
```php
$table->string('status')->default('pending');
if ($order->status === 'pending') { /* ... */ }
```
Проблемы: нет типобезопасности, нет правил переходов.

### Уровень 2: Backed Enums
```php
enum OrderStatus: string { /* ... */ }
```
Решает типобезопасность, но не правила переходов.

### Уровень 3: State Pattern

Каждое состояние — отдельный класс, инкапсулирующий допустимые переходы и поведение:

```php
abstract class OrderState
{
    abstract public function label(): string;
    abstract public function allowedTransitions(): array;

    public function canTransitionTo(self $newState): bool
    {
        return in_array($newState::class, $this->allowedTransitions());
    }
}

class PendingState extends OrderState
{
    public function label(): string { return 'Ожидает'; }

    public function allowedTransitions(): array
    {
        return [PaidState::class, CancelledState::class];
    }
}

class ShippedState extends OrderState
{
    public function label(): string { return 'Отправлен'; }

    public function allowedTransitions(): array
    {
        return [DeliveredState::class];
    }
}
```

Переход `Pending → Delivered` (минуя Shipped) теперь невозможен на уровне кода, а не только на уровне надежды.

## Связанные страницы

- [Чистая архитектура в Laravel](./clean-architecture.md)
- [Eloquent: лучшие практики](./eloquent-best-practices.md)
- [Валидация и авторизация](./validation-authorization.md)
