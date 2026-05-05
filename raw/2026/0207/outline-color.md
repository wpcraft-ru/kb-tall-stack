Utilities for controlling the color of an element's outline.
outline-color: var(--color-black); /* #000 */
outline-color: var(--color-white); /* #fff */
outline-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */
outline-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */
outline-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */
outline-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */
outline-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */
Basic example
Use utilities like outline-rose-500 and outline-lime-100 to control the color of an element's outline:
<button class="outline-2 outline-offset-2 outline-blue-500 ...">Button Abutton><button class="outline-2 outline-offset-2 outline-cyan-500 ...">Button Bbutton><button class="outline-2 outline-offset-2 outline-pink-500 ...">Button Cbutton>
Changing the opacity
Use the color opacity modifier to control the opacity of an element's outline color:
<button class="outline-2 outline-blue-500/100 ...">Button Abutton><button class="outline-2 outline-blue-500/75 ...">Button Bbutton><button class="outline-2 outline-blue-500/50 ...">Button Cbutton>
Using a custom value
Use the outline-[] syntax to set the outline color based on a completely custom value:
<div class="outline-[#243c5a] ..."> div>
For CSS variables, you can also use the outline-() syntax:
<div class="outline-(--my-color) ..."> div>
This is just a shorthand for outline-[var()] that adds the var() function for you automatically.
Responsive design
Prefix an outline-color utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="outline md:outline-blue-400 ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
Use the --color-* theme variables to customize the color utilities in your project:
@theme { --color-regal-blue: #243c5a; }
Now the outline-regal-blue utility can be used in your markup:
<div class="outline-regal-blue"> div>
Learn more about customizing your theme in the theme documentation.
