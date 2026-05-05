Utilities for controlling an element's background color.
background-color: currentColor;
background-color: transparent;
background-color: var(--color-black); /* #000 */
background-color: var(--color-white); /* #fff */
background-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */
background-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */
background-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */
background-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */
background-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */
Basic example
Use utilities like bg-white, bg-indigo-500 and bg-transparent to control the background color of an element:
<button class="bg-blue-500 ...">Button Abutton><button class="bg-cyan-500 ...">Button Bbutton><button class="bg-pink-500 ...">Button Cbutton>
Changing the opacity
Use the color opacity modifier to control the opacity of an element's background color:
<button class="bg-sky-500/100 ...">button><button class="bg-sky-500/75 ...">button><button class="bg-sky-500/50 ...">button>
Using a custom value
Use the bg-[] syntax to set the background color based on a completely custom value:
<div class="bg-[#50d71e] ..."> div>
For CSS variables, you can also use the bg-() syntax:
<div class="bg-(--my-color) ..."> div>
This is just a shorthand for bg-[var()] that adds the var() function for you automatically.
Applying on hover
Prefix a background-color utility with a variant like hover:* to only apply the utility in that state:
<button class="bg-indigo-500 hover:bg-fuchsia-500 ...">Save changesbutton>
Learn more about using variants in the variants documentation.
Responsive design
Prefix a background-color utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="bg-blue-500 md:bg-green-500 ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
Use the --color-* theme variables to customize the color utilities in your project:
@theme { --color-regal-blue: #243c5a; }
Now the bg-regal-blue utility can be used in your markup:
<div class="bg-regal-blue"> div>
Learn more about customizing your theme in the theme documentation.
