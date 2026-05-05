The #[Lazy] attribute makes a component load only when it becomes visible in the viewport, preventing slow components from blocking the initial page render.
Basic usage
Apply the #[Lazy] attribute to any component that should be lazy-loaded:
// resources/views/components/⚡revenue.blade.phpuse Livewire\Attributes\Lazy;use Livewire\Component;use App\Models\Transaction;new #[Lazy] class extends Component { public $amount; public function mount() { // Slow database query... $this->amount = Transaction::monthToDate()->sum('amount'); }};?><div> Revenue this month: {{ $amount }}div>
// resources/views/components/⚡revenue.blade.php
new #[Lazy] class extends Component {
$this->amount = Transaction::monthToDate()->sum('amount');
Revenue this month: {{ $amount }}
With #[Lazy], the component initially renders as an empty
Lazy vs Defer
Livewire provides two ways to delay component loading:
• Lazy loading (#[Lazy]) - Components load when they become visible in the viewport (when the user scrolls to them)
• Deferred loading (#[Defer]) - Components load immediately after the initial page load is complete
Use lazy loading for components below the fold that users might not scroll to. Use defer for components that are always visible but you want to load after the page renders.
Rendering placeholders
By default, Livewire renders an empty
// resources/views/components/⚡revenue.blade.phpuse Livewire\Attributes\Lazy;use Livewire\Component;use App\Models\Transaction;new #[Lazy] class extends Component { public $amount; public function mount() { $this->amount = Transaction::monthToDate()->sum('amount'); } public function placeholder() { return <<<'HTML' <div> <div class="animate-pulse bg-gray-200 h-20 rounded">div> div> HTML; } };?><div> Revenue this month: {{ $amount }}div>
// resources/views/components/⚡revenue.blade.php
new #[Lazy] class extends Component {
$this->amount = Transaction::monthToDate()->sum('amount');
<div class="animate-pulse bg-gray-200 h-20 rounded">div>
Revenue this month: {{ $amount }}
Users will see a skeleton placeholder until the component enters the viewport and loads.
Match placeholder element type
If your placeholder's root element is a
Bundling requests
By default, lazy components load in parallel with independent network requests. To bundle multiple lazy components into a single request, use the bundle parameter:
// resources/views/components/⚡revenue.blade.phpuse Livewire\Attributes\Lazy;use Livewire\Component;new #[Lazy(bundle: true)] class extends Component { // ...};
// resources/views/components/⚡revenue.blade.php
new #[Lazy(bundle: true)] class extends Component {
Now, if there are ten revenue components on the page, all ten will load via a single bundled network request instead of ten parallel requests.
Alternative approach
Using the lazy parameter
Instead of the attribute, you can lazy-load specific component instances using the lazy parameter:
This is useful when you only want certain instances of a component to be lazy-loaded.
Overriding the attribute
If a component has #[Lazy] but you want to load it immediately in certain cases, you can override it:
<livewire:revenue :lazy="false" />
<livewire:revenue :lazy="false" />
When to use
• Components contain slow operations (database queries, API calls) that would delay page load
• The component is below the fold and users might not scroll to it
• You want to improve perceived performance by showing the page faster
• You have multiple expensive components on a single page
Learn more
For complete documentation on lazy loading, including placeholders, bundling strategies, and passing props, see the Lazy Loading documentation.
#[Lazy( bool|null $bundle = null,)]
