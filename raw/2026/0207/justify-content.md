Utilities for controlling how flex and grid items are positioned along a container's main axis.
justify-content: safe flex-end;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
Use the justify-start utility to justify items against the start of the container's main axis:
<div class="flex justify-start ..."> <div>01div> <div>02div> <div>03div>div>
Use the justify-center or justify-center-safe utilities to justify items along the center of the container's main axis:
Resize the container to see the alignment behavior
<div class="flex justify-center ..."> <div>01div> <div>02div> <div>03div> <div>04div>div>
<div class="flex justify-center-safe ..."> <div>01div> <div>02div> <div>03div> <div>04div>div>
When there is not enough space available, the justify-center-safe utility will align items to the start of the container instead of the center.
Use the justify-end or justify-end-safe utilities to justify items against the end of the container's main axis:
Resize the container to see the alignment behavior
<div class="flex justify-end ..."> <div>01div> <div>02div> <div>03div> <div>03div>div>
<div class="flex justify-end-safe ..."> <div>01div> <div>02div> <div>03div> <div>03div>div>
When there is not enough space available, the justify-end-safe utility will align items to the start of the container instead of the end.
Space between
Use the justify-between utility to justify items along the container's main axis such that there is an equal amount of space between each item:
<div class="flex justify-between ..."> <div>01div> <div>02div> <div>03div>div>
Space around
Use the justify-around utility to justify items along the container's main axis such that there is an equal amount of space on each side of each item:
<div class="flex justify-around ..."> <div>01div> <div>02div> <div>03div>div>
Space evenly
Use the justify-evenly utility to justify items along the container's main axis such that there is an equal amount of space around each item, but also accounting for the doubling of space you would normally see between each item when using justify-around:
<div class="flex justify-evenly ..."> <div>01div> <div>02div> <div>03div>div>
Use the justify-stretch utility to allow auto-sized content items to fill the available space along the container's main axis:
<div class="grid grid-cols-[4rem_auto_4rem] justify-stretch ..."> <div>01div> <div>02div> <div>03div>div>
Use the justify-normal utility to pack content items in their default position as if no justify-content value was set:
<div class="flex justify-normal ..."> <div>01div> <div>02div> <div>03div>div>
Responsive design
Prefix a justify-content utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="flex justify-start md:justify-between ..."> div>
Learn more about using variants in the variants documentation.
