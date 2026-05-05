Use place-content-center to pack items in the center of the inline and block axes:
<div class="grid h-48 grid-cols-2 place-content-center gap-4 ..."> <div>01div> <div>02div> <div>03div> <div>04div>div>
Use place-content-start to pack items against the start of the inline and block axes:
<div class="grid h-48 grid-cols-2 place-content-start gap-4 ..."> <div>01div> <div>02div> <div>03div> <div>04div>div>
Use place-content-end to pack items against the end of the inline and block axes:
<div class="grid h-48 grid-cols-2 place-content-end gap-4 ..."> <div>01div> <div>02div> <div>03div> <div>04div>div>
Space between
Use place-content-between to distribute grid items along the inline and block axes so that there is an equal amount of space between each row and column on each axis respectively:
<div class="grid h-48 grid-cols-2 place-content-between gap-4 ..."> <div>01div> <div>02div> <div>03div> <div>04div>div>
Space around
Use place-content-around to distribute grid items along the inline and block axes so that there is an equal amount of space around each row and column on each axis respectively:
<div class="grid h-48 grid-cols-2 place-content-around gap-4 ..."> <div>01div> <div>02div> <div>03div> <div>04div>div>
Space evenly
Use place-content-evenly to distribute grid items such that they are evenly spaced on the inline and block axes:
<div class="grid h-48 grid-cols-2 place-content-evenly gap-4 ..."> <div>01div> <div>02div> <div>03div> <div>04div>div>
Use place-content-stretch to stretch grid items along their grid areas on the inline and block axes:
<div class="grid h-48 grid-cols-2 place-content-stretch gap-4 ..."> <div>01div> <div>02div> <div>03div> <div>04div>div>
Responsive design
Prefix a place-content utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="grid place-content-start md:place-content-center ..."> div>
Learn more about using variants in the variants documentation.
