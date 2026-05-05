Utilities for controlling an element's perspective origin when placed in 3D space.
perspective-origin: top right;
perspective-origin: bottom right;
perspective-origin: bottom left;
Basic example
Use utilities like perspective-origin-top and perspective-origin-bottom-left to control where the vanishing point of a perspective is located:
perspective-origin-bottom-right
<div class="size-20 perspective-near perspective-origin-top-left ..."> <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1div> <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2div> <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3div> <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4div> <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5div> <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6div>div><div class="size-20 perspective-near perspective-origin-bottom-right …"> <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1div> <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2div> <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3div> <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4div> <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5div> <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6div>div>
Using a custom value
Use the perspective-origin-[] syntax to set the perspective origin based on a completely custom value:
<div class="perspective-origin-[200%_150%] ..."> div>
For CSS variables, you can also use the perspective-origin-() syntax:
<div class="perspective-origin-(--my-perspective-origin) ..."> div>
This is just a shorthand for perspective-origin-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a perspective-origin utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="perspective-origin-center md:perspective-origin-bottom-left ..."> div>
Learn more about using variants in the variants documentation.
