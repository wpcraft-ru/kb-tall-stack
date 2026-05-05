---
title: "Формы и валидация"
description: "Form Objects, #[Validate], авто-валидация, кастомные сообщения и полный цикл работы с формами в Livewire 4.x"
sidebar:
  order: 5
---

> Источник: `raw/2026/0105/forms.md`, `raw/2026/0105/validation.md`

## Валидация встроенная (validate)

```php
public function save()
{
    $validated = $this->validate([
        'title' => 'required|min:3',
        'content' => 'required|min:3',
    ]);

    Post::create($validated);
    return redirect()->to('/posts');
}
```

В шаблоне:

```blade
<form wire:submit="save">
    <input wire:model="title">
    @error('title') <span>{{ $message }}</span> @enderror
    <button type="submit">Save</button>
</form>
```

## #[Validate] — валидация на свойствах

```php
use Livewire\Attributes\Validate;

#[Validate('required|min:3')]
public $title = '';

#[Validate('required|min:5')]
public $content = '';

public function save()
{
    $this->validate();  // Валидирует все #[Validate] свойства

    Post::create($this->only(['title', 'content']));
    return redirect()->to('/posts');
}
```

### Отключение авто-валидации

```php
#[Validate('required', onUpdate: false)]
public $title = '';
```

По умолчанию валидация срабатывает при каждом обновлении свойства. `onUpdate: false` — валидация только при ручном вызове `$this->validate()`.

### Кастомное имя поля

```php
#[Validate('required', as: 'date of birth')]
public $dob;
```

### Кастомное сообщение

```php
#[Validate('required', message: 'Please provide a post title')]
public $title;
```

### Несколько правил с разными сообщениями

```php
#[Validate('required', message: 'Please provide a post title')]
#[Validate('min:3', message: 'This title is too short')]
public $title;
```

### Валидация массива

```php
#[Validate([
    'todos' => 'required',
    'todos.*' => ['required', 'min:3'],
])]
public $todos = [];
```

## Form Objects

Вынос формы в отдельный класс:

```bash
php artisan livewire:form PostForm
```

Создаёт `app/Livewire/Forms/PostForm.php`:

```php
use Livewire\Attributes\Validate;
use Livewire\Form;

class PostForm extends Form
{
    #[Validate('required|min:5')]
    public $title = '';

    #[Validate('required|min:5')]
    public $content = '';

    public function store()
    {
        $this->validate();
        Post::create($this->only(['title', 'content']));
    }

    public function update()
    {
        $this->validate();
        $this->post->update($this->only(['title', 'content']));
    }
}
```

Использование в компоненте:

```php
public PostForm $form;

public function save()
{
    $this->form->store();
    return $this->redirect('/posts');
}
```

В шаблоне — с префиксом `form.`:

```blade
<input wire:model="form.title">
@error('form.title') {{ $message }} @enderror
```

### Заполнение при редактировании

```php
public function mount(Post $post)
{
    $this->form->setPost($post);  // Заполняет title, content из модели
}
```

## Полный цикл формы

1. Создание → `$this->form->store()`
2. Редактирование → `$this->form->setPost($post)` в `mount()`, затем `$this->form->update()`
3. Сброс → `$this->form->reset()` после сохранения
4. Валидация → `#[Validate]` на свойствах + `$this->form->validate()`

## Связанные страницы

- [Свойства и привязка данных](./properties-data-binding.md)
- [Действия и события](./actions-events.md)
- [Безопасность](./security-best-practices.md)
