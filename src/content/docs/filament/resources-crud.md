---
title: "Resources: CRUD-интерфейсы"
description: "Создание и настройка Resource в Filament: страницы, формы, таблицы, отношения, авторизация, глобальный поиск"
sidebar:
  order: 4
---

> Источник: `raw/2025/1202/resources-overview.md`, `raw/2025/1202/resources-creating-records.md`, `raw/2025/1202/resources-editing-records.md`, `raw/2025/1202/resources-listing-records.md`, `raw/2025/1202/resources-managing-relationships.md`

## Создание Resource

```bash
php artisan make:filament-resource Customer
```

Генерирует структуру:

```
app/Filament/Resources/CustomerResource/
├── CustomerResource.php        # Главный класс
├── Pages/
│   ├── CreateCustomer.php      # Страница создания
│   ├── EditCustomer.php        # Страница редактирования
│   └── ListCustomers.php       # Страница списка
├── Schemas/
│   └── CustomerForm.php        # Схема формы
└── Tables/
    └── CustomersTable.php      # Схема таблицы
```

## Главный класс Resource

```php
class CustomerResource extends Resource
{
    protected static ?string $model = Customer::class;

    // Иконка и группа в навигации
    protected static ?string $navigationIcon = 'heroicon-o-users';
    protected static ?string $navigationGroup = 'CRM';

    // Сортировка в боковом меню
    protected static ?int $navigationSort = 2;

    // Ссылка для глобального поиска
    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Form $form): Form
    {
        return $form->schema([/* поля */]);
    }

    public static function table(Table $table): Table
    {
        return $table->columns([/* колонки */])->filters([/* фильтры */]);
    }

    public static function getRelations(): array
    {
        return [/* менеджеры отношений */];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCustomers::route('/'),
            'create' => Pages\CreateCustomer::route('/create'),
            'edit' => Pages\EditCustomer::route('/{record}/edit'),
        ];
    }
}
```

## Страницы ресурса

### List (список)

```php
class ListCustomers extends ListRecords
{
    protected static string $resource = CustomerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
```

### Create (создание)

```php
class CreateCustomer extends CreateRecord
{
    protected static string $resource = CustomerResource::class;
}
```

### Edit (редактирование)

```php
class EditCustomer extends EditRecord
{
    protected static string $resource = CustomerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
```

### View (просмотр)

```php
class ViewCustomer extends ViewRecord
{
    protected static string $resource = CustomerResource::class;
}
```

## Модальные окна (Simple Resources)

Для простых моделей — всё на одной странице в модальных окнах:

```bash
php artisan make:filament-resource Tag --simple
```

Страницы `Create` и `Edit` заменяются на соответствующие модальные окна внутри `ManageTags`.

## Автогенерация форм и таблиц

```bash
php artisan make:filament-resource Customer --generate
```

Filament анализирует структуру БД и генерирует поля формы и колонки таблицы автоматически.

## Soft Deletes

```bash
php artisan make:filament-resource Customer --soft-deletes
```

Добавляет:
- Фильтр для trashed-записей
- Кнопки `Restore` и `Force Delete`
- Настройки для работы с удалёнными записями

## Управление отношениями

Менеджеры отношений позволяют управлять связанными моделями прямо на странице редактирования:

```php
public static function getRelations(): array
{
    return [
        RelationManagers\OrdersRelationManager::class,
        RelationManagers\AddressesRelationManager::class,
    ];
}
```

## Глобальный поиск

Настройка в Resource:

```php
protected static ?string $recordTitleAttribute = 'name';

public static function getGloballySearchableAttributes(): array
{
    return ['name', 'email', 'phone'];
}

public static function getGlobalSearchResultDetails(Model $record): array
{
    return [
        'Email' => $record->email,
        'Phone' => $record->phone,
    ];
}
```

## Авторизация

В Resource:

```php
public static function canViewAny(): bool
{
    return auth()->user()->can('viewAny', Customer::class);
}
```

Для отдельных действий — политики модели.

## Вложенные ресурсы (Nesting)

```php
class CommentResource extends Resource
{
    public static function getParent(): ?string
    {
        return PostResource::class;
    }
}
```

Вложенный ресурс автоматически получает URL `/admin/posts/{post}/comments`.

## Связанные страницы

- [Быстрый старт в Filament](./getting-started.md)
- [Формы и поля](./forms-and-fields.md)
- [Таблицы и фильтры](./tables-and-filters.md)
