---
title: "Интеграция с Alpine.js"
description: "Alpine.js в Livewire: $wire, x-data, вызов методов, диспатч событий, совместное использование"
sidebar:
  order: 7
---

> Источник: `raw/2026/0105/alpine.md`

## Alpine «из коробки»

Livewire включает Alpine.js — отдельная установка не нужна. Каждый Livewire-компонент под капотом является Alpine-компонентом.

## Базовый пример Alpine

```blade
<div x-data="{ count: 0 }">
    <h2 x-text="count"></h2>
    <button x-on:click="count++">+</button>
</div>
```

## Совместное использование

```blade
<div>
    <h1>{{ $post->title }}</h1>
    <div x-data="{ expanded: false }">
        <button x-on:click="expanded = !expanded">
            <span x-show="!expanded">Show content...</span>
            <span x-show="expanded">Hide content...</span>
        </button>
        <div x-show="expanded">
            {{ $post->content }}
        </div>
    </div>
</div>
```

## $wire — мост Alpine → PHP

### Чтение свойств

```blade
<span x-text="$wire.todo.length"></span>
```

### Изменение свойств (без серверного запроса)

```blade
<button x-on:click="$wire.title = ''">Clear</button>
```

### Вызов методов

```blade
<input x-on:blur="$wire.save()">
<button x-on:click="$wire.deletePost({{ $post->id }})">Delete</button>
```

## Диспатч событий из Alpine

```blade
<button x-on:click="$dispatch('post-created')">Create</button>
<button x-on:click="$dispatch('post-created', { title: 'My Post' })">
```

## Прослушивание событий Livewire в Alpine

```blade
<div x-on:post-created="alert('New post!')">
<div x-on:post-created.window="alert('From any component')">
```

## Альтернативы Alpine

Для простых случаев — `$wire` напрямую:

```blade
<!-- Вместо Alpine dispatch: -->
<button x-on:click="$dispatch('post-created')">

<!-- Можно использовать $wire: -->
<button wire:click="$dispatch('post-created')">
```

## Связанные страницы

- [Свойства и привязка данных](./properties-data-binding.md)
- [Действия и события](./actions-events.md)
- [Вложенные компоненты](./nesting-children.md)
