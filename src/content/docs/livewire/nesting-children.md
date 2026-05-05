---
title: "Вложенные компоненты"
description: "Nesting, передача props, #[Reactive], wire:model на дочерних компонентах и рендеринг в цикле в Livewire 4.x"
sidebar:
  order: 6
---

> Источник: `raw/2026/0105/nesting.md`, `raw/2026/0105/understanding-nesting.md`

## Зачем вложенность

Перед извлечением части шаблона в дочерний компонент спросите: **должен ли этот контент быть «живым»**? Если нет — используйте простой Blade-компонент. Livewire-компонент создавайте только если нужна реактивность.

## Рендеринг дочернего компонента

```blade
<!-- Родительский dashboard.blade.php -->
<div>
    <h1>Dashboard</h1>
    <livewire:todos />
</div>
```

## Передача props

```blade
<!-- Родитель -->
<livewire:todo-count :todos="$this->todos" />

<!-- Сокращённый синтаксис: -->
<livewire:todo-count :$todos />
```

Приём в дочернем компоненте:

```php
public $todos;

public function mount($todos)
{
    $this->todos = $todos;
}
```

Если имена совпадают — `mount()` можно опустить.

### Статичные props

```blade
<livewire:todo-count label="Todo Count:" :$todos />
<livewire:todo-count :$todos inline />  {{-- inline=true --}}
```

## Рендеринг в цикле — ключи обязательны

```blade
@foreach ($todos as $todo)
    <livewire:todo-item :$todo :wire:key="$todo->id" />
@endforeach
```

**`wire:key` обязателен** при рендеринге в цикле. Без него Livewire не сможет отслеживать компоненты при перестановках.

## Реактивные props

По умолчанию props **не реактивны** — изменение в родителе не триггерит обновление дочернего компонента. Это сделано для производительности.

Для реактивности — `#[Reactive]`:

```php
use Livewire\Attributes\Reactive;

#[Reactive]
public $todos;
```

Теперь любое изменение `$todos` в родителе автоматически обновит дочерний компонент.

## wire:model на дочернем компоненте (Modelable)

Позволяет родителю использовать `wire:model` напрямую с дочерним компонентом:

```blade
<!-- Родитель -->
<livewire:todo-input wire:model="todo" />
```

Дочерний компонент должен использовать `#[Modelable]`:

```php
use Livewire\Attributes\Modelable;

#[Modelable]
public $value = '';
```

Теперь `$todo` в родителе синхронизирован с `$value` в дочернем компоненте.

## Прямой доступ к родителю

Из дочернего шаблона:

```blade
<button wire:click="$parent.showCreateForm()">Create</button>
```

## Когда не нужны дочерние компоненты

Рассмотрите **Islands** — изолированные регионы обновления внутри одного компонента, без управления props и событиями.

## Связанные страницы

- [Компоненты: форматы и рендеринг](./components.md)
- [Действия и события](./actions-events.md)
- [Интеграция с Alpine.js](./alpine-integration.md)
