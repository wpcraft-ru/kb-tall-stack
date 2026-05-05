Utilities for setting the inline size of an element.
inline-size: calc(var(--spacing) * );
inline-size: var(--container-3xs); /* 16rem (256px) */
inline-size: var(--container-2xs); /* 18rem (288px) */
inline-size: var(--container-xs); /* 20rem (320px) */
inline-size: var(--container-sm); /* 24rem (384px) */
inline-size: var(--container-md); /* 28rem (448px) */
inline-size: var(--container-lg); /* 32rem (512px) */
inline-size: var(--container-xl); /* 36rem (576px) */
inline-size: var(--container-2xl); /* 42rem (672px) */
Basic example
Use inline- utilities like inline-24 and inline-64 to set an element to a fixed inline size based on the spacing scale:
<div class="inline-96 ...">inline-96div><div class="inline-80 ...">inline-80div><div class="inline-64 ...">inline-64div><div class="inline-48 ...">inline-48div><div class="inline-40 ...">inline-40div><div class="inline-32 ...">inline-32div>
Using a percentage
Use inline-full or inline- utilities like inline-1/2 and inline-2/5 to give an element a percentage-based inline size:
<div class="flex ..."> <div class="inline-1/2 ...">inline-1/2div> <div class="inline-1/2 ...">inline-1/2div>div><div class="flex ..."> <div class="inline-2/5 ...">inline-2/5div> <div class="inline-3/5 ...">inline-3/5div>div><div class="flex ..."> <div class="inline-1/3 ...">inline-1/3div> <div class="inline-2/3 ...">inline-2/3div>div><div class="inline-full ...">inline-fulldiv>
Using the container scale
Use utilities like inline-sm and inline-xl to set an element to a fixed inline size based on the container scale:
<div class="inline-xl ...">inline-xldiv><div class="inline-lg ...">inline-lgdiv><div class="inline-md ...">inline-mddiv><div class="inline-sm ...">inline-smdiv><div class="inline-xs ...">inline-xsdiv><div class="inline-2xs ...">inline-2xsdiv><div class="inline-3xs ...">inline-3xsdiv>
Matching the viewport
Use the inline-screen utility to make an element span the entire inline size of the viewport:
<div class="inline-screen"> div>
Resetting the inline size
Use the inline-auto utility to remove an element's assigned inline size under a specific condition, like at a particular breakpoint:
<div class="inline-full md:inline-auto"> div>
Using a custom value
Use the inline-[] syntax to set the inline size based on a completely custom value:
<div class="inline-[5px] ..."> div>
For CSS variables, you can also use the inline-() syntax:
<div class="inline-(--my-inline-size) ..."> div>
This is just a shorthand for inline-[var()] that adds the var() function for you automatically.
Responsive design
Prefix an inline-size utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="inline-1/2 md:inline-full ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
The inline- utilities are driven by the --spacing theme variable, which can be customized in your own theme:
Learn more about customizing the spacing scale in the theme variable documentation.
