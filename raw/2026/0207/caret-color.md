Utilities for controlling the color of the text input cursor.
caret-color: var(--color-black); /* #000 */
caret-color: var(--color-white); /* #fff */
caret-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */
caret-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */
caret-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */
caret-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */
caret-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */
Basic example
Use utilities like caret-rose-500 and caret-lime-600 to change the color of the text input cursor:
Focus the textarea to see the new caret color
<textarea class="caret-pink-500 ...">textarea>
Using a custom value
Use the caret-[] syntax to set the caret color based on a completely custom value:
<textarea class="caret-[#50d71e] ...">textarea>
For CSS variables, you can also use the caret-() syntax:
<textarea class="caret-(--my-caret-color) ...">textarea>
This is just a shorthand for caret-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a caret-color utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<textarea class="caret-rose-500 md:caret-lime-600 ...">textarea>
Learn more about using variants in the variants documentation.
Customizing your theme
Use the --color-* theme variables to customize the color utilities in your project:
@theme { --color-regal-blue: #243c5a; }
Now the caret-regal-blue utility can be used in your markup:
<textarea class="caret-regal-blue">textarea>
Learn more about customizing your theme in the theme documentation.
