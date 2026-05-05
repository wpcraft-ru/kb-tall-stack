#!/bin/bash
# Скачивание всей документации Livewire 4.x через summarize
# 79 страниц | raw/2026/0105/
# URL собраны из сайдбара https://livewire.laravel.com/docs/4.x/quickstart

mkdir -p raw/2026/0105
COUNT=0
TOTAL=$(wc -l < raw/2026/0105/urls.txt | tr -d ' ')
START=$(date +%s)

while IFS= read -r url; do
    [[ -z "$url" ]] && continue
    fname=$(echo "$url" | sed 's|https://livewire.laravel.com/docs/4.x/||').md
    COUNT=$((COUNT+1))
    echo "[$COUNT/$TOTAL] $fname"
    summarize "$url" --extract --format md > "raw/2026/0105/$fname" 2>/dev/null
done < raw/2026/0105/urls.txt

END=$(date +%s)
ELAPSED=$((END - START))
echo ""
echo "=== DONE: $COUNT files in ${ELAPSED}s ==="
echo "Total .md files: $(ls -1 raw/2026/0105/*.md 2>/dev/null | wc -l | tr -d ' ')"
