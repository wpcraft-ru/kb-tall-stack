Livewire provides a simple wire:click directive for calling component methods (aka actions) when a user clicks a specific element on the page.
For example, given the ShowInvoice component below:
namespace App\Livewire;use Livewire\Component;use App\Models\Invoice;class ShowInvoice extends Component{ public Invoice $invoice; public function download() { return response()->download( $this->invoice->file_path, 'invoice.pdf' ); }}
class ShowInvoice extends Component
$this->invoice->file_path, 'invoice.pdf'
You can trigger the download() method from the class above when a user clicks a "Download Invoice" button by adding wire:click="download":
<button type="button" wire:click="download"> Download Invoicebutton>
<button type="button" wire:click="download">
Passing parameters
You can pass parameters to actions directly in the wire:click directive:
<button wire:click="delete({{ $post->id }})">Deletebutton>
<button wire:click="delete({{ $post->id }})">Deletebutton>
When the button is clicked, the delete() method will be called with the post's ID.
Action parameters should be treated like HTTP request input and should not be trusted. Always authorize ownership before updating data.
Using on links
When using wire:click on tags, you must append .prevent to prevent the default link behavior. Otherwise, the browser will navigate to the provided href.
<a href="#" wire:click.prevent="show">View Detailsa>
<a href="#" wire:click.prevent="show">View Detailsa>
Preventing re-renders
Use .renderless to skip re-rendering the component after the action completes. This is useful for actions that only perform side effects (like logging or analytics):
<button wire:click.renderless="trackClick">Track Eventbutton>
<button wire:click.renderless="trackClick">Track Eventbutton>
By default, updating content may change the scroll position. Use .preserve-scroll to maintain the current scroll position:
<button wire:click.preserve-scroll="loadMore">Load Morebutton>
<button wire:click.preserve-scroll="loadMore">Load Morebutton>
Parallel execution
By default, Livewire queues actions within the same component. Use .async to allow actions to run in parallel:
<button wire:click.async="process">Processbutton>
<button wire:click.async="process">Processbutton>
Going deeper
The wire:click directive is just one of many different available event listeners in Livewire. For full documentation on its (and other event listeners) capabilities, visit the Livewire actions documentation page.
• Actions — Complete guide to component actions
• Events — Dispatch events from click handlers
• wire:confirm — Add confirmation dialogs to actions
wire:click="methodName"wire:click="methodName(param1, param2)"
wire:click="methodName(param1, param2)"
