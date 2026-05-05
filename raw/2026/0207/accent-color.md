Utilities for controlling the accented color of a form control.
accent-color: var(--color-black); /* #000 */
accent-color: var(--color-white); /* #fff */
accent-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */
accent-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */
accent-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */
accent-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */
accent-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */
Setting the accent color
Use utilities like accent-rose-500 and accent-lime-600 to change the accent color of an element:
<label> <input type="checkbox" checked /> Browser defaultlabel><label> <input class="accent-pink-500" type="checkbox" checked /> Customizedlabel>
This is helpful for styling elements like checkboxes and radio groups by overriding the browser's default color.
Changing the opacity
Use the color opacity modifier to control the opacity of an element's accent color:
<input class="accent-purple-500/25" type="checkbox" checked /><input class="accent-purple-500/75" type="checkbox" checked />
Setting the accent color opacity has limited browser-support and only works in Firefox at this time.
Using a custom value
Use the accent-[] syntax to set the accent color based on a completely custom value:
<input class="accent-[#50d71e] ..." type="checkbox" />
For CSS variables, you can also use the accent-() syntax:
<input class="accent-(--my-accent-color) ..." type="checkbox" />
This is just a shorthand for accent-[var()] that adds the var() function for you automatically.
Applying on hover
Prefix an accent-color utility with a variant like hover:* to only apply the utility in that state:
<input class="accent-black hover:accent-pink-500" type="checkbox" />
Learn more about using variants in the variants documentation.
Responsive design
Prefix an accent-color utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<input class="accent-black md:accent-pink-500 ..." type="checkbox" />
Learn more about using variants in the variants documentation.
Customizing your theme
Use the --color-* theme variables to customize the color utilities in your project:
@theme { --color-regal-blue: #243c5a; }
Now the accent-regal-blue utility can be used in your markup:
<input class="accent-regal-blue" type="checkbox" />
Learn more about customizing your theme in the theme documentation.
