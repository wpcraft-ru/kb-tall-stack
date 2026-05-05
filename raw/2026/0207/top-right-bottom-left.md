Utilities for controlling the placement of positioned elements.
inset: calc(var(--spacing) * );
inset: calc(var(--spacing) * -);
Basic example
Use top-, right-, bottom-, left-, and inset- utilities like top-0 and bottom-4 to set the horizontal or vertical position of a positioned element:
<div class="relative size-32 ..."> <div class="absolute top-0 left-0 size-16 ...">01div>div><div class="relative size-32 ..."> <div class="absolute inset-x-0 top-0 h-16 ...">02div>div><div class="relative size-32 ..."> <div class="absolute top-0 right-0 size-16 ...">03div>div><div class="relative size-32 ..."> <div class="absolute inset-y-0 left-0 w-16 ...">04div>div><div class="relative size-32 ..."> <div class="absolute inset-0 ...">05div>div><div class="relative size-32 ..."> <div class="absolute inset-y-0 right-0 w-16 ...">06div>div><div class="relative size-32 ..."> <div class="absolute bottom-0 left-0 size-16 ...">07div>div><div class="relative size-32 ..."> <div class="absolute inset-x-0 bottom-0 h-16 ...">08div>div><div class="relative size-32 ..."> <div class="absolute right-0 bottom-0 size-16 ...">09div>div>
Using negative values
To use a negative top/right/bottom/left value, prefix the class name with a dash to convert it to a negative value:
<div class="relative size-32 ..."> <div class="absolute -top-4 -left-4 size-14 ...">div>div>
Using logical properties
Use inset-s- or inset-e- utilities like inset-s-0 and inset-e-4 to set the inset-inline-start and inset-inline-end logical properties, which map to either the left or right side based on the text direction:
<div dir="ltr"> <div class="relative size-32 ..."> <div class="absolute inset-s-0 top-0 size-14 ...">div> div> <div> <div dir="rtl"> <div class="relative size-32 ..."> <div class="absolute inset-s-0 top-0 size-14 ...">div> div> <div>div> div> div>div>
For more control, you can also use the LTR and RTL modifiers to conditionally apply specific styles depending on the current text direction.
Using a custom value
Use utilities like inset-[] and top-[] to set the position based on a completely custom value:
<div class="inset-[3px] ..."> div>
For CSS variables, you can also use the inset-() syntax:
<div class="inset-(--my-position) ..."> div>
This is just a shorthand for inset-[var()] that adds the var() function for you automatically.
Responsive design
Prefix inset,inset-x,inset-y,inset-s,inset-e,inset-bs,inset-be,top,left,bottom, and right utilities with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="top-4 md:top-6 ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
The inset-,inset-x-,inset-y-,inset-s-,inset-e-,inset-bs-,inset-be-,top-,left-,bottom-, and right- utilities are driven by the --spacing theme variable, which can be customized in your own theme:
Learn more about customizing the spacing scale in the theme variable documentation.
