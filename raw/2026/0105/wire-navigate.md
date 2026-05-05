Livewire's wire:navigate feature makes page navigation much faster, providing an SPA-like experience for your users.
This page is a simple reference for the wire:navigate directive. Be sure to read the page on Livewire's Navigate feature for more complete documentation.
Below is a simple example of adding wire:navigate to links in a nav bar:
<nav> <a href="/" wire:navigate>Dashboarda> <a href="/posts" wire:navigate>Postsa> <a href="/users" wire:navigate>Usersa>nav>
<a href="/" wire:navigate>Dashboarda>
<a href="/posts" wire:navigate>Postsa>
<a href="/users" wire:navigate>Usersa>
When any of these links are clicked, Livewire will intercept the click and, instead of allowing the browser to perform a full page visit, Livewire will fetch the page in the background and swap it with the current page (resulting in much faster and smoother page navigation).
Styling active links with data-current
Livewire automatically adds a data-current attribute to any wire:navigate link that matches the current page URL. This allows you to style active navigation links using CSS or Tailwind without any additional directives:
<nav> <a href="/" wire:navigate class="data-current:font-bold">Dashboarda> <a href="/posts" wire:navigate class="data-current:font-bold">Postsa> <a href="/users" wire:navigate class="data-current:font-bold">Usersa>nav>
<a href="/" wire:navigate class="data-current:font-bold">Dashboarda>
<a href="/posts" wire:navigate class="data-current:font-bold">Postsa>
<a href="/users" wire:navigate class="data-current:font-bold">Usersa>
The data-current attribute is added and removed automatically as users navigate between pages. Read more about highlighting active links in the Navigate documentation.
Prefetching pages on hover
By adding the .hover modifier, Livewire will pre-fetch a page when a user hovers over a link. This way, the page will have already been downloaded from the server when the user clicks on the link.
<a href="/" wire:navigate.hover>Dashboarda>
<a href="/" wire:navigate.hover>Dashboarda>
Going deeper
For more complete documentation on this feature, visit Livewire's navigate documentation page.
• Navigate — Complete guide to SPA navigation
• Pages — Create routable page components
• @persist — Persist elements during navigation
