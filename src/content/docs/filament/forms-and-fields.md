---
title: "Формы и поля"
description: "Form Builder в Filament: все типы полей, валидация, условная видимость, Repeater, Builder, кастомные поля"
sidebar:
  order: 5
---

> Источник: `raw/2025/1202/forms-overview.md`, `raw/2025/1202/forms-validation.md`, `raw/2025/1202/forms-custom-fields.md`

## Обзор Form Builder

Form Builder — декларативный API для создания форм. Поля описываются как PHP-объекты с цепочкой методов для настройки.

```php
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;

public static function form(Form $form): Form
{
    return $form->schema([
        TextInput::make('name')
            ->required()
            ->maxLength(255),
        TextInput::make('email')
            ->email()
            ->required()
            ->unique(ignoreRecord: true),
        Select::make('status')
            ->options([
                'draft' => 'Draft',
                'published' => 'Published',
                'archived' => 'Archived',
            ])
            ->default('draft'),
    ]);
}
```

## Типы полей

### Текстовые

| Поле | Назначение |
|---|---|
| `TextInput` | Однострочный текст |
| `Textarea` | Многострочный текст |
| `RichEditor` | WYSIWYG-редактор (Tiptap) |
| `MarkdownEditor` | Markdown-редактор |
| `CodeEditor` | Редактор кода |

### Выбор

| Поле | Назначение |
|---|---|
| `Select` | Выпадающий список |
| `Checkbox` | Одиночный чекбокс |
| `CheckboxList` | Список чекбоксов |
| `Radio` | Радио-кнопки |
| `Toggle` | Переключатель |
| `ToggleButtons` | Группа кнопок-переключателей |

### Специализированные

| Поле | Назначение |
|---|---|
| `DatePicker` / `DateTimePicker` | Дата и время |
| `ColorPicker` | Выбор цвета |
| `FileUpload` | Загрузка файлов |
| `TagsInput` | Ввод тегов |
| `KeyValue` | Ключ-значение |
| `Hidden` | Скрытое поле |
| `Slider` | Слайдер-значение |

### Сложные структуры

| Поле | Назначение |
|---|---|
| `Repeater` | Повторяющийся набор полей |
| `Builder` | Конструктор блоков (аналог ACF) |

## Валидация

Правила Laravel-валидации прямо в полях:

```php
TextInput::make('email')
    ->email()
    ->required()
    ->unique(table: 'users', column: 'email', ignoreRecord: true),

TextInput::make('age')
    ->numeric()
    ->minValue(18)
    ->maxValue(120),
```

Кастомные правила:

```php
TextInput::make('username')
    ->rules(['regex:/^[a-z0-9_-]+$/']),
```

### Валидация на уровне формы

Для сложной логики — в Resource:

```php
public static function form(Form $form): Form
{
    return $form->schema([/* ... */])
        ->statePath('data')
        ->rules([
            fn (Get $get): array => [
                // Динамические правила
            ],
        ]);
}
```

## Условная видимость и состояние

### Видимость поля

```php
Select::make('has_discount')
    ->boolean()
    ->live(),        // Реактивность — обновление формы при изменении

TextInput::make('discount_percentage')
    ->visible(fn (Get $get): bool => $get('has_discount')),
```

### Блокировка при редактировании

```php
TextInput::make('slug')
    ->disabled(fn (string $operation): bool => $operation === 'edit'),
```

### Динамические опции

```php
Select::make('city_id')
    ->options(fn (Get $get): Collection => City::query()
        ->where('country_id', $get('country_id'))
        ->pluck('name', 'id')),
```

## Repeater

Повторяющийся набор полей:

```php
Repeater::make('items')
    ->schema([
        Select::make('product_id')->relationship('product', 'name'),
        TextInput::make('quantity')->numeric()->default(1),
        TextInput::make('unit_price')->numeric()->prefix('€'),
    ])
    ->columns(3)
    ->defaultItems(1),
```

## Builder

Конструктор блоков с разными типами:

```php
Builder::make('content')
    ->blocks([
        Block::make('heading')
            ->schema([TextInput::make('title')->required()]),
        Block::make('paragraph')
            ->schema([RichEditor::make('text')->required()]),
        Block::make('image')
            ->schema([FileUpload::make('image')->image()]),
    ]),
```

## Кастомные поля

Создание своего типа поля:

```bash
php artisan make:form-field QrCodeField
```

## Связанные страницы

- [Resources: CRUD-интерфейсы](./resources-crud.md)
- [Таблицы и фильтры](./tables-and-filters.md)
- [Infolists, Actions и Notifications](./infolists-actions-notifications.md)
