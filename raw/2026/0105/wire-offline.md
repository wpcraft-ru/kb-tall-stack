In real-time applications, it can be helpful to provide a visual indication that the user's device is no longer connected to the internet.
For example, if you have built a blogging platform on Livewire, you may want to notify your users if they are offline so that they don't draft an entire blog post without the ability for Livewire to save it to the database.
Livewire provides the wire:offline directive for such cases. By adding wire:offline to an element inside a Livewire component, it will be hidden by default and become visible when the user loses connection:
<div wire:offline> This device is currently offline.div>
This device is currently offline.
The element will disappear again when the network connection is restored.
Toggling classes
Adding the class modifier allows you to add a class to an element when the user loses their connection. The class will be removed again, once the user is back online:
<div wire:offline.class="bg-red-300">
<div wire:offline.class="bg-red-300">
Or, using the .remove modifier, you can remove a class when a user loses their connection. In this example, the bg-green-300 class will be removed from the
<div class="bg-green-300" wire:offline.class.remove="bg-green-300">
<div class="bg-green-300" wire:offline.class.remove="bg-green-300">
Toggling attributes
The .attr modifier allows you to add an attribute to an element when the user loses their connection. In this example, the "Save" button will be disabled while the user has lost their connection:
<button wire:offline.attr="disabled">Savebutton>
<button wire:offline.attr="disabled">Savebutton>
