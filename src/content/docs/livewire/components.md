---
title: "Компоненты: форматы и рендеринг"
description: "Single-file, multi-file и class-based компоненты Livewire, рендеринг, передача props, page-компоненты и Route::livewire"
sidebar:
  order: 2
---

> Источник: `raw/2026/0105/components.md`

## Три формата компонентов

### Single-file (по умолчанию)

```bash
php artisan make:livewire post.create
```

Создаёт `resources/views/components/post/⚡create.blade.php` — PHP и Blade в одном файле. Отлично для большинства случаев.

```php
use Livewire\Component;

new class extends Component {
    public $title = '';

    public function save() { /* ... */ }
};
?>
<div>
    <input wire:model="title" type="text">
    <button wire:click="save">Save</button>
</div>
```

### Multi-file (--mfc)

```bash
php artisan make:livewire post.create --mfc
```

Разделяет на отдельные файлы в директории:

```
resources/views/components/post/⚡create/
├── create.php          # PHP-класс
├── create.blade.php    # Blade-шаблон
├── create.js           # JavaScript (опционально)
├── create.css          # Scoped-стили (опционально)
├── create.global.css   # Глобальные стили (опционально)
└── create.test.php     # Pest-тест (с --test)
```

### Class-based (Laravel)

Для перехода на class-based компоненты (как в v2/v3) — в `config/livewire.php`:

```php
'make_command' => [
    'type' => 'class',
    'emoji' => false,
],
```

### Конвертация между форматами

```bash
php artisan livewire:convert post.create          # Туда-сюда
php artisan livewire:convert post.create --mfc    # → Multi-file
php artisan livewire:convert post.create --sfc    # → Single-file
```

## ⚡ Эмодзи в имени файла

Молния в `⚡create.blade.php` делает компоненты Livewire мгновенно узнаваемыми в файловом дереве. Опционально — отключается в `config/livewire.php`:

```php
'make_command' => ['emoji' => false],
```

## Рендеринг компонентов

### В Blade

```blade
<livewire:post.create />
<livewire:post.create title="Static Title" />
<livewire:post.create :title="$dynamicTitle" />
```

Имя компонента — путь без эмодзи и расширения:
- `components/post/⚡create.blade.php` → `post.create`
- `pages/post/⚡create.blade.php` → `pages::post.create`

### Сокращённый синтаксис для переменных

Когда имя переменной совпадает с именем пропса:

```blade
<livewire:post.create :$title />
<!-- То же, что :title="$title", но короче -->
```

## Page-компоненты

Компоненты, используемые как полноценные страницы через роутинг:

```bash
php artisan make:livewire pages::post.create
```

```php
// routes/web.php
Route::livewire('/posts/create', 'pages::post.create');
```

### Передача параметров маршрута

```php
Route::livewire('/posts/{post}', 'pages::post.show');

// В компоненте — route model binding:
public Post $post; // Автоматически из маршрута
```

## mount() — конструктор компонента

```php
public function mount($title = null)
{
    $this->title = $title;
}
```

Вызывается при первом создании компонента. Принимает данные из пропсов и параметров маршрута. **Не вызывается** при последующих обновлениях.

### Авто-присвоение пропсов

Если имя свойства совпадает с именем пропса, `mount()` можно опустить — Livewire присвоит автоматически.

## Настройка через config/livewire.php

Публикация конфига:

```bash
php artisan vendor:publish --tag=livewire:config
```

## Связанные страницы

- [Установка и Quickstart](./quickstart-installation.md)
- [Свойства и привязка данных](./properties-data-binding.md)
- [Действия и события](./actions-events.md)
