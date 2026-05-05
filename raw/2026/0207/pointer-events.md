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
pointer-events
Utilities for controlling whether an element responds to pointer events.
Ignoring pointer events
Use the pointer-events-none utility to make an element ignore pointer events, like :hover and click events:
Click the search icons to see the expected behavior
<div class="relative ..."> <div class="pointer-events-auto absolute ..."> <svg class="absolute h-5 w-5 text-gray-400"> svg> div> <input type="text" placeholder="Search" class="..." />div><div class="relative ..."> <div class="pointer-events-none absolute ..."> <svg class="absolute h-5 w-5 text-gray-400"> svg> div> <input type="text" placeholder="Search" class="..." />div>
The pointer events will still trigger on child elements and pass-through to elements that are "beneath" the target.
Restoring pointer events
Use the pointer-events-auto utility to revert to the default browser behavior for pointer events:
<div class="pointer-events-none md:pointer-events-auto ..."> div>
On this page
• ExamplesIgnoring pointer eventsRestoring pointer events
• Ignoring pointer events
• Restoring pointer events
Tailwind CSS
Tailwind Plus
Tailwind CSS
Tailwind Plus
