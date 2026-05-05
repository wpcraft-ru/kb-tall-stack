---
title: "Типографика и фоны"
description: "Текст, шрифты, фон, границы, тени и эффекты в Tailwind CSS v4"
sidebar:
  order: 7
---

> Источник: `raw/2026/0207/font-size.md`, `raw/2026/0207/font-weight.md`, `raw/2026/0207/color.md`, `raw/2026/0207/background-color.md`, `raw/2026/0207/border-radius.md`, `raw/2026/0207/box-shadow.md`

## Типографика

### Размер и жирность

```html
<h1 class="text-3xl font-bold">Заголовок</h1>
<p class="text-base font-normal leading-relaxed">Текст</p>
<span class="text-sm text-gray-500">Подпись</span>
```

| Класс | Значение |
|---|---|
| `text-xs` ... `text-9xl` | Размер шрифта |
| `font-thin` ... `font-black` | Жирность (100-900) |
| `leading-none` ... `leading-loose` | Межстрочный |
| `tracking-tighter` ... `tracking-widest` | Межбуквенный |

### Выравнивание и стиль

```html
<p class="text-center">По центру</p>
<p class="text-justify">По ширине</p>
<span class="italic">Курсив</span>
<span class="underline decoration-wavy decoration-blue-500">Подчёркнуто</span>
<span class="line-through">Зачёркнуто</span>
<span class="uppercase">КАПСОМ</span>
```

### Шрифт

```html
<p class="font-sans">Sans-serif</p>
<p class="font-serif">Serif</p>
<p class="font-mono">Моноширинный</p>
```

## Цвет текста

```html
<p class="text-gray-900">Тёмный текст</p>
<p class="text-blue-600">Синий текст</p>
<p class="text-red-500">Красный текст</p>
<a class="text-sky-500 hover:text-sky-700">Ссылка</a>
```

## Фоны

```html
<div class="bg-white">Белый</div>
<div class="bg-gray-100">Серый</div>
<div class="bg-gradient-to-r from-cyan-500 to-blue-500">Градиент</div>
<div class="bg-[url('/img/hero.jpg')] bg-cover bg-center">Фоновое изображение</div>
```

## Границы

```html
<div class="border border-gray-200">Сплошная</div>
<div class="border-2 border-dashed border-red-300">Пунктир</div>
<div class="border-t-4 border-blue-500">Верхняя 4px</div>
<div class="rounded-lg">Скругление lg</div>
<div class="rounded-full">Круг</div>
```

## Тени

```html
<div class="shadow-sm">Малая</div>
<div class="shadow-md">Средняя</div>
<div class="shadow-xl">Большая</div>
<div class="shadow-2xl">Огромная</div>
<div class="shadow-none">Без тени</div>
```

## Связанные страницы

- [Layout: Flexbox и Grid](./layout-core.md)
- [Анимации и переходы](./transitions-animations.md)
- [Кастомизация](./customization.md)
