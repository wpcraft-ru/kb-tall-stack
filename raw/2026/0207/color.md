Utilities for controlling the text color of an element.
color: var(--color-black); /* #000 */
color: var(--color-white); /* #fff */
color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */
color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */
color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */
color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */
color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */
Basic example
Use utilities like text-blue-600 and text-sky-400 to control the text color of an element:
The quick brown fox jumps over the lazy dog.
<p class="text-blue-600 dark:text-sky-400">The quick brown fox...p>
Changing the opacity
Use the color opacity modifier to control the text color opacity of an element:
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
<p class="text-blue-600/100 dark:text-sky-400/100">The quick brown fox...p><p class="text-blue-600/75 dark:text-sky-400/75">The quick brown fox...p><p class="text-blue-600/50 dark:text-sky-400/50">The quick brown fox...p><p class="text-blue-600/25 dark:text-sky-400/25">The quick brown fox...p>
Using a custom value
Use the text-[] syntax to set the text color based on a completely custom value:
<p class="text-[#50d71e] ..."> Lorem ipsum dolor sit amet...p>
For CSS variables, you can also use the text-() syntax:
<p class="text-(--my-color) ..."> Lorem ipsum dolor sit amet...p>
This is just a shorthand for text-[var()] that adds the var() function for you automatically.
Applying on hover
Prefix a color utility with a variant like hover:* to only apply the utility in that state:
Hover over the text to see the expected behavior
Oh I gotta get on that internet, I'm late on everything!
<p class="..."> Oh I gotta get on that <a class="underline hover:text-blue-600 dark:hover:text-blue-400" href="https://en.wikipedia.org/wiki/Internet">interneta>, I'm late on everything!p>
Learn more about using variants in the variants documentation.
Responsive design
Prefix a color utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<p class="text-blue-600 md:text-green-600 ..."> Lorem ipsum dolor sit amet...p>
Learn more about using variants in the variants documentation.
Customizing your theme
Use the --color-* theme variables to customize the color utilities in your project:
@theme { --color-regal-blue: #243c5a; }
Now the text-regal-blue utility can be used in your markup:
<p class="text-regal-blue"> Lorem ipsum dolor sit amet...p>
Learn more about customizing your theme in the theme documentation.
