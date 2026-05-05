Utilities for setting the maximum width of an element.
max-width: calc(var(--spacing) * );
max-width: var(--container-3xs); /* 16rem (256px) */
max-width: var(--container-2xs); /* 18rem (288px) */
max-width: var(--container-xs); /* 20rem (320px) */
max-width: var(--container-sm); /* 24rem (384px) */
max-width: var(--container-md); /* 28rem (448px) */
max-width: var(--container-lg); /* 32rem (512px) */
max-width: var(--container-xl); /* 36rem (576px) */
max-width: var(--container-2xl); /* 42rem (672px) */
Basic example
Use max-w- utilities like max-w-24 and max-w-64 to set an element to a fixed maximum width based on the spacing scale:
Resize the example to see the expected behavior
<div class="w-full max-w-96 ...">max-w-96div><div class="w-full max-w-80 ...">max-w-80div><div class="w-full max-w-64 ...">max-w-64div><div class="w-full max-w-48 ...">max-w-48div><div class="w-full max-w-40 ...">max-w-40div><div class="w-full max-w-32 ...">max-w-32div><div class="w-full max-w-24 ...">max-w-24div>
Using a percentage
Use max-w-full or max-w- utilities like max-w-1/2 and max-w-2/5 to give an element a percentage-based maximum width:
Resize the example to see the expected behavior
<div class="w-full max-w-9/10 ...">max-w-9/10div><div class="w-full max-w-3/4 ...">max-w-3/4div><div class="w-full max-w-1/2 ...">max-w-1/2div><div class="w-full max-w-1/3 ...">max-w-1/3div>
Using the container scale
Use utilities like max-w-sm and max-w-xl to set an element to a fixed maximum width based on the container scale:
Resize the example to see the expected behavior
<div class="max-w-md ..."> div>
Using breakpoints container
Use the container utility to set the maximum width of an element to match the min-width of the current breakpoint. This is useful if you'd prefer to design for a fixed set of screen sizes instead of trying to accommodate a fully fluid viewport:
Note that unlike containers you might have used in other frameworks, Tailwind's container does not center itself automatically and does not have any built-in horizontal padding. Use mx-auto and the px- utilities to add these:
<div class="container mx-auto px-4"> div>
Using a custom value
Use the max-w-[] syntax to set the maximum width based on a completely custom value:
<div class="max-w-[220px] ..."> div>
For CSS variables, you can also use the max-w-() syntax:
<div class="max-w-(--my-max-width) ..."> div>
This is just a shorthand for max-w-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a max-width utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="max-w-sm md:max-w-lg ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
The max-w- utilities are driven by the --spacing theme variable, which can be customized in your own theme:
Learn more about customizing the spacing scale in the theme variable documentation.
