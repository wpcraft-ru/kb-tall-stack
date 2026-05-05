Utilities for controlling the initial size of flex items.
flex-basis: calc(var(--spacing) * );
flex-basis: var(--container-3xs); /* 16rem (256px) */
flex-basis: var(--container-2xs); /* 18rem (288px) */
flex-basis: var(--container-xs); /* 20rem (320px) */
flex-basis: var(--container-sm); /* 24rem (384px) */
flex-basis: var(--container-md); /* 28rem (448px) */
flex-basis: var(--container-lg); /* 32rem (512px) */
Using the spacing scale
Use basis- utilities like basis-64 and basis-128 to set the initial size of flex items based on the spacing scale:
<div class="flex flex-row"> <div class="basis-64">01div> <div class="basis-64">02div> <div class="basis-128">03div>div>
Using the container scale
Use utilities like basis-xs and basis-sm to set the initial size of flex items based on the container scale:
<div class="flex flex-row"> <div class="basis-3xs">01div> <div class="basis-2xs">02div> <div class="basis-xs">03div> <div class="basis-sm">04div>div>
Using percentages
Use basis- utilities like basis-1/2 and basis-2/3 to set the initial size of flex items:
<div class="flex flex-row"> <div class="basis-1/3">01div> <div class="basis-2/3">02div>div>
Using a custom value
Use the basis-[] syntax to set the basis based on a completely custom value:
<div class="basis-[30vw] ..."> div>
For CSS variables, you can also use the basis-() syntax:
<div class="basis-(--my-basis) ..."> div>
This is just a shorthand for basis-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a flex-basis utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="flex flex-row"> <div class="basis-1/4 md:basis-1/3">01div> <div class="basis-1/4 md:basis-1/3">02div> <div class="basis-1/2 md:basis-1/3">03div>div>
Learn more about using variants in the variants documentation.
Customizing your theme
Use the --container-* theme variables to customize the fixed-width basis utilities in your project:
@theme { --container-4xs: 14rem; }
Now the basis-4xs utility can be used in your markup:
The basis- utilities are driven by the --spacing theme variable, which you can also customize:
Learn more about customizing the spacing scale in the theme documentation.
