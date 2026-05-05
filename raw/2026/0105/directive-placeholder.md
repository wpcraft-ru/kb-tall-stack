The @placeholder directive displays custom content while lazy or deferred components and islands are loading.
Basic usage with lazy components
For single-file and multi-file components, use @placeholder to specify what displays during loading:
// resources/views/components/⚡revenue.blade.phpuse Livewire\Component;use App\Models\Transaction;new class extends Component { public $amount; public function mount() { // Slow database query... $this->amount = Transaction::monthToDate()->sum('amount'); }};?>@placeholder <div> <svg class="animate-spin h-5 w-5">...svg> div>@endplaceholder<div> Revenue this month: {{ $amount }}div>
// resources/views/components/⚡revenue.blade.php
$this->amount = Transaction::monthToDate()->sum('amount');
<svg class="animate-spin h-5 w-5">...svg>
Revenue this month: {{ $amount }}
When rendered with , the placeholder displays until the component loads.
The @placeholder directive works for single-file and multi-file components. For class-based components, use the placeholder() method instead.
The placeholder and component must share the same root element type. If your placeholder uses
Usage with islands
Use @placeholder inside lazy islands to customize loading states:
@island(lazy: true) @placeholder <div class="animate-pulse"> <div class="h-32 bg-gray-200 rounded">div> div> @endplaceholder <div> Revenue: {{ $this->revenue }} <button type="button" wire:click="$refresh">Refreshbutton> div>@endisland
<div class="h-32 bg-gray-200 rounded">div>
<button type="button" wire:click="$refresh">Refreshbutton>
The placeholder appears while the island is loading, then gets replaced with the actual content.
Skeleton placeholders
Placeholders are ideal for skeleton loaders that match your content's layout:
@placeholder <div class="space-y-4"> <div class="h-4 bg-gray-200 rounded w-3/4">div> <div class="h-4 bg-gray-200 rounded">div> <div class="h-4 bg-gray-200 rounded w-5/6">div> div>@endplaceholder<div> <h2>{{ $post->title }}h2> <p>{{ $post->content }}p>div>
<div class="h-4 bg-gray-200 rounded w-3/4">div>
<div class="h-4 bg-gray-200 rounded">div>
<div class="h-4 bg-gray-200 rounded w-5/6">div>
Learn more
For lazy component loading, see the Lazy Loading documentation.
For island loading states, see the Islands documentation.
