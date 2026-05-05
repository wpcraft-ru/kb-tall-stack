---
title: "Жизненный цикл и тестирование"
description: "Lifecycle hooks, mount/boot/hydrate/dehydrate, тестирование компонентов через Pest и Livewire::test"
sidebar:
  order: 8
---

> Источник: `raw/2026/0105/lifecycle-hooks.md`, `raw/2026/0105/testing.md`

## Lifecycle Hooks

| Хук | Когда вызывается |
|---|---|
| `mount()` | Первый рендер (конструктор) |
| `boot()` | Каждый запрос (инициализация) |
| `updating()` / `updated()` | До/после обновления свойства |
| `updatingProperty()` / `updatedProperty()` | Для конкретного свойства |
| `hydrate()` | При десериализации из JSON |
| `dehydrate()` | При сериализации в JSON |
| `rendering()` / `rendered()` | До/после рендера шаблона |

### mount()

```php
public function mount(Post $post)
{
    $this->title = $post->title;
    $this->content = $post->content;
}
```

Работает как конструктор: принимает props, параметры маршрута, поддерживает DI.

### boot()

```php
protected Post $post;

public function boot()
{
    $this->post = Post::find($this->postId);
}
```

Выполняется при каждом запросе. Полезен для protected-свойств.

### update-hooks

```php
public function updatedUsername()
{
    $this->username = strtolower($this->username);
}

public function updating($property, $value)
{
    if ($property === 'postId') {
        throw new \Exception;
    }
}
```

## Тестирование через Pest

### Установка Pest

```bash
composer remove phpunit/phpunit
composer require pestphp/pest --dev --with-all-dependencies
./vendor/bin/pest --init
```

### Создание теста с компонентом

```bash
php artisan make:livewire post.create --test
```

### Простые smoke-тесты

```php
it('renders successfully', function () {
    Livewire::test('post.create')
        ->assertStatus(200);
});

it('component exists on page', function () {
    $this->get('/posts/create')
        ->assertSeeLivewire('post.create');
});
```

### Аутентификация

```php
it('user sees only their posts', function () {
    $user = User::factory()->has(Post::factory(3))->create();

    Livewire::actingAs($user)
        ->test('show-posts')
        ->assertSee('My first post');
});
```

### Тестирование данных во view

```php
Livewire::test('show-posts')
    ->assertViewHas('posts', fn ($posts) => count($posts) === 3);
```

### Тестирование действий

```php
Livewire::test('post.create')
    ->set('title', 'My Title')
    ->call('save')
    ->assertHasNoErrors()
    ->assertRedirect('/posts');
```

### Тестирование событий

```php
Livewire::test('post.create')
    ->call('save')
    ->assertDispatched('post-created');

Livewire::test('dashboard')
    ->dispatch('post-created')
    ->assertSee('Posts created: 1');
```

### Browser-тесты (Pest + Playwright)

```bash
composer require pestphp/pest-plugin-browser --dev
npm install playwright && npx playwright install
```

```php
it('can create post in browser', function () {
    Livewire::visit('post.create')
        ->type('[wire\:model="title"]', 'My post')
        ->press('Save')
        ->assertSee('Post created');
});
```

## Связанные страницы

- [Компоненты: форматы и рендеринг](./components.md)
- [Формы и валидация](./forms-validation.md)
- [Безопасность](./security-best-practices.md)
- [Тестирование через Pest](../../testing/pest-testing-guide.md)
