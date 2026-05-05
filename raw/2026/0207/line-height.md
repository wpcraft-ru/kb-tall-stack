Utilities for controlling the leading, or line height, of an element.
font-size: ; line-height: calc(var(--spacing) * );
font-size: ; line-height: var();
line-height: calc(var(--spacing) * );
Basic example
Use font size utilities like text-sm/6 and text-lg/7 to set the font size and line-height of an element at the same time:
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
<p class="text-base/6 ...">So I started to walk into the water...p><p class="text-base/7 ...">So I started to walk into the water...p><p class="text-base/8 ...">So I started to walk into the water...p>
Each font size utility also sets a default line height when one isn't provided. You can learn more about these values and how to customize them in the font-size documentation.
Setting independently
Use leading- utilities like leading-6 and leading-7 to set the line height of an element independent of the font-size:
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
<p class="text-sm leading-6">So I started to walk into the water...p><p class="text-sm leading-7">So I started to walk into the water...p><p class="text-sm leading-8">So I started to walk into the water...p>
Removing the leading
Use the leading-none utility to set the line height of an element equal to its font size:
The quick brown fox jumps over the lazy dog.
<p class="text-2xl leading-none ...">The quick brown fox...p>
Using a custom value
Use the leading-[] syntax to set the line height based on a completely custom value:
<p class="leading-[1.5] ..."> Lorem ipsum dolor sit amet...p>
For CSS variables, you can also use the leading-() syntax:
<p class="leading-(--my-line-height) ..."> Lorem ipsum dolor sit amet...p>
This is just a shorthand for leading-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a line-height utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<p class="leading-5 md:leading-6 ..."> Lorem ipsum dolor sit amet...p>
Learn more about using variants in the variants documentation.
Customizing your theme
The leading- utilities are driven by the --spacing theme variable, which can be customized in your own theme:
Learn more about customizing the spacing scale in the theme variable documentation.
