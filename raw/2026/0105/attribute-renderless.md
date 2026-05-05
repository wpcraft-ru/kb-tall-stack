The #[Renderless] attribute skips the rendering phase of Livewire's lifecycle when an action is called, improving performance for actions that don't modify the component's view.
Basic usage
Apply the #[Renderless] attribute to any action method that doesn't need to re-render the component:
// resources/views/components/post/⚡show.blade.phpuse Livewire\Attributes\Renderless;use Livewire\Component;use App\Models\Post;new class extends Component { public Post $post; public function mount(Post $post) { $this->post = $post; } #[Renderless] public function incrementViewCount() { $this->post->incrementViewCount(); }};
// resources/views/components/post/⚡show.blade.php
use Livewire\Attributes\Renderless;
public function mount(Post $post)
public function incrementViewCount()
$this->post->incrementViewCount();
<div> <h1>{{ $post->title }}h1> <p>{{ $post->content }}p> <div wire:intersect="incrementViewCount">div>div>
<div wire:intersect="incrementViewCount">div>
The example above uses wire:intersect to call incrementViewCount() when the user scrolls to the bottom. Since #[Renderless] is applied, the view count is logged but the template doesn't re-render—no part of the page is affected.
When to use
Use #[Renderless] when an action:
• Only performs backend operations (logging, analytics, tracking)
• Doesn't modify any properties that affect the rendered view
• Needs to run frequently without causing unnecessary re-renders
• Tracking user interactions (clicks, scrolls, time on page)
• Sending analytics events
• Updating counters or metrics
• Performing background operations
Alternative approaches
Using skipRender()
If you need to conditionally skip rendering or prefer not to use attributes, you can call skipRender() directly in your action:
// resources/views/components/post/⚡show.blade.phpuse Livewire\Component;use App\Models\Post;new class extends Component { public Post $post; public function incrementViewCount() { $this->post->incrementViewCount(); $this->skipRender(); }};
// resources/views/components/post/⚡show.blade.php
public function incrementViewCount()
$this->post->incrementViewCount();
Using the .renderless modifier
You can also skip rendering directly from the element using the .renderless modifier:
<button type="button" wire:click.renderless="incrementViewCount"> Track Viewbutton>
<button type="button" wire:click.renderless="incrementViewCount">
This approach is useful for one-off cases where you don't want to add an attribute to the method.
Learn more
For more information about actions and performance optimization, see the Actions documentation.
