Utilities for rotating elements.
transform: rotateX(deg) var(--tw-rotate-y);
transform: rotateX(-deg) var(--tw-rotate-y);
transform: rotateX(var()) var(--tw-rotate-y);
transform: rotateX() var(--tw-rotate-y);
transform: var(--tw-rotate-x) rotateY(deg);
Basic example
Use rotate- utilities like rotate-45 and rotate-90 to rotate an element by degrees:
<img class="rotate-45 ..." src="/img/mountains.jpg" /><img class="rotate-90 ..." src="/img/mountains.jpg" /><img class="rotate-210 ..." src="/img/mountains.jpg" />
Using negative values
Use -rotate- utilities like -rotate-45 and -rotate-90 to rotate an element counterclockwise by degrees:
<img class="-rotate-45 ..." src="/img/mountains.jpg" /><img class="-rotate-90 ..." src="/img/mountains.jpg" /><img class="-rotate-210 ..." src="/img/mountains.jpg" />
Rotating in 3D space
Use rotate-x-, rotate-y-, and rotate-z- utilities like rotate-x-50, -rotate-y-30, and rotate-z-45 together to rotate an element in 3D space:
<img class="rotate-x-50 rotate-z-45 ..." src="/img/mountains.jpg" /><img class="rotate-x-15 -rotate-y-30 ..." src="/img/mountains.jpg" /><img class="rotate-y-25 rotate-z-30 ..." src="/img/mountains.jpg" />
Using a custom value
Use the rotate-[] syntax to set the rotation based on a completely custom value:
<img class="rotate-[3.142rad] ..." src="/img/mountains.jpg" />
For CSS variables, you can also use the rotate-() syntax:
<img class="rotate-(--my-rotation) ..." src="/img/mountains.jpg" />
This is just a shorthand for rotate-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a rotate utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<img class="rotate-45 md:rotate-60 ..." src="/img/mountains.jpg" />
Learn more about using variants in the variants documentation.
