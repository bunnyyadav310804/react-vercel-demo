# Simple find-replace script to revert dark theme
# Replace all light colors back to dark colors

$replacements = @(
    "color: #1a1a2e",  "#ffffff"
    "color: #4a5568",   "#b0d5e0"
    "#e2e8f0",          "rgba(0, 180, 216, 0.2)"
    "rgba(0, 102, 204", "rgba(0, 180, 216"
)

$cssFiles = Get-ChildItem -Path "src" -Filter "*.css" -Recurse

foreach ($file in $cssFiles) {
    $content = Get-Content $file.FullName -Raw
    
    for ($i = 0; $i -lt $replacements.Count; $i += 2) {
        $old = $replacements[$i]
        $new = $replacements[$i + 1]
        $content = $content -replace $old, $new
    }
    
    Set-Content $file.FullName $content -NoNewline
    Write-Host "Updated: $($file.FullName)"
}

Write-Host "Complete!"
