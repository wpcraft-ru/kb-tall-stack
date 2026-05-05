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
field-sizing
Utilities for controlling the sizing of form controls.
Sizing based on content
Use the field-sizing-content utility to allow a form control to adjust its size based on the content:
Type in the input below to see the size change
<textarea class="field-sizing-content ..." rows="2"> Latex Salesman, Vanderlay Industriestextarea>
Using a fixed size
Use the field-sizing-fixed utility to make a form control use a fixed size:
Type in the input below to see the size remain the same
<textarea class="field-sizing-fixed w-80 ..." rows="2"> Latex Salesman, Vanderlay Industriestextarea>
Responsive design
Prefix a field-sizing utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<input class="field-sizing-content md:field-sizing-fixed ..." />
Learn more about using variants in the variants documentation.
On this page
• ExamplesSizing based on contentUsing a fixed sizeResponsive design
• Sizing based on content
Tailwind CSS
Tailwind Plus
Tailwind CSS
Tailwind Plus
