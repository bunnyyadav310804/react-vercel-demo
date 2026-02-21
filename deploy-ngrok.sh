#!/bin/bash

# PerfectTejas ngrok Deployment Script
# Usage: ./deploy-ngrok.sh [dev|prod]

MODE=${1:-prod}
NGROK_PORT=${2:-4173}

echo "🚀 PerfectTejas ngrok Deployment Script"
echo "========================================"
echo ""

# Check if ngrok is installed
if ! command -v ngrok &> /dev/null; then
    echo "❌ ngrok is not installed!"
    echo ""
    echo "Install ngrok from: https://ngrok.com/download"
    echo ""
    echo "macOS: brew install ngrok"
    echo "Windows: choco install ngrok"
    echo "Linux: https://ngrok.com/download"
    exit 1
fi

echo "✅ ngrok found: $(ngrok --version)"
echo ""

# Check if Node.js is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    exit 1
fi

echo "✅ npm found: $(npm --version)"
echo ""

# Display current environment
echo "📋 Current Configuration:"
echo "   Mode: $MODE"
echo "   Port: $NGROK_PORT"
echo ""

if [ "$MODE" = "dev" ]; then
    echo "🔧 Development Mode:"
    echo "   - npm run dev (with HMR enabled)"
    echo "   - Exposed via ngrok on port 5173"
    echo ""
    echo "Starting dev server..."
    npm run dev &
    DEV_PID=$!
    sleep 3
    
    echo ""
    echo "Starting ngrok tunnel on port 5173..."
    ngrok http 5173
    
    # Kill dev server on exit
    trap "kill $DEV_PID" EXIT

elif [ "$MODE" = "prod" ]; then
    echo "📦 Production Mode:"
    echo "   - npm run build (optimized bundle)"
    echo "   - npm run preview (production server)"
    echo "   - Exposed via ngrok on port 4173"
    echo ""
    
    # Check if dist exists and is recent
    if [ ! -d "dist" ] || [ $(find dist -mmin +60 | wc -l) -gt 0 ]; then
        echo "Building project..."
        npm run build
        if [ $? -ne 0 ]; then
            echo "❌ Build failed!"
            exit 1
        fi
    else
        echo "✅ Using cached build"
    fi
    
    echo ""
    echo "Starting preview server on port $NGROK_PORT..."
    npm run preview &
    PREVIEW_PID=$!
    sleep 3
    
    echo ""
    echo "Starting ngrok tunnel..."
    ngrok http $NGROK_PORT
    
    # Kill preview server on exit
    trap "kill $PREVIEW_PID" EXIT

else
    echo "❌ Invalid mode: $MODE"
    echo "Usage: ./deploy-ngrok.sh [dev|prod]"
    echo ""
    echo "Examples:"
    echo "  ./deploy-ngrok.sh dev    # Development with HMR"
    echo "  ./deploy-ngrok.sh prod   # Production build (default)"
    exit 1
fi
