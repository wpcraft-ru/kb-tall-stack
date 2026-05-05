---
title: "Spatie-пакеты для Laravel"
description: "Обзор ключевых Spatie-пакетов: laravel-data, laravel-permission, webhook-client, laravel-rate-limited-job-middleware и других"
sidebar:
  order: 1
---

> Источник: `raw/2025/1103/003-packages.md`

## Философия: пакет не всегда нужен

Каждый `composer require` — это решение, говорящее: «Я доверяю этому коду, его мейнтейнерам и принимаю, что моё приложение теперь от него зависит». Это доверие не бесплатно.

Перед установкой спросите:
1. **Laravel уже решает это?** Auth, кеш, очереди, нотификации — фреймворк многое даёт из коробки.
2. **Могу реализовать за разумное время?** Простая фича за час → напишите сами. Ваш код вы контролируете.
3. **Пакет активно поддерживается?** Звёзды без коммитов два года — liability, не asset.

## Пакеты, которые стоит знать

### spatie/laravel-data

Типизированные DTO с валидацией, трансформацией и сериализацией:

```bash
composer require spatie/laravel-data
```

```php
class PlaceOrderData extends Data
{
    public function __construct(
        #[Required, Exists('users', 'id')] public int $userId,
        #[Required, Min(1)] public Collection $items,
    ) {}
}
```

Подробнее — [DTO, Enums и типобезопасность](../laravel/dto-enums-type-safety.md).

### spatie/laravel-permission

Роли и разрешения поверх Gates/Policies:

```bash
composer require spatie/laravel-permission
```

```php
$role = Role::create(['name' => 'editor']);
$permission = Permission::create(['name' => 'publish posts']);
$role->givePermissionTo($permission);
$user->assignRole('editor');

// Проверка
$user->can('publish posts');
$user->hasRole('editor');
```

Подробнее — [Валидация и авторизация](../laravel/validation-authorization.md).

### spatie/laravel-webhook-client

Приём webhook'ов со встроенной валидацией подписей:

```bash
composer require spatie/laravel-webhook-client
```

```php
// routes/web.php
Route::webhooks('webhooks/stripe', 'stripe');
```

Webhook приходит → сохраняется в БД → Job обрабатывает асинхронно.

Подробнее — [API Resources и Webhooks](../laravel/apis-webhooks.md).

### spatie/laravel-webhook-server

Отправка webhook'ов с подписью и retry:

```bash
composer require spatie/laravel-webhook-server
```

```php
WebhookCall::create()
    ->url('https://example.com/webhooks')
    ->payload(['event' => 'order.created'])
    ->useSecret('my-secret')
    ->dispatch();
```

### spatie/laravel-rate-limited-job-middleware

Тонкий контроль троттлинга для Jobs:

```bash
composer require spatie/laravel-rate-limited-job-middleware
```

```php
class CallExternalApiJob implements ShouldQueue
{
    public function middleware(): array
    {
        return [
            new RateLimited('api-calls'),
        ];
    }
}
```

## Инструменты разработки

### Laravel Pint (встроен)

Форматтер кода (поверх PHP-CS-Fixer), соответствует стилю Laravel:

```bash
./vendor/bin/pint        # Форматировать всё
./vendor/bin/pint --test # Проверить без изменений (для CI)
```

### Laravel Debugbar

Дебаг-панель для разработки:

```bash
composer require barryvdh/laravel-debugbar --dev
```

SQL-запросы, переменные, время рендера — все прямо в браузере.

### Laravel Telescope

Отладчик для локальной разработки:

```bash
composer require laravel/telescope --dev
php artisan telescope:install
```

Логирует все запросы, Jobs, очереди, нотификации, mail — полная картина происходящего.

## Антипаттерн: выбор пакета до обдумывания задачи

Пример вызова OpenAI API. Есть десятки пакетов. Но по сути это HTTP POST с JSON-телом:

```php
use Illuminate\Support\Facades\Http;

class OpenAiService
{
    public function generateText(string $prompt, string $model = 'gpt-4o'): string
    {
        $response = Http::withToken(config('services.openai.api_key'))
            ->post('https://api.openai.com/v1/chat/completions', [
                'model' => $model,
                'messages' => [['role' => 'user', 'content' => $prompt]],
            ]);

        return $response->json('choices.0.message.content');
    }
}
```

Тестируется через `Http::fake()`. Никакого пакета, никакой лишней зависимости. Для сложных сценариев (стриминг, function calling, embeddings) — пакет может быть оправдан.

## Сводка: когда ставить пакет

| Ситуация | Решение |
|---|---|
| Laravel уже даёт функционал | Не ставьте |
| Простая задача (< 1 часа своей реализации) | Напишите сами |
| Сложная задача (роли/разрешения, DTO с валидацией) | Spatie |
| Неподдерживаемый пакет (коммитов нет год) | Ищите альтернативу |

## Связанные страницы

- [DTO, Enums и типобезопасность](../laravel/dto-enums-type-safety.md)
- [Валидация и авторизация](../laravel/validation-authorization.md)
- [API Resources и Webhooks](../laravel/apis-webhooks.md)
