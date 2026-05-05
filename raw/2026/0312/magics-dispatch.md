`$dispatch` is a helpful shortcut for dispatching browser events.
```
<div @notify="alert('Hello World!')">
<button @click="$dispatch('notify')">
Notify
button>
div>
```
You can also pass data along with the dispatched event if you wish. This data will be accessible as the `.detail` property of the event:
```
<div @notify="alert($event.detail.message)">
<button @click="$dispatch('notify', { message: 'Hello World!' })">
Notify
button>
div>
```
Under the hood, `$dispatch` is a wrapper for the more verbose API: `element.dispatchEvent(new CustomEvent(...))`
**Note on event propagation**
Notice that, because of [event bubbling](https://en.wikipedia.org/wiki/Event_bubbling), when you need to capture events dispatched from nodes that are under the same nesting hierarchy, you'll need to use the [`.window`](https://github.com/alpinejs/alpine#x-on) modifier:
**Example:**
```
<div x-data>
<span @notify="...">span>
<button @click="$dispatch('notify')">Notifybutton>
div>
<div x-data>
<span @notify.window="...">span>
<button @click="$dispatch('notify')">Notifybutton>
div>
```
> The first example won't work because when `notify` is dispatched, it'll propagate to its common ancestor, the `div`, not its sibling, the . The second example will work because the sibling is listening for `notify` at the `window` level, which the custom event will eventually bubble up to.
## [Dispatching to other components](#dispatching-to-components)
You can also take advantage of the previous technique to make your components talk to each other:
**Example:**
```
<div
x-data="{ title: 'Hello' }"
@set-title.window="title = $event.detail"
>
<h1 x-text="title">h1>
div>
<div x-data>
<button @click="$dispatch('set-title', 'Hello World!')">Click mebutton>
div>
```
## [Dispatching to x-model](#dispatching-to-x-model)
You can also use `$dispatch()` to trigger data updates for `x-model` data bindings. For example:
```
<div x-data="{ title: 'Hello' }">
<span x-model="title">
<button @click="$dispatch('input', 'Hello World!')">Click mebutton>
span>
div>
```
This opens up the door for making custom input components whose value can be set via `x-model`.
## [Cancelable events](#cancelable-events)
You can use the returned value of `$dispatch` to check if the event was canceled or not. This is useful when you want to prevent the default behavior of an action.
```
<div x-data x-on:open="$event.preventDefault()">
<div x-data="{ open: false }">
<button @click="if($dispatch('open')){ open = true; }">Click mebutton>
<div x-show="open">
<h1>Helloh1>
div>
div>
div>
```
This could be useful when you want to prevent opening/closing a modal or something like that by using event handlers.
## [Overwriting options](#overwriting-options)
You can use the third parameter of `$dispatch` to overwrite the default options of the event. For example, you can set `bubbles` to `false`:
```
<div x-data="{ title: 'Hello' }" x-on:update-title="title = $event.detail">
<button @click="$dispatch('update-title', 'Hello World!', {bubbles: false})">Click mebutton>
div>
<div x-data="{ title: 'Hello' }">
<button x-on:update-title="title = $event.detail" @click="$dispatch('update-title', 'Hello World!', {bubbles: false})">Click mebutton>
div>
```
This is useful when you want to prevent the event from bubbling up to the parent elements.
Code highlighting provided by [Torchlight](https://torchlight.dev/)
