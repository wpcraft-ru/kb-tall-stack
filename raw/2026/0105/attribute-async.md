The #[Async] attribute allows actions to run in parallel without being queued, making them execute immediately even if other requests are in-flight.
Basic usage
Apply the #[Async] attribute to any action method that should run in parallel:
// resources/views/components/post/⚡show.blade.phpuse Livewire\Attributes\Async;use Livewire\Component;use App\Models\Post;new class extends Component { public Post $post; #[Async] public function logActivity() { Activity::log('post-viewed', $this->post); }};
// resources/views/components/post/⚡show.blade.php
use Livewire\Attributes\Async;
Activity::log('post-viewed', $this->post);
<div wire:intersect="logActivity"> div>
<div wire:intersect="logActivity">
When logActivity() is called, it executes immediately without blocking other requests or being blocked by them.
When to use
Use #[Async] for fire-and-forget operations where the result doesn't affect what's displayed on the page:
• Analytics and logging - Tracking user behavior, page views, or interactions
• Background operations - Triggering jobs, sending notifications, or updating external services
• JavaScript-only results - Fetching data via await $wire.getData() that will be consumed purely by JavaScript
Here's an example tracking external link clicks:
// resources/views/components/⚡external-link.blade.phpuse Livewire\Attributes\Async;use Livewire\Component;new class extends Component { public $url; #[Async] public function trackClick() { Analytics::track('external-link-clicked', [ 'url' => $this->url, 'user_id' => auth()->id(), ]); }};
// resources/views/components/⚡external-link.blade.php
use Livewire\Attributes\Async;
Analytics::track('external-link-clicked', [
<a href="{{ $url }}" target="_blank" wire:click="trackClick"> Visit External Sitea>
<a href="{{ $url }}" target="_blank" wire:click="trackClick">
Because tracking happens asynchronously, the user's click isn't delayed by the network request.
When NOT to use
Async actions and state mutations don't mix
Never use async actions if they modify component state that's reflected in your UI. Because async actions run in parallel, you can end up with unpredictable race conditions where your component's state diverges across multiple simultaneous requests.
Consider this dangerous example:
// Warning: This snippet demonstrates what NOT to do... // resources/views/components/⚡counter.blade.phpuse Livewire\Attributes\Async;use Livewire\Component;new class extends Component { public $count = 0; #[Async] // Don't do this! public function increment() { $this->count++; // State mutation in an async action }};
// Warning: This snippet demonstrates what NOT to do...
// resources/views/components/⚡counter.blade.php
use Livewire\Attributes\Async;
$this->count++; // State mutation in an async action
If a user rapidly clicks the increment button, multiple async requests fire simultaneously. Each request starts with the same initial $count value, leading to lost updates. You might click 5 times but only see the counter increment by 1.
The rule of thumb: Only use async for actions that perform pure side effects—operations that don't change any properties that affect your component's view.
Alternative approach
Using the .async modifier
Instead of using the attribute, you can make specific action calls async with the .async modifier:
<button wire:click.async="logActivity">Track Eventbutton>
<button wire:click.async="logActivity">Track Eventbutton>
This approach is useful when you want the action to be async in some places but synchronous in others.
Learn more
For more information about async actions, race conditions, and advanced use cases, see the Actions documentation.
