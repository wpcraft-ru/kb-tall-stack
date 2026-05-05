The #[On] attribute allows a component to listen for events and execute a method when those events are dispatched.
Basic usage
Apply the #[On] attribute to any method that should be called when an event is dispatched:
// resources/views/components/⚡dashboard.blade.phpuse Livewire\Attributes\On;use Livewire\Component;new class extends Component { #[On('post-created')] public function updatePostList($title) { session()->flash('status', "New post created: {$title}"); }};
// resources/views/components/⚡dashboard.blade.php
public function updatePostList($title)
session()->flash('status', "New post created: {$title}");
When another component dispatches the post-created event, the updatePostList() method will be called automatically.
Dispatching events
To dispatch an event that triggers listeners, use the dispatch() method:
// resources/views/components/post/⚡create.blade.phpuse Livewire\Component;use App\Models\Post;new class extends Component { public $title = ''; public function save() { $post = Post::create(['title' => $this->title]); $this->dispatch('post-created', title: $post->title); return redirect('/posts'); }};
// resources/views/components/post/⚡create.blade.php
$post = Post::create(['title' => $this->title]);
$this->dispatch('post-created', title: $post->title);
The post-created event will trigger any methods decorated with #[On('post-created')].
Passing data to listeners
Events can pass data as named parameters:
// Dispatching with multiple parameters$this->dispatch('post-updated', id: $post->id, title: $post->title);
// Dispatching with multiple parameters
$this->dispatch('post-updated', id: $post->id, title: $post->title);
// Listening and receiving parameters#[On('post-updated')]public function handlePostUpdate($id, $title){ // Use $id and $title...}
// Listening and receiving parameters
public function handlePostUpdate($id, $title)
Dynamic event names
You can use component properties in event names for scoped listening:
// resources/views/components/post/⚡show.blade.phpuse Livewire\Attributes\On;use Livewire\Component;use App\Models\Post;new class extends Component { public Post $post; #[On('post-updated.{post.id}')] public function refreshPost() { $this->post->refresh(); }};
// resources/views/components/post/⚡show.blade.php
#[On('post-updated.{post.id}')]
If $post->id is 3, this will only listen for post-updated.3 events, ignoring updates to other posts.
Multiple event listeners
A single method can listen for multiple events:
#[On('post-created')]#[On('post-updated')]#[On('post-deleted')]public function refreshStats(){ // Refresh statistics when any post changes}
public function refreshStats()
// Refresh statistics when any post changes
Listening to browser events
You can also listen for browser events dispatched from JavaScript:
#[On('user-logged-in')]public function handleUserLogin(){ // Handle login...}
public function handleUserLogin()
// From JavaScriptwindow.dispatchEvent(new CustomEvent('user-logged-in'));
window.dispatchEvent(new CustomEvent('user-logged-in'));
Alternative: Listening in the template
Instead of using the attribute, you can listen for events directly on child components in your Blade template:
<livewire:post.edit @saved="$refresh" />
<livewire:post.edit @saved="$refresh" />
This listens for the saved event from the post.edit child component and refreshes the parent when it's dispatched.
You can also call specific methods:
<livewire:post.edit @saved="handleSave($event.id)" />
<livewire:post.edit @saved="handleSave($event.id)" />
When to use
• One component needs to react to actions in another component
• Implementing real-time notifications or updates
• Building loosely coupled components that communicate via events
• Listening for browser or Laravel Echo events
• Refreshing data when external changes occur
Example: Real-time notifications
Here's a practical example of a notification bell that listens for new notifications:
// resources/views/components/⚡notification-bell.blade.phpuse Livewire\Attributes\On;use Livewire\Component;new class extends Component { public $unreadCount = 0; public function mount() { $this->unreadCount = auth()->user()->unreadNotifications()->count(); } #[On('notification-sent')] public function incrementCount() { $this->unreadCount++; } #[On('notifications-read')] public function resetCount() { $this->unreadCount = 0; }};?><button class="relative"> <svg>svg> @if($unreadCount > 0) <span class="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs"> {{ $unreadCount }} span> @endifbutton>
// resources/views/components/⚡notification-bell.blade.php
$this->unreadCount = auth()->user()->unreadNotifications()->count();
public function incrementCount()
<span class="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
Other components can dispatch events to update the notification count:
// From anywhere in your app$this->dispatch('notification-sent');
$this->dispatch('notification-sent');
Learn more
For more information about events, dispatching to specific components, and Laravel Echo integration, see the Events documentation.
