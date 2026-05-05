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
list-style-position
Utilities for controlling the position of bullets and numbers in lists.
Basic example
Use utilities like list-inside and list-outside to control the position of the markers and text indentation in a list:
• 5 cups chopped Porcini mushrooms
• 1/2 cup of olive oil
• 5 cups chopped Porcini mushrooms
• 1/2 cup of olive oil
<ul class="list-inside"> <li>5 cups chopped Porcini mushroomsli> ul><ul class="list-outside"> <li>5 cups chopped Porcini mushroomsli> ul>
Responsive design
Prefix a list-style-position utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<ul class="list-outside md:list-inside ..."> ul>
Learn more about using variants in the variants documentation.
On this page
• ExamplesBasic exampleResponsive design
Tailwind CSS
Tailwind Plus
Tailwind CSS
Tailwind Plus
