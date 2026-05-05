---
title: "Тестирование через Pest"
description: "Pest-фреймворк для тестирования Laravel: подходы, expect API, Feature vs Unit, фикстуры и моки"
sidebar:
  order: 1
---

> Источник: `raw/2025/1103/001-the-art-of-testing.md`

## Почему тесты — часть чистого кода

Чистый код — код, который легко менять. Тесты — то, что делает изменения безопасными. Одно без другого не работает.

Каждый паттерн из этой книги делает код тестируемым по дизайну:
- Бизнес-логика в Action → тестируется без HTTP
- Валидация в Form Request → правила проверяются изолированно
- Данные в DTO → тестам ясно, что на входе и выходе

## Pest: синтаксис

```php
it('creates an order from valid data', function (): void {
    $user = User::factory()->create();

    $order = app(CreateOrderAction::class)->execute(
        new OrderData(userId: $user->id, amountInCents: 5000),
    );

    expect($order)
        ->toBeInstanceOf(Order::class)
        ->user_id->toBe($user->id)
        ->amount_in_cents->toBe(5000);
});
```

### `it()` vs `test()`

```php
it('creates an order')  // Читается как предложение
test('order creation')  // Читается как метка
```

Книга рекомендует `it()` — предложение мотивирует писать описательные имена.

### `expect()` API

```php
// PHPUnit-стиль
$this->assertInstanceOf(Order::class, $order);
$this->assertEquals(5000, $order->amount_in_cents);

// Pest-стиль (читается как утверждение)
expect($order)
    ->toBeInstanceOf(Order::class)
    ->amount_in_cents->toBe(5000)
    ->created_at->not->toBeNull();
```

## Feature Tests vs Unit Tests

| Характеристика | Feature Test | Unit Test |
|---|---|---|
| Загружает фреймворк | Да | Нет |
| Скорость | Медленнее | Быстрее |
| Что тестирует | HTTP → ответ, БД, side effects | Один класс/функцию |
| Когда использовать | Почти всегда | Чистая логика без фреймворка |

> *«Write tests. Not too many. Mostly integration.»* — Кент Доддс

В Laravel большинство тестов будут **feature tests**. Eloquent, контейнер, события, очереди глубоко интегрированы. Мокать их в изоляции — мокать столько, что тест перестаёт отражать реальность.

**Unit-тесты** — для чистой логики без фреймворка: калькулятор скидок, трансформер данных, переход состояния.

```bash
php artisan make:test CreateOrderTest --pest         # Feature
php artisan make:test DiscountCalculatorTest --pest --unit  # Unit
```

## Что делает тест хорошим

Хороший тест:
- **Проверяет поведение, а не реализацию.** Не «вызван метод X», а «после выполнения заказ в статусе paid»
- **Изолирован.** Не зависит от других тестов, порядка выполнения, глобального состояния
- **Детерминирован.** Один и тот же результат при каждом запуске
- **Быстр.** Медленные тесты перестают запускать
- **Читаем.** Название + тело = любой разработчик понимает, что проверяется

### Подготовка данных: фабрики

```php
$user = User::factory()->create();
$order = Order::factory()->for($user)->paid()->create();
```

Фабрики делают тесты читаемыми и независимыми от реальных данных в БД.

### RefreshDatabase

```php
uses(RefreshDatabase::class);

it('creates a user', function () {
    $user = User::factory()->create();
    expect(User::count())->toBe(1);
});
```

Каждый тест в транзакции — БД чистая перед каждым тестом.

## HTTP-тесты

```php
it('returns a list of orders', function () {
    $user = User::factory()->create();
    Order::factory(3)->for($user)->create();

    $response = $this
        ->actingAs($user)
        ->getJson('/api/orders');

    $response
        ->assertOk()
        ->assertJsonCount(3, 'data')
        ->assertJsonStructure([
            'data' => [['id', 'status', 'total', 'placed_at']],
        ]);
});
```

## Тестирование Actions

```php
it('creates an order', function () {
    $user = User::factory()->create();
    $data = new PlaceOrderData(
        userId: $user->id,
        items: collect([new OrderItemData(productId: 1, quantity: 2)]),
    );

    $order = app(PlaceOrderAction::class)->execute($data);

    expect($order)->toBeInstanceOf(Order::class)
        ->and($order->user_id)->toBe($user->id)
        ->and($order->items)->toHaveCount(1);
});
```

## Тестирование Jobs

```php
it('charges payment and updates order status', function () {
    Http::fake(['payment.service/*' => Http::response(['status' => 'success'])]);
    $order = Order::factory()->create(['status' => OrderStatus::Pending]);

    (new ProcessOrderPaymentJob($order))->handle(app(StripePaymentService::class));

    expect($order->fresh()->status)->toBe(OrderStatus::Paid);
});
```

## Тестирование API Resources

```php
it('formats order with nested relations', function () {
    $order = Order::factory()
        ->has(OrderItem::factory(2), 'items')
        ->create();

    $response = (new OrderResource($order->load('items')))->response();

    expect($response->getData(true))
        ->toHaveKeys(['id', 'status', 'total', 'items', 'placed_at'])
        ->and($response->getData(true)['items'])->toHaveCount(2);
});
```

## Связанные страницы

- [Чистая архитектура в Laravel](../laravel/clean-architecture.md)
- [Jobs, Queues и Pipelines](../laravel/jobs-queues-pipelines.md)
- [API Resources и Webhooks](../laravel/apis-webhooks.md)
