Utilities for controlling an element's margin.
margin: calc(var(--spacing) * );
margin: calc(var(--spacing) * -);
margin-inline: calc(var(--spacing) * );
margin-inline: calc(var(--spacing) * -);
Basic example
Use m- utilities like m-4 and m-8 to control the margin on all sides of an element:
Adding margin to a single side
Use mt-, mr-, mb-, and ml- utilities like ml-2 and mt-6 to control the margin on one side of an element:
<div class="mt-6 ...">mt-6div><div class="mr-4 ...">mr-4div><div class="mb-8 ...">mb-8div><div class="ml-2 ...">ml-2div>
Adding horizontal margin
Use mx- utilities like mx-4 and mx-8 to control the horizontal margin of an element:
<div class="mx-8 ...">mx-8div>
Adding vertical margin
Use my- utilities like my-4 and my-8 to control the vertical margin of an element:
<div class="my-8 ...">my-8div>
Using negative values
To use a negative margin value, prefix the class name with a dash to convert it to a negative value:
<div class="h-16 w-36 bg-sky-400 opacity-20 ...">div><div class="-mt-8 bg-sky-300 ...">-mt-8div>
Using logical properties
Use ms- or me- utilities like ms-4 and me-8 to set the margin-inline-start and margin-inline-end logical properties:
<div> <div dir="ltr"> <div class="ms-8 ...">ms-8div> <div class="me-8 ...">me-8div> div> <div dir="rtl"> <div class="ms-8 ...">ms-8div> <div class="me-8 ...">me-8div> div>div>
Use the mbs- and mbe- utilities to set the margin-block-start and margin-block-end logical properties, which map to either the top or bottom side based on the writing mode:
<div class="mbs-8 ...">mbs-8div>
Adding space between children
Use space-x- or space-y- utilities like space-x-4 and space-y-8 to control the space between elements:
<div class="flex space-x-4 ..."> <div>01div> <div>02div> <div>03div>div>
Reversing children order
If your elements are in reverse order (using say flex-row-reverse or flex-col-reverse), use the space-x-reverse or space-y-reverse utilities to ensure the space is added to the correct side of each element:
<div class="flex flex-row-reverse space-x-4 space-x-reverse ..."> <div>01div> <div>02div> <div>03div>div>
Limitations
The space utilities are really just a shortcut for adding margin to all-but-the-last-item in a group, and aren't designed to handle complex cases like grids, layouts that wrap, or situations where the children are rendered in a complex custom order rather than their natural DOM order.
For those situations, it's better to use the gap utilities when possible, or add margin to every element with a matching negative margin on the parent.
Additionally, the space utilities are not designed to work together with the divide utilities. For those situations, consider adding margin/padding utilities to the children instead.
Using a custom value
Use utilities like m-[],mx-[], and mb-[] to set the margin based on a completely custom value:
<div class="m-[5px] ..."> div>
For CSS variables, you can also use the m-() syntax:
<div class="m-(--my-margin) ..."> div>
This is just a shorthand for m-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a margin utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="mt-4 md:mt-8 ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
The m-,mx-,my-,ms-,me-,mbs-,mbe-,mt-,mr-,mb-, and ml- utilities are driven by the --spacing theme variable, which can be customized in your own theme:
Learn more about customizing the spacing scale in the theme variable documentation.
