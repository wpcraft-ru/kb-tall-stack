Utilities for controlling the spacing between table borders.
border-spacing: calc(var(--spacing) * );
border-spacing: calc(var(--spacing) * ) var(--tw-border-spacing-y);
border-spacing: var() var(--tw-border-spacing-y);
border-spacing: var(--tw-border-spacing-y);
border-spacing: var(--tw-border-spacing-x) calc(var(--spacing) * );
border-spacing: var(--tw-border-spacing-x) var();
border-spacing: var(--tw-border-spacing-x) ;
Basic example
Use border-spacing- utilities like border-spacing-2 and border-spacing-x-3 to control the space between the borders of table cells with separate borders:
<table class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500"> <thead> <tr> <th class="border border-gray-300 dark:border-gray-600">Stateth> <th class="border border-gray-300 dark:border-gray-600">Cityth> tr> thead> <tbody> <tr> <td class="border border-gray-300 dark:border-gray-700">Indianatd> <td class="border border-gray-300 dark:border-gray-700">Indianapolistd> tr> <tr> <td class="border border-gray-300 dark:border-gray-700">Ohiotd> <td class="border border-gray-300 dark:border-gray-700">Columbustd> tr> <tr> <td class="border border-gray-300 dark:border-gray-700">Michigantd> <td class="border border-gray-300 dark:border-gray-700">Detroittd> tr> tbody>table>
Using a custom value
Use the border-spacing-[] syntax to set the border spacing based on a completely custom value:
<table class="border-spacing-[7px] ..."> table>
For CSS variables, you can also use the border-spacing-() syntax:
<table class="border-spacing-(--my-border-spacing) ..."> table>
This is just a shorthand for border-spacing-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a border-spacing utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<table class="border-spacing-2 md:border-spacing-4 ..."> table>
Learn more about using variants in the variants documentation.
Customizing your theme
The border-spacing- utilities are driven by the --spacing theme variable, which can be customized in your own theme:
Learn more about customizing the spacing scale in the theme variable documentation.
