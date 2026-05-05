Utilities for controlling the easing of CSS transitions.
transition-timing-function: linear;
transition-timing-function: var(--ease-in); /* cubic-bezier(0.4, 0, 1, 1) */
transition-timing-function: var(--ease-out); /* cubic-bezier(0, 0, 0.2, 1) */
transition-timing-function: var(--ease-in-out); /* cubic-bezier(0.4, 0, 0.2, 1) */
transition-timing-function: initial;
transition-timing-function: var();
Basic example
Use utilities like ease-in and ease-out to control the easing curve of an element's transition:
Hover each button to see the expected behavior
<button class="duration-300 ease-in ...">Button Abutton><button class="duration-300 ease-out ...">Button Bbutton><button class="duration-300 ease-in-out ...">Button Cbutton>
Using a custom value
Use the ease-[] syntax to set the transition timing function based on a completely custom value:
<button class="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ..."> button>
For CSS variables, you can also use the ease-() syntax:
<button class="ease-(--my-ease) ..."> button>
This is just a shorthand for ease-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a transition-timing-function utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<button class="ease-out md:ease-in ..."> button>
Learn more about using variants in the variants documentation.
Customizing your theme
Use the --ease-* theme variables to customize the transition timing function utilities in your project:
@theme { --ease-in-expo: cubic-bezier(0.95, 0.05, 0.795, 0.035); }
Now the ease-in-expo utility can be used in your markup:
<button class="ease-in-expo"> button>
Learn more about customizing your theme in the theme documentation.
