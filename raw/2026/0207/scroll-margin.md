Utilities for controlling the scroll offset around items in a snap container.
scroll-margin: calc(var(--spacing) * );
scroll-margin: calc(var(--spacing) * -);
scroll-margin-inline: calc(var(--spacing) * );
scroll-margin-inline: calc(var(--spacing) * -);
scroll-margin-block: calc(var(--spacing) * );
scroll-margin-block: calc(var(--spacing) * -);
Basic example
Use the scroll-mt-, scroll-mr-, scroll-mb-, and scroll-ml- utilities like scroll-ml-4 and scroll-mt-6 to set the scroll offset around items within a snap container:
Scroll in the grid of images to see the expected behavior
<div class="snap-x ..."> <div class="snap-start scroll-ml-6 ..."> <img src="/img/vacation-01.jpg"/> div> <div class="snap-start scroll-ml-6 ..."> <img src="/img/vacation-02.jpg"/> div> <div class="snap-start scroll-ml-6 ..."> <img src="/img/vacation-03.jpg"/> div> <div class="snap-start scroll-ml-6 ..."> <img src="/img/vacation-04.jpg"/> div> <div class="snap-start scroll-ml-6 ..."> <img src="/img/vacation-05.jpg"/> div>div>
Using negative values
To use a negative scroll margin value, prefix the class name with a dash to convert it to a negative value:
<div class="snap-start -scroll-ml-6 ..."> div>
Using logical properties
Use the scroll-ms- and scroll-me- utilities to set the scroll-margin-inline-start and scroll-margin-inline-end logical properties, which map to either the left or right side based on the text direction:
Scroll in the grid of images to see the expected behavior
<div dir="ltr"> <div class="snap-x ..."> <div class="snap-start scroll-ms-6 ..."> <img src="/img/vacation-01.jpg"/> div> div>div><div dir="rtl"> <div class="snap-x ..."> <div class="snap-start scroll-ms-6 ..."> <img src="/img/vacation-01.jpg"/> div> div>div>
For more control, you can also use the LTR and RTL modifiers to conditionally apply specific styles depending on the current text direction.
Use the scroll-mbs- and scroll-mbe- utilities to set the scroll-margin-block-start and scroll-margin-block-end logical properties, which map to either the top or bottom side based on the writing mode:
<div class="snap-y ..."> <div class="snap-start scroll-mbs-6 ..."> div>div>
Using a custom value
Use utilities like scroll-ml-[] and scroll-me-[] to set the scroll margin based on a completely custom value:
<div class="scroll-ml-[24rem] ..."> div>
For CSS variables, you can also use the scroll-ml-() syntax:
<div class="scroll-ml-(--my-scroll-margin) ..."> div>
This is just a shorthand for scroll-ml-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a scroll-margin utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="scroll-m-8 md:scroll-m-0 ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
The scroll-m-,scroll-mx-,scroll-my-,scroll-ms-,scroll-me-,scroll-mbs-,scroll-mbe-,scroll-mt-,scroll-mr-,scroll-mb-, and scroll-ml- utilities are driven by the --spacing theme variable, which can be customized in your own theme:
Learn more about customizing the spacing scale in the theme variable documentation.
