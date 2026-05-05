Utilities for controlling the style of an element's borders.
& > :not(:last-child) { border-style: solid; }
& > :not(:last-child) { border-style: dashed; }
& > :not(:last-child) { border-style: dotted; }
& > :not(:last-child) { border-style: double; }
& > :not(:last-child) { border-style: hidden; }
& > :not(:last-child) { border-style: none; }
Basic example
Use utilities like border-solid and border-dotted to control an element's border style:
<div class="border-2 border-solid ...">div><div class="border-2 border-dashed ...">div><div class="border-2 border-dotted ...">div><div class="border-4 border-double ...">div>
Removing a border
Use the border-none utility to remove an existing border from an element:
<button class="border-none ...">Save Changesbutton>
This is most commonly used to remove a border style that was applied at a smaller breakpoint.
Setting the divider style
Use utilities like divide-dashed and divide-dotted to control the border style between child elements:
<div class="grid grid-cols-3 divide-x-3 divide-dashed divide-indigo-500"> <div>01div> <div>02div> <div>03div>div>
Responsive design
Prefix a border-style utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="border-solid md:border-dotted ..."> div>
Learn more about using variants in the variants documentation.
