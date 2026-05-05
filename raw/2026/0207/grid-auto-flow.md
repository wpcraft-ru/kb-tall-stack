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
grid-auto-flow
Utilities for controlling how elements in a grid are auto-placed.
Basic example
Use utilities like grid-flow-col and grid-flow-row-dense to control how the auto-placement algorithm works for a grid layout:
<div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ..."> <div class="col-span-2">01div> <div class="col-span-2">02div> <div>03div> <div>04div> <div>05div>div>
Responsive design
Prefix a grid-auto-flow utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="grid grid-flow-col md:grid-flow-row ..."> div>
Learn more about using variants in the variants documentation.
On this page
• ExamplesBasic exampleResponsive design
Tailwind CSS
Tailwind Plus
Tailwind CSS
Tailwind Plus
