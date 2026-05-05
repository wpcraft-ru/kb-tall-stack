Utilities for styling the stroke of SVG elements.
stroke: var(--color-black); /* #000 */
stroke: var(--color-white); /* #fff */
stroke: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */
stroke: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */
stroke: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */
stroke: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */
Basic example
Use utilities like stroke-indigo-500 and stroke-lime-600 to change the stroke color of an SVG:
<svg class="stroke-cyan-500 ..."> svg>
This can be useful for styling icon sets like Heroicons.
Using the current color
Use the stroke-current utility to set the stroke color to the current text color:
Hover over the button to see the stroke color change
<button class="bg-white text-pink-600 hover:bg-pink-600 hover:text-white ..."> <svg class="size-5 stroke-current ..." fill="none"> svg> Download filebutton>
Using a custom value
Use the stroke-[] syntax to set the stroke color based on a completely custom value:
<svg class="stroke-[#243c5a] ..."> svg>
For CSS variables, you can also use the stroke-() syntax:
<svg class="stroke-(--my-stroke-color) ..."> svg>
This is just a shorthand for stroke-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a stroke utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<svg class="stroke-cyan-500 md:stroke-cyan-700 ..."> svg>
Learn more about using variants in the variants documentation.
Customizing your theme
Use the --color-* theme variables to customize the color utilities in your project:
@theme { --color-regal-blue: #243c5a; }
Now the stroke-regal-blue utility can be used in your markup:
<svg class="stroke-regal-blue"> svg>
Learn more about customizing your theme in the theme documentation.
