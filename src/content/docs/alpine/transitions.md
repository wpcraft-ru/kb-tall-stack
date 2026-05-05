---
title: "Переходы и эффекты"
description: "Анимации в Alpine.js: x-transition, x-teleport, x-cloak, x-ignore, x-effect — CSS-переходы, телепортация в DOM, скрытие до загрузки."
sidebar:
  order: 6
---

## x-transition — анимации показа/скрытия

Директива `x-transition` добавляет CSS-переходы элементам с `x-show`:

```html
<div x-data="{ open: false }">
    <button @click="open = !open">Toggle</button>
    <div x-show="open" x-transition>
        Привет 👋
    </div>
</div>
```

По умолчанию применяется fade + scale.

### Настройка длительности

```html
<div x-show="open" x-transition.duration.500ms>
```

Разная длительность для появления и скрытия:

```html
<div x-show="open"
     x-transition:enter.duration.500ms
     x-transition:leave.duration.200ms>
```

### Модификаторы анимации

| Модификатор | Эффект |
|---|---|
| `x-transition.opacity` | Только прозрачность |
| `x-transition.scale` | Только масштаб |
| `x-transition.origin.top` | Масштаб от верхнего края |
| `x-transition.origin.bottom` | Масштаб от нижнего края |
| `x-transition.origin.left` | Масштаб от левого края |
| `x-transition.origin.right` | Масштаб от правого края |

Можно комбинировать: `x-transition.opacity.scale.origin.top.duration.500ms`

### Применение своих CSS-классов

```html
<div x-show="open"
     x-transition:enter="transition ease-out duration-300"
     x-transition:enter-start="opacity-0 scale-90"
     x-transition:enter-end="opacity-100 scale-100"
     x-transition:leave="transition ease-in duration-200"
     x-transition:leave-start="opacity-100 scale-100"
     x-transition:leave-end="opacity-0 scale-90">
```

Идеально работает с Tailwind CSS-классами.

## x-teleport — перемещение в DOM

`x-teleport` переносит часть шаблона в другую часть DOM-дерева:

```html
<body>
    <div x-data="{ open: false }">
        <button @click="open = !open">Модальное окно</button>
        
        <template x-teleport="body">
            <div x-show="open">
                Содержимое модального окна...
            </div>
        </template>
    </div>
    
    <div>Другой контент ПОСЛЕ разметки модалки.</div>
</body>
```

> Селектор `x-teleport` принимает любой CSS-селектор: название тега (`body`), класс (`.my-class`), ID (`#my-id`).

### Особенности телепортации

- Телепортированный контент **сохраняет доступ** к Alpine-контексту родителя
- `$refs`, `$root`, `$data` работают как обычно
- Нативные DOM-события **не знают** о телепортации и всплывают по реальному DOM-дереву
- Чтобы события доходили до родительского Alpine-компонента, подписывайтесь на них на самом `</template>`:

```html
<template x-teleport="body" @click="open = false">
```

## x-cloak — скрытие до инициализации

`x-cloak` прячет элемент до того, как Alpine завершит инициализацию:

```html
<div x-data x-cloak>
    <!-- Спрятано, пока Alpine не загрузится -->
</div>

<style>
[x-cloak] { display: none !important; }
</style>
```

Альтернативно можно использовать `x-show` с начальным `false` и дождаться `x-init`.

## x-ignore — исключение из Alpine

`x-ignore` заставляет Alpine игнорировать элемент и его потомков:

```html
<div x-data="{ count: 0 }">
    <span x-text="count"></span>
    
    <div x-ignore>
        <!-- Alpine не трогает этот блок -->
        <span x-text="count"></span> <!-- НЕ РАБОТАЕТ -->
    </div>
</div>
```

Полезно для вставки стороннего HTML, который может конфликтовать с Alpine.

## x-effect — реактивные эффекты

`x-effect` выполняет код и автоматически отслеживает зависимости. При изменении любой из них — код выполняется снова:

```html
<div x-data="{ count: 0, doubled: 0 }" 
     x-effect="doubled = count * 2">
    <button @click="count++">+1</button>
    <span x-text="count"></span> × 2 = <span x-text="doubled"></span>
</div>
```

Код выполняется **немедленно** и затем при каждом изменении зависимых данных.

## Материалы и источники

- [Alpine.js x-transition](https://alpinejs.dev/directives/transition)
- [Alpine.js x-teleport](https://alpinejs.dev/directives/teleport)
- [Alpine.js x-cloak](https://alpinejs.dev/directives/cloak)
- [Alpine.js x-ignore](https://alpinejs.dev/directives/ignore)
- [Alpine.js x-effect](https://alpinejs.dev/directives/effect)

> Источник: `raw/2026/0312/directives-transition.md`, `raw/2026/0312/directives-teleport.md`, `raw/2026/0312/directives-cloak.md`, `raw/2026/0312/directives-ignore.md`, `raw/2026/0312/directives-effect.md`
