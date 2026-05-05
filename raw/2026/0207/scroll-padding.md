Utilities for controlling an element's scroll offset within a snap container.
scroll-padding: calc(var(--spacing) * );
scroll-padding: calc(var(--spacing) * -);
scroll-padding-inline: calc(var(--spacing) * );
scroll-padding-inline: calc(var(--spacing) * -);
scroll-padding-block: calc(var(--spacing) * );
scroll-padding-block: calc(var(--spacing) * -);
Basic example
Use the scroll-pt-, scroll-pr-, scroll-pb-, and scroll-pl- utilities like scroll-pl-4 and scroll-pt-6 to set the scroll offset of an element within a snap container:
Scroll in the grid of images to see the expected behavior
<div class="snap-x scroll-pl-6 ..."> <div class="snap-start ..."> <img src="/img/vacation-01.jpg" /> div> <div class="snap-start ..."> <img src="/img/vacation-02.jpg" /> div> <div class="snap-start ..."> <img src="/img/vacation-03.jpg" /> div> <div class="snap-start ..."> <img src="/img/vacation-04.jpg" /> div> <div class="snap-start ..."> <img src="/img/vacation-05.jpg" /> div>div>
Using logical properties
Use the scroll-ps- and scroll-pe- utilities to set the scroll-padding-inline-start and scroll-padding-inline-end logical properties, which map to either the left or right side based on the text direction:
Scroll in the grid of images to see the expected behavior
<div dir="ltr"> <div class="snap-x scroll-ps-6 ..."> div>div><div dir="rtl"> <div class="snap-x scroll-ps-6 ..."> div>div>
Use the scroll-pbs- and scroll-pbe- utilities to set the scroll-padding-block-start and scroll-padding-block-end logical properties, which map to either the top or bottom side based on the writing mode:
<div class="snap-y scroll-pbs-6 ..."> div>
Using negative values
To use a negative scroll padding value, prefix the class name with a dash to convert it to a negative value:
<div class="-scroll-ps-6 snap-x ..."> div>
Using a custom value
Use utilities like scroll-pl-[] and scroll-pe-[] to set the scroll padding based on a completely custom value:
<div class="scroll-pl-[24rem] ..."> div>
For CSS variables, you can also use the scroll-pl-() syntax:
<div class="scroll-pl-(--my-scroll-padding) ..."> div>
This is just a shorthand for scroll-pl-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a scroll-padding utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="scroll-p-8 md:scroll-p-0 ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
The scroll-p-,scroll-px-,scroll-py-,scroll-ps-,scroll-pe-,scroll-pbs-,scroll-pbe-,scroll-pt-,scroll-pr-,scroll-pb-, and scroll-pl- utilities are driven by the --spacing theme variable, which can be customized in your own theme:
Learn more about customizing the spacing scale in the theme variable documentation.
