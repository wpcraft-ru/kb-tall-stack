Utilities for setting the block size of an element.
block-size: calc(var(--spacing) * );
Basic example
Use block- utilities like block-24 and block-64 to set an element to a fixed block size based on the spacing scale:
<div class="block-96 ...">block-96div><div class="block-80 ...">block-80div><div class="block-64 ...">block-64div><div class="block-48 ...">block-48div><div class="block-40 ...">block-40div><div class="block-32 ...">block-32div><div class="block-24 ...">block-24div>
Using a percentage
Use block-full or block- utilities like block-1/2 and block-2/5 to give an element a percentage-based block size:
<div class="block-full ...">block-fulldiv><div class="block-9/10 ...">block-9/10div><div class="block-3/4 ...">block-3/4div><div class="block-1/2 ...">block-1/2div><div class="block-1/3 ...">block-1/3div>
Matching viewport
Use the block-screen utility to make an element span the entire block size of the viewport:
<div class="block-screen"> div>
Matching dynamic viewport
Use the block-dvh utility to make an element span the entire block size of the viewport, which changes as the browser UI expands or contracts:
Matching large viewport
Use the block-lvh utility to set an element's block size to the largest possible size of the viewport:
Matching small viewport
Use the block-svh utility to set an element's block size to the smallest possible size of the viewport:
Using a custom value
Use the block-[] syntax to set the block size based on a completely custom value:
<div class="block-[32rem] ..."> div>
For CSS variables, you can also use the block-() syntax:
<div class="block-(--my-block-size) ..."> div>
This is just a shorthand for block-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a block-size utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="block-1/2 md:block-full ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
The block- utilities are driven by the --spacing theme variable, which can be customized in your own theme:
Learn more about customizing the spacing scale in the theme variable documentation.
