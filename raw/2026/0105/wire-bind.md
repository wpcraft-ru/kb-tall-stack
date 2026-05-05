wire:bind is a directive that dynamically binds HTML attributes to component properties or expressions. Unlike using Blade's attribute syntax, wire:bind updates the attribute reactively on the client without requiring a full re-render.
If you are familiar with Alpine's x-bind directive, the two are essentially the same.
Basic usage
<input wire:model="message" wire:bind:class="message.length > 240 && 'text-red-500'">
<input wire:model="message" wire:bind:class="message.length > 240 && 'text-red-500'">
As the user types, wire:bind:class reacts to the message length and applies the class instantly on the client.
Common use cases
Binding styles
<div wire:bind:style="{ 'color': textColor, 'font-size': fontSize + 'px' }"> Styled textdiv>
<div wire:bind:style="{ 'color': textColor, 'font-size': fontSize + 'px' }">
Binding href
<a wire:bind:href="url">Dynamic linka>
<a wire:bind:href="url">Dynamic linka>
Binding disabled state
<button wire:bind:disabled="isArchived">Deletebutton>
<button wire:bind:disabled="isArchived">Deletebutton>
Binding data attributes
<div wire:bind:data-count="count">...div>
<div wire:bind:data-count="count">...div>
wire:bind:{attribute}="expression"
wire:bind:{attribute}="expression"
Replace {attribute} with any valid HTML attribute name (e.g., class, style, href, disabled, data-*).
This directive has no modifiers.
