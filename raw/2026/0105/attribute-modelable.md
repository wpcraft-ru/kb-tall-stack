The #[Modelable] attribute designates a property in a child component that can be bound to from a parent component using wire:model.
Basic usage
Apply the #[Modelable] attribute to a property in a child component to make it bindable:
// resources/views/components/⚡todo-input.blade.phpuse Livewire\Attributes\Modelable;use Livewire\Component;new class extends Component { #[Modelable] public $value = '';};?><div> <input type="text" wire:model="value">div>
// resources/views/components/⚡todo-input.blade.php
use Livewire\Attributes\Modelable;
<input type="text" wire:model="value">
Now the parent component can bind to this child component just like any other input element:
// resources/views/components/⚡todos.blade.phpuse Livewire\Component;new class extends Component { public $todo = ''; public function addTodo() { // Use $this->todo here... }};?><div> <livewire:todo-input wire:model="todo" /> <button wire:click="addTodo">Add Todobutton>div>
// resources/views/components/⚡todos.blade.php
<livewire:todo-input wire:model="todo" />
<button wire:click="addTodo">Add Todobutton>
When the user types in the todo-input component, the parent's $todo property automatically updates.
How it works
Without #[Modelable], you would need to manually handle two-way communication between parent and child:
// Without #[Modelable] - manual approach<livewire:todo-input :value="$todo" @input="todo = $event.value"/>
// Without #[Modelable] - manual approach
The #[Modelable] attribute simplifies this by allowing wire:model to work directly on the component.
Building reusable input components
#[Modelable] is perfect for creating custom input components that feel like native HTML inputs:
// resources/views/components/⚡date-picker.blade.phpuse Livewire\Attributes\Modelable;use Livewire\Component;new class extends Component { #[Modelable] public $date = '';};?><div> <input type="date" wire:model="date" class="border rounded px-3 py-2" >div>
// resources/views/components/⚡date-picker.blade.php
use Livewire\Attributes\Modelable;
class="border rounded px-3 py-2"
{{-- Usage in parent --}}<livewire:date-picker wire:model="startDate" /><livewire:date-picker wire:model="endDate" />
<livewire:date-picker wire:model="startDate" />
<livewire:date-picker wire:model="endDate" />
Your component's root element cannot be a form control with wire:model. Wrap your input in a wrapper element like
The parent can use wire:model modifiers for timing and network control:
{{-- Live updates on every keystroke --}}<livewire:todo-input wire:model.live="todo" />{{-- Debounce updates --}}<livewire:todo-input wire:model.live.debounce.500ms="todo" />{{-- Throttle updates --}}<livewire:todo-input wire:model.live.throttle.500ms="todo" />
{{-- Live updates on every keystroke --}}
<livewire:todo-input wire:model.live="todo" />
<livewire:todo-input wire:model.live.debounce.500ms="todo" />
<livewire:todo-input wire:model.live.throttle.500ms="todo" />
Event-based modifiers like .blur, .change, and .enter control DOM events on specific elements, not reactive component bindings. To control sync timing for modelable components, place these modifiers on the actual input element inside the child component:
<livewire:todo-input wire:model="todo" /><input wire:model.blur="value" />
<livewire:todo-input wire:model="todo" />
<input wire:model.blur="value" />
Example: Custom rich text editor
Here's a more complex example of a rich-text editor component:
// resources/views/components/⚡rich-editor.blade.phpuse Livewire\Attributes\Modelable;use Livewire\Component;new class extends Component { #[Modelable] public $content = '';};?><div> <div x-init=" // Initialize your rich text editor library here editor.on('change', () => { $wire.content = editor.getContent() }) " > div>div>
// resources/views/components/⚡rich-editor.blade.php
use Livewire\Attributes\Modelable;
// Initialize your rich text editor library here
$wire.content = editor.getContent()
{{-- Usage --}}<livewire:rich-editor wire:model="postContent" />
<livewire:rich-editor wire:model="postContent" />
Limitations
Only one modelable property per component
Currently Livewire only supports a single #[Modelable] attribute per component, so only the first one will be bound.
When to use
• Creating reusable input components (date pickers, color pickers, rich text editors)
• Building form components that need to work with wire:model
• Wrapping third-party JavaScript libraries as Livewire components
• Creating custom inputs with special validation or formatting
Learn more
For more information about parent-child communication and data binding, see the Nesting Components documentation.
