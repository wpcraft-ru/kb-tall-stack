Utilities for controlling if an element's backface is visible.
Basic example
Use the backface-visible utility to show the backface of an element, like a cube, even when it's rotated away from view:
<div class="size-20 ..."> <div class="translate-z-12 rotate-x-0 bg-sky-300/75 backface-hidden ...">1div> <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 backface-hidden ...">2div> <div class="translate-x-12 rotate-y-90 bg-sky-300/75 backface-hidden ...">3div> <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 backface-hidden ...">4div> <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 backface-hidden ...">5div> <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 backface-hidden ...">6div>div><div class="size-20 ..."> <div class="translate-z-12 rotate-x-0 bg-sky-300/75 backface-visible ...">1div> <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 backface-visible ...">2div> <div class="translate-x-12 rotate-y-90 bg-sky-300/75 backface-visible ...">3div> <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 backface-visible ...">4div> <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 backface-visible ...">5div> <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 backface-visible ...">6div>div>
Responsive design
Prefix a backface-visibility utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="backface-visible md:backface-hidden ..."> div>
Learn more about using variants in the variants documentation.
