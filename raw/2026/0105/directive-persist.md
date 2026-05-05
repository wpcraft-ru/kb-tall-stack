The @persist directive preserves elements across page navigations when using wire:navigate, maintaining their state and avoiding re-initialization.
Basic usage
Wrap an element with @persist and provide a unique name to preserve it across page visits:
@persist('player') <audio src="{{ $episode->file }}" controls>audio>@endpersist
<audio src="{{ $episode->file }}" controls>audio>
When navigating to a new page that also contains a persisted element with the same name, Livewire reuses the existing DOM element instead of creating a new one. For an audio player, this means playback continues uninterrupted.
The @persist directive only works when navigation is handled by Livewire's wire:navigate feature. Standard page loads will not preserve elements.
Common use cases
@persist('podcast-player') <audio src="{{ $episode->audio_url }}" controls>audio>@endpersist
<audio src="{{ $episode->audio_url }}" controls>audio>
@persist('support-chat') <div id="chat-widget"> div>@endpersist
@persist('analytics-widget') <div id="analytics-dashboard"> div>@endpersist
<div id="analytics-dashboard">
Placement in layouts
Persisted elements should typically be placed outside Livewire components, commonly in your main layout:
DOCTYPE html><html lang="{{ str_replace('_', '-', app()->getLocale()) }}"> <head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>{{ $title ?? config('app.name') }}title> @vite(['resources/css/app.css', 'resources/js/app.js']) @livewireStyles head> <body> <main> {{ $slot }} main> @persist('player') <audio src="{{ $episode->file }}" controls>audio> @endpersist @livewireScripts body>html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{ $title ?? config('app.name') }}title>
@vite(['resources/css/app.css', 'resources/js/app.js'])
<audio src="{{ $episode->file }}" controls>audio>
For scrollable persisted elements, add wire:navigate:scroll to maintain scroll position:
@persist('scrollable-list') <div class="overflow-y-scroll" wire:navigate:scroll> div>@endpersist
<div class="overflow-y-scroll" wire:navigate:scroll>
Active link highlighting
Inside persisted elements, use wire:current instead of server-side conditionals to highlight active links:
@persist('navigation') <nav> <a href="/dashboard" wire:navigate wire:current="font-bold">Dashboarda> <a href="/posts" wire:navigate wire:current="font-bold">Postsa> <a href="/users" wire:navigate wire:current="font-bold">Usersa> nav>@endpersist
<a href="/dashboard" wire:navigate wire:current="font-bold">Dashboarda>
<a href="/posts" wire:navigate wire:current="font-bold">Postsa>
<a href="/users" wire:navigate wire:current="font-bold">Usersa>
Learn more about wire:current →
How it works
When navigating with wire:navigate:
• Livewire looks for elements with matching @persist names on both pages
• If found, the existing element is moved to the new page's DOM
• The element's state, event listeners, and Alpine data are preserved
@persist(string $key) @endpersist
