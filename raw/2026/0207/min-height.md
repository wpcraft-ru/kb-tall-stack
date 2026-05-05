Utilities for setting the minimum height of an element.
min-height: calc(var(--spacing) * );
Basic example
Use min-h- utilities like min-h-24 and min-h-64 to set an element to a fixed minimum height based on the spacing scale:
<div class="h-20 ..."> <div class="min-h-80 ...">min-h-80div> <div class="min-h-64 ...">min-h-64div> <div class="min-h-48 ...">min-h-48div> <div class="min-h-40 ...">min-h-40div> <div class="min-h-32 ...">min-h-32div> <div class="min-h-24 ...">min-h-24div>div>
Using a percentage
Use min-h-full or min-h- utilities like min-h-1/2, and min-h-2/5 to give an element a percentage-based minimum height:
<div class="min-h-full ...">min-h-fulldiv><div class="min-h-9/10 ...">min-h-9/10div><div class="min-h-3/4 ...">min-h-3/4div><div class="min-h-1/2 ...">min-h-1/2div><div class="min-h-1/3 ...">min-h-1/3div>
Using a custom value
Use the min-h-[] syntax to set the minimum height based on a completely custom value:
<div class="min-h-[220px] ..."> div>
For CSS variables, you can also use the min-h-() syntax:
<div class="min-h-(--my-min-height) ..."> div>
This is just a shorthand for min-h-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a min-height utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="h-24 min-h-0 md:min-h-full ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
The min-h- utilities are driven by the --spacing theme variable, which can be customized in your own theme:
Learn more about customizing the spacing scale in the theme variable documentation.
