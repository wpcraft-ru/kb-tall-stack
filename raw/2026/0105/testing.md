Livewire components are simple to test. Because they are just Laravel classes under the hood, they can be tested using Laravel's existing testing tools. However, Livewire provides many additional utilities to make testing your components a breeze.
This documentation will guide you through testing Livewire components using Pest as the recommended testing framework, though you can also use PHPUnit if you prefer.
Installing Pest
Pest is a delightful PHP testing framework with a focus on simplicity. It's the recommended way to test Livewire components in Livewire 4.
To install Pest in your Laravel application, first remove PHPUnit (if it's installed) and require Pest:
composer remove phpunit/phpunitcomposer require pestphp/pest --dev --with-all-dependencies
composer remove phpunit/phpunit
composer require pestphp/pest --dev --with-all-dependencies
Next, initialize Pest in your project:
This will create a tests/Pest.php configuration file in your project.
For more detailed installation instructions, see the Pest installation documentation.
Configuring Pest for view-based components
If you're writing tests alongside your view-based components (single-file or multi-file), you'll need to configure Pest to recognize these test files.
First, update your tests/Pest.php file to include the resources/views directory:
pest()->extend(Tests\TestCase::class) // ... ->in('Feature', '../resources/views');
pest()->extend(Tests\TestCase::class)
->in('Feature', '../resources/views');
This tells Pest to use your TestCase base class for tests found in both the tests/Feature directory and anywhere within resources/views.
Next, update your phpunit.xml file to include a test suite for component tests:
<testsuite name="Components"> <directory suffix=".test.php">resources/viewsdirectory>testsuite>
<directory suffix=".test.php">resources/viewsdirectory>
Now Pest will recognize and run tests located next to your components when you run ./vendor/bin/pest.
Creating your first test
You can generate a test file alongside a component by appending the --test flag to the make:livewire command:
php artisan make:livewire post.create --test
php artisan make:livewire post.create --test
For multi-file components, this will create a test file at resources/views/components/post/create.test.php:
use Livewire\Livewire;it('renders successfully', function () { Livewire::test('post.create') ->assertStatus(200);});
it('renders successfully', function () {
For class-based components, this creates a PHPUnit test file at tests/Feature/Livewire/Post/CreateTest.php. You can convert it to Pest syntax or keep using PHPUnit—both work great with Livewire.
Testing a page contains a component
The simplest Livewire test you can write is asserting that a given endpoint includes and successfully renders a Livewire component.
it('component exists on the page', function () { $this->get('/posts/create') ->assertSeeLivewire('post.create');});
it('component exists on the page', function () {
->assertSeeLivewire('post.create');
Smoke tests provide huge value
Tests like these are called "smoke tests"—they ensure there are no catastrophic problems in your application. Although simple, these tests provide enormous value as they require very little maintenance and give you a base level of confidence that your pages render successfully.
Browser testing
Pest v4 includes first-party browser testing support powered by Playwright. This allows you to test your Livewire components in a real browser, interacting with them just like a user would.
Installing browser testing
First, install the Pest browser plugin:
composer require pestphp/pest-plugin-browser --dev
composer require pestphp/pest-plugin-browser --dev
Next, install Playwright via npm:
npm install playwright@latestnpx playwright install
For complete browser testing documentation, see the Pest browser testing guide.
Writing browser tests
Instead of using Livewire::test(), you can use Livewire::visit() to test your component in a real browser:
it('can create a new post', function () { Livewire::visit('post.create') ->type('[wire\:model="title"]', 'My first post') ->type('[wire\:model="content"]', 'This is the content') ->press('Save') ->assertSee('Post created successfully');});
it('can create a new post', function () {
Livewire::visit('post.create')
->type('[wire\:model="title"]', 'My first post')
->type('[wire\:model="content"]', 'This is the content')
->assertSee('Post created successfully');
Browser tests are slower than unit tests but provide end-to-end confidence that your components work as expected in a real browser environment.
For a complete list of available browser testing assertions, see the Pest browser testing assertions.
Use browser tests for critical user flows and complex interactions. For most component testing, the standard Livewire::test() approach is faster and sufficient.
Testing views
Livewire provides assertSee() to verify that text appears in your component's rendered output:
use App\Models\Post;it('displays posts', function () { Post::factory()->create(['title' => 'My first post']); Post::factory()->create(['title' => 'My second post']); Livewire::test('show-posts') ->assertSee('My first post') ->assertSee('My second post');});
it('displays posts', function () {
Post::factory()->create(['title' => 'My first post']);
Post::factory()->create(['title' => 'My second post']);
->assertSee('My second post');
Asserting view data
Sometimes it's helpful to test the data being passed into the view rather than the rendered output:
use App\Models\Post;it('passes all posts to the view', function () { Post::factory()->count(3)->create(); Livewire::test('show-posts') ->assertViewHas('posts', function ($posts) { return count($posts) === 3; });});
it('passes all posts to the view', function () {
Post::factory()->count(3)->create();
->assertViewHas('posts', function ($posts) {
For simple assertions, you can pass the expected value directly:
Livewire::test('show-posts') ->assertViewHas('postCount', 3);
->assertViewHas('postCount', 3);
Testing with authentication
Most applications require users to log in. Rather than manually authenticating at the beginning of each test, use the actingAs() method:
use App\Models\User;use App\Models\Post;it('user only sees their own posts', function () { $user = User::factory() ->has(Post::factory()->count(3)) ->create(); $stranger = User::factory() ->has(Post::factory()->count(2)) ->create(); Livewire::actingAs($user) ->test('show-posts') ->assertViewHas('posts', function ($posts) { return count($posts) === 3; });});
it('user only sees their own posts', function () {
->has(Post::factory()->count(3))
->has(Post::factory()->count(2))
->assertViewHas('posts', function ($posts) {
Testing properties
Livewire provides utilities for setting and asserting component properties.
Use set() to update properties and assertSet() to verify their values:
it('can set the title property', function () { Livewire::test('post.create') ->set('title', 'My amazing post') ->assertSet('title', 'My amazing post');});
it('can set the title property', function () {
->set('title', 'My amazing post')
->assertSet('title', 'My amazing post');
Initializing properties
Components often receive data from parent components or route parameters. Pass this data as the second parameter to Livewire::test():
use App\Models\Post;it('title field is populated when editing', function () { $post = Post::factory()->create([ 'title' => 'Existing post title', ]); Livewire::test('post.edit', ['post' => $post]) ->assertSet('title', 'Existing post title');});
it('title field is populated when editing', function () {
$post = Post::factory()->create([
'title' => 'Existing post title',
Livewire::test('post.edit', ['post' => $post])
->assertSet('title', 'Existing post title');
Setting URL parameters
If your component uses Livewire's URL feature to track state in query strings, use withQueryParams() to simulate URL parameters:
use App\Models\Post;it('can search posts via url query string', function () { Post::factory()->create(['title' => 'Laravel testing']); Post::factory()->create(['title' => 'Vue components']); Livewire::withQueryParams(['search' => 'Laravel']) ->test('search-posts') ->assertSee('Laravel testing') ->assertDontSee('Vue components');});
it('can search posts via url query string', function () {
Post::factory()->create(['title' => 'Laravel testing']);
Post::factory()->create(['title' => 'Vue components']);
Livewire::withQueryParams(['search' => 'Laravel'])
->assertSee('Laravel testing')
->assertDontSee('Vue components');
Setting cookies
Use withCookie() or withCookies() to set cookies for your tests:
it('loads discount token from cookie', function () { Livewire::withCookies(['discountToken' => 'SUMMER2024']) ->test('cart') ->assertSet('discountToken', 'SUMMER2024');});
it('loads discount token from cookie', function () {
Livewire::withCookies(['discountToken' => 'SUMMER2024'])
->assertSet('discountToken', 'SUMMER2024');
Calling actions
Use the call() method to trigger component actions in your tests:
use App\Models\Post;it('can create a post', function () { expect(Post::count())->toBe(0); Livewire::test('post.create') ->set('title', 'My new post') ->set('content', 'Post content here') ->call('save'); expect(Post::count())->toBe(1);});
it('can create a post', function () {
expect(Post::count())->toBe(0);
->set('content', 'Post content here')
expect(Post::count())->toBe(1);
The examples above use Pest's expect() syntax for assertions. For a complete list of available expectations, see the Pest expectations documentation.
You can pass parameters to actions:
Livewire::test('post.show') ->call('deletePost', $postId);
->call('deletePost', $postId);
Testing validation
Assert that validation errors have been thrown using assertHasErrors():
it('title field is required', function () { Livewire::test('post.create') ->set('title', '') ->call('save') ->assertHasErrors('title');});
it('title field is required', function () {
Test specific validation rules:
it('title must be at least 3 characters', function () { Livewire::test('post.create') ->set('title', 'ab') ->call('save') ->assertHasErrors(['title' => ['min:3']]);});
it('title must be at least 3 characters', function () {
->assertHasErrors(['title' => ['min:3']]);
Ensure authorization checks work correctly using assertUnauthorized() and assertForbidden():
use App\Models\User;use App\Models\Post;it('cannot update another users post', function () { $user = User::factory()->create(); $stranger = User::factory()->create(); $post = Post::factory()->for($stranger)->create(); Livewire::actingAs($user) ->test('post.edit', ['post' => $post]) ->set('title', 'Hacked!') ->call('save') ->assertForbidden();});
it('cannot update another users post', function () {
$user = User::factory()->create();
$stranger = User::factory()->create();
$post = Post::factory()->for($stranger)->create();
->test('post.edit', ['post' => $post])
Testing redirects
Assert that an action performed a redirect:
it('redirects to posts index after creating', function () { Livewire::test('post.create') ->set('title', 'New post') ->set('content', 'Content here') ->call('save') ->assertRedirect('/posts');});
it('redirects to posts index after creating', function () {
->set('content', 'Content here')
You can also assert redirects to named routes or page components:
->assertRedirect(route('posts.index'));->assertRedirectToRoute('posts.index');
->assertRedirect(route('posts.index'));
->assertRedirectToRoute('posts.index');
Testing events
Assert that events were dispatched from your component:
it('dispatches event when post is created', function () { Livewire::test('post.create') ->set('title', 'New post') ->call('save') ->assertDispatched('post-created');});
it('dispatches event when post is created', function () {
->assertDispatched('post-created');
Test event communication between components:
it('updates post count when event is dispatched', function () { $badge = Livewire::test('post-count-badge') ->assertSee('0'); Livewire::test('post.create') ->set('title', 'New post') ->call('save') ->assertDispatched('post-created'); $badge->dispatch('post-created') ->assertSee('1');});
it('updates post count when event is dispatched', function () {
$badge = Livewire::test('post-count-badge')
->assertDispatched('post-created');
$badge->dispatch('post-created')
Assert events were dispatched with specific parameters:
it('dispatches notification when deleting post', function () { Livewire::test('post.show') ->call('delete', postId: 3) ->assertDispatched('notify', message: 'Post deleted');});
it('dispatches notification when deleting post', function () {
->assertDispatched('notify', message: 'Post deleted');
For complex assertions, use a closure:
it('dispatches event with correct data', function () { Livewire::test('post.show') ->call('delete', postId: 3) ->assertDispatched('notify', function ($event, $params) { return ($params['message'] ?? '') === 'Post deleted'; });});
it('dispatches event with correct data', function () {
->assertDispatched('notify', function ($event, $params) {
return ($params['message'] ?? '') === 'Post deleted';
Testing JS evaluation
Assert that a component evaluated JavaScript via $this->js():
it('shows an alert after saving', function () { Livewire::test('post.create') ->set('title', 'New post') ->call('save') ->assertJs("alert('Post saved!')");});
it('shows an alert after saving', function () {
->assertJs("alert('Post saved!')");
You can also assert that no JS was evaluated:
Using PHPUnit
While Pest is recommended, you can absolutely use PHPUnit to test Livewire components. All the same testing utilities work with PHPUnit's syntax.
Here's a PHPUnit example for comparison:
namespace Tests\Feature\Livewire;use Livewire\Livewire;use App\Models\Post;use Tests\TestCase;class CreatePostTest extends TestCase{ public function test_can_create_post() { $this->assertEquals(0, Post::count()); Livewire::test('post.create') ->set('title', 'My new post') ->set('content', 'Post content') ->call('save'); $this->assertEquals(1, Post::count()); } public function test_title_is_required() { Livewire::test('post.create') ->set('title', '') ->call('save') ->assertHasErrors('title'); }}
namespace Tests\Feature\Livewire;
class CreatePostTest extends TestCase
public function test_can_create_post()
$this->assertEquals(0, Post::count());
->set('content', 'Post content')
$this->assertEquals(1, Post::count());
public function test_title_is_required()
All features documented on this page work identically with PHPUnit—just use PHPUnit's assertion syntax instead of Pest's.
If you're interested in exploring Pest's more elegant syntax and features, check out pestphp.com to learn more.
All available testing methods
Below is a comprehensive reference of every Livewire testing method available to you:
Setup methods
Interacting with components
Assertions
• Actions — Test component actions and interactions
• Forms — Test form submissions and validation
• Events — Test event dispatching and listening
• Components — Create testable component structure
