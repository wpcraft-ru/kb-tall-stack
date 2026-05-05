Utilities for setting the maximum block size of an element.
max-block-size: calc(var(--spacing) * );
max-block-size: calc( * 100%);
Basic example
Use max-block- utilities like max-block-24 and max-block-64 to set an element to a fixed maximum block size based on the spacing scale:
<div class="block-96 ..."> <div class="block-full max-block-80 ...">max-block-80div> <div class="block-full max-block-64 ...">max-block-64div> <div class="block-full max-block-48 ...">max-block-48div> <div class="block-full max-block-40 ...">max-block-40div> <div class="block-full max-block-32 ...">max-block-32div>div>
Using a percentage
Use max-block-full or max-block- utilities like max-block-1/2 and max-block-2/5 to give an element a percentage-based maximum block size:
<div class="block-96 ..."> <div class="block-full max-block-9/10 ...">max-block-9/10div> <div class="block-full max-block-3/4 ...">max-block-3/4div> <div class="block-full max-block-1/2 ...">max-block-1/2div> <div class="block-full max-block-full ...">max-block-fulldiv>div>
Using a custom value
Use the max-block-[] syntax to set the maximum block size based on a completely custom value:
<div class="max-block-[220px] ..."> div>
For CSS variables, you can also use the max-block-() syntax:
<div class="max-block-(--my-max-block-size) ..."> div>
This is just a shorthand for max-block-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a max-block-size utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="block-48 max-block-full md:max-block-screen ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
The max-block- utilities are driven by the --spacing theme variable, which can be customized in your own theme:
Learn more about customizing the spacing scale in the theme variable documentation.
