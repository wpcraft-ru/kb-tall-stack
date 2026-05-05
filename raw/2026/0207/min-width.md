Utilities for setting the minimum width of an element.
min-width: calc(var(--spacing) * );
min-width: var(--container-3xs); /* 16rem (256px) */
min-width: var(--container-2xs); /* 18rem (288px) */
min-width: var(--container-xs); /* 20rem (320px) */
min-width: var(--container-sm); /* 24rem (384px) */
min-width: var(--container-md); /* 28rem (448px) */
min-width: var(--container-lg); /* 32rem (512px) */
min-width: var(--container-xl); /* 36rem (576px) */
min-width: var(--container-2xl); /* 42rem (672px) */
Basic example
Use min-w- utilities like min-w-24 and min-w-64 to set an element to a fixed minimum width based on the spacing scale:
<div class="w-20 ..."> <div class="min-w-80 ...">min-w-80div> <div class="min-w-64 ...">min-w-64div> <div class="min-w-48 ...">min-w-48div> <div class="min-w-40 ...">min-w-40div> <div class="min-w-32 ...">min-w-32div> <div class="min-w-24 ...">min-w-24div>div>
Using a percentage
Use min-w-full or min-w- utilities like min-w-1/2 and min-w-2/5 to give an element a percentage-based minimum width:
<div class="flex ..."> <div class="min-w-3/4 ...">min-w-3/4div> <div class="w-full ...">w-fulldiv>div>
Using the container scale
Use utilities like min-w-sm and min-w-xl to set an element to a fixed minimum width based on the container scale:
<div class="w-40 ..."> <div class="min-w-lg ...">min-w-lgdiv> <div class="min-w-md ...">min-w-mddiv> <div class="min-w-sm ...">min-w-smdiv> <div class="min-w-xs ...">min-w-xsdiv> <div class="min-w-2xs ...">min-w-2xsdiv> <div class="min-w-3xs ...">min-w-3xsdiv>div>
Using a custom value
Use the min-w-[] syntax to set the minimum width based on a completely custom value:
<div class="min-w-[220px] ..."> div>
For CSS variables, you can also use the min-w-() syntax:
<div class="min-w-(--my-min-width) ..."> div>
This is just a shorthand for min-w-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a min-width utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="w-24 min-w-full md:min-w-0 ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
The min-w- utilities are driven by the --spacing theme variable, which can be customized in your own theme:
Learn more about customizing the spacing scale in the theme variable documentation.
