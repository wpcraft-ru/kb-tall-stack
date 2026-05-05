Utilities for controlling an element's padding.
padding: calc(var(--spacing) * );
padding-inline: calc(var(--spacing) * );
padding-block: calc(var(--spacing) * );
Basic example
Use p- utilities like p-4 and p-8 to control the padding on all sides of an element:
Adding padding to one side
Use pt-, pr-, pb-, and pl- utilities like pt-6 and pr-4 to control the padding on one side of an element:
<div class="pt-6 ...">pt-6div><div class="pr-4 ...">pr-4div><div class="pb-8 ...">pb-8div><div class="pl-2 ...">pl-2div>
Adding horizontal padding
Use px- utilities like px-4 and px-8 to control the horizontal padding of an element:
<div class="px-8 ...">px-8div>
Adding vertical padding
Use py- utilities like py-4 and py-8 to control the vertical padding of an element:
<div class="py-8 ...">py-8div>
Using logical properties
Use ps- or pe- utilities like ps-4 and pe-8 to set the padding-inline-start and padding-inline-end logical properties, which map to either the left or right side based on the text direction:
<div> <div dir="ltr"> <div class="ps-8 ...">ps-8div> <div class="pe-8 ...">pe-8div> div> <div dir="rtl"> <div class="ps-8 ...">ps-8div> <div class="pe-8 ...">pe-8div> div>div>
For more control, you can also use the LTR and RTL modifiers to conditionally apply specific styles depending on the current text direction.
Use the pbs- and pbe- utilities to set the padding-block-start and padding-block-end logical properties, which map to either the top or bottom side based on the writing mode:
<div class="pbs-8 ...">pbs-8div>
Using a custom value
Use utilities like p-[],px-[], and pb-[] to set the padding based on a completely custom value:
<div class="p-[5px] ..."> div>
For CSS variables, you can also use the p-() syntax:
<div class="p-(--my-padding) ..."> div>
This is just a shorthand for p-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a padding utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="py-4 md:py-8 ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
The p-,px-,py-,ps-,pe-,pbs-,pbe-,pt-,pr-,pb-, and pl- utilities are driven by the --spacing theme variable, which can be customized in your own theme:
Learn more about customizing the spacing scale in the theme variable documentation.
