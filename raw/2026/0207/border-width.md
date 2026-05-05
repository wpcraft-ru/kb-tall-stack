Utilities for controlling the width of an element's borders.
Basic example
Use border or border- utilities like border-2 and border-4 to set the border width for all sides of an element:
<div class="border border-indigo-600 ...">div><div class="border-2 border-indigo-600 ...">div><div class="border-4 border-indigo-600 ...">div><div class="border-8 border-indigo-600 ...">div>
Individual sides
Use utilities like border-r and border-t-4 to set the border width for one side of an element:
<div class="border-t-4 border-indigo-500 ...">div><div class="border-r-4 border-indigo-500 ...">div><div class="border-b-4 border-indigo-500 ...">div><div class="border-l-4 border-indigo-500 ...">div>
Horizontal and vertical sides
Use utilities like border-x and border-y-4 to set the border width on two sides of an element at the same time:
<div class="border-x-4 border-indigo-500 ...">div><div class="border-y-4 border-indigo-500 ...">div>
Using logical properties
Use utilities like border-s and border-e-4 to set the border-inline-start-width and border-inline-end-width logical properties, which map to either the left or right border based on the text direction:
<div dir="ltr"> <div class="border-s-4 ...">div>div><div dir="rtl"> <div class="border-s-4 ...">div>div>
Use the border-bs- and border-be- utilities to set the border-block-start-width and border-block-end-width logical properties, which map to either the top or bottom border based on the writing mode:
<div class="border-bs-4 ...">div>
Between children
Use utilities like divide-x and divide-y-4 to add borders between child elements:
<div class="grid grid-cols-3 divide-x-4"> <div>01div> <div>02div> <div>03div>div>
Reversing children order
If your elements are in reverse order (using say flex-row-reverse or flex-col-reverse), use the divide-x-reverse or divide-y-reverse utilities to ensure the border is added to the correct side of each element:
<div class="flex flex-col-reverse divide-y-4 divide-y-reverse divide-gray-200"> <div>01div> <div>02div> <div>03div>div>
Using a custom value
Use the border-[] syntax to set the border width based on a completely custom value:
<div class="border-[2vw] ..."> div>
For CSS variables, you can also use the border-(length:) syntax:
<div class="border-(length:--my-border-width) ..."> div>
This is just a shorthand for border-[length:var()] that adds the var() function for you automatically.
Responsive design
Prefix a border-width utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="border-2 md:border-t-4 ..."> div>
Learn more about using variants in the variants documentation.
