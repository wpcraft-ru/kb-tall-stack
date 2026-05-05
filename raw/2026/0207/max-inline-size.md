Utilities for setting the maximum inline size of an element.
max-inline-size: calc(var(--spacing) * );
max-inline-size: calc( * 100%);
max-inline-size: var(--container-3xs); /* 16rem (256px) */
max-inline-size: var(--container-2xs); /* 18rem (288px) */
max-inline-size: var(--container-xs); /* 20rem (320px) */
max-inline-size: var(--container-sm); /* 24rem (384px) */
max-inline-size: var(--container-md); /* 28rem (448px) */
max-inline-size: var(--container-lg); /* 32rem (512px) */
max-inline-size: var(--container-xl); /* 36rem (576px) */
max-inline-size: var(--container-2xl); /* 42rem (672px) */
Basic example
Use max-inline- utilities like max-inline-24 and max-inline-64 to set an element to a fixed maximum inline size based on the spacing scale:
Resize the example to see the expected behavior
<div class="inline-full max-inline-96 ...">max-inline-96div><div class="inline-full max-inline-80 ...">max-inline-80div><div class="inline-full max-inline-64 ...">max-inline-64div><div class="inline-full max-inline-48 ...">max-inline-48div><div class="inline-full max-inline-40 ...">max-inline-40div><div class="inline-full max-inline-32 ...">max-inline-32div>
Using a percentage
Use max-inline-full or max-inline- utilities like max-inline-1/2 and max-inline-2/5 to give an element a percentage-based maximum inline size:
Resize the example to see the expected behavior
<div class="inline-full max-inline-9/10 ...">max-inline-9/10div><div class="inline-full max-inline-3/4 ...">max-inline-3/4div><div class="inline-full max-inline-1/2 ...">max-inline-1/2div><div class="inline-full max-inline-1/3 ...">max-inline-1/3div>
Using the container scale
Use utilities like max-inline-sm and max-inline-xl to set an element to a fixed maximum inline size based on the container scale:
Resize the example to see the expected behavior
<div class="max-inline-md ..."> div>
Using a custom value
Use the max-inline-[] syntax to set the maximum inline size based on a completely custom value:
<div class="max-inline-[220px] ..."> div>
For CSS variables, you can also use the max-inline-() syntax:
<div class="max-inline-(--my-max-inline-size) ..."> div>
This is just a shorthand for max-inline-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a max-inline-size utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="max-inline-sm md:max-inline-lg ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
The max-inline- utilities are driven by the --spacing theme variable, which can be customized in your own theme:
Learn more about customizing the spacing scale in the theme variable documentation.
