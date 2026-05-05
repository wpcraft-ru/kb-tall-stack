Utilities for setting the minimum inline size of an element.
min-inline-size: calc(var(--spacing) * );
min-inline-size: calc( * 100%);
min-inline-size: var(--container-3xs); /* 16rem (256px) */
min-inline-size: var(--container-2xs); /* 18rem (288px) */
min-inline-size: var(--container-xs); /* 20rem (320px) */
min-inline-size: var(--container-sm); /* 24rem (384px) */
min-inline-size: var(--container-md); /* 28rem (448px) */
min-inline-size: var(--container-lg); /* 32rem (512px) */
min-inline-size: var(--container-xl); /* 36rem (576px) */
min-inline-size: var(--container-2xl); /* 42rem (672px) */
Basic example
Use min-inline- utilities like min-inline-24 and min-inline-64 to set an element to a fixed minimum inline size based on the spacing scale:
<div class="inline-20 ..."> <div class="min-inline-80 ...">min-inline-80div> <div class="min-inline-64 ...">min-inline-64div> <div class="min-inline-48 ...">min-inline-48div> <div class="min-inline-40 ...">min-inline-40div> <div class="min-inline-32 ...">min-inline-32div> <div class="min-inline-24 ...">min-inline-24div>div>
Using a percentage
Use min-inline-full or min-inline- utilities like min-inline-1/2 and min-inline-2/5 to give an element a percentage-based minimum inline size:
<div class="flex ..."> <div class="min-inline-3/4 ...">min-inline-3/4div> <div class="inline-full ...">inline-fulldiv>div>
Using the container scale
Use utilities like min-inline-sm and min-inline-xl to set an element to a fixed minimum inline size based on the container scale:
<div class="inline-40 ..."> <div class="min-inline-lg ...">min-inline-lgdiv> <div class="min-inline-md ...">min-inline-mddiv> <div class="min-inline-sm ...">min-inline-smdiv> <div class="min-inline-xs ...">min-inline-xsdiv> <div class="min-inline-2xs ...">min-inline-2xsdiv> <div class="min-inline-3xs ...">min-inline-3xsdiv>div>
Using a custom value
Use the min-inline-[] syntax to set the minimum inline size based on a completely custom value:
<div class="min-inline-[220px] ..."> div>
For CSS variables, you can also use the min-inline-() syntax:
<div class="min-inline-(--my-min-inline-size) ..."> div>
This is just a shorthand for min-inline-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a min-inline-size utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="inline-24 min-inline-full md:min-inline-0 ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
The min-inline- utilities are driven by the --spacing theme variable, which can be customized in your own theme:
Learn more about customizing the spacing scale in the theme variable documentation.
