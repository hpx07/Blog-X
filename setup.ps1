Write-Host "Blog-X Setup" -ForegroundColor Green
Write-Host "===================" -ForegroundColor Green
Write-Host ""

# Check if we're in the right directory
if (-not (Test-Path "frontend") -or -not (Test-Path "package.json")) {
    Write-Host "Error: Please run this script from the root project directory" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "Installing root dependencies..." -ForegroundColor Cyan
npm install concurrently
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to install root dependencies" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "Setting up frontend..." -ForegroundColor Cyan
Set-Location frontend

Write-Host "Installing frontend dependencies..." -ForegroundColor Cyan
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to install frontend dependencies" -ForegroundColor Red
    Set-Location ..
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "Installing Tailwind CSS plugins..." -ForegroundColor Cyan
npm install "@tailwindcss/typography" "@tailwindcss/forms"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to install Tailwind plugins" -ForegroundColor Red
    Set-Location ..
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "Cleaning cache..." -ForegroundColor Cyan
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
}

Write-Host "Creating environment file..." -ForegroundColor Cyan
if (-not (Test-Path ".env.local")) {
    "NEXT_PUBLIC_API_URL=http://localhost:3001/api" | Out-File ".env.local"
    "NEXT_PUBLIC_APP_URL=http://localhost:3000" | Add-Content ".env.local"
}

Write-Host ""
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "To start your blog:" -ForegroundColor Yellow
Write-Host "  npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "Then visit: http://localhost:3000" -ForegroundColor Yellow
Write-Host ""

Read-Host "Press Enter to continue"