Utilities for setting the minimum block size of an element.
min-block-size: calc(var(--spacing) * );
min-block-size: calc( * 100%);
Basic example
Use min-block- utilities like min-block-24 and min-block-64 to set an element to a fixed minimum block size based on the spacing scale:
<div class="block-20 ..."> <div class="min-block-80 ...">min-block-80div> <div class="min-block-64 ...">min-block-64div> <div class="min-block-48 ...">min-block-48div> <div class="min-block-40 ...">min-block-40div> <div class="min-block-32 ...">min-block-32div>div>
Using a percentage
Use min-block-full or min-block- utilities like min-block-1/2, and min-block-2/5 to give an element a percentage-based minimum block size:
<div class="min-block-full ...">min-block-fulldiv><div class="min-block-9/10 ...">min-block-9/10div><div class="min-block-3/4 ...">min-block-3/4div><div class="min-block-1/2 ...">min-block-1/2div><div class="min-block-1/3 ...">min-block-1/3div>
Using a custom value
Use the min-block-[] syntax to set the minimum block size based on a completely custom value:
<div class="min-block-[220px] ..."> div>
For CSS variables, you can also use the min-block-() syntax:
<div class="min-block-(--my-min-block-size) ..."> div>
This is just a shorthand for min-block-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a min-block-size utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="block-24 min-block-0 md:min-block-full ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
The min-block- utilities are driven by the --spacing theme variable, which can be customized in your own theme:
Learn more about customizing the spacing scale in the theme variable documentation.
