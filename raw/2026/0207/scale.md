Utilities for scaling elements.
scale: calc(% * -1) calc(% * -1);
scale: calc(% * -1) var(--tw-scale-y);
scale: var() var(--tw-scale-y);
Basic example
Use scale- utilities like scale-75 and scale-150 to scale an element by a percentage of its original size:
<img class="scale-75 ..." src="/img/mountains.jpg" /><img class="scale-100 ..." src="/img/mountains.jpg" /><img class="scale-125 ..." src="/img/mountains.jpg" />
Scaling on the x-axis
Use the scale-x- utilities like scale-x-75 and -scale-x-150 to scale an element on the x-axis by a percentage of its original width:
<img class="scale-x-75 ..." src="/img/mountains.jpg" /><img class="scale-x-100 ..." src="/img/mountains.jpg" /><img class="scale-x-125 ..." src="/img/mountains.jpg" />
Scaling on the y-axis
Use the scale-y- utilities like scale-y-75 and scale-y-150 to scale an element on the y-axis by a percentage of its original height:
<img class="scale-y-75 ..." src="/img/mountains.jpg" /><img class="scale-y-100 ..." src="/img/mountains.jpg" /><img class="scale-y-125 ..." src="/img/mountains.jpg" />
Using negative values
Use -scale-, -scale-x- or -scale-y- utilities like -scale-x-75 and -scale-125 to mirror and scale down an element by a percentage of its original size:
<img class="-scale-x-75 ..." src="/img/mountains.jpg" /><img class="-scale-100 ..." src="/img/mountains.jpg" /><img class="-scale-y-125 ..." src="/img/mountains.jpg" />
Using a custom value
Use the scale-[] syntax to set the scale based on a completely custom value:
<img class="scale-[1.7] ..." src="/img/mountains.jpg" />
For CSS variables, you can also use the scale-() syntax:
<img class="scale-(--my-scale) ..." src="/img/mountains.jpg" />
This is just a shorthand for scale-[var()] that adds the var() function for you automatically.
Applying on hover
Prefix a scale utility with a variant like hover:* to only apply the utility in that state:
<img class="scale-95 hover:scale-120 ..." src="/img/mountains.jpg" />
Learn more about using variants in the variants documentation.
