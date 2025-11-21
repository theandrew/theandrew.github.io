#!/bin/bash

# Script to remove metadata from images using exiftool
# This removes EXIF data, GPS coordinates, and other identifying information

# Check if exiftool is installed
if ! command -v exiftool &> /dev/null; then
    echo "Error: exiftool is not installed"
    echo "Install it with: brew install exiftool"
    exit 1
fi

# Find all images in the public directory
echo "Removing metadata from images..."

# Process all common image formats
find public -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.webp" -o -iname "*.tiff" \) | while read -r file; do
    echo "Processing: $file"
    # Remove all metadata but preserve image quality
    exiftool -all= -overwrite_original "$file"
done

echo "Metadata removal complete!"
echo "All identifying information has been stripped from images."
