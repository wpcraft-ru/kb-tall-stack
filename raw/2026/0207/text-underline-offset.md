Utilities for controlling the offset of a text underline.
text-underline-offset: calc(px * -1);
Basic example
Use underline-offset- utilities like underline-offset-2 and underline-offset-4 to change the offset of a text underline:
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
<p class="underline underline-offset-1">The quick brown fox...p><p class="underline underline-offset-2">The quick brown fox...p><p class="underline underline-offset-4">The quick brown fox...p><p class="underline underline-offset-8">The quick brown fox...p>
Using a custom value
Use the underline-offset-[] syntax to set the text underline offset based on a completely custom value:
<p class="underline-offset-[3px] ..."> Lorem ipsum dolor sit amet...p>
For CSS variables, you can also use the underline-offset-() syntax:
<p class="underline-offset-(--my-underline-offset) ..."> Lorem ipsum dolor sit amet...p>
This is just a shorthand for underline-offset-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a text-underline-offset utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<p class="underline md:underline-offset-4 ..."> Lorem ipsum dolor sit amet...p>
Learn more about using variants in the variants documentation.
