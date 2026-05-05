Utilities for controlling the position of an element's background image.
background-position: top left;
background-position: top right;
background-position: bottom left;
background-position: bottom right;
Basic example
Use utilities like bg-center, bg-right, and bg-top-left to control the position of an element's background image:
Hover over these examples to see the full image
<div class="bg-[url(/img/mountains.jpg)] bg-top-left">div><div class="bg-[url(/img/mountains.jpg)] bg-top">div><div class="bg-[url(/img/mountains.jpg)] bg-top-right">div><div class="bg-[url(/img/mountains.jpg)] bg-left">div><div class="bg-[url(/img/mountains.jpg)] bg-center">div><div class="bg-[url(/img/mountains.jpg)] bg-right">div><div class="bg-[url(/img/mountains.jpg)] bg-bottom-left">div><div class="bg-[url(/img/mountains.jpg)] bg-bottom">div><div class="bg-[url(/img/mountains.jpg)] bg-bottom-right">div>
Using a custom value
Use the bg-position-[] syntax to set the background position based on a completely custom value:
<div class="bg-position-[center_top_1rem] ..."> div>
For CSS variables, you can also use the bg-position-() syntax:
<div class="bg-position-(--my-bg-position) ..."> div>
This is just a shorthand for bg-position-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a background-position utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="bg-center md:bg-top ..."> div>
Learn more about using variants in the variants documentation.
