#!/bin/bash
OUTDIR="raw/2025/1202"
mkdir -p "$OUTDIR"
URLFILE="$OUTDIR/urls.txt"
TOTAL=$(wc -l < "$URLFILE" | tr -d ' ')
COUNT=0

while IFS= read -r url; do
    [[ -z "$url" ]] && continue
    fname=$(echo "$url" | sed 's|https://filamentphp.com/docs/5.x/||' | sed 's|/|-|g')
    COUNT=$((COUNT+1))
    echo "[$COUNT/$TOTAL] $fname"
    summarize "$url" --extract --format md > "$OUTDIR/$fname" 2>/dev/null
done < "$URLFILE"

echo ""
echo "=== DONE: $COUNT files ==="
ls -1 "$OUTDIR" | grep -vc 'download.sh\|urls.txt' | xargs echo "Total:"
