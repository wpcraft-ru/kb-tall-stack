Utilities for setting the width of an element.
width: calc(var(--spacing) * );
width: var(--container-3xs); /* 16rem (256px) */
width: var(--container-2xs); /* 18rem (288px) */
width: var(--container-xs); /* 20rem (320px) */
width: var(--container-sm); /* 24rem (384px) */
width: var(--container-md); /* 28rem (448px) */
width: var(--container-lg); /* 32rem (512px) */
width: var(--container-xl); /* 36rem (576px) */
width: var(--container-2xl); /* 42rem (672px) */
Basic example
Use w- utilities like w-24 and w-64 to set an element to a fixed width based on the spacing scale:
<div class="w-96 ...">w-96div><div class="w-80 ...">w-80div><div class="w-64 ...">w-64div><div class="w-48 ...">w-48div><div class="w-40 ...">w-40div><div class="w-32 ...">w-32div><div class="w-24 ...">w-24div>
Using a percentage
Use w-full or w- utilities like w-1/2 and w-2/5 to give an element a percentage-based width:
<div class="flex ..."> <div class="w-1/2 ...">w-1/2div> <div class="w-1/2 ...">w-1/2div>div><div class="flex ..."> <div class="w-2/5 ...">w-2/5div> <div class="w-3/5 ...">w-3/5div>div><div class="flex ..."> <div class="w-1/3 ...">w-1/3div> <div class="w-2/3 ...">w-2/3div>div><div class="flex ..."> <div class="w-1/4 ...">w-1/4div> <div class="w-3/4 ...">w-3/4div>div><div class="flex ..."> <div class="w-1/5 ...">w-1/5div> <div class="w-4/5 ...">w-4/5div>div><div class="flex ..."> <div class="w-1/6 ...">w-1/6div> <div class="w-5/6 ...">w-5/6div>div><div class="w-full ...">w-fulldiv>
Using the container scale
Use utilities like w-sm and w-xl to set an element to a fixed width based on the container scale:
<div class="w-xl ...">w-xldiv><div class="w-lg ...">w-lgdiv><div class="w-md ...">w-mddiv><div class="w-sm ...">w-smdiv><div class="w-xs ...">w-xsdiv><div class="w-2xs ...">w-2xsdiv><div class="w-3xs ...">w-3xsdiv>
Matching the viewport
Use the w-screen utility to make an element span the entire width of the viewport:
Alternatively, you can match the width of the large, small or dynamic viewports using the w-lvw, w-svw, and w-dvw utilities.
Resetting the width
Use the w-auto utility to remove an element's assigned width under a specific condition, like at a particular breakpoint:
<div class="w-full md:w-auto"> div>
Setting both width and height
Use utilities like size-px, size-4, and size-full to set both the width and height of an element at the same time:
<div class="size-16 ...">size-16div><div class="size-20 ...">size-20div><div class="size-24 ...">size-24div><div class="size-32 ...">size-32div><div class="size-40 ...">size-40div>
Using a custom value
Use the w-[] syntax to set the width based on a completely custom value:
<div class="w-[5px] ..."> div>
For CSS variables, you can also use the w-() syntax:
<div class="w-(--my-width) ..."> div>
This is just a shorthand for w-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a width utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="w-1/2 md:w-full ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
The w- and size- utilities are driven by the --spacing theme variable, which can be customized in your own theme:
Learn more about customizing the spacing scale in the theme variable documentation.
