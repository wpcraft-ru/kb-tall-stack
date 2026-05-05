Utilities for controlling how elements are sized and placed across grid rows.
grid-row: span var() / span var();
Spanning rows
Use row-span- utilities like row-span-2 and row-span-4 to make an element span n rows:
<div class="grid grid-flow-col grid-rows-3 gap-4"> <div class="row-span-3 ...">01div> <div class="col-span-2 ...">02div> <div class="col-span-2 row-span-2 ...">03div>div>
Starting and ending lines
Use row-start- or row-end- utilities like row-start-2 and row-end-3 to make an element start or end at the nth grid line:
<div class="grid grid-flow-col grid-rows-3 gap-4"> <div class="row-span-2 row-start-2 ...">01div> <div class="row-span-2 row-end-3 ...">02div> <div class="row-start-1 row-end-4 ...">03div>div>
These can also be combined with the row-span- utilities to span a specific number of rows.
Using a custom value
Use utilities like row-[],row-span-[],row-start-[], and row-end-[] to set the grid row size and location based on a completely custom value:
<div class="row-[span_16_/_span_16] ..."> div>
For CSS variables, you can also use the row-() syntax:
<div class="row-(--my-rows) ..."> div>
This is just a shorthand for row-[var()] that adds the var() function for you automatically.
Responsive design
Prefix grid-row,grid-row-start, and grid-row-end utilities with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="row-span-3 md:row-span-4 ..."> div>
Learn more about using variants in the variants documentation.
