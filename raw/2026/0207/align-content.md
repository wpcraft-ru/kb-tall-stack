Utilities for controlling how rows are positioned in multi-row flex and grid containers.
Use content-start to pack rows in a container against the start of the cross axis:
<div class="grid h-56 grid-cols-3 content-start gap-4 ..."> <div>01div> <div>02div> <div>03div> <div>04div> <div>05div>div>
Use content-center to pack rows in a container in the center of the cross axis:
<div class="grid h-56 grid-cols-3 content-center gap-4 ..."> <div>01div> <div>02div> <div>03div> <div>04div> <div>05div>div>
Use content-end to pack rows in a container against the end of the cross axis:
<div class="grid h-56 grid-cols-3 content-end gap-4 ..."> <div>01div> <div>02div> <div>03div> <div>04div> <div>05div>div>
Space between
Use content-between to distribute rows in a container such that there is an equal amount of space between each line:
<div class="grid h-56 grid-cols-3 content-between gap-4 ..."> <div>01div> <div>02div> <div>03div> <div>04div> <div>05div>div>
Space around
Use content-around to distribute rows in a container such that there is an equal amount of space around each line:
<div class="grid h-56 grid-cols-3 content-around gap-4 ..."> <div>01div> <div>02div> <div>03div> <div>04div> <div>05div>div>
Space evenly
Use content-evenly to distribute rows in a container such that there is an equal amount of space around each item, but also accounting for the doubling of space you would normally see between each item when using content-around:
<div class="grid h-56 grid-cols-3 content-evenly gap-4 ..."> <div>01div> <div>02div> <div>03div> <div>04div> <div>05div>div>
Use content-stretch to allow content items to fill the available space along the container’s cross axis:
<div class="grid h-56 grid-cols-3 content-stretch gap-4 ..."> <div>01div> <div>02div> <div>03div> <div>04div> <div>05div>div>
Use content-normal to pack content items in their default position as if no align-content value was set:
<div class="grid h-56 grid-cols-3 content-normal gap-4 ..."> <div>01div> <div>02div> <div>03div> <div>04div> <div>05div>div>
Responsive design
Prefix an align-content utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="grid content-start md:content-around ..."> div>
Learn more about using variants in the variants documentation.
