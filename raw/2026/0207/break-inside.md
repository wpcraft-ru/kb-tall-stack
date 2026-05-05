Getting started
Core concepts
• Styling with utility classes
• Hover, focus, and other states
• Adding custom styles
• Detecting classes in source files
• Functions and directives
Base styles
• box-decoration-break
• top / right / bottom / left
Flexbox & Grid
• grid-template-columns
Typography
• font-variant-numeric
• font-feature-settings
• text-decoration-line
• text-decoration-color
• text-decoration-style
• text-decoration-thickness
• text-underline-offset
Backgrounds
• background-attachment
• background-blend-mode
• filterblurbrightnesscontrastdrop-shadowgrayscalehue-rotateinvertsaturatesepia
• backdrop-filterblurbrightnesscontrastgrayscalehue-rotateinvertopacitysaturatesepia
Transitions & Animation
• transition-timing-function
Transforms
Interactivity
Accessibility
break-inside
Utilities for controlling how a column or page should break within an element.
Basic example
Use utilities like break-inside-column and break-inside-avoid-page to control how a column or page break should behave within an element:
<div class="columns-2"> <p>Well, let me tell you something, ...p> <p class="break-inside-avoid-column">Sure, go ahead, laugh...p> <p>Maybe we can live without...p> <p>Look. If you think this is...p>div>
Responsive design
Prefix a break-inside utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="break-inside-avoid-column md:break-inside-auto ..."> div>
Learn more about using variants in the variants documentation.
On this page
• ExamplesBasic exampleResponsive design
Tailwind CSS
Tailwind Plus
Tailwind CSS
Tailwind Plus
