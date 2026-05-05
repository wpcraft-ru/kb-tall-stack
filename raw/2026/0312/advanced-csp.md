## CSP (Content-Security Policy) Build
In order for Alpine to execute JavaScript expressions from HTML attributes like `x-on:click="console.log()"`, it needs to use utilities that violate the "unsafe-eval" [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) that some applications enforce for security purposes.
> Under the hood, Alpine doesn't actually use eval() itself because it's slow and problematic. Instead it uses Function declarations, which are much better, but still violate "unsafe-eval".
Alpine offers an alternate build that doesn't violate "unsafe-eval" and supports most of Alpine's inline expression syntax.
## [Installation](#installation)
You can use this build by either including it from a
