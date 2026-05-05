Utilities for suppressing native form control styling.
Removing default appearance
Use appearance-none to reset any browser specific styling on an element:
Default browser styles applied
<select> <option>Yesoption> <option>Nooption> <option>Maybeoption>select><div class="grid"> <select class="col-start-1 row-start-1 appearance-none bg-gray-50 dark:bg-gray-800 ..."> <option>Yesoption> <option>Nooption> <option>Maybeoption> select> <svg class="pointer-events-none col-start-1 row-start-1 ..."> svg>div>
This utility is often used when creating custom form components.
Restoring default appearance
Use appearance-auto to restore the default browser specific styling on an element:
Try emulating `forced-colors: active` in your developer tools to see the difference
Falls back to default appearance
<label> <div> <input type="checkbox" class="appearance-none forced-colors:appearance-auto ..." /> <svg class="invisible peer-checked:visible forced-colors:hidden ..."> svg> div> Falls back to default appearancelabel><label> <div> <input type="checkbox" class="appearance-none ..." /> <svg class="invisible peer-checked:visible ..."> svg> div> Keeps custom appearancelabel>
This is useful for reverting to the standard browser controls in certain accessibility modes.
Responsive design
Prefix an appearance utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<select class="appearance-auto md:appearance-none ..."> select>
Learn more about using variants in the variants documentation.
