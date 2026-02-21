@echo off
REM PerfectTejas ngrok Deployment Script for Windows
REM Usage: deploy-ngrok.bat [dev|prod]

setlocal enabledelayedexpansion

set MODE=%1
if "%MODE%"=="" set MODE=prod
set NGROK_PORT=%2
if "%NGROK_PORT%"=="" set NGROK_PORT=4173

echo.
echo 🚀 PerfectTejas ngrok Deployment Script
echo ========================================
echo.

REM Check if ngrok is installed
where ngrok >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ ngrok is not installed!
    echo.
    echo Install ngrok from: https://ngrok.com/download
    echo Windows Installer: https://ngrok.com/download
    echo Or via Chocolatey: choco install ngrok
    echo.
    pause
    exit /b 1
)

echo ✅ ngrok found
echo.

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm is not installed!
    echo Install Node.js from: https://nodejs.org
    pause
    exit /b 1
)

echo ✅ npm found
echo.

echo 📋 Current Configuration:
echo    Mode: %MODE%
echo    Port: %NGROK_PORT%
echo.

if "%MODE%"=="dev" (
    echo 🔧 Development Mode:
    echo    - npm run dev (with HMR enabled)
    echo    - Exposed via ngrok on port 5173
    echo.
    echo Starting dev server...
    echo.
    echo ⚠️  Keep this window open and open a NEW terminal for ngrok
    echo.
    call npm run dev

) else if "%MODE%"=="prod" (
    echo 📦 Production Mode:
    echo    - npm run build (optimized bundle)
    echo    - npm run preview (production server)
    echo    - Exposed via ngrok on port %NGROK_PORT%
    echo.
    
    if not exist "dist" (
        echo Building project...
        call npm run build
        if %ERRORLEVEL% NEQ 0 (
            echo ❌ Build failed!
            pause
            exit /b 1
        )
    ) else (
        echo ✅ Using existing build
    )
    
    echo.
    echo Starting preview server on port %NGROK_PORT%...
    echo.
    echo ⚠️  Keep this window open and open a NEW terminal for ngrok
    echo.
    call npm run preview

) else (
    echo ❌ Invalid mode: %MODE%
    echo Usage: deploy-ngrok.bat [dev^|prod]
    echo.
    echo Examples:
    echo   deploy-ngrok.bat dev    REM Development with HMR
    echo   deploy-ngrok.bat prod   REM Production build (default)
    echo.
    pause
    exit /b 1
)

pause
