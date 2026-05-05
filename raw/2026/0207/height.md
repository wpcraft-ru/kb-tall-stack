Utilities for setting the height of an element.
height: calc(var(--spacing) * );
Basic example
Use h- utilities like h-24 and h-64 to set an element to a fixed height based on the spacing scale:
<div class="h-96 ...">h-96div><div class="h-80 ...">h-80div><div class="h-64 ...">h-64div><div class="h-48 ...">h-48div><div class="h-40 ...">h-40div><div class="h-32 ...">h-32div><div class="h-24 ...">h-24div>
Using a percentage
Use h-full or h- utilities like h-1/2 and h-2/5 to give an element a percentage-based height:
<div class="h-full ...">h-fulldiv><div class="h-9/10 ...">h-9/10div><div class="h-3/4 ...">h-3/4div><div class="h-1/2 ...">h-1/2div><div class="h-1/3 ...">h-1/3div>
Matching viewport
Use the h-screen utility to make an element span the entire height of the viewport:
Matching dynamic viewport
Use the h-dvh utility to make an element span the entire height of the viewport, which changes as the browser UI expands or contracts:
Scroll the viewport to see the viewport height change
Matching large viewport
Use the h-lvh utility to set an element's height to the largest possible height of the viewport:
Scroll the viewport to see the viewport height change
Matching small viewport
Use the h-svh utility to set an element's height to the smallest possible height of the viewport:
Scroll the viewport to see the viewport height change
Setting both width and height
Use utilities like size-px, size-4, and size-full to set both the width and height of an element at the same time:
<div class="size-16 ...">size-16div><div class="size-20 ...">size-20div><div class="size-24 ...">size-24div><div class="size-32 ...">size-32div><div class="size-40 ...">size-40div>
Using a custom value
Use the h-[] syntax to set the height based on a completely custom value:
<div class="h-[32rem] ..."> div>
For CSS variables, you can also use the h-() syntax:
<div class="h-(--my-height) ..."> div>
This is just a shorthand for h-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a height utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="h-1/2 md:h-full ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
The h- and size- utilities are driven by the --spacing theme variable, which can be customized in your own theme:
Learn more about customizing the spacing scale in the theme variable documentation.
