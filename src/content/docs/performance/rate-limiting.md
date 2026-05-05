---
title: "Rate Limiting в Laravel"
description: "Ограничение частоты запросов для HTTP-роутов и Jobs: встроенный RateLimiter и spatie/laravel-rate-limited-job-middleware"
sidebar:
  order: 1
---

> Источник: `raw/2025/1103/011-rate-limiting.md`

## Зачем нужен Rate Limiting

Rate limiting звучит скучно, пока не понадобится. API-потребитель долбит эндпоинт 10 000 раз в минуту. Job слишком часто стучится к стороннему API — аккаунт забанен. Форма логина брутфорсится.

В правильных местах rate limiting — необходимая защита. В неправильных — фрустрация легитимных пользователей без выгоды.

## HTTP Rate Limiting

### Определение лимитера

В `AppServiceProvider::boot()`:

```php
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;

RateLimiter::for('api', function (Request $request): Limit {
    return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
});
```

Метод `by()` определяет, к чему применяется лимит. Аутентифицированные — по user ID, гости — по IP.

### Разные лимиты по ролям

```php
RateLimiter::for('uploads', function (Request $request): Limit {
    return $request->user()?->isPremium()
        ? Limit::perMinute(100)->by($request->user()->id)
        : Limit::perMinute(10)->by($request->user()?->id ?: $request->ip());
});
```

Премиум-пользователи — 100 загрузок/мин. Остальные — 10.

### Множественные лимиты

```php
RateLimiter::for('sensitive', function (Request $request): array {
    return [
        Limit::perMinute(10)->by('minute:' . $request->user()->id),
        Limit::perDay(1000)->by('day:' . $request->user()->id),
    ];
});
```

Каждый лимит оценивается независимо. Если превышен любой — запрос отклонён. **Ключи `by` должны быть уникальными** при множественных лимитах.

### Привязка к роутам

```php
Route::middleware(['throttle:api'])->group(function (): void {
    Route::get('/users', [UserController::class, 'index']);
    Route::post('/users', [UserController::class, 'store']);
});
```

При превышении Laravel возвращает `429 Too Many Requests` с заголовками `Retry-After` и `X-RateLimit-*` автоматически.

### Инлайн-лимиты

Для простых случаев — без именованного лимитера:

```php
// 6 попыток в минуту
Route::middleware(['throttle:6,1'])->group(function (): void {
    Route::post('/contact', [ContactController::class, 'store']);
});
```

## Rate Limiting для Jobs

Встроенный `RateLimiter` для Job (через `Redis::throttle`) менее гибкий. Spatie предоставляет [`laravel-rate-limited-job-middleware`](https://github.com/spatie/laravel-rate-limited-job-middleware):

```bash
composer require spatie/laravel-rate-limited-job-middleware
```

```php
use Spatie\RateLimitedMiddleware\RateLimited;

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

Конфигурация в `config/rate-limited-job-middleware.php`:

```php
return [
    'api-calls' => [
        'max_jobs' => 10,
        'window_seconds' => 60,
        'release_after_seconds' => 30,
    ],
];
```

10 Jobs в минуту для ключа `api-calls`. При превышении Job возвращается в очередь на 30 секунд.

## Где применять

| Где | Зачем |
|---|---|
| Публичные API | Защита от abuse |
| Формы логина | Защита от brute force |
| Формы контакта | Защита от спама |
| Регистрация | Защита от массовых аккаунтов |
| Jobs к внешним API | Не превысить лимиты стороннего сервиса |

## Связанные страницы

- [Jobs, Queues и Pipelines](../laravel/jobs-queues-pipelines.md)
- [Spatie-пакеты для Laravel](../ecosystem/spatie-packages.md)
- [Деплой Laravel](../deployment/laravel-deployment-guide.md)
