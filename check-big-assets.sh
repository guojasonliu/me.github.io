#!/bin/bash

# Find files over 1MB in size
find public/assets -type f -size +1M -exec du -h {} + 2>/dev/null | awk '$1 ~ /M$/ { print $1, $2 }'
