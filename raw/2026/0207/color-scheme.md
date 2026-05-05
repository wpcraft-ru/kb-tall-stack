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
color-scheme
Utilities for controlling the color scheme of an element.
Basic example
Use utilities like scheme-light and scheme-light-dark to control how element should be rendered:
Try switching your system color scheme to see the difference
<div class="scheme-light ..."> <input type="date" />div><div class="scheme-dark ..."> <input type="date" />div><div class="scheme-light-dark ..."> <input type="date" />div>
Applying in dark mode
Prefix a color-scheme utility with a variant like dark:* to only apply the utility in that state:
<html class="scheme-light dark:scheme-dark ..."> html>
Learn more about using variants in the variants documentation.
On this page
• ExamplesBasic exampleApplying in dark mode
• Applying in dark mode
Tailwind CSS
Tailwind Plus
Tailwind CSS
Tailwind Plus
