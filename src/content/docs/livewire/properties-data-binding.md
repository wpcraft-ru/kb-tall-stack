---
title: "Свойства и привязка данных"
description: "Properties, wire:model, fill(), $wire из Alpine, поддерживаемые типы и Wireables в Livewire 4.x"
sidebar:
  order: 3
---

> Источник: `raw/2026/0105/properties.md`

## Объявление свойств

```php
public string $title = '';
public int $maxTodos = 10;
public bool $showTodos = false;
public ?string $todoFilter = null;
```

Публичные свойства автоматически доступны в Blade-шаблоне:

```blade
{{ $title }}
{{ $this->title }}  {{-- Для protected/private --}}
```

## Инициализация в mount()

```php
public function mount()
{
    $this->todos = ['Buy groceries', 'Walk the dog'];
}
```

### Массовое присвоение через fill()

```php
public function mount(Post $post)
{
    $this->post = $post;
    $this->fill($post->only('title', 'description'));
}
```

## Двусторонняя привязка: wire:model

```blade
<input type="text" wire:model="todo">
<textarea wire:model="content"></textarea>
<select wire:model="status">
    <option value="draft">Draft</option>
</select>
```

Изменения в поле мгновенно синхронизируются с PHP-свойством при следующем серверном запросе.

## Сброс и извлечение свойств

```php
$this->reset('todo');           // Сброс до начального значения
$this->reset(['title', 'content']);

$this->pull('todo');            // Сброс + возврат значения
$this->pull();                  // Все свойства
$this->pull(['title', 'content']);
```

## Поддерживаемые типы

### Примитивы

`string`, `int`, `float`, `bool`, `array`, `null`

### PHP-объекты

`Collection`, `Eloquent Collection`, `Eloquent Model`, `DateTime`, `Carbon`, `Stringable`

Важно: при хранении Eloquent-коллекций запрос выполняется заново при каждой гидратации. Для дорогих запросов используйте **computed properties**.

### Кастомные типы через Wireable

```php
use Livewire\Wireable;

class Customer implements Wireable
{
    public function toLivewire()
    {
        return ['name' => $this->name, 'age' => $this->age];
    }

    public static function fromLivewire($value)
    {
        return new static($value['name'], $value['age']);
    }
}
```

Для более сложных сценариев — **Synthesizers**.

## Доступ из JavaScript: $wire

`$wire` — магический объект, доступный из Alpine:

```blade
<div>
    <input type="text" wire:model="todo">
    Character count: <span x-text="$wire.todo.length"></span>
</div>
```

Изменение свойств без серверного запроса:

```blade
<button x-on:click="$wire.title = ''">Clear</button>
```

Вызов методов:

```blade
<input x-on:blur="$wire.save()">
<button x-on:click="$wire.deletePost({{ $post->id }})">Delete</button>
```

## Связанные страницы

- [Компоненты: форматы и рендеринг](./components.md)
- [Действия и события](./actions-events.md)
- [Интеграция с Alpine.js](./alpine-integration.md)
