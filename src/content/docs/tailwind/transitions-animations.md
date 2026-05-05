---
title: "Анимации и переходы"
description: "Transition, Transform, Animation и Filters в Tailwind CSS v4"
sidebar:
  order: 8
---

> Источник: `raw/2026/0207/transition-property.md`, `raw/2026/0207/transform.md`, `raw/2026/0207/animation.md`, `raw/2026/0207/filter.md`

## Transitions

```html
<button class="bg-blue-500 transition hover:bg-blue-700">
<button class="transition-all duration-300 ease-in-out hover:scale-110">
<button class="transition-colors duration-200 delay-100">
```

| Класс | Назначение |
|---|---|
| `transition` | Все свойства |
| `transition-colors` | Только цвета |
| `transition-opacity` | Только прозрачность |
| `transition-transform` | Только трансформации |
| `duration-300` | 300ms |
| `ease-in` / `ease-out` / `ease-in-out` | Функция сглаживания |
| `delay-100` | Задержка 100ms |

## Transform

```html
<div class="scale-125">Масштаб 125%</div>
<div class="rotate-45">Поворот 45°</div>
<div class="translate-x-4">Сдвиг по X</div>
<div class="-translate-y-2">Сдвиг вверх</div>
<div class="skew-x-3">Наклон</div>
```

Origin:

```html
<div class="origin-top-left rotate-45">Из левого верхнего угла</div>
<div class="origin-center">Из центра</div>
```

### Произвольные значения

```html
<div class="rotate-[17deg]">
<div class="scale-[0.85]">
```

## Animation

```html
<div class="animate-spin">Вращение</div>
<div class="animate-ping">Пульс-индикатор</div>
<div class="animate-pulse">Пульсация</div>
<div class="animate-bounce">Прыжок</div>
```

Кастомная анимация через `@theme`:

```css
@theme {
  --animate-wiggle: wiggle 1s ease-in-out infinite;
}
@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}
```

```html
<div class="animate-wiggle">...</div>
```

## Filters

```html
<div class="blur-sm">Размытие</div>
<div class="brightness-150">Яркость 150%</div>
<div class="contrast-125">Контраст 125%</div>
<div class="grayscale">Ч/б</div>
<div class="sepia">Сепия</div>
<div class="opacity-50">Прозрачность 50%</div>
```

### Комбинация фильтров

```html
<div class="blur-sm grayscale opacity-75">
```

Tailwind использует CSS-переменные для композиции эффектов — значения не конфликтуют.

## Backdrop Filters

```html
<div class="backdrop-blur-md bg-white/30">
<div class="backdrop-brightness-50">
<div class="backdrop-grayscale">
```

## Связанные страницы

- [Layout: Flexbox и Grid](./layout-core.md)
- [Типографика и фоны](./typography-backgrounds.md)
- [Кастомизация](./customization.md)
