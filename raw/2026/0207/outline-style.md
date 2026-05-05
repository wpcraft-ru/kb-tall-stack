Utilities for controlling the style of an element's outline.
outline: 2px solid transparent; outline-offset: 2px;
Basic example
Use utilities like outline-solid and outline-dashed to set the style of an element's outline:
<button class="outline-2 outline-offset-2 outline-solid ...">Button Abutton><button class="outline-2 outline-offset-2 outline-dashed ...">Button Bbutton><button class="outline-2 outline-offset-2 outline-dotted ...">Button Cbutton><button class="outline-3 outline-offset-2 outline-double ...">Button Dbutton>
Hiding an outline
Use the outline-hidden utility to hide the default browser outline on focused elements, while still preserving the outline in forced colors mode:
Try emulating `forced-colors: active` in your developer tools to see the behavior
<input class="focus:border-indigo-600 focus:outline-hidden ..." type="text" />
It is highly recommended to apply your own focus styling for accessibility when using this utility.
Removing outlines
Use the outline-none utility to completely remove the default browser outline on focused elements:
<div class="focus-within:outline-2 focus-within:outline-indigo-600 ..."> <textarea class="outline-none ..." placeholder="Leave a comment..." /> <button class="..." type="button">Postbutton>div>
It is highly recommended to apply your own focus styling for accessibility when using this utility.
Responsive design
Prefix an outline-style utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="outline md:outline-dashed ..."> div>
Learn more about using variants in the variants documentation.
