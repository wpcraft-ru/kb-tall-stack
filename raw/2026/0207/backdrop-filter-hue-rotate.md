Utilities for applying backdrop hue-rotate filters to an element.
backdrop-filter: hue-rotate(deg);
backdrop-filter: hue-rotate(calc(deg * -1));
backdrop-filter: hue-rotate(var());
backdrop-filter: hue-rotate();
Basic example
Use utilities like backdrop-hue-rotate-90 and backdrop-hue-rotate-180 to rotate the hue of an element's backdrop:
<div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-hue-rotate-90 ...">div>div><div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-hue-rotate-180 ...">div>div><div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-hue-rotate-270 ...">div>div>
Using negative values
Use utilities like -backdrop-hue-rotate-90 and -backdrop-hue-rotate-180 to set a negative backdrop hue rotation value:
<div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 -backdrop-hue-rotate-15 ...">div>div><div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 -backdrop-hue-rotate-45 ...">div>div><div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 -backdrop-hue-rotate-90 ...">div>div>
Using a custom value
Use the backdrop-hue-rotate-[] syntax to set the backdrop hue rotation based on a completely custom value:
<div class="backdrop-hue-rotate-[3.142rad] ..."> div>
For CSS variables, you can also use the backdrop-hue-rotate-() syntax:
<div class="backdrop-hue-rotate-(--my-backdrop-hue-rotation) ..."> div>
This is just a shorthand for backdrop-hue-rotate-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a backdrop-filter: hue-rotate() utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="backdrop-hue-rotate-15 md:backdrop-hue-rotate-0 ..."> div>
Learn more about using variants in the variants documentation.
