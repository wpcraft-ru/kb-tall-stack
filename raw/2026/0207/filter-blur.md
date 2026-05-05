Utilities for applying blur filters to an element.
filter: blur(var(--blur-xs)); /* 4px */
filter: blur(var(--blur-sm)); /* 8px */
filter: blur(var(--blur-md)); /* 12px */
filter: blur(var(--blur-lg)); /* 16px */
filter: blur(var(--blur-xl)); /* 24px */
filter: blur(var(--blur-2xl)); /* 40px */
filter: blur(var(--blur-3xl)); /* 64px */
Basic example
Use utilities like blur-sm and blur-lg to blur an element:
<img class="blur-none" src="/img/mountains.jpg" /><img class="blur-sm" src="/img/mountains.jpg" /><img class="blur-lg" src="/img/mountains.jpg" /><img class="blur-2xl" src="/img/mountains.jpg" />
Using a custom value
Use the blur-[] syntax to set the blur based on a completely custom value:
<img class="blur-[2px] ..." src="/img/mountains.jpg" />
For CSS variables, you can also use the blur-() syntax:
<img class="blur-(--my-blur) ..." src="/img/mountains.jpg" />
This is just a shorthand for blur-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a filter: blur() utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<img class="blur-none md:blur-lg ..." src="/img/mountains.jpg" />
Learn more about using variants in the variants documentation.
Customizing your theme
Use the --blur-* theme variables to customize the blur utilities in your project:
Now the blur-2xs utility can be used in your markup:
<img class="blur-2xs" src="/img/mountains.jpg" />
Learn more about customizing your theme in the theme documentation.
