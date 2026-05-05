Utilities for controlling the variant of numbers.
font-variant-numeric: ordinal;
font-variant-numeric: slashed-zero;
font-variant-numeric: lining-nums;
font-variant-numeric: oldstyle-nums;
font-variant-numeric: proportional-nums;
font-variant-numeric: tabular-nums;
font-variant-numeric: diagonal-fractions;
font-variant-numeric: stacked-fractions;
Using ordinal glyphs
Use the ordinal utility to enable special glyphs for the ordinal markers in fonts that support them:
Using slashed zeroes
Use the slashed-zero utility to force a zero with a slash in fonts that support them:
<p class="slashed-zero ...">0p>
Using lining figures
Use the lining-nums utility to use numeric glyphs that are aligned by their baseline in fonts that support them:
<p class="lining-nums ...">1234567890p>
Using oldstyle figures
Use the oldstyle-nums utility to use numeric glyphs where some numbers have descenders in fonts that support them:
<p class="oldstyle-nums ...">1234567890p>
Using proportional figures
Use the proportional-nums utility to use numeric glyphs that have proportional widths in fonts that support them:
<p class="proportional-nums ...">12121p><p class="proportional-nums ...">90909p>
Using tabular figures
Use the tabular-nums utility to use numeric glyphs that have uniform/tabular widths in fonts that support them:
<p class="tabular-nums ...">12121p><p class="tabular-nums ...">90909p>
Using diagonal fractions
Use the diagonal-fractions utility to replace numbers separated by a slash with common diagonal fractions in fonts that support them:
<p class="diagonal-fractions ...">1/2 3/4 5/6p>
Using stacked fractions
Use the stacked-fractions utility to replace numbers separated by a slash with common stacked fractions in fonts that support them:
<p class="stacked-fractions ...">1/2 3/4 5/6p>
Stacking multiple utilities
The font-variant-numeric utilities are composable so you can enable multiple variants by combining them:
<dl class="..."> <dt class="...">Subtotaldt> <dd class="text-right slashed-zero tabular-nums ...">$100.00dd> <dt class="...">Taxdt> <dd class="text-right slashed-zero tabular-nums ...">$14.50dd> <dt class="...">Totaldt> <dd class="text-right slashed-zero tabular-nums ...">$114.50dd>dl>
Resetting numeric font variants
Use the normal-nums property to reset numeric font variants:
<p class="slashed-zero tabular-nums md:normal-nums ..."> p>
Responsive design
Prefix a font-variant-numeric utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:
<p class="proportional-nums md:tabular-nums ..."> Lorem ipsum dolor sit amet...p>
Learn more about using variants in the variants documentation.
