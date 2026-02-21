# Revert to dark theme with new color accents
# Dark backgrounds + Modern blue (#0066cc) + Orange (#ff6b35)

$replacements = @(
    # Revert light backgrounds back to dark
    @{ old = "#f8fafc"; new = "#0f2e3d" },
    @{ old = "#ffffff"; new = "#081d28" },
    
    # Keep blue primary color (#0066cc stays) - already modern
    # Keep orange accent (#ff6b35 stays)
    
    # Revert light text colors back to white/light
    @{ old = "color: #1a1a2e"; new = "color: #ffffff" },
    @{ old = "color:#1a1a2e"; new = "color:#ffffff" },
    
    # Revert muted text colors back to cyan tint
    @{ old = "#4a5568"; new = "#b0d5e0" },
    
    # Keep blue rgba (modern) but adjust opacity
    @{ old = "rgba\(0, 102, 204, 0.1\)"; new = "rgba(0, 102, 204, 0.15)" },
    @{ old = "rgba\(0, 102, 204, 0.2\)"; new = "rgba(0, 102, 204, 0.25)" },
    
    # Revert borders back to cyan tint
    @{ old = "#e2e8f0"; new = "rgba(0, 180, 216, 0.2)" },
    
    # Revert input backgrounds
    @{ old = "background: #f8fafc"; new = "background: #0f4453" },
)

$cssFiles = Get-ChildItem -Path "src" -Filter "*.css" -Recurse

foreach ($file in $cssFiles) {
    $content = Get-Content $file.FullName -Raw
    $updated = $false
    
    foreach ($replacement in $replacements) {
        if ($content -match [regex]::Escape($replacement.old)) {
            $content = $content -replace [regex]::Escape($replacement.old), $replacement.new
            $updated = $true
        }
    }
    
    if ($updated) {
        Set-Content $file.FullName $content -NoNewline
        Write-Host "Updated: $($file.FullName)"
    }
}

Write-Host "Dark theme with modern colors restored!"
