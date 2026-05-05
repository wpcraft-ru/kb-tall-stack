---
title: "API Resources и Webhooks"
description: "API Resources, форматирование ответов, пагинация и приём/отправка Webhooks через Spatie"
sidebar:
  order: 5
---

> Источник: `raw/2025/1103/009-apis.md`, `raw/2025/1103/010-webhooks.md`

## API Resources: зачем нужен слой трансформации

Возвращать Eloquent-модели напрямую из API опасно. Модели раскрывают структуру БД — имена колонок, скрытые поля, таймстемпы, загрузку отношений — внешнему миру. Переименуйте колонку — сломаются все потребители.

**API Resource** — трансформационный слой между моделями и JSON-ответом:

```bash
php artisan make:resource OrderResource
```

```php
class OrderResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'status' => $this->status->value,
            'subtotal' => $this->subtotal,
            'tax' => $this->tax,
            'total' => $this->total,
            'item_count' => $this->items->count(),
            'placed_at' => $this->created_at->toIso8601String(),
            'customer' => new UserResource($this->whenLoaded('user')),
            'items' => OrderItemResource::collection($this->whenLoaded('items')),
            'shipping_address' => new AddressResource($this->whenLoaded('shippingAddress')),
        ];
    }
}
```

Ключевые приёмы:

- **`whenLoaded()`** — включает отношения только при eager loading, предотвращая N+1
- **Явный выбор полей** — только то, что нужно потребителю
- **Форматированные даты** — ISO 8601 строки
- **Вложенные ресурсы** — для консистентного форматирования на всех уровнях

### Коллекции и пагинация

Никогда не возвращайте всю таблицу в одном ответе. Всегда пагинируйте:

```php
public function index(Request $request): AnonymousResourceCollection
{
    $orders = Order::where('user_id', $request->user()->id)
        ->with(['items.product', 'shippingAddress'])
        ->latest()
        ->paginate(15);

    return OrderResource::collection($orders);
}
```

Laravel автоматически оборачивает ответ в `data` и добавляет метаданные пагинации: `links`, `meta`.

## Webhooks: приём

Webhook — HTTP POST от внешнего сервиса к вашему приложению при наступлении события. Без опроса, без cron.

Spatie предоставляет два пакета: [`spatie/laravel-webhook-client`](https://github.com/spatie/laravel-webhook-client) для приёма и [`spatie/laravel-webhook-server`](https://github.com/spatie/laravel-webhook-server) для отправки.

### Установка

```bash
composer require spatie/laravel-webhook-client
php artisan vendor:publish --provider="Spatie\WebhookClient\WebhookClientServiceProvider" --tag="webhook-client-config"
php artisan vendor:publish --provider="Spatie\WebhookClient\WebhookClientServiceProvider" --tag="webhook-client-migrations"
php artisan migrate
```

### Регистрация маршрута и CSRF

Webhook-сервисы не могут получить CSRF-токен — они не браузеры:

```php
// routes/web.php
Route::webhooks('webhooks/stripe', 'stripe');

// bootstrap/app.php — исключить из CSRF
->withMiddleware(function (Middleware $middleware): void {
    $middleware->validateCsrfTokens(except: ['webhooks/*']);
})
```

### Конфигурация

```php
// config/webhook-client.php
return [
    'configs' => [
        [
            'name' => 'stripe',
            'signing_secret' => env('STRIPE_WEBHOOK_SECRET'),
            'signature_header_name' => 'Stripe-Signature',
            'signature_validator' => App\Webhooks\StripeSignatureValidator::class,
            'process_webhook_job' => App\Webhooks\Jobs\ProcessStripeWebhookJob::class,
        ],
    ],
];
```

### Обработка — всегда через Job

Webhook обрабатывается асинхронно, payload сохраняется в БД. Job получает модель `WebhookCall`:

```php
class ProcessStripeWebhookJob implements ShouldQueue
{
    public function handle(WebhookCall $webhookCall): void
    {
        $payload = $webhookCall->payload;

        match ($payload['type']) {
            'payment_intent.succeeded' => $this->handlePaymentSucceeded($payload),
            'payment_intent.failed' => $this->handlePaymentFailed($payload),
            default => null,
        };
    }
}
```

## Webhooks: отправка

```bash
composer require spatie/laravel-webhook-server
```

```php
WebhookCall::create()
    ->url('https://example.com/webhooks')
    ->payload(['event' => 'order.created', 'order_id' => $order->id])
    ->useSecret('my-secret')
    ->dispatch();
```

Пакет автоматически подписывает запросы и повторяет при неудаче с экспоненциальной задержкой.

## Связанные страницы

- [Чистая архитектура в Laravel](./clean-architecture.md)
- [Jobs, Queues и Pipelines](./jobs-queues-pipelines.md)
- [Spatie-пакеты для Laravel](../../ecosystem/spatie-packages.md)
