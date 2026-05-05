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
Utilities for controlling whether an element should explicitly create a new stacking context.
Basic example
Use the isolate and isolation-auto utilities to control whether an element should explicitly create a new stacking context:
<div class="isolate ..."> div>
Responsive design
Prefix an isolation utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="isolate md:isolation-auto ..."> div>
Learn more about using variants in the variants documentation.
On this page
• ExamplesBasic exampleResponsive design
Tailwind CSS
Tailwind Plus
Tailwind CSS
Tailwind Plus
