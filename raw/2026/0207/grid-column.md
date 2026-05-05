Utilities for controlling how elements are sized and placed across grid columns.
grid-column: span var() / span var();
grid-column-start: calc( * -1);
Spanning columns
Use col-span- utilities like col-span-2 and col-span-4 to make an element span n columns:
<div class="grid grid-cols-3 gap-4"> <div class="...">01div> <div class="...">02div> <div class="...">03div> <div class="col-span-2 ...">04div> <div class="...">05div> <div class="...">06div> <div class="col-span-2 ...">07div>div>
Starting and ending lines
Use col-start- or col-end- utilities like col-start-2 and col-end-3 to make an element start or end at the nth grid line:
<div class="grid grid-cols-6 gap-4"> <div class="col-span-4 col-start-2 ...">01div> <div class="col-start-1 col-end-3 ...">02div> <div class="col-span-2 col-end-7 ...">03div> <div class="col-start-1 col-end-7 ...">04div>div>
These can also be combined with the col-span- utilities to span a specific number of columns.
Using a custom value
Use utilities like col-[],col-span-[],col-start-[], and col-end-[] to set the grid column size and location based on a completely custom value:
<div class="col-[16_/_span_16] ..."> div>
For CSS variables, you can also use the col-() syntax:
<div class="col-(--my-columns) ..."> div>
This is just a shorthand for col-[var()] that adds the var() function for you automatically.
Responsive design
Prefix grid-column,grid-column-start, and grid-column-end utilities with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="col-span-2 md:col-span-6 ..."> div>
Learn more about using variants in the variants documentation.
