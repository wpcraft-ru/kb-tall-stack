---
title: "UI-компоненты (Dropdown, Modal)"
description: "Готовые Alpine.js компоненты: выпадающее меню и модальное окно — скринкасты, копирование кода, интеграции со сторонними библиотеками."
sidebar:
  order: 11
---

Alpine.js предоставляет готовые к использованию UI-компоненты, которые можно копировать в проект.

## Философия компонентов Alpine

- **Бери и вставляй** — каждый компонент это самодостаточный HTML/CSS/JS-код
- **Скринкасты** — к каждому компоненту прилагается видео-инструкция
- **Без зависимостей** — чистый Alpine.js, никаких дополнительных библиотек
- **Headless** — компоненты без стилей (используйте Tailwind или свой CSS)

> Компоненты доступны по подписке ($99 lifetime) и включают интеграции с популярными open-source библиотеками: чарты, rich-text редакторы и другое.

## Dropdown — выпадающее меню

```html
<div x-data="{ open: false }">
    <!-- Кнопка-триггер -->
    <button @click="open = !open">
        Меню
    </button>

    <!-- Выпадающее меню -->
    <div x-show="open" 
         @click.outside="open = false"
         x-transition.opacity
         x-anchor.bottom-start="$refs.trigger">
        <a href="/profile">Профиль</a>
        <a href="/settings">Настройки</a>
        <a href="/logout">Выйти</a>
    </div>
</div>
```

### Ключевые техники для dropdown

| Техника | Директива | Объяснение |
|---------|-----------|------------|
| Показ/скрытие | `x-show="open"` | Видимость меню |
| Клик снаружи | `@click.outside="open = false"` | Закрытие при клике вне меню |
| Позиционирование | `x-anchor` (плагин Anchor) | Привязка к кнопке |
| Анимация | `x-transition.opacity` | Плавное появление |
| Esc | `@keydown.escape="open = false"` | Закрытие по Escape |
| Фокус | `x-trap="open"` (плагин Focus) | Удержание фокуса внутри |

## Modal — модальное окно

```html
<div x-data="{ open: false }">
    <!-- Триггер -->
    <button @click="open = true">Открыть</button>

    <!-- Оверлей -->
    <div x-show="open" 
         x-transition.opacity
         class="fixed inset-0 bg-black/50"
         @click="open = false">
    </div>

    <!-- Модальное окно -->
    <div x-show="open" 
         x-transition.scale
         x-trap="open"
         @keydown.escape="open = false"
         class="fixed inset-0 flex items-center justify-center">
        
        <div class="bg-white p-6 rounded-lg shadow-xl" 
             @click.stop>
            <h2>Заголовок</h2>
            <p>Содержимое модального окна...</p>
            <button @click="open = false">Закрыть</button>
        </div>
    </div>
</div>
```

### Ключевые техники для modal

| Техника | Реализация |
|---------|------------|
| Оверлей | Отдельный `div` с `@click="open = false"` |
| Предотвращение закрытия при клике внутри | `@click.stop` на содержимом |
| Ловушка фокуса | `x-trap="open"` (плагин Focus) |
| Escape | `@keydown.escape="open = false"` |
| Блокировка скролла | `overflow: hidden` на `body` через `$watch` или `x-effect` |
| Телепортация | `x-teleport="body"` для обхода `z-index` |

### Модальное окно с телепортацией

```html
<div x-data="{ open: false }">
    <button @click="open = true">Открыть</button>

    <template x-teleport="body">
        <div x-show="open" 
             x-transition.opacity
             @keydown.escape="open = false">
            <!-- Модалка в конце body, вне текущего stacking context -->
        </div>
    </template>
</div>
```

## Интеграции со сторонними библиотеками

Компоненты Alpine включают готовые интеграции с популярными библиотеками:

- **Chart.js** — графики и диаграммы
- **Flatpickr** — выбор даты
- **Quill / Tiptap** — rich-text редакторы
- **SortableJS** — drag-and-drop списки
- **Popper.js** — продвинутое позиционирование

Пример интеграции с Chart.js:

```html
<div x-data="chart()">
    <canvas x-ref="canvas"></canvas>
</div>

<script>
document.addEventListener('alpine:init', () => {
    Alpine.data('chart', () => ({
        init() {
            new Chart(this.$refs.canvas, {
                type: 'bar',
                data: { /*...*/ }
            })
        }
    }))
})
</script>
```

## Материалы и источники

- [Alpine.js Components](https://alpinejs.dev/components)
- [Alpine UI — Dropdown component](https://alpinejs.dev/component/dropdown)
- [Alpine UI — Modal component](https://alpinejs.dev/component/modal)

> Источник: `raw/2026/0312/components.md`, `raw/2026/0312/component-dropdown.md`, `raw/2026/0312/component-modal.md`
