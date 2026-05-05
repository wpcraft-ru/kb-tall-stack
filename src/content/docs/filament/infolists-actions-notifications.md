---
title: "Infolists, Actions и Notifications"
description: "Infolists для просмотра записей, Actions для кнопок и модалов, Notifications для уведомлений в Filament"
sidebar:
  order: 7
---

> Источник: `raw/2025/1202/infolists-overview.md`, `raw/2025/1202/actions-overview.md`, `raw/2025/1202/notifications-overview.md`

## Infolists

Infolist — read-only отображение данных записи в структурированном виде. Используется на View-страницах и в модалах.

```php
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Components\IconEntry;

public static function infolist(Infolist $infolist): Infolist
{
    return $infolist->schema([
        TextEntry::make('title'),
        TextEntry::make('description')
            ->columnSpanFull(),
        IconEntry::make('is_featured')
            ->boolean(),
        TextEntry::make('created_at')
            ->dateTime(),
        TextEntry::make('author.name')
            ->label('Author'),
    ]);
}
```

### Типы записей (Entries)

| Entry | Назначение |
|---|---|
| `TextEntry` | Текстовое значение |
| `IconEntry` | Иконка (булево) |
| `ImageEntry` | Изображение |
| `ColorEntry` | Цвет |
| `CodeEntry` | Блок кода |
| `KeyValueEntry` | Ключ-значение |
| `RepeatableEntry` | Повторяющиеся данные |

### Продвинутые возможности

```php
TextEntry::make('status')
    ->badge()
    ->color(fn (string $state): string => match ($state) {
        'published' => 'success',
        'draft' => 'warning',
        default => 'gray',
    }),

TextEntry::make('url')
    ->url(fn ($record) => $record->url)
    ->openUrlInNewTab(),
```

## Actions

Action — интерактивный элемент (кнопка, ссылка), выполняющий действие. Используется на страницах, в таблицах, формах, виджетах.

### Простой Action

```php
use Filament\Actions\Action;

Action::make('generate_report')
    ->label('Generate Report')
    ->icon('heroicon-o-document-chart-bar')
    ->action(function () {
        // Generate report
    })
```

### Модальное окно с формой

```php
Action::make('create')
    ->form([
        TextInput::make('title')->required(),
        RichEditor::make('content'),
    ])
    ->action(function (array $data) {
        Post::create($data);
    })
    ->modalHeading('Create Post')
    ->modalSubmitActionLabel('Save'),
```

### Подтверждение

```php
Action::make('delete')
    ->color('danger')
    ->requiresConfirmation()
    ->modalHeading('Delete this post?')
    ->modalDescription('This action cannot be undone.')
    ->action(fn (Post $record) => $record->delete()),
```

### Группировка

```php
use Filament\Actions\ActionGroup;

ActionGroup::make([
    Action::make('edit'),
    Action::make('view'),
    Action::make('delete'),
])
    ->button()
    ->label('Actions')
    ->dropdown(),
```

## Notifications

### Toast-уведомления

```php
use Filament\Notifications\Notification;

Notification::make()
    ->title('Post saved')
    ->success()
    ->send();
```

### С иконкой и действием

```php
Notification::make()
    ->title('Export complete')
    ->body('250 records exported to CSV')
    ->success()
    ->icon('heroicon-o-document-arrow-down')
    ->actions([
        Action::make('download')
            ->url(Storage::url($filename)),
    ])
    ->send();
```

### Database Notifications

Сохраняются в БД и отображаются в колокольчике панели:

```php
use Filament\Notifications\Actions\Action;
use Filament\Notifications\Notification;

Notification::make()
    ->title('New comment')
    ->body(fn ($comment) => "{$comment->author->name}: {$comment->excerpt}")
    ->actions([
        Action::make('view')
            ->url(fn () => route('posts.show', $comment->post)),
    ])
    ->sendToDatabase($recipients);
```

### Broadcast Notifications

Отправка в реальном времени через Laravel Echo / Pusher / Reverb:

```php
Notification::make()
    ->title('New order #' . $order->id)
    ->sendToDatabase($admins)
    ->broadcast($admins);
```

## Связанные страницы

- [Forms and Fields](./forms-and-fields.md)
- [Tables and Filters](./tables-and-filters.md)
- [Widgets, Testing and Deployment](./widgets-testing-deployment.md)
