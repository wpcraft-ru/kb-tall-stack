---
title: "Адаптивный дизайн"
description: "Breakpoints, mobile-first подход, container queries, кастомные брейкпойнты и произвольные значения в Tailwind CSS v4"
sidebar:
  order: 3
---

> Источник: `raw/2026/0207/responsive-design.md`

## Mobile-first по умолчанию

Tailwind использует mobile-first: **непрефиксные классы работают на всех размерах**, префиксные — от брейкпойнта и выше.

```html
<!-- Всегда ширина 16, на md и выше — 32, на lg и выше — 48 -->
<img class="w-16 md:w-32 lg:w-48" src="..." />
```

Не используйте `sm:` для мобильных — используйте непрефиксные:

```html
<!-- ✗ НЕПРАВИЛЬНО -->
<div class="sm:text-center"></div>

<!-- ✓ ПРАВИЛЬНО: mobile-first -->
<div class="text-center sm:text-left"></div>
```

## Стандартные брейкпойнты

| Брейкпойнт | Ширина |
|---|---|
| `sm` | ≥640px |
| `md` | ≥768px |
| `lg` | ≥1024px |
| `xl` | ≥1280px |
| `2xl` | ≥1536px |

## Диапазоны брейкпойнтов

Для стилей только в конкретном диапазоне:

```html
<!-- Только md (т.е. от md до lg) -->
<div class="md:max-lg:flex"></div>
```

Можно также через `max-*`:

```html
<div class="max-[600px]:bg-sky-300 min-[320px]:text-center"></div>
```

## Кастомные брейкпойнты

```css
@import "tailwindcss";
@theme {
  --breakpoint-xs: 30rem;
  --breakpoint-3xl: 120rem;
}
```

Удаление дефолтного:

```css
@theme {
  --breakpoint-2xl: initial;
}
```

Полная перезапись:

```css
@theme {
  --breakpoint-*: initial;
  --breakpoint-tablet: 40rem;
  --breakpoint-laptop: 64rem;
  --breakpoint-desktop: 80rem;
}
```

## Container Queries

Стилизация на основе размера родителя, а не viewport:

```html
<div class="@container">
  <div class="flex flex-col @md:flex-row">
    <!-- На @md (≥28rem) контейнера → flex-row -->
  </div>
</div>
```

### Именованные контейнеры

```html
<div class="@container/main">
  <div class="flex @sm/main:flex-col"></div>
</div>
```

### Диапазоны контейнеров

```html
<div class="@container">
  <div class="flex @sm:@max-md:flex-col"></div>
</div>
```

## Связанные страницы

- [Утилитарный подход и основы](./utility-first-fundamentals.md)
- [Тёмная тема](./dark-mode.md)
- [Layout: Flexbox и Grid](./layout-core.md)
