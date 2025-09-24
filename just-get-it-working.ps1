Write-Host "Just Get It Working - Minimal Setup" -ForegroundColor Green
Write-Host "=======================================" -ForegroundColor Green
Write-Host ""

Write-Host "This script sets up ONLY the frontend with mock data" -ForegroundColor Yellow
Write-Host "Backend setup is optional and can be done later" -ForegroundColor Yellow
Write-Host ""

Write-Host "Step 1: Installing root dependencies..." -ForegroundColor Cyan
npm install concurrently
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to install root dependencies" -ForegroundColor Red
    Write-Host "Try running as administrator or check your npm installation" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "Step 2: Setting up frontend..." -ForegroundColor Cyan
Set-Location frontend

Write-Host "📦 Installing Next.js and React..." -ForegroundColor Cyan
npm install next@14.0.3 react@^18.2.0 react-dom@^18.2.0
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install React/Next.js" -ForegroundColor Red
    Set-Location ..
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "📦 Installing UI dependencies..." -ForegroundColor Cyan
npm install "@headlessui/react@^1.7.17" "@heroicons/react@^2.0.18" "clsx@^2.0.0"
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install UI dependencies" -ForegroundColor Red
    Set-Location ..
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "📦 Installing Tailwind CSS..." -ForegroundColor Cyan
npm install tailwindcss@^3.3.6 "@tailwindcss/typography@^0.5.10" "@tailwindcss/forms@^0.5.7" autoprefixer@^10.4.16 postcss@^8.4.32
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install Tailwind CSS" -ForegroundColor Red
    Set-Location ..
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "📦 Installing other dependencies..." -ForegroundColor Cyan
npm install "framer-motion@^10.16.5" "next-themes@^0.2.1" "react-query@^3.39.3" "axios@^1.6.2" "js-cookie@^3.0.5" "react-hot-toast@^2.4.1"
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install additional dependencies" -ForegroundColor Red
    Set-Location ..
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "📦 Installing TypeScript dependencies..." -ForegroundColor Cyan
npm install --save-dev typescript@^5.3.2 "@types/node@^20.9.4" "@types/react@^18.2.38" "@types/react-dom@^18.2.17" "@types/js-cookie@^3.0.6" eslint@^8.54.0 eslint-config-next@14.0.3
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install TypeScript dependencies" -ForegroundColor Red
    Set-Location ..
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "🧹 Cleaning cache..." -ForegroundColor Cyan
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
}

Write-Host "Creating environment file..." -ForegroundColor Cyan
if (-not (Test-Path ".env.local")) {
    $envContent = @"
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
"@
    $envContent | Out-File -FilePath ".env.local" -Encoding UTF8
}

Write-Host ""
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "==================" -ForegroundColor Green
Write-Host ""
Write-Host "To start your blog:" -ForegroundColor Yellow
Write-Host "   npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "Then visit: http://localhost:3000" -ForegroundColor Yellow
Write-Host ""
Write-Host "What you will see:" -ForegroundColor Yellow
Write-Host "   - Beautiful blog homepage with sample posts" -ForegroundColor Green
Write-Host "   - Responsive design that works on mobile" -ForegroundColor Green
Write-Host "   - Dark/light mode toggle" -ForegroundColor Green
Write-Host "   - Professional layout with hero section" -ForegroundColor Green
Write-Host "   - Featured posts with images" -ForegroundColor Green
Write-Host "   - Categories sidebar" -ForegroundColor Green
Write-Host "   - Newsletter signup form" -ForegroundColor Green
Write-Host ""
Write-Host "Backend is optional - everything works with mock data!" -ForegroundColor Cyan
Write-Host ""

Read-Host "Press Enter to continue"