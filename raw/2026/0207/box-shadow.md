Utilities for controlling the box shadow of an element.
box-shadow: var(--shadow-2xs); /* 0 1px rgb(0 0 0 / 0.05) */
box-shadow: var(--shadow-xs); /* 0 1px 2px 0 rgb(0 0 0 / 0.05) */
box-shadow: var(--shadow-sm); /* 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) */
box-shadow: var(--shadow-md); /* 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) */
box-shadow: var(--shadow-lg); /* 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) */
box-shadow: var(--shadow-xl); /* 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) */
box-shadow: var(--shadow-2xl); /* 0 25px 50px -12px rgb(0 0 0 / 0.25) */
Basic example
Use utilities like shadow-sm and shadow-lg to apply different sized outer box shadows to an element:
<div class="shadow-md ...">div><div class="shadow-lg ...">div><div class="shadow-xl ...">div>
Changing the opacity
Use the opacity modifier to adjust the opacity of the box shadow:
<div class="shadow-xl ...">div><div class="shadow-xl/20 ...">div><div class="shadow-xl/30 ...">div>
The default box shadow opacities are quite low (25% or less), so increasing the opacity (to like 50%) will make the box shadows more pronounced.
Setting the shadow color
Use utilities like shadow-indigo-500 and shadow-cyan-500/50 to change the color of a box shadow:
<button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">Subscribebutton><button class="bg-blue-500 shadow-lg shadow-blue-500/50 ...">Subscribebutton><button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">Subscribebutton>
By default colored shadows have an opacity of 100% but you can adjust this using the opacity modifier.
Adding an inset shadow
Use utilities like inset-shadow-xs and inset-shadow-sm to apply an inset box shadow to an element:
<div class="inset-shadow-2xs ...">div><div class="inset-shadow-xs ...">div><div class="inset-shadow-sm ...">div>
You can adjust the opacity of an inset shadow using the opacity modifier, like inset-shadow-sm/50. The default inset shadow opacities are quite low (5%), so increasing the opacity (to like 50%) will make the inset shadows more pronounced.
Setting the inset shadow color
Use utilities like inset-shadow-indigo-500 and inset-shadow-cyan-500/50 to change the color of an inset box shadow:
<div class="inset-shadow-sm inset-shadow-indigo-500 ...">div><div class="inset-shadow-sm inset-shadow-indigo-500/50 ...">div>
By default colored shadows have an opacity of 100% but you can adjust this using the opacity modifier.
Adding a ring
Use ring or ring- utilities like ring-2 and ring-4 to apply a solid box-shadow to an element:
<button class="ring ...">Subscribebutton><button class="ring-2 ...">Subscribebutton><button class="ring-4 ...">Subscribebutton>
By default rings match the currentColor of the element they are applied to.
Setting the ring color
Use utilities like ring-indigo-500 and ring-cyan-500/50 to change the color of a ring:
<button class="ring-2 ring-blue-500 ...">Subscribebutton><button class="ring-2 ring-blue-500/50 ...">Subscribebutton>
By default rings have an opacity of 100% but you can adjust this using the opacity modifier.
Adding an inset ring
Use inset-ring or inset-ring- utilities like inset-ring-2 and inset-ring-4 to apply a solid inset box-shadow to an element:
<button class="inset-ring ...">Subscribebutton><button class="inset-ring-2 ...">Subscribebutton><button class="inset-ring-4 ...">Subscribebutton>
By default inset rings match the currentColor of the element they are applied to.
Setting the inset ring color
Use utilities like inset-ring-indigo-500 and inset-ring-cyan-500/50 to change the color of an inset ring:
<button class="inset-ring-2 inset-ring-blue-500 ...">Subscribebutton><button class="inset-ring-2 inset-ring-blue-500/50 ...">Subscribebutton>
By default inset rings have an opacity of 100% but you can adjust this using the opacity modifier.
Removing a box shadow
Use the shadow-none, inset-shadow-none,ring-0, and inset-ring-0 utilities to remove an existing box shadow from an element:
<div class="shadow-none ...">div>
Using a custom value
Use utilities like shadow-[],inset-shadow-[],ring-[], and inset-ring-[] to set the box shadow based on a completely custom value:
<div class="shadow-[0_35px_35px_rgba(0,0,0,0.25)] ..."> div>
For CSS variables, you can also use the shadow-() syntax:
<div class="shadow-(--my-shadow) ..."> div>
This is just a shorthand for shadow-[var()] that adds the var() function for you automatically.
Responsive design
Prefix a box-shadow utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<div class="shadow-none md:shadow-lg ..."> div>
Learn more about using variants in the variants documentation.
Customizing your theme
Customizing shadows
Use the --shadow-* theme variables to customize the box shadow utilities in your project:
@theme { --shadow-3xl: 0 35px 35px rgba(0, 0, 0, 0.25); }
Now the shadow-3xl utility can be used in your markup:
Learn more about customizing your theme in the theme documentation.
Customizing inset shadows
Use the --inset-shadow-* theme variables to customize the inset box shadow utilities in your project:
@theme { --inset-shadow-md: inset 0 2px 3px rgba(0, 0, 0, 0.25); }
Now the inset-shadow-md utility can be used in your markup:
<div class="inset-shadow-md"> div>
Learn more about customizing your theme in the theme documentation.
Customizing shadow colors
Use the --color-* theme variables to customize the color utilities in your project:
@theme { --color-regal-blue: #243c5a; }
Now utilities like shadow-regal-blue,inset-shadow-regal-blue,ring-regal-blue, and inset-ring-regal-blue can be used in your markup:
<div class="shadow-regal-blue"> div>
Learn more about customizing your theme in the theme documentation.
