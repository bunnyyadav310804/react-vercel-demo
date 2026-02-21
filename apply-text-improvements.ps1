# Comprehensive text visibility script using Get-ChildItem and simple string replacement

Write-Host "Starting comprehensive text visibility improvements..."

# Define all CSS files to update
$cssFiles = @(
    "src\styles\Dashboard.css",
    "src\components\UniversalSections.css",
    "src\styles\CodeEditor.css",
    "src\styles\Chatbot.css",
    "src\styles\AdminPanel.css",
    "src\styles\EntranceExams.css",
    "src\styles\CompanySpecific.css",
    "src\styles\JobSearch.css",
    "src\components\BTechGuides.css",
    "src\components\CareerPath.css",
    "src\components\DSAPractice.css",
    "src\components\ProgrammingLanguages.css",
    "src\components\ResumeBuilder.css"
)

foreach ($file in $cssFiles) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Replace all dark text colors with white/light
        $content = $content -replace 'color: #1a1a2e', 'color: #ffffff'
        $content = $content -replace 'color:#1a1a2e', 'color:#ffffff'
        $content = $content -replace 'color: #4a5568', 'color: #b0d5e0'
        $content = $content -replace 'color:#4a5568', 'color:#b0d5e0'
        $content = $content -replace 'color: #666', 'color: #b0d5e0'
        $content = $content -replace 'color: #999', 'color: #b0d5e0'
        
        # Replace light backgrounds with dark
        $content = $content -replace 'background: #ffffff(?![0-9a-f])', 'background: #081d28'
        $content = $content -replace 'background:#ffffff(?![0-9a-f])', 'background:#081d28'
        $content = $content -replace 'background: #f5f5f5', 'background: #0f4453'
        $content = $content -replace 'background: #f5f7fa', 'background: #0f2e3d'
        $content = $content -replace 'background: #fafbfc', 'background: #0f4453'
        $content = $content -replace 'background: #e2e8f0', 'background: rgba(0, 180, 216, 0.15)'
        
        # Replace light borders with dark
        $content = $content -replace 'border: 1px solid #e2e8f0', 'border: 1px solid rgba(0, 180, 216, 0.2)'
        $content = $content -replace 'border: 2px solid #e2e8f0', 'border: 2px solid rgba(0, 180, 216, 0.3)'
        $content = $content -replace 'border-bottom: 1px solid #e2e8f0', 'border-bottom: 1px solid rgba(0, 180, 216, 0.2)'
        $content = $content -replace 'border-top: 1px solid #e2e8f0', 'border-top: 1px solid rgba(0, 180, 216, 0.2)'
        
        Set-Content $file $content -NoNewline
        Write-Host "✓ Updated: $file"
    }
}

Write-Host "✓ All text visibility improvements complete!"
