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
background-origin
Utilities for controlling how an element's background is positioned relative to borders, padding, and content.
Basic example
Use the bg-origin-border, bg-origin-padding, and bg-origin-content utilities to control where an element's background is rendered:
<div class="border-4 bg-[url(/img/mountains.jpg)] bg-origin-border p-3 ...">div><div class="border-4 bg-[url(/img/mountains.jpg)] bg-origin-padding p-3 ...">div><div class="border-4 bg-[url(/img/mountains.jpg)] bg-origin-content p-3 ...">div>
Responsive design
Prefix a background-origin utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="bg-origin-border md:bg-origin-padding ..."> div>
Learn more about using variants in the variants documentation.
On this page
• ExamplesBasic exampleResponsive design
Tailwind CSS
Tailwind Plus
Tailwind CSS
Tailwind Plus
