# Comprehensive Theme Color Replacement Script
# Replaces all dark cyan/teal theme colors with modern accessible blue/orange theme

$cssFiles = Get-ChildItem -Path "src" -Filter "*.css" -Recurse | Where-Object { $_.FullName -notmatch "node_modules" }

$replacements = @(
    # Dark backgrounds
    @{ old = "linear-gradient\(135deg, #0f2e3d 0%, #1a4d5c 100%\)"; new = "#f8fafc" },
    @{ old = "background: linear-gradient\(180deg, #1e3a5f 0%, #16213e 100%\)"; new = "background: #ffffff" },
    @{ old = "#0f2e3d"; new = "#f8fafc" },
    @{ old = "#0f4453"; new = "#f8fafc" },
    @{ old = "#081d28"; new = "#ffffff" },
    @{ old = "#1e3a5f"; new = "#ffffff" },
    @{ old = "#16213e"; new = "#ffffff" },
    @{ old = "#0d2e3f"; new = "#ffffff" },
    @{ old = "rgba\(15, 46, 61, 0.85\)"; new = "#ffffff" },
    @{ old = "rgba\(15, 46, 61, 0.6\)"; new = "#ffffff" },
    @{ old = "rgba\(8, 29, 40, 0.7\)"; new = "#ffffff" },
    
    # Cyan colors -> Blue
    @{ old = "#00d4ff"; new = "#0066cc" },
    @{ old = "#00e5ff"; new = "#3399ff" },
    @{ old = "#00b4d8"; new = "#0066cc" },
    @{ old = "#0099b8"; new = "#003d99" },
    @{ old = "#00a8cc"; new = "#0055bb" },
    @{ old = "#06b6d4"; new = "#0066cc" },
    @{ old = "#0f5470"; new = "#0055bb" },
    @{ old = "rgba\(0, 212, 255"; new = "rgba(0, 102, 204" },
    @{ old = "rgba\(0, 180, 216"; new = "rgba(0, 102, 204" },
    @{ old = "rgba\(6, 182, 212"; new = "rgba(0, 102, 204" },
    @{ old = "#b0d5e0"; new = "#4a5568" },
    @{ old = "#60a5fa"; new = "#0066cc" },
    
    # White text -> Dark text
    @{ old = "color: #ffffff"; new = "color: #1a1a2e" },
    @{ old = "color:#ffffff"; new = "color:#1a1a2e" },
    
    # Border updates
    @{ old = "border: 2px solid rgba\(0, 212, 255, 0.3\)"; new = "border: 2px solid #e2e8f0" },
    @{ old = "border: 1px solid rgba\(0, 212, 255, 0.2\)"; new = "border: 1px solid #e2e8f0" },
    @{ old = "border-right: 3px solid #06b6d4"; new = "border-right: 2px solid #0066cc" },
    @{ old = "border-bottom: 1px solid #333"; new = "border-bottom: 1px solid #e2e8f0" },
    @{ old = "border-top: 1px solid #333"; new = "border-top: 1px solid #e2e8f0" },
    
    # Shadow updates
    @{ old = "0 20px 60px rgba\(0, 180, 216, 0.2\)"; new = "0 10px 25px rgba(0, 102, 204, 0.1)" },
    @{ old = "0 4px 12px rgba\(0, 180, 216, 0.15\)"; new = "0 4px 12px rgba(0, 102, 204, 0.15)" },
    @{ old = "rgba\(0, 212, 255, 0.1\)"; new = "rgba(0, 102, 204, 0.1)" },
    @{ old = "rgba\(0, 180, 216, 0.2\)"; new = "rgba(0, 102, 204, 0.2)" },
    @{ old = "rgba\(0, 180, 216, 0.25\)"; new = "rgba(0, 102, 204, 0.15)" },
    
    # Text colors
    @{ old = "#1f2937"; new = "#1a1a2e" },
    @{ old = "#0f172a"; new = "#1a1a2e" },
    @{ old = "#1a202c"; new = "#1a1a2e" },
    @{ old = "#4b5563"; new = "#4a5568" },
    @{ old = "#6b7280"; new = "#4a5568" },
    
    # Input fields
    @{ old = "background: #0f4453"; new = "background: #f8fafc" },
    @{ old = "background: #1e1e1e"; new = "background: #ffffff" },
    @{ old = "background: #252526"; new = "background: #f8fafc" },
    @{ old = "background: #2d2d30"; new = "background: #f8fafc" },
    @{ old = "background: #3c3c3c"; new = "background: #0066cc" },
    @{ old = "color: #d4d4d4"; new = "color: #1a1a2e" },
    @{ old = "color: #666"; new = "color: #cbd5e1" }
)

foreach ($file in $cssFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    $originalContent = $content
    
    foreach ($replacement in $replacements) {
        $content = $content -replace $replacement.old, $replacement.new
    }
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content
        Write-Host "Updated: $($file.FullName)"
    }
}

Write-Host "Theme update complete!"
