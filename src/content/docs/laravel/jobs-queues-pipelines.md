---
title: "Jobs, Queues и Pipelines"
description: "Job-классы, очереди, воркеры, цепочки и Pipeline-паттерн — надёжная фоновая обработка в Laravel"
sidebar:
  order: 4
---

> Источник: `raw/2025/1103/007-jobs.md`, `raw/2025/1103/002-queue-workers.md`, `raw/2025/1103/008-pipelines.md`

## Jobs: структура

**Job** — класс, представляющий единицу работы для фонового выполнения:

```php
#[Queue('payments')]
class ProcessOrderPaymentJob implements ShouldQueue
{
    use Queueable;

    public function __construct(
        private readonly Order $order,
    ) {}

    public function handle(StripePaymentService $payment): void
    {
        $payment->charge(
            paymentMethodId: $this->order->user->default_payment_method,
            amount: $this->order->total,
            currency: $this->order->currency,
        );

        $this->order->update(['status' => OrderStatus::Paid]);
    }
}
```

**Ключевой принцип:** данные (ID, строки, числа) — через конструктор. Сервисы (HTTP-клиенты, логгеры) — через `handle()`. Данные сериализуются чисто, сервисы — нет.

### Отправка Job

```php
class PlaceOrderAction
{
    public function execute(PlaceOrderData $data): Order
    {
        $order = DB::transaction(fn () => Order::create([/* ... */]));

        ProcessOrderPaymentJob::dispatch($order);
        SendOrderConfirmationJob::dispatch($order);

        return $order;
    }
}
```

## Job Chaining

Три Jobs выше диспатчатся независимо — могут выполниться в любом порядке. Цепочки (chains) выполняют Jobs **последовательно**, каждая следующая — только после успеха предыдущей:

```php
Bus::chain([
    new ProcessOrderPaymentJob($order),
    new GenerateInvoicePdfJob($order),
    new SendOrderConfirmationJob($order),
])->dispatch();
```

Если `ProcessOrderPaymentJob` упадёт, генерация PDF и отправка email не запустятся.

## Job Batching

Группа Jobs, которые должны выполниться вместе, с возможностью отслеживания прогресса:

```php
$batch = Bus::batch([
    new ProcessImportRowJob($row) for $row in $rows
])->then(function (Batch $batch) {
    // Все Jobs выполнены успешно
})->catch(function (Batch $batch, Throwable $e) {
    // Первая ошибка в батче
})->finally(function (Batch $batch) {
    // В любом случае
})->dispatch();
```

## Идемпотентность

Job должен быть **идемпотентным** — повторное выполнение даёт тот же результат, что и первое. Сеть нестабильна, очереди могут доставить Job дважды.

```php
public function handle(): void
{
    // Плохо: $this->order->total += 100 — при повторе добавит ещё 100
    // Хорошо: проверяем состояние перед действием
    if ($this->order->status === OrderStatus::Paid) {
        return; // Уже обработано — пропускаем
    }

    $payment->charge(/* ... */);
    $this->order->update(['status' => OrderStatus::Paid]);
}
```

## Queue Workers: как они работают

**Очередь** — структура данных (Redis, БД, SQS). **Воркер** — процесс, который читает из очереди и выполняет Jobs.

Воркер — это `while (true)` цикл:

1. Проверить, нужно ли работать (maintenance mode, пауза)
2. Сбросить состояние контейнера от предыдущего Job
3. Взять следующий Job из очереди (`pop()`)
4. Выполнить `$job->fire()` → `handle()`
5. Обработать успех/ошибку/retry
6. Проверить стоп-условия (SIGTERM, лимит памяти, `queue:restart`, `--max-jobs`)
7. Если нет Jobs — уснуть на `--sleep` секунд, иначе продолжить

## Рестарт воркеров при деплое

Воркеры загружают приложение один раз и держат в памяти. После деплоя они всё ещё выполняют старый код:

```bash
php artisan queue:restart
# или для Horizon
php artisan horizon:terminate
```

Пропуск этого шага — воркеры обрабатывают Jobs с устаревшей логикой.

## Pipeline Pattern

Pipeline передаёт данные через цепочку шагов, каждый из которых может модифицировать данные и решить, передавать ли дальше. Laravel-мидлвары — это и есть Pipeline.

### Когда Pipeline нужен

Если шаги **динамические**, **независимо тестируемые** или **переиспользуемые** в разных контекстах. Пример — расчёт заказа: subtotal → скидка → налог → доставка → проверка стока → создание → резервирование.

```php
use Illuminate\Pipeline\Pipeline;

class PlaceOrderAction
{
    public function execute(PlaceOrderData $input): Order
    {
        return app(Pipeline::class)
            ->send(new OrderPipelineData($input))
            ->through([
                CalculateSubtotalStep::class,
                ApplyCouponStep::class,
                CalculateTaxStep::class,
                CalculateShippingStep::class,
                CheckInventoryStep::class,
                CreateOrderStep::class,
                ReserveStockStep::class,
            ])
            ->then(fn (OrderPipelineData $data) => $data->order);
    }
}
```

Каждый шаг — отдельный класс с методом `handle($data, $next)`.

### Когда Pipeline НЕ нужен

Если процесс фиксирован и прост — последовательный код читается лучше. Pipeline окупается, когда шаги динамические или контекстно-зависимые (B2B без купонов, digital без доставки).

## Связанные страницы

- [Чистая архитектура в Laravel](./clean-architecture.md)
- [Eloquent: лучшие практики](./eloquent-best-practices.md)
- [Деплой Laravel](../../deployment/laravel-deployment-guide.md)
