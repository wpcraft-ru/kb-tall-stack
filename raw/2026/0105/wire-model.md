Livewire makes it easy to bind a component property's value with form inputs using wire:model.
Here is a simple example of using wire:model to bind the $title and $content properties with form inputs in a "Create Post" component:
use Livewire\Component;use App\Models\Post;class CreatePost extends Component{ public $title = ''; public $content = ''; public function save() { $post = Post::create([ 'title' => $this->title 'content' => $this->content ]); // ... }}
class CreatePost extends Component
<form wire:submit="save"> <label> <span>Titlespan> <input type="text" wire:model="title"> label> <label> <span>Contentspan> <textarea wire:model="content">textarea> label> <button type="submit">Savebutton>form>
<input type="text" wire:model="title">
<textarea wire:model="content">textarea>
<button type="submit">Savebutton>
Because both inputs use wire:model, their values will be synchronized with the server's properties when the "Save" button is pressed.
"Why isn't my component live updating as I type?"
If you tried this in your browser and are confused why the title isn't automatically updating, it's because Livewire only updates a component when an "action" is submitted—like pressing a submit button—not when a user types into a field. This cuts down on network requests and improves performance. To enable "live" updating as a user types, you can use wire:model.live instead. Learn more about data binding.
Customizing update timing
By default, Livewire will only send a network request when an action is performed (like wire:click or wire:submit), NOT when a wire:model input is updated.
This drastically improves the performance of Livewire by reducing network requests and provides a smoother experience for your users.
However, there are occasions where you may want to update the server more frequently for things like real-time validation.
Live updating
To send property updates to the server as a user types into an input-field, you can append the .live modifier to wire:model:
<input type="text" wire:model.live="title">
<input type="text" wire:model.live="title">
Customizing the debounce
By default, when using wire:model.live, Livewire adds a 150 millisecond debounce to server updates. This means if a user is continually typing, Livewire will wait until the user stops typing for 150 milliseconds before sending a request.
You can customize this timing by appending .debounce.Xms after .live. Here is an example of changing the debounce to 250 milliseconds:
<input type="text" wire:model.live.debounce.250ms="title">
<input type="text" wire:model.live.debounce.250ms="title">
Updating on "blur" event
The .blur modifier delays syncing until the user clicks away from the input:
<input type="text" wire:model.blur="title">
<input type="text" wire:model.blur="title">
To also send a network request on blur, add .live:
<input type="text" wire:model.blur.live="title">
<input type="text" wire:model.blur.live="title">
Updating on "change" event
The .change modifier triggers on the change event, which is useful for select elements:
<select wire:model.change="state">...select><select wire:model.change.live="state">...select>
<select wire:model.change="state">...select>
<select wire:model.change.live="state">...select>
Updating on "enter" key
The .enter modifier syncs when the user presses the Enter key:
<input type="text" wire:model.enter="search"><input type="text" wire:model.enter.live="search">
<input type="text" wire:model.enter="search">
<input type="text" wire:model.enter.live="search">
Input fields
Livewire supports most native input elements out of the box. Meaning you should just be able to attach wire:model to any input element in the browser and easily bind properties to them.
Here's a comprehensive list of the different available input types and how you use them in a Livewire context.
Text inputs
First and foremost, text inputs are the bedrock of most forms. Here's how to bind a property named "title" to one:
<input type="text" wire:model="title">
<input type="text" wire:model="title">
Textarea inputs
Textarea elements are similarly straightforward. Simply add wire:model to a textarea and the value will be bound:
<textarea type="text" wire:model="content">textarea>
<textarea type="text" wire:model="content">textarea>
If the "content" value is initialized with a string, Livewire will fill the textarea with that value - there's no need to do something like the following:
<textarea type="text" wire:model="content">{{ $content }}textarea>
<textarea type="text" wire:model="content">{{ $content }}textarea>
Checkboxes
Checkboxes can be used for single values, such as when toggling a boolean property. Or, checkboxes may be used to toggle a single value in a group of related values. We'll discuss both scenarios:
Single checkbox
At the end of a signup form, you might have a checkbox allowing the user to opt-in to email updates. You might call this property $receiveUpdates. You can easily bind this value to the checkbox using wire:model:
<input type="checkbox" wire:model="receiveUpdates">
<input type="checkbox" wire:model="receiveUpdates">
Now when the $receiveUpdates value is false, the checkbox will be unchecked. Of course, when the value is true, the checkbox will be checked.
Multiple checkboxes
Now, let's say in addition to allowing the user to decide to receive updates, you have an array property in your class called $updateTypes, allowing the user to choose from a variety of update types:
By binding multiple checkboxes to the $updateTypes property, the user can select multiple update types and they will be added to the $updateTypes array property:
<input type="checkbox" value="email" wire:model="updateTypes"><input type="checkbox" value="sms" wire:model="updateTypes"><input type="checkbox" value="notification" wire:model="updateTypes">
<input type="checkbox" value="email" wire:model="updateTypes">
<input type="checkbox" value="sms" wire:model="updateTypes">
<input type="checkbox" value="notification" wire:model="updateTypes">
For example, if the user checks the first two boxes but not the third, the value of $updateTypes will be: ["email", "sms"]
Radio buttons
To toggle between two different values for a single property, you may use radio buttons:
<input type="radio" value="yes" wire:model="receiveUpdates"><input type="radio" value="no" wire:model="receiveUpdates">
<input type="radio" value="yes" wire:model="receiveUpdates">
<input type="radio" value="no" wire:model="receiveUpdates">
Select dropdowns
Livewire makes it simple to work with dropdowns. When adding wire:model to a dropdown, the currently selected value will be bound to the provided property name and vice versa. In addition, there's no need to manually add selected to the option that will be selected - Livewire handles that for you automatically. Below is an example of a select dropdown filled with a static list of states: <select wire:model="state"> <option value="AL">Alabamaoption> <option value="AK">Alaskaoption> <option value="AZ">Arizonaoption> ...select> When a specific state is selected, for example, "Alaska", the $state property on the component will be set to AK. If you would prefer the value to be set to "Alaska" instead of "AK", you can leave the value="" attribute off the element entirely. Often, you may build your dropdown options dynamically using Blade: <select wire:model="state"> @foreach (\App\Models\State::all() as $state) <option value="{{ $state->id }}">{{ $state->label }}option> @endforeachselect> If you don't have a specific option selected by default, you may want to show a muted placeholder option by default, such as "Select a state": <select wire:model="state"> <option disabled value="">Select a state...option> @foreach (\App\Models\State::all() as $state) <option value="{{ $state->id }}">{{ $state->label }}option> @endforeachselect> As you can see, there is no "placeholder" attribute for a select menu like there is for text inputs. Instead, you have to add a disabled option element as the first option in the list. Dependent select dropdowns Sometimes you may want one select menu to be dependent on another. For example, a list of cities that changes based on which state is selected. For the most part, this works as you'd expect, however there is one important gotcha: You must add a wire:key to the changing select so that Livewire properly refreshes its value when the options change. Here's an example of two selects, one for states, one for cities. When the state select changes, the options in the city select will change properly: <select wire:model.live="selectedState"> @foreach (State::all() as $state) <option value="{{ $state->id }}">{{ $state->label }}option> @endforeachselect><select wire:model.live="selectedCity" wire:key="{{ $selectedState }}"> @foreach (City::whereStateId($selectedState->id)->get() as $city) <option value="{{ $city->id }}">{{ $city->label }}option> @endforeachselect> Again, the only thing non-standard here is the wire:key that has been added to the second select. This ensures that when the state changes, the "selectedCity" value will be reset properly. Multi-select dropdowns If you are using a "multiple" select menu, Livewire works as expected. In this example, states will be added to the $states array property when they are selected and removed if they are deselected: <select wire:model="states" multiple> <option value="AL">Alabamaoption> <option value="AK">Alaskaoption> <option value="AZ">Arizonaoption> ...select> Event propagation By default, wire:model only listens for input/change events that originate directly on the element itself, not events that bubble up from child elements. This prevents unexpected behavior when using wire:model on container elements like modals or accordions that contain other form inputs. For example, if you have a modal with wire:model="showModal" and an input field inside it, clearing that input won't accidentally close the modal by bubbling up a change event. Listening to child events In rare cases where you want wire:model to also respond to events bubbling up from child elements, you can use the .deep modifier: <div wire:model.deep="value"> <input type="text"> div> Use.deep sparingly Most use cases don't require listening to child events. Only use .deep when you specifically need to capture events from descendant elements. Going deeper For a more complete documentation on using wire:model in the context of HTML forms, visit the Livewire forms documentation page. See also Forms — Complete guide to building forms with Livewire Properties — Understand data binding and property management Validation — Validate bound properties in real-time File Uploads — Bind file inputs with wire:model Reference wire:model="propertyName" Modifiers Modifier Description .live Send updates to the server .blur Only update on blur .change Only update on change .enter Only update on enter key .lazy Update on change and send network request (v3 compatible) .debounce.Xms Debounce updates (use with .live) .throttle.Xms Throttle updates (use with .live) .number Cast value to int on the server .boolean Cast value to bool on the server .fill Use initial value from HTML value attribute .deep Also listen to events from child elements .preserve-scroll Maintain scroll position during updates
