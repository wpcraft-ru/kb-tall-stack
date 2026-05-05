---
title: "Деплой Laravel: полное руководство"
description: "Пошаговая последовательность деплоя Laravel: от git pull до перезапуска воркеров и reload PHP-FPM"
sidebar:
  order: 1
---

> Источник: `raw/2025/1103/004-deployments.md`

## Что происходит при деплое

Деплой — не просто «залить новый код на сервер». Это **последовательность шагов, каждый в своём порядке**. Пропуск шага или неправильный порядок — приложение падает.

## Полная последовательность

### 1. Забрать последний код

```bash
git pull origin main
```

Правила: всегда деплоить из чистого состояния (без незакоммиченных изменений на сервере), всегда на правильной ветке.

### 2. Установить PHP-зависимости

```bash
composer install --no-dev --optimize-autoloader --no-interaction
```

| Флаг | Зачем |
|---|---|
| `--no-dev` | Не ставить Pest, Debugbar, Telescope в продакшен |
| `--optimize-autoloader` | Классмап вместо PSR-4 — быстрее на сотнях классов |
| `--no-interaction` | Деплой должен идти без участия человека |

### 3. Собрать фронтенд

```bash
npm ci && npm run build
```

**`npm ci`**, не `npm install`. `npm ci` — чистая установка из `package-lock.json`. `npm install` может изменить lock-файл при дрифте версий.

`npm run build` собирает production-бандл через Vite — минимизированный, tree-shaken, с хешами для cache busting. **Никогда** не запускайте `npm run dev` на продакшен-сервере.

### 4. Миграции БД

```bash
php artisan migrate --force
```

**`--force` обязателен.** Без него Laravel молча пропускает миграции в продакшене. Код ожидает колонки, которых нет — приложение падает.

### 5. Кешировать всё

```bash
php artisan optimize
```

Одна команда — четыре кеша:
- **`config:cache`** — все конфиги в один файл. Критично: после этого `.env` больше не читается. `env()` вне конфигов возвращает `null`. Всегда используйте `config()`.
- **`route:cache`** — сериализует регистрацию роутов в один вызов метода
- **`view:cache`** — прекомпилирует все Blade-шаблоны
- **`event:cache`** — кеширует event→listener mapping

### 6. Перезапустить воркеры

```bash
php artisan queue:restart
# или для Horizon:
php artisan horizon:terminate
```

Воркеры держат приложение в памяти. После деплоя — всё ещё старый код. **Пропуск этого шага** → воркеры выполняют старую логику, списывают не те суммы, отправляют не те письма.

### 7. Перезагрузить PHP-FPM

```bash
sudo systemctl reload php8.4-fpm
# или
sudo service php8.4-fpm reload
```

PHP-FPM держит opcache — прекомпилированный байткод. После деплоя opcache содержит старые версии файлов. Reload очищает opcache.

## Инструменты

### Laravel Forge

Управляемый хостинг от Тейлора Отвелла. Автоматизирует всё перечисленное выше: подключает репозиторий → деплоит по git push → выполняет deploy-скрипт (composer, миграции, кеши, перезапуск воркеров).

### Deployer

Open-source альтернатива Forge для ручного управления серверами:

```bash
composer require deployer/deployer --dev
```

```php
// deploy.php
namespace Deployer;

require 'recipe/laravel.php';

set('repository', 'git@github.com:user/repo.git');
host('production')
    ->set('hostname', 'your-server.com')
    ->set('remote_user', 'deployer')
    ->set('deploy_path', '/var/www/html');
```

Запуск: `dep deploy`.

### GitHub Actions / CI/CD

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy
        run: |
          ssh user@server 'cd /var/www && git pull && composer install --no-dev --optimize-autoloader && php artisan migrate --force && php artisan optimize && php artisan queue:restart'
```

## Чек-лист деплоя

- [ ] `git pull` — чистый стейт, правильная ветка
- [ ] `composer install --no-dev --optimize-autoloader --no-interaction`
- [ ] `npm ci && npm run build`
- [ ] `php artisan migrate --force` (обязательно `--force`)
- [ ] `php artisan optimize`
- [ ] `php artisan queue:restart` / `horizon:terminate`
- [ ] `sudo systemctl reload php-fpm`

## Связанные страницы

- [Jobs, Queues и Pipelines](../laravel/jobs-queues-pipelines.md)
- [Rate Limiting](../performance/rate-limiting.md)
