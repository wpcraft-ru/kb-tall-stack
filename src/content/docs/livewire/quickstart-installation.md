---
title: "Установка и Quickstart"
description: "Установка Livewire 4.x, создание первого компонента, макет, роутинг и базовые концепции"
sidebar:
  order: 1
---

> Источник: `raw/2026/0105/installation.md`, `raw/2026/0105/quickstart.md`

## Требования

- Laravel 10+
- PHP 8.1+

## Установка

```bash
composer require livewire/livewire
```

Livewire использует авто-обнаружение пакетов Laravel — дополнительная настройка не требуется.

## Создание макета

```bash
php artisan livewire:layout
```

Создаёт `resources/views/layouts/app.blade.php`:

```blade
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title ?? config('app.name') }}</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @livewireStyles
</head>
<body>
    {{ $slot }}
    @livewireScripts
</body>
</html>
```

`@livewireStyles` и `@livewireScripts` подключают JavaScript и CSS Livewire. В JavaScript уже встроен Alpine.js — отдельная установка не нужна.

## Первый компонент

### Создание

```bash
php artisan make:livewire pages::post.create
```

Создаёт `resources/views/pages/post/⚡create.blade.php` — single-file компонент (PHP + Blade в одном файле).

### Код компонента

```php
use Livewire\Component;

new class extends Component {
    public string $title = '';
    public string $content = '';

    public function save()
    {
        $this->validate([
            'title' => 'required|max:255',
            'content' => 'required',
        ]);

        Post::create([
            'title' => $this->title,
            'content' => $this->content,
        ]);

        return $this->redirect('/posts');
    }
};
?>
<form wire:submit="save">
    <input type="text" wire:model="title">
    @error('title') <span style="color: red;">{{ $message }}</span> @enderror

    <textarea wire:model="content" rows="5"></textarea>
    @error('content') <span style="color: red;">{{ $message }}</span> @enderror

    <button type="submit">Save Post</button>
</form>
```

### Ключевые моменты

- **`wire:model`** — двустороннее связывание (изменения в поле → свойство PHP обновляется автоматически)
- **`wire:submit`** — перехватывает отправку формы, вызывает `save()` без перезагрузки страницы
- **`@error`** — показывает ошибки валидации
- **Один корневой элемент** — у компонента должен быть ровно один корневой HTML-элемент (`<form>` в примере)

### Регистрация маршрута

```php
// routes/web.php
Route::livewire('/post/create', 'pages::post.create');
```

Компонент рендерится внутри макета `app.blade.php` на месте `{{ $slot }}`.

## Что дальше

- Откройте `/post/create` в браузере
- Попробуйте отправить пустую форму — увидите ошибки валидации
- Заполните поля и нажмите «Save» — данные уйдут на сервер через AJAX

## Связанные страницы

- [Компоненты: форматы и рендеринг](./components.md)
- [Свойства и привязка данных](./properties-data-binding.md)
- [Формы и валидация](./forms-validation.md)
