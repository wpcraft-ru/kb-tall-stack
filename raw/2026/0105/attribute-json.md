The #[Json] attribute marks an action as a JSON endpoint, returning data directly to JavaScript. Validation errors trigger a promise rejection with structured error data. This is ideal for actions consumed by JavaScript rather than rendered in Blade.
Basic usage
Apply the #[Json] attribute to any action method that returns data for JavaScript consumption:
// resources/views/components/⚡search.blade.phpuse Livewire\Attributes\Json;use Livewire\Component;use App\Models\Post;new class extends Component { #[Json] public function search($query) { return Post::where('title', 'like', "%{$query}%") ->limit(10) ->get(); }};
// resources/views/components/⚡search.blade.php
public function search($query)
return Post::where('title', 'like', "%{$query}%")
<div x-data="{ query: '', posts: [] }"> <input type="text" x-model="query" x-on:input.debounce="$wire.search(query).then(data => posts = data)" > <ul> <template x-for="post in posts"> <li x-text="post.title">li> template> ul>div>
<div x-data="{ query: '', posts: [] }">
x-on:input.debounce="$wire.search(query).then(data => posts = data)"
<template x-for="post in posts">
The search() method returns posts directly to Alpine, where they're stored in the posts array and rendered client-side.
Handling responses
JSON methods resolve with the return value on success, and reject on validation failure:
let data = await $wire.search('query')// data = [ { id: 1, title: '...' }, ...]
let data = await $wire.search('query')
// data = [ { id: 1, title: '...' }, ...]
try { let data = await $wire.save()} catch (e) { // e.status = 422 // e.errors = { name: ['The name field is required.'] }}
// e.errors = { name: ['The name field is required.'] }
$wire.save() .then(data => { // Handle success console.log(data) }) .catch(e => { if (e.status === 422) { // Handle validation errors console.log(e.errors) } })
Error rejection shape
When a promise is rejected, the error object has this structure:
{ status: 422, // HTTP status code (422 for validation errors) body: null, // Raw response body (null for validation errors) json: null, // Parsed JSON (null for validation errors) errors: {...} // Validation errors object}
status: 422, // HTTP status code (422 for validation errors)
body: null, // Raw response body (null for validation errors)
json: null, // Parsed JSON (null for validation errors)
errors: {...} // Validation errors object
For HTTP errors (500, etc.), the shape is the same but with the actual response data:
{ status: 500, body: '...', json: null, errors: null}
The #[Json] attribute automatically applies two behaviors:
• Skips rendering - The component doesn't re-render after the action completes, since the response is consumed by JavaScript
• Runs asynchronously - The action executes in parallel without blocking other requests
These behaviors match what you'd expect from an API-style endpoint.
When to use
• Building dynamic search/autocomplete - Fetching results for a dropdown or suggestion list
• Loading data into JavaScript - Populating charts, maps, or other JS-driven UI
• Submitting forms with JS handling - When you want to handle success/error states in JavaScript
• Integrating with third-party libraries - Providing data to libraries that manage their own rendering
Validation errors are isolated
Validation errors from JSON methods are only returned via promise rejection. They don't appear in $wire.$errors or the component's error bag. This is intentional—JSON methods are self-contained and don't affect the component's rendered state.
• Actions — Learn about invoking methods and receiving return values
• Validation — Server-side validation for Livewire components
• Async Attribute — Run actions in parallel without blocking
• Renderless Attribute — Skip re-rendering after an action
