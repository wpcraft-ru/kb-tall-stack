• Transitions & Animation
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
transition-behavior
Utilities to control the behavior of CSS transitions.
Basic example
Use the transition-discrete utility to start transitions when changing properties with a discrete set of values, such as elements that change from hidden to block:
Interact with the checkboxes to see the expected behavior
<label class="peer ..."> <input type="checkbox" checked />label><button class="hidden transition-all not-peer-has-checked:opacity-0 peer-has-checked:block ..."> I hidebutton><label class="peer ..."> <input type="checkbox" checked />label><button class="hidden transition-all transition-discrete not-peer-has-checked:opacity-0 peer-has-checked:block ..."> I fade outbutton>
Responsive design
Prefix a transition-behavior utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<button class="transition-discrete md:transition-normal ..."> button>
Learn more about using variants in the variants documentation.
On this page
• ExamplesBasic exampleResponsive design
Tailwind CSS
Tailwind Plus
Tailwind CSS
Tailwind Plus
