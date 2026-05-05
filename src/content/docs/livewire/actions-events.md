---
title: "Действия и события"
description: "Actions, wire:click, wire:submit, dispatch(), #[On], Laravel Echo — полная система действий и событий Livewire 4.x"
sidebar:
  order: 4
---

> Источник: `raw/2026/0105/actions.md`, `raw/2026/0105/events.md`

## Actions

**Action** — метод компонента, вызываемый из Blade через `wire:` директивы.

```php
public function save()
{
    Post::create([
        'title' => $this->title,
        'content' => $this->content,
    ]);
    return redirect()->to('/posts');
}
```

```blade
<form wire:submit="save">
    <input wire:model="title">
    <button type="submit">Save</button>
</form>
```

### Основные директивы

| Директива | Назначение |
|---|---|
| `wire:click` | Клик |
| `wire:submit` | Отправка формы (preventDefault) |
| `wire:keydown` | Нажатие клавиши |
| `wire:keydown.enter` | Enter |
| `wire:change` | Изменение поля |
| `wire:blur` | Потеря фокуса |

### Передача параметров

```blade
<button wire:click="delete({{ $post->id }})">Delete</button>
```

```php
public function delete($id)
{
    $post = Post::findOrFail($id);
    $this->authorize('delete', $post);
    $post->delete();
}
```

### Route Model Binding

```php
public function delete(Post $post)
{
    $this->authorize('delete', $post);
    $post->delete();
}
```

Тип-хинт модели — и Livewire сам найдёт запись по ID.

### Dependency Injection

```php
public function delete(PostRepository $posts, $postId)
{
    $posts->deletePost($postId);
}
```

### Модификаторы событий

```blade
<input wire:keydown.prevent="...">
<input wire:keydown.shift.enter="search">
```

Доступные: `.prevent`, `.stop`, `.self`, `.window`, `.debounce`, `.throttle`.

## События (Events)

### Диспатч из PHP

```php
$this->dispatch('post-created');
$this->dispatch('post-created', title: $post->title);
```

### Подписка: #[On]

```php
use Livewire\Attributes\On;

#[On('post-created')]
public function updatePostList($title)
{
    // $title = значение из dispatch
}
```

### Динамические имена

```php
$this->dispatch("post-updated.{$post->id}");

#[On('post-updated.{post.id}')]
public function refreshPost() { /* ... */ }
```

### Диспатч конкретному компоненту

```php
$this->dispatch('post-created')->to(Dashboard::class);
$this->dispatch('post-created')->to(self: true);  // Только себе
```

Из Blade:

```blade
<button wire:click="$dispatch('show-modal', { id: {{ $post->id }} })">Open</button>
<button wire:click="$dispatchTo('posts', 'show-post-modal', { id: 1 })">
```

### События в Alpine

```blade
<div x-on:post-created.window="...">
<button x-on:click="$dispatch('post-created', { title: 'Title' })">
```

## Laravel Echo (WebSockets)

```php
#[On('echo:orders,OrderShipped')]
public function notifyNewOrder() { /* ... */ }

#[On('echo:orders.{order.id},OrderShipped')]
public function notifyNewOrder($event) { /* ... */ }
```

Поддерживаются все типы каналов:

```php
'echo:orders,OrderShipped'           // Public
'echo-private:orders,OrderShipped'   // Private
'echo-presence:orders,OrderShipped'  // Presence
```

## Связанные страницы

- [Свойства и привязка данных](./properties-data-binding.md)
- [Формы и валидация](./forms-validation.md)
- [Вложенные компоненты](./nesting-children.md)
