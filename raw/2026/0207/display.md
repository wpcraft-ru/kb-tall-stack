Utilities for controlling the display box type of an element.
Block and Inline
Use the inline, inline-block, and block utilities to control the flow of text and elements:
When controlling the flow of text, using the CSS property display: inline will cause the text inside the element to wrap normally.
While using the property display: inline-block will wrap the element to prevent the text inside from extending beyond its parent.
Lastly, using the property display: block will put the element on its own line and fill its parent.
<p> When controlling the flow of text, using the CSS property <span class="inline">display: inlinespan> will cause the text inside the element to wrap normally.p><p> While using the property <span class="inline-block">display: inline-blockspan> will wrap the element to prevent the text inside from extending beyond its parent.p><p> Lastly, using the property <span class="block">display: blockspan> will put the element on its own line and fill its parent.p>
Use the flow-root utility to create a block-level element with its own block formatting context:
Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.
Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink about old library books? Well, let me give you a hint, junior.
<div class="p-4"> <div class="flow-root ..."> <div class="my-4 ...">Well, let me tell you something, ...div> div> <div class="flow-root ..."> <div class="my-4 ...">Sure, go ahead, laugh if you want...div> div>div>
Use the flex utility to create a block-level flex container:
Andrew AlfredTechnical advisor
<div class="flex items-center"> <img src="path/to/image.jpg" /> <div> <strong>Andrew Alfredstrong> <span>Technical advisorspan> div>div>
Inline Flex
Use the inline-flex utility to create an inline flex container that flows with text:
Today I spent most of the day researching ways to take advantage of the fact that bottles can be returned for 10 cents in Michigan, but only 5 cents here. Kramer keeps telling me there is no way to make it work, that he has run the numbers on every possible approach, but I just have to believe there's a way to make it work, there's simply too much opportunity here.
<p> Today I spent most of the day researching ways to ... <span class="inline-flex items-baseline"> <img src="/img/kramer.jpg" class="mx-1 size-5 self-center rounded-full" /> <span>Kramerspan> span> keeps telling me there is no way to make it work, that ...p>
Use the grid utility to create a grid container:
<div class="grid grid-cols-3 grid-rows-3 gap-4"> div>
Inline Grid
Use the inline-grid utility to create an inline grid container:
<span class="inline-grid grid-cols-3 gap-4"> <span>01span> <span>02span> <span>03span> <span>04span> <span>05span> <span>06span>span><span class="inline-grid grid-cols-3 gap-4"> <span>01span> <span>02span> <span>03span> <span>04span> <span>05span> <span>06span>span>
Use the contents utility to create a "phantom" container whose children act like direct children of the parent:
<div class="flex ..."> <div class="flex-1 ...">01div> <div class="contents"> <div class="flex-1 ...">02div> <div class="flex-1 ...">03div> div> <div class="flex-1 ...">04div>div>
Use the table, table-row, table-cell, table-caption, table-column, table-column-group, table-header-group, table-row-group, and table-footer-group utilities to create elements that behave like their respective table elements:
<div class="table w-full ..."> <div class="table-header-group ..."> <div class="table-row"> <div class="table-cell text-left ...">Songdiv> <div class="table-cell text-left ...">Artistdiv> <div class="table-cell text-left ...">Yeardiv> div> div> <div class="table-row-group"> <div class="table-row"> <div class="table-cell ...">The Sliding Mr. Bones (Next Stop, Pottersville)div> <div class="table-cell ...">Malcolm Lockyerdiv> <div class="table-cell ...">1961div> div> <div class="table-row"> <div class="table-cell ...">Witchy Womandiv> <div class="table-cell ...">The Eaglesdiv> <div class="table-cell ...">1972div> div> <div class="table-row"> <div class="table-cell ...">Shining Stardiv> <div class="table-cell ...">Earth, Wind, and Firediv> <div class="table-cell ...">1975div> div> div>div>
Use the hidden utility to remove an element from the document:
<div class="flex ..."> <div class="hidden ...">01div> <div>02div> <div>03div>div>
To visually hide an element but keep it in the document, use the visibility property instead.
Screen-reader only
Use sr-only to hide an element visually without hiding it from screen readers:
<a href="#"> <svg>svg> <span class="sr-only">Settingsspan>a>
Use not-sr-only to undo sr-only, making an element visible to sighted users as well as screen readers:
<a href="#"> <svg>svg> <span class="sr-only sm:not-sr-only">Settingsspan>a>
This can be useful when you want to visually hide something on small screens but show it on larger screens for example.
Responsive design
Prefix a display utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="flex md:inline-flex ..."> div>
Learn more about using variants in the variants documentation.
