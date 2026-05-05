import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeSix from '@six-tech/starlight-theme-six';

// https://starlight.astro.build/
export default defineConfig({
  site: 'https://kb-tallstack.dev',
  integrations: [
    starlight({
      title: 'KB TALLstack',
      description: 'База знаний по TALL-стеку: Laravel, Livewire, Alpine.js, Tailwind CSS и экосистеме',
      plugins: [
        starlightThemeSix({
          navLinks: [
            { label: 'Каталог', link: '/index' },
          ],
        }),
      ],
      logo: {
        src: './src/assets/logo.svg',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/evgrezanov/kb-tallstack' },
      ],
      sidebar: [
        {
          label: '📋 Каталог',
          link: '/index',
        },
        {
          label: 'Ядро Laravel',
          collapsed: true,
          autogenerate: { directory: 'laravel' },
        },
        {
          label: 'Livewire',
          collapsed: true,
          autogenerate: { directory: 'livewire' },
        },
        {
          label: 'Tailwind CSS',
          collapsed: true,
          autogenerate: { directory: 'tailwind' },
        },
        {
          label: 'Alpine.js',
          collapsed: true,
          autogenerate: { directory: 'alpine' },
        },
        {
          label: 'Экосистема',
          collapsed: true,
          autogenerate: { directory: 'ecosystem' },
        },
        {
          label: 'FilamentPHP',
          collapsed: true,
          autogenerate: { directory: 'filament' },
        },
        {
          label: 'Деплой и DevOps',
          collapsed: true,
          autogenerate: { directory: 'deployment' },
        },
        {
          label: 'Безопасность',
          collapsed: true,
          autogenerate: { directory: 'security' },
        },
        {
          label: 'Производительность',
          collapsed: true,
          autogenerate: { directory: 'performance' },
        },
        {
          label: 'Тестирование',
          collapsed: true,
          autogenerate: { directory: 'testing' },
        },
        {
          label: 'Шпаргалки',
          collapsed: true,
          autogenerate: { directory: 'cheatsheet' },
        },
        {
          label: 'How-To',
          collapsed: true,
          autogenerate: { directory: 'how-to' },
        },
        {
          label: 'FAQ',
          collapsed: true,
          autogenerate: { directory: 'faq' },
        },
        {
          label: 'Ответы на вопросы',
          collapsed: true,
          autogenerate: { directory: 'queries' },
        },
        {
          label: '📝 Лог операций',
          link: '/log',
        },
      ],
      customCss: ['./src/styles/custom.css'],
      head: [],
      editLink: {
        baseUrl: 'https://github.com/evgrezanov/kb-tallstack/edit/main/',
      },
      lastUpdated: true,
      pagination: true,
    }),
  ],
});
