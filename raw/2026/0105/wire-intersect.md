Livewire's wire:intersect directive allows you to execute an action when an element enters or leaves the viewport. This is useful for lazy loading content, triggering analytics, or creating scroll-based interactions.
Basic usage
The simplest form runs an action when an element becomes visible:
<div wire:intersect="loadMore"> div>
<div wire:intersect="loadMore">
When the element enters the viewport, the loadMore action will be called on your component.
Enter and leave events
You can specify whether to run the action on enter, leave, or both:
<div wire:intersect="trackView">...div><div wire:intersect:enter="trackView">...div><div wire:intersect:leave="pauseVideo">...div>
<div wire:intersect="trackView">...div>
<div wire:intersect:enter="trackView">...div>
<div wire:intersect:leave="pauseVideo">...div>
Visibility modifiers
Control how much of the element needs to be visible before triggering:
<div wire:intersect="load">...div><div wire:intersect.half="load">...div><div wire:intersect.full="load">...div><div wire:intersect.threshold.25="load">...div>
<div wire:intersect="load">...div>
<div wire:intersect.half="load">...div>
<div wire:intersect.full="load">...div>
<div wire:intersect.threshold.25="load">...div>
Add a margin around the viewport to trigger the action before/after the element enters:
<div wire:intersect.margin.200px="loadMore">...div><div wire:intersect.margin.10%="loadMore">...div><div wire:intersect.margin.10%.25px.25px.25px="loadMore">...div>
<div wire:intersect.margin.200px="loadMore">...div>
<div wire:intersect.margin.10%="loadMore">...div>
<div wire:intersect.margin.10%.25px.25px.25px="loadMore">...div>
Use the .once modifier to ensure the action only fires on the first intersection:
<div wire:intersect.once="trackImpression"> div>
<div wire:intersect.once="trackImpression">
This is particularly useful for analytics or tracking when you only want to record the first time a user sees something.
Combining modifiers
You can combine multiple modifiers to create precise behaviors:
<div wire:intersect.once.half.margin.100px="loadSection"> div>
<div wire:intersect.once.half.margin.100px="loadSection">
Common use cases
Infinite scroll
use Livewire\Component;new class extends Component { public $page = 1; public $posts = []; public function mount() { $this->loadPosts(); } public function loadPosts() { $newPosts = Post::latest() ->skip(($this->page - 1) * 10) ->take(10) ->get(); $this->posts = array_merge($this->posts, $newPosts->toArray()); $this->page++; }};?><div> @foreach ($posts as $post) <div>{{ $post['title'] }}div> @endforeach <div wire:intersect="loadPosts"> Loading more posts... div>div>
->skip(($this->page - 1) * 10)
$this->posts = array_merge($this->posts, $newPosts->toArray());
<div wire:intersect="loadPosts">
Lazy loading images
use Livewire\Component;new class extends Component { public $imageLoaded = false; public function loadImage() { $this->imageLoaded = true; }};?><div> @if ($imageLoaded) <img src="/path/to/image.jpg" alt="Product"> @else <div wire:intersect.once="loadImage" class="bg-gray-200 h-64"> div> @endifdiv>
<img src="/path/to/image.jpg" alt="Product">
<div wire:intersect.once="loadImage" class="bg-gray-200 h-64">
Tracking visibility
<div wire:intersect:enter.once="trackView" wire:intersect:leave="trackLeave"> div>
<div wire:intersect:enter.once="trackView" wire:intersect:leave="trackLeave">
Comparison with Alpine's x-intersect
If you're familiar with Alpine.js, wire:intersect works similarly to x-intersect but triggers Livewire actions instead of Alpine expressions. The modifiers and behavior are designed to feel familiar to Alpine users.
wire:intersect="action"wire:intersect:enter="action"wire:intersect:leave="action"
