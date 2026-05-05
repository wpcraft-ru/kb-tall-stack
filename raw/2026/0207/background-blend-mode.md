Utilities for controlling how an element's background image should blend with its background color.
background-blend-mode: normal;
background-blend-mode: multiply;
background-blend-mode: screen;
background-blend-mode: overlay;
background-blend-mode: darken;
background-blend-mode: lighten;
background-blend-mode: color-dodge;
background-blend-mode: color-burn;
background-blend-mode: hard-light;
background-blend-mode: soft-light;
Basic example
Use utilities like bg-blend-difference and bg-blend-saturation to control how the background image and color of an element are blended:
<div class="bg-blue-500 bg-[url(/img/mountains.jpg)] bg-blend-multiply ...">div><div class="bg-blue-500 bg-[url(/img/mountains.jpg)] bg-blend-soft-light ...">div><div class="bg-blue-500 bg-[url(/img/mountains.jpg)] bg-blend-overlay ...">div>
Responsive design
Prefix a background-blend-mode utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="bg-blue-500 bg-[url(/img/mountains.jpg)] bg-blend-lighten md:bg-blend-darken ..."> div>
Learn more about using variants in the variants documentation.
