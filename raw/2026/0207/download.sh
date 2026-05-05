#!/bin/bash
# Скачивание всей документации Tailwind CSS через summarize
# 172 страницы | raw/2026/0207/
# URL собраны из сайдбара https://tailwindcss.com/docs

mkdir -p raw/2026/0207
COUNT=0
TOTAL=$(wc -l < raw/2026/0207/urls.txt | tr -d ' ')

while IFS= read -r url; do
    [[ -z "$url" ]] && continue
    fname=$(echo "$url" | sed 's|https://tailwindcss.com/docs/||').md
    COUNT=$((COUNT+1))
    echo "[$COUNT/$TOTAL] $fname"
    summarize "$url" --extract --format md > "raw/2026/0207/$fname" 2>/dev/null
done < raw/2026/0207/urls.txt

echo ""
echo "=== DONE: $COUNT files ==="
echo "Total .md: $(ls -1 raw/2026/0207/*.md 2>/dev/null | wc -l | tr -d ' ')"
