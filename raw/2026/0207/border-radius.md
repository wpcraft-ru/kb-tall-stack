Utilities for controlling the border radius of an element.
border-radius: var(--radius-xs); /* 0.125rem (2px) */
border-radius: var(--radius-sm); /* 0.25rem (4px) */
border-radius: var(--radius-md); /* 0.375rem (6px) */
border-radius: var(--radius-lg); /* 0.5rem (8px) */
border-radius: var(--radius-xl); /* 0.75rem (12px) */
border-radius: var(--radius-2xl); /* 1rem (16px) */
border-radius: var(--radius-3xl); /* 1.5rem (24px) */
border-radius: var(--radius-4xl); /* 2rem (32px) */
border-radius: calc(infinity * 1px);
Basic example
Use utilities like rounded-sm and rounded-md to apply different border radius sizes to an element:
<div class="rounded-sm ...">div><div class="rounded-md ...">div><div class="rounded-lg ...">div><div class="rounded-xl ...">div>
Rounding sides separately
Use utilities like rounded-t-md and rounded-r-lg to only round one side of an element:
<div class="rounded-t-lg ...">div><div class="rounded-r-lg ...">div><div class="rounded-b-lg ...">div><div class="rounded-l-lg ...">div>
Rounding corners separately
Use utilities like rounded-tr-md and rounded-tl-lg utilities to only round one corner of an element:
<div class="rounded-tl-lg ...">div><div class="rounded-tr-lg ...">div><div class="rounded-br-lg ...">div><div class="rounded-bl-lg ...">div>
Using logical properties
Use utilities like rounded-s-md and rounded-se-xl to set the border radius using logical properties, which map to the appropriate corners based on the text direction:
<div dir="ltr"> <div class="rounded-s-lg ...">div>div><div dir="rtl"> <div class="rounded-s-lg ...">div>div>
Here are all the available border radius logical property utilities and their physical property equivalents in both LTR and RTL modes.
For more control, you can also use the LTR and RTL modifiers to conditionally apply specific styles depending on the current text direction.
Creating pill buttons
Use the rounded-full utility to create pill buttons:
<button class="rounded-full ...">Save Changesbutton>
Removing the border radius
Use the rounded-none utility to remove an existing border radius from an element:
<button class="rounded-none ...">Save Changesbutton>
Using a custom value
Use the rounded-[] syntax to set the border radius based on a completely custom value:
<div class="rounded-[2vw] ..."> div>
For CSS variables, you can also use the rounded-() syntax:
<div class="rounded-(--my-radius) ..."> div>
This is just a shorthand for rounded-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a border-radius utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="rounded md:rounded-lg ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
Use the --radius-* theme variables to customize the border radius utilities in your project:
@theme { --radius-5xl: 3rem; }
Now the rounded-5xl utility can be used in your markup:
<div class="rounded-5xl"> div>
Learn more about customizing your theme in the theme documentation.
