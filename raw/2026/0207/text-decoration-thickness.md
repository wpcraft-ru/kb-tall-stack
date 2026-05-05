Utilities for controlling the thickness of text decorations.
text-decoration-thickness: px;
text-decoration-thickness: from-font;
text-decoration-thickness: auto;
text-decoration-thickness: var();
Basic example
Use decoration- utilities like decoration-2 and decoration-4 to change the text decoration thickness of an element:
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
<p class="underline decoration-1">The quick brown fox...p><p class="underline decoration-2">The quick brown fox...p><p class="underline decoration-4">The quick brown fox...p>
Using a custom value
Use the decoration-[] syntax to set the text decoration thickness based on a completely custom value:
<p class="decoration-[0.25rem] ..."> Lorem ipsum dolor sit amet...p>
For CSS variables, you can also use the decoration-(length:) syntax:
<p class="decoration-(length:--my-decoration-thickness) ..."> Lorem ipsum dolor sit amet...p>
This is just a shorthand for decoration-[length:var()] that adds the var() function for you automatically.
Responsive design
Prefix a text-decoration-thickness utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<p class="underline md:decoration-4 ..."> Lorem ipsum dolor sit amet...p>
Learn more about using variants in the variants documentation.
