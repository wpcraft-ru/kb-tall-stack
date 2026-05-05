Utilities for selecting the width of a font face.
font-stretch: ultra-condensed; /* 50% */
font-stretch: extra-condensed; /* 62.5% */
font-stretch: condensed; /* 75% */
font-stretch: semi-condensed; /* 87.5% */
font-stretch: normal; /* 100% */
font-stretch: semi-expanded; /* 112.5% */
font-stretch: expanded; /* 125% */
font-stretch: extra-expanded; /* 150% */
font-stretch: ultra-expanded; /* 200% */
Basic example
Use utilities like font-stretch-condensed and font-stretch-expanded to set the width of a font face:
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
<p class="font-stretch-extra-condensed">The quick brown fox...p><p class="font-stretch-condensed">The quick brown fox...p><p class="font-stretch-normal">The quick brown fox...p><p class="font-stretch-expanded">The quick brown fox...p><p class="font-stretch-extra-expanded">The quick brown fox...p>
This only applies to fonts that have multiple width variations available, otherwise the browser selects the closest match.
Using percentages
Use font-stretch- utilities like font-stretch-50% and font-stretch-125% to set the width of a font face using a percentage:
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
<p class="font-stretch-50%">The quick brown fox...p><p class="font-stretch-100%">The quick brown fox...p><p class="font-stretch-150%">The quick brown fox...p>
Using a custom value
Use the font-stretch-[] syntax to set the font width based on a completely custom value:
<p class="font-stretch-[66.66%] ..."> Lorem ipsum dolor sit amet...p>
For CSS variables, you can also use the font-stretch-() syntax:
<p class="font-stretch-(--my-font-width) ..."> Lorem ipsum dolor sit amet...p>
This is just a shorthand for font-stretch-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a font-stretch utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="font-stretch-normal md:font-stretch-expanded ..."> div>
Learn more about using variants in the variants documentation.
