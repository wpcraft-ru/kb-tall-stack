---
title: "Соглашения именования в Laravel"
description: "Как называть модели, контроллеры, методы, переменные, Jobs и Events — полный гид по naming conventions"
sidebar:
  order: 7
---

> Источник: `raw/2025/1103/002-naming-conventions.md`

## Почему naming важен

Именование — самый недооценённый навык в разработке. Хорошее имя убирает необходимость в комментарии. Плохое имя создаёт путаницу, расходящуюся по всей кодовой базе. В Laravel naming особенно важен, потому что фреймворк использует имена для автоматических связей: `User` → `users`, `PostController` → `/posts`.

## Модели

Всегда **единственное число** в PascalCase. Модель — одна запись:

| ✓ Правильно | ✗ Неправильно | Почему |
|---|---|---|
| `User` | `Users` | Множественное число |
| `Invoice` | `InvoiceModel` | Избыточный суффикс |
| `OrderItem` | `Order_Item` | Snake_case в имени класса |
| `FlightBooking` | `Flightbooking` | Пропущена граница слов |

Laravel автоматически преобразует `OrderItem` → `order_items`, `FlightBooking` → `flight_bookings`.

## Контроллеры

Шаблон: `{SingularResource}Controller`:

| ✓ Правильно | ✗ Неправильно |
|---|---|
| `UserController` | `UsersController` |
| `InvoiceController` | `InvoiceCtrl` |
| `OrderItemController` | `OrderItemsController` |

Для контроллеров без привязки к ресурсу — описательное имя:

```php
class DashboardController extends Controller { }
class SettingsController extends Controller { }
class SearchController extends Controller { }
```

Для invokable-контроллеров — имя по действию:

```php
class ExportOrdersController extends Controller
{
    public function __invoke(Request $request): Response { /* ... */ }
}
```

## Методы

Всегда **camelCase**, начинаются с глагола:

```php
// ✓ Глагол первым, описательно
public function calculateTotal(): Money { }
public function sendNotification(): void { }
public function findByEmail(string $email): ?User { }
public function markAsPaid(): void { }

// ✗ Расплывчато, непонятно
public function total(): Money { }       // Получить или вычислить?
public function notification(): void { } // Отправить или создать?
public function email(string $email) { } // Что с email?
```

**Булевы методы:** `is` — для проверки состояния (`isActive`, `isPaid`, `isAdmin`), `has` — для отношений/владения (`hasSubscription`, `hasPermission`, `hasVerifiedEmail`).

## Переменные

Коллекции во множественном числе, одиночные объекты — в единственном:

```php
// ✓ Ясно с первого взгляда
$activeUsers = User::active()->get();
$user = User::find($id);
$orderItems = $order->items;

// ✗ Непонятно, один или много
$users = User::find($id);           // На самом деле один пользователь
$orderItem = $order->items;         // На самом деле коллекция
```

## Form Requests

Шаблон: `{Action}{Model}Request`:

```php
StoreUserRequest
UpdateOrderRequest
DestroyCommentRequest
```

## Jobs

Шаблон: `{Verb}{Subject}Job`:

```php
ProcessOrderPaymentJob
SendWelcomeEmailJob
GenerateInvoicePdfJob
```

## Events

Шаблон: `{Subject}{PastTenseVerb}` — событие **уже** произошло:

```php
OrderCreated      // Заказ создан (не OrderCreate)
PaymentRefunded   // Платёж возвращён
UserRegistered    // Пользователь зарегистрирован
```

## Listeners

Шаблон: `{Verb}{Subject}Listener`:

```php
SendWelcomeEmailListener
UpdateInventoryListener
LogOrderActivityListener
```

## Mailables

Шаблон: `{Action}{Subject}`:

```php
OrderConfirmation       // Не OrderConfirmationMail
WelcomeToPlatform       // Не WelcomeEmail
PaymentReceipt
```

## Пакеты Spatie и PEST

Spatie-пакеты **всегда** используют префикс `spatie/` и kebab-case:

```bash
composer require spatie/laravel-data
composer require spatie/laravel-permission
```

PEST использует функцию `it()` с описательным именем, читающимся как предложение:

```php
it('creates an order from valid data', function () { /* ... */ });
it('prevents duplicate email registration', function () { /* ... */ });
```

## Связанные страницы

- [Чистая архитектура в Laravel](./clean-architecture.md)
- [Тестирование через Pest](../../testing/pest-testing-guide.md)
- [Eloquent: лучшие практики](./eloquent-best-practices.md)
