Utilities for controlling an element's perspective when placed in 3D space.
perspective: var(--perspective-dramatic); /* 100px */
perspective: var(--perspective-near); /* 300px */
perspective: var(--perspective-normal); /* 500px */
perspective: var(--perspective-midrange); /* 800px */
perspective: var(--perspective-distant); /* 1200px */
Basic example
Use utilities like perspective-normal and perspective-distant to control how close or how far away the z-plane is from the screen:
<div class="size-20 perspective-dramatic ..."> <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1div> <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2div> <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3div> <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4div> <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5div> <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6div>div><div class="size-20 perspective-normal ..."> <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1div> <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2div> <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3div> <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4div> <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5div> <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6div>div>
This is like moving a camera closer to or further away from an object.
Removing a perspective
Use the perspective-none utility to remove a perspective transform from an element:
<div class="perspective-none ..."> div>
Using a custom value
Use the perspective-[] syntax to set the perspective based on a completely custom value:
<div class="perspective-[750px] ..."> div>
For CSS variables, you can also use the perspective-() syntax:
<div class="perspective-(--my-perspective) ..."> div>
This is just a shorthand for perspective-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a perspective utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="perspective-midrange md:perspective-dramatic ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
Use the --perspective-* theme variables to customize the perspective utilities in your project:
@theme { --perspective-remote: 1800px; }
Now the perspective-remote utility can be used in your markup:
<div class="perspective-remote"> div>
Learn more about customizing your theme in the theme documentation.
