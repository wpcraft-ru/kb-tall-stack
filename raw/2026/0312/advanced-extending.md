Alpine has a very open codebase that allows for extension in a number of ways. In fact, every available directive and magic in Alpine itself uses these exact APIs. In theory you could rebuild all of Alpine's functionality using them yourself.
## [Lifecycle concerns](#lifecycle-concerns)
Before we dive into each individual API, let's first talk about where in your codebase you should consume these APIs.
Because these APIs have an impact on how Alpine initializes the page, they must be registered AFTER Alpine is downloaded and available on the page, but BEFORE it has initialized the page itself.
There are two different techniques depending on if you are importing Alpine into a bundle, or including it directly via a
