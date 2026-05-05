Utilities for controlling the marker style of a list.
Basic example
Use utilities like list-disc and list-decimal to control the style of the markers in a list:
• Now this is a story all about how, my life got flipped-turned upside down
• And I'd like to take a minute just sit right there
• I'll tell you how I became the prince of a town called Bel-Air
• Now this is a story all about how, my life got flipped-turned upside down
• And I'd like to take a minute just sit right there
• I'll tell you how I became the prince of a town called Bel-Air
• Now this is a story all about how, my life got flipped-turned upside down
• And I'd like to take a minute just sit right there
• I'll tell you how I became the prince of a town called Bel-Air
<ul class="list-disc"> <li>Now this is a story all about how, my life got flipped-turned upside downli> ul><ol class="list-decimal"> <li>Now this is a story all about how, my life got flipped-turned upside downli> ol><ul class="list-none"> <li>Now this is a story all about how, my life got flipped-turned upside downli> ul>
Using a custom value
Use the list-[] syntax to set the marker based on a completely custom value:
<ol class="list-[upper-roman] ..."> ol>
For CSS variables, you can also use the list-() syntax:
<ol class="list-(--my-marker) ..."> ol>
This is just a shorthand for list-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a list-style-type utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<ul class="list-none md:list-disc ..."> ul>
Learn more about using variants in the variants documentation.
