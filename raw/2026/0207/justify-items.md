Utilities for controlling how grid items are aligned along their inline axis.
Use the justify-items-start utility to justify grid items against the start of their inline axis:
<div class="grid justify-items-start ..."> <div>01div> <div>02div> <div>03div> <div>04div> <div>05div> <div>06div>div>
Use the justify-items-end or justify-items-end-safe utilities to justify grid items against the end of their inline axis:
Resize the container to see the alignment behavior
<div class="grid grid-flow-col justify-items-end ..."> <div>01div> <div>02div> <div>03div>div>
<div class="grid grid-flow-col justify-items-end-safe ..."> <div>01div> <div>02div> <div>03div>div>
When there is not enough space available, the justify-items-end-safe utility will align items to the start of the container instead of the end.
Use the justify-items-center or justify-items-center-safe utilities to justify grid items against the end of their inline axis:
Resize the container to see the alignment behavior
<div class="grid grid-flow-col justify-items-center ..."> <div>01div> <div>02div> <div>03div>div>
<div class="grid grid-flow-col justify-items-center-safe ..."> <div>01div> <div>02div> <div>03div>div>
When there is not enough space available, the justify-items-center-safe utility will align items to the start of the container instead of the center.
Use the justify-items-stretch utility to stretch items along their inline axis:
<div class="grid justify-items-stretch ..."> <div>01div> <div>02div> <div>03div> <div>04div> <div>05div> <div>06div>div>
Responsive design
Prefix a justify-items utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="grid justify-items-start md:justify-items-center ..."> div>
Learn more about using variants in the variants documentation.
