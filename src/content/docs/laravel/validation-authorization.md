---
title: "Валидация и авторизация"
description: "Form Requests, Gates, Policies и spatie/laravel-permission — полный цикл валидации и контроля доступа в Laravel"
sidebar:
  order: 6
---

> Источник: `raw/2025/1103/005-form-requests-and-validation.md`, `raw/2025/1103/012-authorization.md`

## Form Requests

**Form Request** — выделенный класс для валидации и авторизации одного HTTP-запроса. Держит контроллеры тонкими, правила — тестируемыми, и является единым источником правды о том, какие данные принимает эндпоинт.

```bash
php artisan make:request StoreUserRequest
```

Создаёт `app/Http/Requests/StoreUserRequest.php` с методами `authorize()` и `rules()`.

### От инлайн-валидации к Form Request

```php
// Было: валидация в контроллере
public function store(Request $request): RedirectResponse
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users',
        'password' => 'required|min:8|confirmed',
    ]);
    User::create($validated);
    return redirect()->route('users.index');
}

// Стало: Form Request
class StoreUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // или проверка прав
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min:8', 'confirmed'],
        ];
    }
}

// Контроллер чист
public function store(StoreUserRequest $request): RedirectResponse
{
    User::create($request->validated());
    return redirect()->route('users.index');
}
```

Всегда используйте **массивный синтаксис** правил (`['required', 'string']`), а не pipe-синтаксис (`'required|string'`). Массивный синтаксис легче читать, модифицировать и использовать с кастомными Rule-объектами.

### Авторизация внутри Form Request

Метод `authorize()` определяет, может ли пользователь выполнить запрос:

```php
class UpdateOrderRequest extends Form Request
{
    public function authorize(): bool
    {
        return $this->user()->id === $this->route('order')->user_id;
    }
}
```

Если `authorize()` вернёт `false`, Laravel автоматически ответит 403.

### Form Request или инлайн?

Для простых случаев инлайн-валидация в контроллере ок. Form Request окупается, когда:
- Правила сложные (более 3 полей)
- Валидация переиспользуется (API + web)
- Есть логика авторизации, привязанная к запросу
- Нужна тестируемость правил изолированно

## Gates

**Gate** — замыкание, определяющее, может ли пользователь выполнить действие. Определяются в `AppServiceProvider::boot()`:

```php
Gate::define('update-post', function (User $user, Post $post): bool {
    return $user->id === $post->user_id;
});
```

Проверка в любом месте приложения:

```php
Gate::authorize('update-post', $post); // Выбросит AuthorizationException → 403

// Или с сообщением
Gate::define('edit-settings', function (User $user): Response {
    return $user->isAdmin()
        ? Response::allow()
        : Response::deny('Требуются права администратора.');
});

$response = Gate::inspect('edit-settings');
if ($response->denied()) {
    echo $response->message(); // "Требуются права администратора."
}
```

## Policies

**Policy** — класс, организующий логику авторизации вокруг модели. В отличие от Gate, который живёт в `AppServiceProvider`, Policy — отдельный файл:

```bash
php artisan make:policy PostPolicy --model=Post
```

```php
class PostPolicy
{
    public function update(User $user, Post $post): bool
    {
        return $user->id === $post->user_id;
    }

    public function delete(User $user, Post $post): bool
    {
        return $user->id === $post->user_id && $post->status !== PostStatus::Published;
    }
}
```

Использование:

```php
// В контроллере
$this->authorize('update', $post);

// В Blade
@can('update', $post)
    <a href="...">Редактировать</a>
@endcan

// В любом месте
if ($user->can('delete', $post)) { /* ... */ }
```

### Gate или Policy?

| Ситуация | Инструмент |
|---|---|
| Правило без модели (доступ к дашборду) | Gate |
| Правило на основе модели (владелец поста) | Policy |
| Массовое использование с одной моделью | Policy |
| Роли/разрешения | `spatie/laravel-permission` |

## spatie/laravel-permission

Пакет добавляет роли и разрешения поверх Gates/Policies:

```bash
composer require spatie/laravel-permission
```

```php
// Определение
$role = Role::create(['name' => 'editor']);
$permission = Permission::create(['name' => 'publish posts']);
$role->givePermissionTo($permission);

// Назначение
$user->assignRole('editor');

// Проверка
$user->can('publish posts');
$user->hasRole('editor');

// В Gate/Policy
Gate::define('publish-post', fn (User $user) => $user->can('publish posts'));

// В Blade
@role('editor') @endrole
@can('publish posts') @endcan
```

### Антипаттерн: инлайн-проверки

```php
// Так делать НЕ надо — разбросано по контроллерам
if ($request->user()->id !== $post->user_id) { abort(403); }
if ($request->user()->role !== 'editor') { abort(403); }
```

Правила умножаются, дублируются в update/destroy/show, и при изменении ролей вы охотитесь по контроллерам за каждым `if`.

## Связанные страницы

- [Чистая архитектура в Laravel](./clean-architecture.md)
- [DTO, Enums и типобезопасность](./dto-enums-type-safety.md)
- [Spatie-пакеты для Laravel](../../ecosystem/spatie-packages.md)
