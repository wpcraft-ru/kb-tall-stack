• font-feature-settings
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
font-feature-settings
Utilities for controlling advanced typographic features.
Basic example
Use the font-features-[] utility to enable OpenType features in fonts that support them:
<p class="font-features-['smcp'] ...">This text uses small caps.p>
Enabling multiple features
You can enable multiple OpenType features by separating them with commas:
<p class="font-features-['smcp','onum'] ...">This text uses small caps and oldstyle numbers.p>
Using CSS variables
Use the font-features-() syntax to apply font feature settings from a CSS variable:
<p class="font-features-(--my-features) ..."> p>
Responsive design
Prefix a font-feature-settings utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<p class="font-features-['tnum'] md:font-features-['smcp'] ..."> Lorem ipsum dolor sit amet...p>
Learn more about using variants in the variants documentation.
On this page
• ExamplesBasic exampleEnabling multiple featuresUsing CSS variablesResponsive design
• Enabling multiple features
Tailwind CSS
Tailwind Plus
Tailwind CSS
Tailwind Plus
