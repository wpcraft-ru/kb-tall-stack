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
Livewire offers a wire:init directive to run an action as soon as the component is rendered. This can be helpful in cases where you don't want to hold up the entire page load, but want to load some data immediately after the page load.
<div wire:init="loadPosts"> div>
The loadPosts action will be run immediately after the Livewire component renders on the page.
In most cases however, Livewire's lazy loading feature is preferable to using wire:init.
This directive has no modifiers.
