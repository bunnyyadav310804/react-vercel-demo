# Bulk text visibility improvements
# Replace all dark text colors with white/light cyan for dark theme

$replacements = @(
    # Text color conversions for dark theme
    @{ old = "color: #1a1a2e"; new = "color: #ffffff" },
    @{ old = "color: #4a5568"; new = "color: #b0d5e0" },
    @{ old = "color:#1a1a2e"; new = "color:#ffffff" },
    @{ old = "color:#4a5568"; new = "color:#b0d5e0" },
    
    # Background conversions for cards and sections
    @{ old = "background: #ffffff"; new = "background: #081d28" },
    @{ old = "background:#ffffff"; new = "background:#081d28" },
    @{ old = "background: #f5f5f5"; new = "background: #0f4453" },
    @{ old = "background: #f5f7fa"; new = "background: #0f2e3d" },
    @{ old = "background: #e2e8f0"; new = "background: rgba(0, 180, 216, 0.2)" },
    
    # Border conversions
    @{ old = "border: 1px solid #e2e8f0"; new = "border: 1px solid rgba(0, 180, 216, 0.2)" },
    @{ old = "border: 2px solid #e2e8f0"; new = "border: 2px solid rgba(0, 180, 216, 0.3)" },
    @{ old = "border-bottom: 1px solid #e2e8f0"; new = "border-bottom: 1px solid rgba(0, 180, 216, 0.2)" },
    @{ old = "#cbd5e1"; new = "#b0d5e0" },
    
    # Font size improvements - general increase for readability
    @{ old = "font-size: 12px"; new = "font-size: 13px" },
    @{ old = "font-size: 13px"; new = "font-size: 14px" },
    @{ old = "font-size: 14px"; new = "font-size: 15px" }
)

$cssFiles = Get-ChildItem -Path "src" -Filter "*.css" -Recurse

$totalReplaced = 0

foreach ($file in $cssFiles) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    foreach ($replacement in $replacements) {
        $count = ($content | Select-String -Pattern [regex]::Escape($replacement.old) -AllMatches).Matches.Count
        if ($count -gt 0) {
            $content = $content -replace [regex]::Escape($replacement.old), $replacement.new
            $totalReplaced += $count
        }
    }
    
    if ($content -ne $originalContent) {
        Set-Content $file.FullName $content -NoNewline
        Write-Host "✓ Updated: $($file.Name) ($totalReplaced replacements so far)"
    }
}

Write-Host "✓ Text visibility improvements complete! Total replacements: $totalReplaced"
