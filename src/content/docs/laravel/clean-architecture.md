---
title: "Чистая архитектура в Laravel"
description: "Thin Controllers, Action Pattern, Dependency Injection и организация приложения — фундамент поддерживаемого кода на Laravel"
sidebar:
  order: 1
---

> Источник: `raw/2025/1103/001-controllers.md`, `raw/2025/1103/002-actions.md`, `raw/2025/1103/004-dependency-injection.md`, `raw/2025/1103/004-organizing-your-application.md`, `raw/2025/1103/006-view-models.md`, `raw/2025/1103/001-the-philosophy-of-simplicity.md`

## Философия простоты

Тейлор Отвелл последовательно предупреждает об опасности «слишком умного» кода. **Простой код** — это код, который делает читателя умнее. **Умный код** — тот, после которого автор чувствует себя гением.

Laravel построен на принципе «convention over configuration»: фреймворк имеет мнение о том, где лежат контроллеры, как называются модели, как устроены миграции. Когда вы следуете этим соглашениям, любой Laravel-разработчик, читающий ваш код, уже знает, где что искать.

## Thin Controllers

Контроллер выполняет ровно одну работу: **принять HTTP-запрос и вернуть ответ**. Это traffic cop, а не factory worker. Он валидирует входящие данные (через Form Request), вызывает Action или Service и возвращает результат.

### Проблема жирных контроллеров

```php
// Так делать НЕ надо — всё в контроллере
class OrderController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $request->validate([/* 10 строк валидации */]);
        $total = 0;
        foreach ($request->items as $item) {
            $product = Product::findOrFail($item['product_id']);
            if ($product->stock < $item['quantity']) { /* ... */ }
            $total += $product->price * $item['quantity'];
        }
        // Логика купона, налогов, создание заказа, уведомления...
    }
}
```

Такой код начинается с малого, но через полгода добавления фич превращается в нечитаемую кашу. Контроллер делает 5 разных вещей: валидацию, проверку fraud, сохранение в БД, отправку email, нотификации.

### Правильный подход

```php
class OrderController extends Controller
{
    public function store(
        StoreOrderRequest $request,
        PlaceOrderAction $action,
    ): RedirectResponse {
        $order = $action->execute($request->toDto());

        return redirect()->route('orders.show', $order);
    }
}
```

Контроллер стал тоньше в 10 раз. Вся бизнес-логика ушла в Action.

## Action Pattern

**Action** — класс с единственной целью: выполнить одну бизнес-операцию. Самый популярный паттерн в Laravel-сообществе для организации бизнес-логики.

### Характеристики хорошего Action

1. **Одна цель.** `PlaceOrderAction` оркестрирует создание заказа — это одна связная операция.
2. **Типизированный вход.** Принимает DTO или типизированные параметры, никогда не трогает `Request` напрямую. Это делает Action переиспользуемым из контроллеров, команд, Jobs.
3. **Возвращает доменный объект или void.** Никогда не возвращает HTTP-ответ.
4. **Контекстно-независим.** Никаких знаний об HTTP, views, редиректах.

```php
namespace Domain\Order\Actions;

use Domain\Order\Data\OrderData;
use Domain\Order\Models\Order;

class CreateOrderAction
{
    public function execute(OrderData $data): Order
    {
        $order = Order::create([
            'email' => $data->email,
            'amount_in_cents' => $data->amount_in_cents,
        ]);

        event(new OrderCreated($order));

        return $order;
    }
}
```

### Когда Action НЕ нужен

«Равиоли-код» — десятки крошечных классов, каждый из которых почти ничего не делает. Если Action содержит только `Flight::active()->get()` — вы зашли слишком далеко. Модель с хорошо названным scope, вызванная из контроллера — уже чистый код.

## Dependency Injection

Вместо `new OrderService()` внутри класса — пробрасываем зависимость снаружи.

```php
// Плохо: жёсткая привязка
class OrderController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $service = new OrderService(); // Невозможно подменить в тестах
        return $service->placeOrder(...);
    }
}

// Хорошо: DI
class OrderController extends Controller
{
    public function store(
        StoreOrderRequest $request,
        OrderService $service,
    ): RedirectResponse {
        return $service->placeOrder($request->toDto());
    }
}
```

Три проблемы `new`:
1. **Нельзя подменить в тестах** — если `OrderService` общается со Stripe.
2. **Нельзя изменить поведение** без правки класса.
3. **Скрытые зависимости** — нужно читать весь класс, чтобы понять, что он использует.

**Правило:** всегда используй DI для сервисов. Стоимость инжекции — ноль. Стоимость рефакторинга `new` → DI потом — реальна.

## View Models

Если View Model нет, контроллер становится сборщиком данных для view:

```php
// До View Model: контроллер завален подготовкой данных
public function index(Request $request): View
{
    $user = $request->user();
    $recentOrders = $user->orders()->latest()->limit(5)->get();
    $subscription = $user->subscription;
    $isTrialing = $subscription?->onTrial() ?? false;
    // ... ещё 10 строк

    return view('dashboard', compact(/* 8 переменных */));
}
```

**View Model** инкапсулирует всю подготовку данных для конкретной страницы:

```php
class DashboardViewModel
{
    public function __construct(private readonly User $user) {}

    public function recentOrders(): Collection { /* ... */ }
    public function isTrialing(): bool { /* ... */ }
    public function trialDaysLeft(): ?int { /* ... */ }
    public function totalSpent(): float { /* ... */ }
}
```

Контроллер создаёт View Model, view потребляет — чисто и тестируемо.

## Services vs Actions

| Характеристика | Action | Service |
|---|---|---|
| Назначение | Бизнес-операция | Переиспользуемая возможность |
| Методов | Один `execute()` | Несколько |
| Побочные эффекты | Всегда есть | Обычно нет |
| Пример | `PlaceOrderAction` | `TaxCalculator`, `MoneyFormatter` |
| Кто вызывает | Контроллеры, Jobs, команды | Actions, другие сервисы |

**Action** — то, что приложение *делает*. **Service** — то, что приложение *использует*.

## Организация приложения

```
app/
├── Domain/                  # Бизнес-логика
│   └── Order/
│       ├── Actions/         # PlaceOrderAction, CancelOrderAction
│       ├── Data/            # OrderData, OrderItemData
│       ├── Builders/        # OrderBuilder
│       └── Models/          # Order, OrderItem
├── Http/
│   ├── Controllers/         # Thin controllers
│   └── Requests/            # StoreOrderRequest, UpdateOrderRequest
├── Services/                # TaxCalculator, ShippingCalculator
└── ViewModels/              # DashboardViewModel
```
