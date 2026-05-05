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
font-smoothing
Utilities for controlling the font smoothing of an element.
Grayscale antialiasing
Use the antialiased utility to render text using grayscale antialiasing:
The quick brown fox jumps over the lazy dog.
<p class="antialiased ...">The quick brown fox ...p>
Subpixel antialiasing
Use the subpixel-antialiased utility to render text using subpixel antialiasing:
The quick brown fox jumps over the lazy dog.
<p class="subpixel-antialiased ...">The quick brown fox ...p>
Responsive design
Prefix -webkit-font-smoothing and -moz-osx-font-smoothing utilities with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<p class="antialiased md:subpixel-antialiased ..."> Lorem ipsum dolor sit amet...p>
Learn more about using variants in the variants documentation.
On this page
• ExamplesGrayscale antialiasingSubpixel antialiasingResponsive design
• Grayscale antialiasing
• Subpixel antialiasing
Tailwind CSS
Tailwind Plus
Tailwind CSS
Tailwind Plus
