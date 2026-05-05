The @teleport directive renders a portion of your template in a different location in the DOM, outside the component's normal placement.
Basic usage
Wrap content with @teleport and specify where to render it using a CSS selector:
<div> <div x-data="{ open: false }"> <button @click="open = ! open">Toggle Modalbutton> @teleport('body') <div x-show="open"> Modal contents... div> @endteleport div>div>
<div x-data="{ open: false }">
<button @click="open = ! open">Toggle Modalbutton>
The modal content will be rendered at the end of the element:
<body> <div x-show="open"> Modal contents... div>body>
The @teleport selector can be any string you would pass to document.querySelector(), such as 'body', '#modal-root', or '.modal-container'.
Why use teleport?
Teleporting is useful for nested modals, dropdowns, and popovers where parent styles or z-index values can interfere with proper rendering.
<div style="z-index: 10;"> <div style="z-index: 20;"> div>div>
<div style="z-index: 10;"> @teleport('body') <div style="z-index: 20;"> div> @endteleportdiv>
Common use cases
@teleport('body') <div class="fixed inset-0 bg-black/50" x-show="showModal"> <div class="modal"> div> div>@endteleport
<div class="fixed inset-0 bg-black/50" x-show="showModal">
@teleport('body') <div class="absolute" x-show="open" style="top: {{ $top }}px; left: {{ $left }}px;"> div>@endteleport
<div class="absolute" x-show="open" style="top: {{ $top }}px; left: {{ $left }}px;">
@teleport('#notifications-container') <div class="toast"> {{ $message }} div>@endteleport
@teleport('#notifications-container')
Important constraints
Must teleport outside the component
Livewire only supports teleporting HTML outside your components. Teleporting to another element within the same component will not work.
Only include a single root element inside your @teleport statement. Multiple root elements are not supported.
@teleport('body') <div> <h2>Titleh2> <p>Contentp> div>@endteleport
@teleport('body') <h2>Titleh2> <p>Contentp>@endteleport
Powered by Alpine
This functionality uses Alpine's x-teleport directive under the hood.
Learn more about teleporting content →
@teleport(string $selector) @endteleport
