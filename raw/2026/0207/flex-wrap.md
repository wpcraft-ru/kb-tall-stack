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
Utilities for controlling how flex items wrap.
Don't wrap
Use flex-nowrap to prevent flex items from wrapping, causing inflexible items to overflow the container if necessary:
<div class="flex flex-nowrap"> <div>01div> <div>02div> <div>03div>div>
Wrap normally
Use flex-wrap to allow flex items to wrap:
<div class="flex flex-wrap"> <div>01div> <div>02div> <div>03div>div>
Wrap reversed
Use flex-wrap-reverse to wrap flex items in the reverse direction:
<div class="flex flex-wrap-reverse"> <div>01div> <div>02div> <div>03div>div>
Responsive design
Prefix a flex-wrap utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="flex flex-wrap md:flex-wrap-reverse ..."> div>
Learn more about using variants in the variants documentation.
On this page
• ExamplesDon't wrapWrap normallyWrap reversedResponsive design
Tailwind CSS
Tailwind Plus
Tailwind CSS
Tailwind Plus
