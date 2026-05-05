Utilities for controlling the color of text decorations.
text-decoration-color: inherit;
text-decoration-color: currentColor;
text-decoration-color: transparent;
text-decoration-color: var(--color-black); /* #000 */
text-decoration-color: var(--color-white); /* #fff */
text-decoration-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */
text-decoration-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */
text-decoration-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */
text-decoration-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */
text-decoration-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */
Basic example
Use utilities like decoration-sky-500 and decoration-pink-500 to change the text decoration color of an element:
<p> I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at <a class="underline decoration-sky-500">My Company, Inca>. Outside of work, I like to <a class="underline decoration-pink-500">watch pod-racinga> and have <a class="underline decoration-indigo-500">light-sabera> fights.p>
Changing the opacity
Use the color opacity modifier to control the text decoration color opacity of an element:
<p> I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at <a class="underline decoration-sky-500/30">My Company, Inca>. Outside of work, I like to <a class="underline decoration-pink-500/30">watch pod-racinga> and have <a class="underline decoration-indigo-500/30">light-sabera> fights.p>
Using a custom value
Use the decoration-[] syntax to set the text decoration color based on a completely custom value:
<p class="decoration-[#50d71e] ..."> Lorem ipsum dolor sit amet...p>
For CSS variables, you can also use the decoration-() syntax:
<p class="decoration-(--my-color) ..."> Lorem ipsum dolor sit amet...p>
This is just a shorthand for decoration-[var()] that adds the var() function for you automatically.
Applying on hover
Prefix a text-decoration-color utility with a variant like hover:* to only apply the utility in that state:
Hover over the text to see the expected behavior
<p>The <a href="..." class="underline hover:decoration-pink-500 ...">quick brown foxa> jumps over the lazy dog.p>
Learn more about using variants in the variants documentation.
Responsive design
Prefix a text-decoration-color utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<p class="underline decoration-sky-600 md:decoration-blue-400 ..."> Lorem ipsum dolor sit amet...p>
Learn more about using variants in the variants documentation.
Customizing your theme
Use the --color-* theme variables to customize the color utilities in your project:
@theme { --color-regal-blue: #243c5a; }
Now the decoration-regal-blue utility can be used in your markup:
<p class="decoration-regal-blue"> Lorem ipsum dolor sit amet...p>
Learn more about customizing your theme in the theme documentation.
