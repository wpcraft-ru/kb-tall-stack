`x-html` sets the "innerHTML" property of an element to the result of a given expression.
> ⚠️ Only use on trusted content and never on user-provided content. ⚠️
> Dynamically rendering HTML from third parties can easily lead to XSS vulnerabilities.
Here's a basic example of using `x-html` to display a user's username.
```
<div x-data="{ username: 'calebporzio' }">
Username: <span x-html="username">span>
div>
```
Username:
Now the tag's inner HTML will be set to "**calebporzio**".
Code highlighting provided by [Torchlight](https://torchlight.dev/)
