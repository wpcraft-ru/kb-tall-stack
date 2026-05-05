The #[Reactive] attribute makes a child component's property automatically update when the parent changes the value being passed in.
Basic usage
Apply the #[Reactive] attribute to any property that should react to parent changes:
// resources/views/components/⚡todo-count.blade.phpuse Livewire\Attributes\Reactive;use Livewire\Attributes\Computed;use Livewire\Component;new class extends Component { #[Reactive] public $todos; #[Computed] public function count() { return $this->todos->count(); }};?><div> Count: {{ $this->count }}div>
// resources/views/components/⚡todo-count.blade.php
use Livewire\Attributes\Reactive;
use Livewire\Attributes\Computed;
Now when the parent component adds or removes todos, the child component will automatically update to reflect the new count.
Why props aren't reactive by default
By default, Livewire props are not reactive. When a parent component updates, only the parent's state is sent to the server—not the child's. This minimizes data transfer and improves performance.
Here's what happens without #[Reactive]:
// resources/views/components/⚡todos.blade.phpuse Livewire\Component;new class extends Component { public $todos = []; public function addTodo($text) { $this->todos[] = ['text' => $text]; // Child components with $todos props won't automatically update }};?><div> <livewire:todo-count :$todos /> <button wire:click="addTodo('New task')">Add Todobutton>div>
// resources/views/components/⚡todos.blade.php
public function addTodo($text)
$this->todos[] = ['text' => $text];
// Child components with $todos props won't automatically update
<livewire:todo-count :$todos />
<button wire:click="addTodo('New task')">Add Todobutton>
Without #[Reactive] on the child's $todos property, adding a todo in the parent won't update the child's count.
How it works
• Parent updates its $todos property
• Parent sends new $todos value to the child during the response
• Child component automatically re-renders with the new value
This creates a "reactive" relationship similar to frontend frameworks like Vue or React.
Performance considerations
Use reactive properties sparingly
Reactive properties require additional data to be sent between server and client on every parent update. Only use #[Reactive] when necessary for your use case.
• Child component displays data that changes in the parent
• Child needs to stay in sync with parent state
• You're building a tightly coupled parent-child relationship
• Initial data is passed once and never changes
• Child manages its own independent state
• Performance is critical and updates aren't needed
Example: Live search results
Here's a practical example of a search component with reactive results:
// resources/views/components/⚡search.blade.phpuse Livewire\Component;use App\Models\Post;new class extends Component { public $query = ''; public function posts() { return Post::where('title', 'like', "%{$this->query}%")->get(); }};?><div> <input type="text" wire:model.live="query" placeholder="Search posts..."> <livewire:search-results :posts="$this->posts()" /> div>
// resources/views/components/⚡search.blade.php
return Post::where('title', 'like', "%{$this->query}%")->get();
<input type="text" wire:model.live="query" placeholder="Search posts...">
<livewire:search-results :posts="$this->posts()" />
// resources/views/components/⚡search-results.blade.phpuse Livewire\Attributes\Reactive;use Livewire\Component;new class extends Component { #[Reactive] public $posts;};?><div> @foreach($posts as $post) <div wire:key="{{ $post->id }}">{{ $post->title }}div> @endforeachdiv>
// resources/views/components/⚡search-results.blade.php
use Livewire\Attributes\Reactive;
<div wire:key="{{ $post->id }}">{{ $post->title }}div>
As the user types, the parent's $posts changes and the child's results automatically update.
Alternative: Events
For loosely coupled components, consider using events instead of reactive props:
// Parent dispatches event$this->dispatch('todos-updated', todos: $this->todos);// Child listens for event#[On('todos-updated')]public function handleTodosUpdate($todos){ $this->todos = $todos;}
$this->dispatch('todos-updated', todos: $this->todos);
public function handleTodosUpdate($todos)
Events provide more flexibility but require explicit communication between components.
Learn more
For more information about parent-child communication and component architecture, see the Nesting Components documentation.
