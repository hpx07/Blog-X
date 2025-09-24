Write-Host "Quick Start - Frontend Only Setup" -ForegroundColor Green
Write-Host "====================================" -ForegroundColor Green

# Check if we're in the right directory
if (-not (Test-Path "frontend") -or -not (Test-Path "package.json")) {
    Write-Host "❌ Please run this script from the root project directory" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

# Install root dependencies
Write-Host "📦 Installing root dependencies..." -ForegroundColor Cyan
npm install

# Setup frontend
Write-Host "📦 Setting up frontend..." -ForegroundColor Cyan
Set-Location frontend

# Install all frontend dependencies at once
Write-Host "📦 Installing all frontend dependencies..." -ForegroundColor Cyan
npm install

# Install Tailwind plugins specifically
Write-Host "📦 Installing Tailwind plugins..." -ForegroundColor Cyan
npm install "@tailwindcss/typography" "@tailwindcss/forms"

# Clean cache
Write-Host "🧹 Cleaning cache..." -ForegroundColor Cyan
if (Test-Path ".next") { Remove-Item -Recurse -Force ".next" }

# Create env file
Write-Host "🔧 Setting up environment..." -ForegroundColor Cyan
if (-not (Test-Path ".env.local")) {
    "NEXT_PUBLIC_API_URL=http://localhost:3001/api`nNEXT_PUBLIC_APP_URL=http://localhost:3000" | Out-File ".env.local"
}

Write-Host ""
Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Starting the development server..." -ForegroundColor Yellow
Write-Host "Your blog will open at: http://localhost:3000" -ForegroundColor Yellow
Write-Host ""

# Start the development server
npm run dev