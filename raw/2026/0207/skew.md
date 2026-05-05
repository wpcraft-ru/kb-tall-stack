Utilities for skewing elements with transform.
transform: skewX(deg) skewY(deg);
transform: skewX(-deg) skewY(-deg);
transform: skewX(var()) skewY(var());
Basic example
Use skew- utilities like skew-4 and skew-10 to skew an element on both axes:
<img class="skew-3 ..." src="/img/mountains.jpg" /><img class="skew-6 ..." src="/img/mountains.jpg" /><img class="skew-12 ..." src="/img/mountains.jpg" />
Using negative values
Use -skew- utilities like -skew-4 and -skew-10 to skew an element on both axes:
<img class="-skew-3 ..." src="/img/mountains.jpg" /><img class="-skew-6 ..." src="/img/mountains.jpg" /><img class="-skew-12 ..." src="/img/mountains.jpg" />
Skewing on the x-axis
Use skew-x- utilities like skew-x-4 and -skew-x-10 to skew an element on the x-axis:
<img class="-skew-x-12 ..." src="/img/mountains.jpg" /><img class="skew-x-6 ..." src="/img/mountains.jpg" /><img class="skew-x-12 ..." src="/img/mountains.jpg" />
Skewing on the y-axis
Use skew-y- utilities like skew-y-4 and -skew-y-10 to skew an element on the y-axis:
<img class="-skew-y-12 ..." src="/img/mountains.jpg" /><img class="skew-y-6 ..." src="/img/mountains.jpg" /><img class="skew-y-12 ..." src="/img/mountains.jpg" />
Using a custom value
Use the skew-[] syntax to set the skew based on a completely custom value:
<img class="skew-[3.142rad] ..." src="/img/mountains.jpg" />
For CSS variables, you can also use the skew-() syntax:
<img class="skew-(--my-skew) ..." src="/img/mountains.jpg" />
This is just a shorthand for skew-[var()] that adds the var() function for you automatically.
Responsive design
Prefix skewX() and skewY() utilities with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<img class="skew-3 md:skew-12 ..." src="/img/mountains.jpg" />
Learn more about using variants in the variants documentation.
