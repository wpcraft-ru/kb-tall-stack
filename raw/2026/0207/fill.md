Utilities for styling the fill of SVG elements.
fill: var(--color-black); /* #000 */
fill: var(--color-white); /* #fff */
fill: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */
fill: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */
fill: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */
fill: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */
Basic example
Use utilities like fill-indigo-500 and fill-lime-600 to change the fill color of an SVG:
<svg class="fill-blue-500 ..."> svg>
This can be useful for styling icon sets like Heroicons.
Using the current color
Use the fill-current utility to set the fill color to the current text color:
Hover over the button to see the fill color change
<button class="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white ..."> <svg class="size-5 fill-current ..."> svg> Check for updatesbutton>
Using a custom value
Use the fill-[] syntax to set the fill color based on a completely custom value:
<svg class="fill-[#243c5a] ..."> svg>
For CSS variables, you can also use the fill-() syntax:
<svg class="fill-(--my-fill-color) ..."> svg>
This is just a shorthand for fill-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a fill utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<svg class="fill-cyan-500 md:fill-cyan-700 ..."> svg>
Learn more about using variants in the variants documentation.
Customizing your theme
Use the --color-* theme variables to customize the color utilities in your project:
@theme { --color-regal-blue: #243c5a; }
Now the fill-regal-blue utility can be used in your markup:
<svg class="fill-regal-blue"> svg>
Learn more about customizing your theme in the theme documentation.
