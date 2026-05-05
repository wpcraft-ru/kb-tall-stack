Utilities for translating elements.
translate: calc(var(--spacing) * ) calc(var(--spacing) * );
translate: calc(var(--spacing) * -) calc(var(--spacing) * -);
translate: calc( * 100%) calc( * 100%);
translate: calc( * -100%) calc( * -100%);
Using the spacing scale
Use translate- utilities like translate-2 and -translate-4 to translate an element on both axes based on the spacing scale:
<img class="-translate-6 ..." src="/img/mountains.jpg" /><img class="translate-2 ..." src="/img/mountains.jpg" /><img class="translate-8 ..." src="/img/mountains.jpg" />
Using a percentage
Use translate- utilities like translate-1/4 and -translate-full to translate an element on both axes by a percentage of the element's size:
<img class="-translate-1/4 ..." src="/img/mountains.jpg" /><img class="translate-1/6 ..." src="/img/mountains.jpg" /><img class="translate-1/2 ..." src="/img/mountains.jpg" />
Translating on the x-axis
Use translate-x- or translate-x- utilities like translate-x-4 and translate-x-1/4 to translate an element on the x-axis:
<img class="-translate-x-4 ..." src="/img/mountains.jpg" /><img class="translate-x-2 ..." src="/img/mountains.jpg" /><img class="translate-x-1/2 ..." src="/img/mountains.jpg" />
Translating on the y-axis
Use translate-y- or translate-y- utilities like translate-y-6 and translate-y-1/3 to translate an element on the y-axis:
<img class="-translate-y-4 ..." src="/img/mountains.jpg" /><img class="translate-y-2 ..." src="/img/mountains.jpg" /><img class="translate-y-1/2 ..." src="/img/mountains.jpg" />
Translating on the z-axis
Use translate-z- utilities like translate-z-6 and -translate-z-12 to translate an element on the z-axis:
<div class="transform-3d"> <img class="-translate-z-8 rotate-x-50 rotate-z-45 ..." src="/img/mountains.jpg" /> <img class="translate-z-2 rotate-x-50 rotate-z-45 ..." src="/img/mountains.jpg" /> <img class="translate-z-1/2 rotate-x-50 rotate-z-45 ..." src="/img/mountains.jpg" />div>
Note that the translate-z- utilities require the transform-3d utility to be applied to the parent element.
Using a custom value
Use the translate-[] syntax to set the translation based on a completely custom value:
<img class="translate-[3.142rad] ..." src="/img/mountains.jpg" />
For CSS variables, you can also use the translate-() syntax:
<img class="translate-(--my-translate) ..." src="/img/mountains.jpg" />
This is just a shorthand for translate-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a translate utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<img class="translate-45 md:translate-60 ..." src="/img/mountains.jpg" />
Learn more about using variants in the variants documentation.
