Utilities for setting the maximum height of an element.
max-height: calc(var(--spacing) * );
Basic example
Use max-h- utilities like max-h-24 and max-h-64 to set an element to a fixed maximum height based on the spacing scale:
<div class="h-96 ..."> <div class="h-full max-h-80 ...">max-h-80div> <div class="h-full max-h-64 ...">max-h-64div> <div class="h-full max-h-48 ...">max-h-48div> <div class="h-full max-h-40 ...">max-h-40div> <div class="h-full max-h-32 ...">max-h-32div> <div class="h-full max-h-24 ...">max-h-24div>div>
Using a percentage
Use max-h-full or max-h- utilities like max-h-1/2 and max-h-2/5 to give an element a percentage-based maximum height:
<div class="h-96 ..."> <div class="h-full max-h-9/10 ...">max-h-9/10div> <div class="h-full max-h-3/4 ...">max-h-3/4div> <div class="h-full max-h-1/2 ...">max-h-1/2div> <div class="h-full max-h-1/4 ...">max-h-1/4div> <div class="h-full max-h-full ...">max-h-fulldiv>div>
Using a custom value
Use the max-h-[] syntax to set the maximum height based on a completely custom value:
<div class="max-h-[220px] ..."> div>
For CSS variables, you can also use the max-h-() syntax:
<div class="max-h-(--my-max-height) ..."> div>
This is just a shorthand for max-h-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a max-height utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="h-48 max-h-full md:max-h-screen ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
The max-h- utilities are driven by the --spacing theme variable, which can be customized in your own theme:
Learn more about customizing the spacing scale in the theme variable documentation.
