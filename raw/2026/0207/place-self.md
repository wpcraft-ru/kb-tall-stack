Utilities for controlling how an individual item is justified and aligned at the same time.
Use place-self-auto to align an item based on the value of the container's place-items property:
<div class="grid grid-cols-3 gap-4 ..."> <div>01div> <div class="place-self-auto ...">02div> <div>03div> <div>04div> <div>05div> <div>06div>div>
Use place-self-start to align an item to the start on both axes:
<div class="grid grid-cols-3 gap-4 ..."> <div>01div> <div class="place-self-start ...">02div> <div>03div> <div>04div> <div>05div> <div>06div>div>
Use place-self-center to align an item at the center on both axes:
<div class="grid grid-cols-3 gap-4 ..."> <div>01div> <div class="place-self-center ...">02div> <div>03div> <div>04div> <div>05div> <div>06div>div>
Use place-self-end to align an item to the end on both axes:
<div class="grid grid-cols-3 gap-4 ..."> <div>01div> <div class="place-self-end ...">02div> <div>03div> <div>04div> <div>05div> <div>06div>div>
Use place-self-stretch to stretch an item on both axes:
<div class="grid grid-cols-3 gap-4 ..."> <div>01div> <div class="place-self-stretch ...">02div> <div>03div> <div>04div> <div>05div> <div>06div>div>
Responsive design
Prefix a place-self utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="place-self-start md:place-self-end ..."> div>
Learn more about using variants in the variants documentation.
