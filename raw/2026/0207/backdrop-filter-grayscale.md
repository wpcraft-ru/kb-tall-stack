Utilities for applying backdrop grayscale filters to an element.
backdrop-filter: grayscale(100%);
backdrop-filter: grayscale(%);
backdrop-filter: grayscale(var());
Basic example
Use utilities like backdrop-grayscale-50 and backdrop-grayscale to control the grayscale effect applied to an element's backdrop:
<div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-grayscale-0 ...">div>div><div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-grayscale-50 ...">div>div><div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-grayscale-200 ...">div>div>
Using a custom value
Use the backdrop-grayscale-[] syntax to set the backdrop grayscale based on a completely custom value:
<div class="backdrop-grayscale-[0.5] ..."> div>
For CSS variables, you can also use the backdrop-grayscale-() syntax:
<div class="backdrop-grayscale-(--my-backdrop-grayscale) ..."> div>
This is just a shorthand for backdrop-grayscale-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a backdrop-filter: grayscale() utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="backdrop-grayscale md:backdrop-grayscale-0 ..."> div>
Learn more about using variants in the variants documentation.
