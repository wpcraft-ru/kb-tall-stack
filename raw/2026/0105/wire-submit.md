Master everything new in Livewire v4
Livewire makes it easy to handle form submissions via the wire:submit directive. By adding wire:submit to a
Here's a basic example of using wire:submit to handle a "Create Post" form submission:
namespace App\Livewire;use Livewire\Component;use App\Models\Post;class CreatePost extends Component{ public $title = ''; public $content = ''; public function save() { Post::create([ 'title' => $this->title, 'content' => $this->content, ]); $this->redirect('/posts'); } public function render() { return view('livewire.create-post'); }}
class CreatePost extends Component
return view('livewire.create-post');
<form wire:submit="save"> <input type="text" wire:model="title"> <textarea wire:model="content">textarea> <button type="submit">Savebutton>form>
<input type="text" wire:model="title">
<textarea wire:model="content">textarea>
<button type="submit">Savebutton>
In the above example, when a user submits the form by clicking "Save", wire:submit intercepts the submit event and calls the save() action on the server.
Livewire automatically callspreventDefault()
wire:submit is different than other Livewire event handlers in that it internally calls event.preventDefault() without the need for the .prevent modifier. This is because there are very few instances you would be listening for the submit event and NOT want to prevent it's default browser handling (performing a full form submission to an endpoint).
Livewire automatically disables forms while submitting
By default, when Livewire is sending a form submission to the server, it will disable form submit buttons and mark all form inputs as readonly. This way a user cannot submit the same form again until the initial submission is complete.
Going deeper
wire:submit is just one of many event listeners that Livewire provides. The following two pages provide much more complete documentation on using wire:submit in your application:
• Responding to browser events with Livewire
• Creating forms in Livewire
• Forms — Handle form submissions with Livewire
• Actions — Process form data in actions
• Validation — Validate forms before submission
wire:submit="methodName"wire:submit="methodName(param1, param2)"
wire:submit="methodName(param1, param2)"
