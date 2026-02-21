# Comprehensive text visibility and accessibility improvement
# - Increases font sizes for better readability
# - Improves line heights and letter spacing
# - Enhances contrast ratios
# - Updates typography hierarchy
# - Improves spacing and alignment

$improvements = @{
    # Base typography - increase body text readability
    'body {' = @(
        @{ old = "body {`n  background: #f5f7fa;`n  color: #1a1a2e;`n  height: 100%;`n  line-height: 1.6;"; new = "body {`n  background: #0f2e3d;`n  color: #ffffff;`n  height: 100%;`n  line-height: 1.7;`n  letter-spacing: 0.3px;" }
    )
    
    # Headings - make them more prominent
    'h1' = @(
        @{ old = "font-size: 36px;"; new = "font-size: 42px;" },
        @{ old = "font-size: 32px;"; new = "font-size: 38px;" },
        @{ old = "font-size: 28px;"; new = "font-size: 34px;" }
    )
    
    # Section headings
    'h2' = @(
        @{ old = "font-size: 28px;"; new = "font-size: 32px;" }
    )
    
    # Labels and form text
    'label' = @(
        @{ old = "font-size: 13px;"; new = "font-size: 15px;" },
        @{ old = "font-weight: 500;"; new = "font-weight: 600;" }
    )
    
    # Inputs and text areas
    'input' = @(
        @{ old = "font-size: 14px;"; new = "font-size: 16px;" }
    )
    
    # Buttons
    'button' = @(
        @{ old = "font-size: 14px;"; new = "font-size: 15px;" },
        @{ old = "font-weight: 600;"; new = "font-weight: 700;" }
    )
    
    # Navigation links
    'nav a' = @(
        @{ old = "font-size: 14px;"; new = "font-size: 15px;" },
        @{ old = "font-weight: 500;"; new = "font-weight: 600;" }
    )
}

Write-Host "Text visibility improvements prepared"
