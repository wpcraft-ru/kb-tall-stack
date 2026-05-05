---
title: "Безопасность"
description: "Авторизация в Livewire: Policies, #[Locked], модельные свойства, Persistent Middleware и защита от tampering"
sidebar:
  order: 9
---

> Источник: `raw/2026/0105/security.md`

## Принцип: не доверяйте клиенту

Параметры действий и публичные свойства **могут быть изменены** на клиенте. Их нужно валидировать и авторизовывать на сервере.

## Антипаттерн: прямое удаление по ID

```php
// ⚠️ НЕБЕЗОПАСНО
public function delete($id)
{
    $post = Post::find($id);
    $post->delete();
}
```

`wire:click="delete({{ $post->id }})"` можно изменить в браузере на любой ID.

## Правильно: авторизация через Policy

```bash
php artisan make:policy PostPolicy --model=Post
```

```php
class PostPolicy
{
    public function delete(?User $user, Post $post): bool
    {
        return $user?->id === $post->user_id;
    }
}
```

```php
public function delete($id)
{
    $post = Post::findOrFail($id);
    $this->authorize('delete', $post);  // AuthorizationException если нет прав
    $post->delete();
}
```

## Защита свойств

### Способ 1: Модельное свойство

Вместо `$postId` — хранить модель целиком:

```php
public Post $post;  // Livewire гарантирует, что ID не подделают

public function delete()
{
    $this->post->delete();
}
```

### Способ 2: #[Locked]

```php
use Livewire\Attributes\Locked;

#[Locked]
public $postId;
```

Попытка изменить `$postId` на клиенте вызовет ошибку. Свойство можно менять только на бэкенде.

### Способ 3: Ручная авторизация

```php
public function delete()
{
    $post = Post::findOrFail($this->postId);
    $this->authorize('delete', $post);
    $post->delete();
}
```

## Persistent Middleware

Если маршрут защищён middleware:

```php
Route::livewire('/post/{post}', UpdatePost::class)
    ->middleware('can:update,post');
```

Livewire повторно применяет middleware при каждом запросе — даже если права изменились после загрузки страницы.

## Дополнительные меры

### CSP (Content Security Policy)

Livewire поддерживает Content Security Policy — см. документацию по CSP.

### Валидация данных из форм

Всегда используйте `$this->validate()` или `#[Validate]` перед сохранением:

```php
public function save()
{
    $validated = $this->validate([...]);
    Post::create($validated);
}
```

## Сводка правил безопасности

1. **Action-параметры** — всегда авторизуйте перед действием
2. **Публичные свойства** — `#[Locked]` или модельные свойства
3. **Middleware** — применяются повторно (Persistent)
4. **Формы** — всегда `$this->validate()` перед сохранением

## Связанные страницы

- [Действия и события](./actions-events.md)
- [Формы и валидация](./forms-validation.md)
- [Валидация и авторизация в Laravel](../../laravel/validation-authorization.md)
