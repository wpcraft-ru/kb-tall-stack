Utilities for controlling the font weight of an element.
Basic example
Use utilities like font-thin and font-bold to set the font weight of an element:
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
<p class="font-light ...">The quick brown fox ...p><p class="font-normal ...">The quick brown fox ...p><p class="font-medium ...">The quick brown fox ...p><p class="font-semibold ...">The quick brown fox ...p><p class="font-bold ...">The quick brown fox ...p>
Using a custom value
Use the font-[] syntax to set the font weight based on a completely custom value:
<p class="font-[1000] ..."> Lorem ipsum dolor sit amet...p>
For CSS variables, you can also use the font-(weight:) syntax:
<p class="font-(weight:--my-font-weight) ..."> Lorem ipsum dolor sit amet...p>
This is just a shorthand for font-[weight:var()] that adds the var() function for you automatically.
Responsive design
Prefix a font-weight utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<p class="font-normal md:font-bold ..."> Lorem ipsum dolor sit amet...p>
Learn more about using variants in the variants documentation.
Customizing your theme
Use the --font-weight-* theme variables to customize the font weight utilities in your project:
@theme { --font-weight-extrablack: 1000; }
Now the font-extrablack utility can be used in your markup:
<div class="font-extrablack"> div>
Learn more about customizing your theme in the theme documentation.
