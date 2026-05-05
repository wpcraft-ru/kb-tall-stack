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
transform-style
Utilities for controlling if an elements children are placed in 3D space.
Basic example
Use transform-3d to position children in 3D space:
<div class="size-20 transform-flat ..."> <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1div> <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2div> <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3div> <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4div> <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5div> <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6div>div><div class="size-20 transform-3d ..."> <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1div> <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2div> <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3div> <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4div> <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5div> <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6div>div>
Without this, any children will only be transformed in 2D space and not in 3D space.
Responsive design
Prefix a transform-style utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="transform-3d md:transform-flat ..."> div>
Learn more about using variants in the variants documentation.
On this page
• ExamplesBasic exampleResponsive design
Tailwind CSS
Tailwind Plus
Tailwind CSS
Tailwind Plus
