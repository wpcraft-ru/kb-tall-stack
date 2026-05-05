Utilities for controlling the tracking, or letter spacing, of an element.
letter-spacing: var(--tracking-tighter); /* -0.05em */
letter-spacing: var(--tracking-tight); /* -0.025em */
letter-spacing: var(--tracking-normal); /* 0em */
letter-spacing: var(--tracking-wide); /* 0.025em */
letter-spacing: var(--tracking-wider); /* 0.05em */
letter-spacing: var(--tracking-widest); /* 0.1em */
Basic example
Use utilities like tracking-tight and tracking-wide to set the letter spacing of an element:
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
<p class="tracking-tight ...">The quick brown fox ...p><p class="tracking-normal ...">The quick brown fox ...p><p class="tracking-wide ...">The quick brown fox ...p>
Using negative values
Using negative values doesn't make a ton of sense with the named letter spacing scale Tailwind includes out of the box, but if you've customized your scale to use numbers it can be useful:
@theme { --tracking-1: 0em; --tracking-2: 0.025em; --tracking-3: 0.05em; --tracking-4: 0.1em;}
To use a negative letter spacing value, prefix the class name with a dash to convert it to a negative value:
<p class="-tracking-2">The quick brown fox ...p>
Using a custom value
Use the tracking-[] syntax to set the letter spacing based on a completely custom value:
<p class="tracking-[.25em] ..."> Lorem ipsum dolor sit amet...p>
For CSS variables, you can also use the tracking-() syntax:
<p class="tracking-(--my-tracking) ..."> Lorem ipsum dolor sit amet...p>
This is just a shorthand for tracking-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a letter-spacing utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<p class="tracking-tight md:tracking-wide ..."> Lorem ipsum dolor sit amet...p>
Learn more about using variants in the variants documentation.
Customizing your theme
Use the --tracking-* theme variables to customize the letter spacing utilities in your project:
@theme { --tracking-tightest: -0.075em; }
Now the tracking-tightest utility can be used in your markup:
<p class="tracking-tightest"> Lorem ipsum dolor sit amet...p>
Learn more about customizing your theme in the theme documentation.
