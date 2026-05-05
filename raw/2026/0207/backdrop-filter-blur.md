Utilities for applying backdrop blur filters to an element.
backdrop-filter: blur(var(--blur-xs)); /* 4px */
backdrop-filter: blur(var(--blur-sm)); /* 8px */
backdrop-filter: blur(var(--blur-md)); /* 12px */
backdrop-filter: blur(var(--blur-lg)); /* 16px */
backdrop-filter: blur(var(--blur-xl)); /* 24px */
backdrop-filter: blur(var(--blur-2xl)); /* 40px */
backdrop-filter: blur(var(--blur-3xl)); /* 64px */
Basic example
Use utilities like backdrop-blur-sm and backdrop-blur-lg to control an element’s backdrop blur:
<div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-blur-none ...">div>div><div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-blur-sm ...">div>div><div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-blur-md ...">div>div>
Using a custom value
Use the backdrop-blur-[] syntax to set the backdrop blur based on a completely custom value:
<div class="backdrop-blur-[2px] ..."> div>
For CSS variables, you can also use the backdrop-blur-() syntax:
<div class="backdrop-blur-(--my-backdrop-blur) ..."> div>
This is just a shorthand for backdrop-blur-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a backdrop-filter: blur() utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="backdrop-blur-none md:backdrop-blur-lg ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
Use the --blur-* theme variables to customize the backdrop blur utilities in your project:
Now the backdrop-blur-2xs utility can be used in your markup:
<div class="backdrop-blur-2xs"> div>
Learn more about customizing your theme in the theme documentation.
