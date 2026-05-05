---
title: "Утилитарный подход и основы"
description: "Философия utility-first, hover/focus, responsive-варианты, dark mode и произвольные значения в Tailwind CSS v4"
sidebar:
  order: 2
---

> Источник: `raw/2026/0207/styling-with-utility-classes.md`, `raw/2026/0207/hover-focus-and-other-states.md`

## Философия utility-first

Вместо создания классов `.btn-primary` вы комбинируете атомарные утилитарные классы прямо в HTML:

```html
<div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg">
  <img class="size-12 shrink-0" src="/img/logo.svg" alt="Logo" />
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>
```

### Почему не inline-стили

- **Дизайн-система** — значения из темы, а не магические числа
- **Состояния** — `hover:`, `focus:`, `disabled:` работают (в inline — нет)
- **Медиа-запросы** — `sm:`, `md:`, `lg:` (в inline — нет)
- **Тёмная тема** — `dark:` одним префиксом

## Variants: состояния

Каждый utility-класс можно сделать условным через префикс:

```html
<button class="bg-sky-500 hover:bg-sky-700 focus:outline-2 active:bg-sky-800">
  Save
</button>
```

### Псевдоклассы

| Variant | Состояние |
|---|---|
| `hover:` | Наведение |
| `focus:` | Фокус |
| `active:` | Нажатие |
| `disabled:` | Отключён |
| `first:` / `last:` | Первый / последний потомок |
| `odd:` / `even:` | Чётный / нечётный |
| `required:` / `invalid:` | Состояния формы |

### Групповые состояния (group)

```html
<a href="#" class="group">
  <h3 class="text-gray-900 group-hover:text-white">New project</h3>
</a>
```

Именованные группы:

```html
<li class="group/item">
  <a class="invisible group-hover/item:visible" href="#">Call</a>
</li>
```

### Каскадные variants

```html
<button class="dark:md:hover:bg-fuchsia-600 ...">Save</button>
```

## Связанные страницы

- [Установка и настройка](./installation-setup.md)
- [Адаптивный дизайн](./responsive-design.md)
- [Тёмная тема](./dark-mode.md)
