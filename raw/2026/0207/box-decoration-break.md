• box-decoration-break
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
box-decoration-break
Utilities for controlling how element fragments should be rendered across multiple lines, columns, or pages.
Basic example
Use the box-decoration-slice and box-decoration-clone utilities to control whether properties like background, border, border-image, box-shadow, clip-path, margin, and padding should be rendered as if the element were one continuous fragment, or distinct blocks:
<span class="box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ..."> Hello<br />Worldspan><span class="box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ..."> Hello<br />Worldspan>
Responsive design
Prefix a box-decoration-break utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="box-decoration-clone md:box-decoration-slice ..."> div>
Learn more about using variants in the variants documentation.
On this page
• ExamplesBasic exampleResponsive design
Tailwind CSS
Tailwind Plus
Tailwind CSS
Tailwind Plus
