The #[Title] attribute sets the page title for full-page Livewire components.
Basic usage
Apply the #[Title] attribute to a full-page component to set its title:
// resources/views/pages/posts/⚡create.blade.phpuse Livewire\Attributes\Title;use Livewire\Component;new #[Title('Create Post')] class extends Component { public $title = ''; public $content = ''; public function save() { // Save post... }};?><div> <h1>Create a New Posth1> <input type="text" wire:model="title" placeholder="Post title"> <textarea wire:model="content" placeholder="Post content">textarea> <button wire:click="save">Save Postbutton>div>
// resources/views/pages/posts/⚡create.blade.php
use Livewire\Attributes\Title;
new #[Title('Create Post')] class extends Component {
<input type="text" wire:model="title" placeholder="Post title">
<textarea wire:model="content" placeholder="Post content">textarea>
<button wire:click="save">Save Postbutton>
The browser tab will display "Create Post" as the page title.
Layout configuration
For the #[Title] attribute to work, your layout file must include a $title variable:
DOCTYPE html><html><head> <title>{{ $title ?? 'My App' }}title> head><body> {{ $slot }}body>html>
<title>{{ $title ?? 'My App' }}title>
The ?? 'My App' provides a fallback title if none is specified.
Dynamic titles
For dynamic titles using component properties, use the title() method in the render() method:
// resources/views/pages/posts/⚡edit.blade.phpuse Livewire\Component;use App\Models\Post;new class extends Component { public Post $post; public function mount($id) { $this->post = Post::findOrFail($id); } public function render() { return $this->view() ->title("Edit: {$this->post->title}"); }};?><div> <h1>Edit Posth1> div>
// resources/views/pages/posts/⚡edit.blade.php
$this->post = Post::findOrFail($id);
->title("Edit: {$this->post->title}");
The title will dynamically include the post's title.
Combining with layouts
You can use both #[Title] and #[Layout] together:
// resources/views/pages/posts/⚡create.blade.phpuse Livewire\Attributes\Layout;use Livewire\Attributes\Title;use Livewire\Component;new#[Layout('layouts.admin')]#[Title('Create Post')]class extends Component { // ...};
// resources/views/pages/posts/⚡create.blade.php
use Livewire\Attributes\Layout;
use Livewire\Attributes\Title;
This component will use the admin layout with "Create Post" as the title.
When to use
• Building full-page components
• You want clean, declarative title definitions
• The title is static or rarely changes
• You're following SEO best practices
• The title depends on component properties
• You need to compute the title dynamically
• The title changes based on component state
Example: CRUD pages
Here's a complete example showing titles across CRUD operations:
// resources/views/pages/posts/⚡index.blade.phpuse Livewire\Attributes\Title;use Livewire\Component;new #[Title('All Posts')] class extends Component { };
// resources/views/pages/posts/⚡index.blade.php
use Livewire\Attributes\Title;
new #[Title('All Posts')] class extends Component { };
// resources/views/pages/posts/⚡create.blade.phpuse Livewire\Attributes\Title;use Livewire\Component;new #[Title('Create Post')] class extends Component { };
// resources/views/pages/posts/⚡create.blade.php
use Livewire\Attributes\Title;
new #[Title('Create Post')] class extends Component { };
// resources/views/pages/posts/⚡edit.blade.phpuse Livewire\Component;use App\Models\Post;new class extends Component { public Post $post; public function render() { return $this->view()->title("Edit: {$this->post->title}"); }};
// resources/views/pages/posts/⚡edit.blade.php
return $this->view()->title("Edit: {$this->post->title}");
// resources/views/pages/posts/⚡show.blade.phpuse Livewire\Component;use App\Models\Post;new class extends Component { public Post $post; public function render() { return $this->view()->title($this->post->title); }};
// resources/views/pages/posts/⚡show.blade.php
return $this->view()->title($this->post->title);
Each page has a contextually appropriate title that improves user experience and SEO.
SEO considerations
Good page titles are crucial for SEO:
• Be descriptive - "Edit Post: Getting Started with Laravel" is better than "Edit"
• Keep it concise - Aim for 50-60 characters to avoid truncation in search results
• Include keywords - Help search engines understand your page content
• Be unique - Each page should have a distinct title
Only for full-page components
The #[Title] attribute only works for full-page components accessed via routes. Regular components rendered within other views don't use titles—they inherit the parent page's title.
Learn more
For more information about full-page components, layouts, and routing, see the Pages documentation.
