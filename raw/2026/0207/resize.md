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
Utilities for controlling how an element can be resized.
Resizing in all directions
Use resize to make an element horizontally and vertically resizable:
Drag the textarea handle in the demo to see the expected behavior
<textarea class="resize rounded-md ...">textarea>
Resizing vertically
Use resize-y to make an element vertically resizable:
Drag the textarea handle in the demo to see the expected behavior
<textarea class="resize-y rounded-md ...">textarea>
Resizing horizontally
Use resize-x to make an element horizontally resizable:
Drag the textarea handle in the demo to see the expected behavior
<textarea class="resize-x rounded-md ...">textarea>
Prevent resizing
Use resize-none to prevent an element from being resizable:
Notice that the textarea handle is gone
<textarea class="resize-none rounded-md">textarea>
Responsive design
Prefix a resize utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="resize-none md:resize ..."> div>
Learn more about using variants in the variants documentation.
On this page
• ExamplesResizing in all directionsResizing verticallyResizing horizontallyPrevent resizingResponsive design
• Resizing in all directions
• Resizing horizontally
Tailwind CSS
Tailwind Plus
Tailwind CSS
Tailwind Plus
