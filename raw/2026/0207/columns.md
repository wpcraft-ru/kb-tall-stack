Utilities for controlling the number of columns within an element.
columns: var(--container-3xs); /* 16rem (256px) */
columns: var(--container-2xs); /* 18rem (288px) */
columns: var(--container-xs); /* 20rem (320px) */
columns: var(--container-sm); /* 24rem (384px) */
columns: var(--container-md); /* 28rem (448px) */
columns: var(--container-lg); /* 32rem (512px) */
columns: var(--container-xl); /* 36rem (576px) */
columns: var(--container-2xl); /* 42rem (672px) */
columns: var(--container-3xl); /* 48rem (768px) */
Setting by number
Use columns- utilities like columns-3 to set the number of columns that should be created for the content within an element:
The column width will automatically adjust to accommodate the specified number of columns.
Setting by width
Use utilities like columns-xs and columns-sm to set the ideal column width for the content within an element:
<div class="columns-3xs ..."> <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" /> <img class="aspect-square ..." src="/img/mountains-2.jpg" /> <img class="aspect-square ..." src="/img/mountains-3.jpg" /> div>
When setting the column width, the number of columns automatically adjusts to ensure they don't get too narrow.
Setting the column gap
Use the gap- utilities to specify the width between columns:
Learn more about the gap utilities in the gap documentation.
Using a custom value
Use the columns-[] syntax to set the columns based on a completely custom value:
<div class="columns-[30vw] ..."> div>
For CSS variables, you can also use the columns-() syntax:
<div class="columns-(--my-columns) ..."> div>
This is just a shorthand for columns-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a columns utility with a breakpoint variant like sm: to only apply the utility at small screen sizes and above:
<div class="columns-2 gap-4 sm:columns-3 sm:gap-8 ..."> <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" /> <img class="aspect-square ..." src="/img/mountains-2.jpg" /> <img class="aspect-square ..." src="/img/mountains-3.jpg" /> div>
Learn more about using variants in the variants documentation.
Customizing your theme
Use the --container-* theme variables to customize the fixed-width column utilities in your project:
@theme { --container-4xs: 14rem; }
Now the columns-4xs utility can be used in your markup:
<div class="columns-4xs"> div>
Learn more about customizing your theme in the theme documentation.
