• Getting Started Quickstart Installation Upgrade Guide
Getting Started
• Essentials Components Pages Properties Actions Forms Events Lifecycle Hooks Nesting Components Testing
Essentials
• Features Alpine Styles Navigate Islands Lazy Loading Loading States Validation File Uploads Pagination URL Query Parameters Computed Properties Redirecting File Downloads Teleport
• URL Query Parameters
• HTML Directives wire:bind wire:click wire:submit wire:model wire:loading wire:navigate wire:current wire:cloak wire:dirty wire:confirm wire:transition wire:init wire:intersect wire:poll wire:offline wire:ignore wire:ref wire:replace wire:show wire:sort wire:stream wire:text
HTML Directives
• PHP Attributes Async Computed Defer Isolate Js Json Layout Lazy Locked Modelable On Reactive Renderless Session Title Transition Url Validate
PHP Attributes
• Blade Directives @island @placeholder @persist @teleport
Blade Directives
• Advanced Morphing Hydration Nesting Troubleshooting Security CSP JavaScript Synthesizers Package Development Contribution Guide
wire:cloak
wire:cloak is a directive that hides elements on page load until Livewire is fully initialized. This is useful for preventing the "flash of unstyled content" that can occur when the page loads before Livewire has a chance to initialize.
Basic usage
To use wire:cloak, add the directive to any element you want to hide during page load:
<div wire:cloak> This content will be hidden until Livewire is fully loadeddiv>
Dynamic content
wire:cloak is particularly useful in scenarios where you want to prevent users from seeing uninitialized dynamic content such as element shown or hidden using wire:show.
<div> <div wire:show="starred" wire:cloak> div> <div wire:show="!starred" wire:cloak> div>div>
In the above example, without wire:cloak, both icons would be shown before Livewire initializes. However, with wire:cloak, both elements will be hidden until initialization.
This directive has no modifiers.
• Basic usage Dynamic content
