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
font-style
Utilities for controlling the style of text.
Italicizing text
Use the italic utility to make text italic:
The quick brown fox jumps over the lazy dog.
<p class="italic ...">The quick brown fox ...p>
Displaying text normally
Use the not-italic utility to display text normally:
The quick brown fox jumps over the lazy dog.
<p class="not-italic ...">The quick brown fox ...p>
Responsive design
Prefix a font-style utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<p class="italic md:not-italic ..."> Lorem ipsum dolor sit amet...p>
Learn more about using variants in the variants documentation.
On this page
• ExamplesItalicizing textDisplaying text normallyResponsive design
• Displaying text normally
Tailwind CSS
Tailwind Plus
Tailwind CSS
Tailwind Plus
