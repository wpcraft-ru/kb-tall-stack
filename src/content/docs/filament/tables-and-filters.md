---
title: "Таблицы и фильтры"
description: "Table Builder в Filament: колонки, фильтры, сортировка, поиск, actions, группировка, summaries"
sidebar:
  order: 6
---

> Источник: `raw/2025/1202/tables-overview.md`, `raw/2025/1202/tables-filters-overview.md`

## Обзор Table Builder

Table Builder — декларативное описание таблиц с колонками, фильтрами, действиями и поиском:

```php
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\IconColumn;

public static function table(Table $table): Table
{
    return $table
        ->columns([
            TextColumn::make('title')->searchable()->sortable(),
            TextColumn::make('slug'),
            IconColumn::make('is_featured')->boolean(),
        ])
        ->defaultSort('created_at', 'desc');
}
```

## Типы колонок

| Колонка | Назначение |
|---|---|
| `TextColumn` | Текстовое значение |
| `IconColumn` | Иконка (булево) |
| `ImageColumn` | Изображение |
| `ColorColumn` | Цветной кружок |
| `SelectColumn` | Выпадающий список (inline-edit) |
| `ToggleColumn` | Переключатель (inline-edit) |
| `TextInputColumn` | Текстовый ввод (inline-edit) |
| `CheckboxColumn` | Чекбокс (inline-edit) |

### Настройка колонок

```php
TextColumn::make('name')
    ->searchable()          // Участвует в поиске
    ->sortable()            // Сортировка
    ->toggleable()          // Можно скрыть из UI
    ->copyable()            // Копирование по клику
    ->tooltip(fn ($record) => $record->description)
    ->limit(50)             // Обрезать до 50 символов
    ->formatStateUsing(fn (string $state): string => strtoupper($state))
```

## Фильтры

### Select-фильтр

```php
use Filament\Tables\Filters\SelectFilter;

SelectFilter::make('status')
    ->options([
        'draft' => 'Draft',
        'published' => 'Published',
    ]),
```

### Ternary-фильтр (да/нет/неважно)

```php
use Filament\Tables\Filters\TernaryFilter;

TernaryFilter::make('is_published'),
```

### Query Builder

Сложные фильтры через конструктор запросов:

```php
use Filament\Tables\Filters\QueryBuilder;

QueryBuilder::make()
    ->constraints([
        TextConstraint::make('title'),
        NumberConstraint::make('view_count'),
        DateConstraint::make('created_at'),
    ]),
```

### Кастомные фильтры

```php
use Filament\Tables\Filters\Filter;

Filter::make('popular')
    ->query(fn (Builder $query): Builder => $query->where('view_count', '>', 1000))
    ->toggle(),
```

### Макет фильтров

```php
$table->filtersLayout(FiltersLayout::Modal)      // Модальное окно
$table->filtersLayout(FiltersLayout::AboveContent) // Над таблицей
$table->filtersLayout(FiltersLayout::AboveContentCollapsible) // Сворачиваемые
```

## Действия (Actions) в таблице

```php
use Filament\Tables\Actions\Action;
use Filament\Tables\Actions\BulkAction;
use Filament\Tables\Actions\ActionGroup;

$table->actions([
    ActionGroup::make([
        Actions\EditAction::make(),
        Actions\DeleteAction::make(),
        Action::make('publish')
            ->action(fn ($record) => $record->publish())
            ->requiresConfirmation(),
    ]),
], position: ActionsPosition::BeforeColumns);

$table->bulkActions([
    BulkAction::make('export')->action(fn ($records) => /* ... */),
    BulkAction::make('delete')->requiresConfirmation(),
]);
```

## Группировка строк

```php
$table->groups(['status', 'category_id'])
    ->defaultGroup('status');
```

## Summaries (итоги)

```php
TextColumn::make('total')
    ->summarize([
        Summarizers\Sum::make()->label('Total'),
        Summarizers\Average::make()->label('Average'),
    ]);
```

## Empty State

```php
$table->emptyStateHeading('No posts yet')
    ->emptyStateDescription('Create your first post to get started.')
    ->emptyStateIcon('heroicon-o-document-text');
```

## Связанные страницы

- [Resources: CRUD-интерфейсы](./resources-crud.md)
- [Формы и поля](./forms-and-fields.md)
- [Infolists, Actions и Notifications](./infolists-actions-notifications.md)
