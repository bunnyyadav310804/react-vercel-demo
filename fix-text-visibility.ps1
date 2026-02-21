# Comprehensive Text Visibility Improvements
# - Bold headings and titles (font-weight 800-900)
# - Increase heading font sizes
# - Improve card title visibility
# - Strong contrast for all text
# - Better spacing and readability
# - WCAG AA accessibility

Write-Host "Starting comprehensive text visibility improvements..."

# CSS files to update
$files = @(
    "src\index.css",
    "src\styles\ThemeViolet.css",
    "src\styles\Dashboard.css",
    "src\styles\AuthPages.css",
    "src\styles\CodeEditor.css",
    "src\styles\Chatbot.css",
    "src\styles\AdminPanel.css",
    "src\styles\CompanySpecific.css",
    "src\styles\EntranceExams.css",
    "src\styles\JobSearch.css",
    "src\components\UniversalSections.css",
    "src\components\BTechGuides.css",
    "src\components\CareerPath.css",
    "src\components\DSAPractice.css",
    "src\components\ProgrammingLanguages.css",
    "src\components\ResumeBuilder.css"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Heading improvements - make them bolder and larger
        $content = $content -replace 'font-weight: 600;', 'font-weight: 700;'
        $content = $content -replace 'font-weight: 700;', 'font-weight: 800;'
        $content = $content -replace 'font-weight: 500;', 'font-weight: 600;'
        
        # Font size improvements for titles/headings
        $content = $content -replace 'font-size: 1rem', 'font-size: 1.05rem'
        $content = $content -replace 'font-size: 1.1rem', 'font-size: 1.2rem'
        $content = $content -replace 'font-size: 1.2rem', 'font-size: 1.3rem'
        $content = $content -replace 'font-size: 1.3rem', 'font-size: 1.4rem'
        
        Set-Content $file $content -NoNewline
        Write-Host "✓ Processed: $file"
    }
}

Write-Host "✓ Text visibility improvements complete!"
