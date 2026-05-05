# KB TALLstack

База знаний по **TALL-стеку** — Laravel, Livewire, Alpine.js, Tailwind CSS — и всей экосистеме вокруг него.

## 🚀 Быстрый старт

```bash
npm install
npm run dev
```

Открыть [http://localhost:4321](http://localhost:4321) в браузере.

## 📁 Структура

```
kb-tallstack/
├── raw/                        # READ ONLY — исходные статьи
├── src/content/docs/           # ★ Wiki-страницы
│   ├── laravel/                # Ядро Laravel
│   ├── livewire/               # Livewire
│   ├── tailwind/               # Tailwind CSS
│   ├── alpine/                 # Alpine.js
│   ├── ecosystem/              # Экосистема
│   ├── deployment/             # Деплой и DevOps
│   ├── security/               # Безопасность
│   ├── performance/            # Производительность
│   ├── testing/                # Тестирование
│   ├── cheatsheet/             # Шпаргалки и сниппеты
│   ├── how-to/                 # Практические руководства
│   ├── faq/                    # FAQ и сравнения
│   ├── queries/                # Ответы на вопросы
│   ├── index.md                # Каталог
│   └── log.md                  # Лог операций
├── public/                     # Статика
├── AGENTS.md                   # Схема и правила для LLM-агентов
├── astro.config.mjs            # Starlight-конфиг
└── package.json
```

## 🛠 Технологии

- [Astro Starlight](https://starlight.astro.build/) — документационный движок
- Markdown / MDX — контент
- Hosted on GitHub Pages / Cloudflare Pages

## 🤖 Для LLM-агентов

См. [AGENTS.md](./AGENTS.md) — полная схема проекта и правила работы с базой знаний.
