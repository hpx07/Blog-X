@echo off
echo 🎨 Frontend-Only Setup (Recommended for Quick Start)
echo ===================================================

echo 📦 Installing root dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install root dependencies
    pause
    exit /b 1
)

echo 📦 Setting up frontend...
cd frontend

echo 📦 Installing frontend dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install frontend dependencies
    cd ..
    pause
    exit /b 1
)

echo 📦 Installing Tailwind CSS plugins...
call npm install @tailwindcss/typography @tailwindcss/forms
if %errorlevel% neq 0 (
    echo ❌ Failed to install Tailwind plugins
    cd ..
    pause
    exit /b 1
)

echo 🧹 Cleaning cache...
if exist ".next" rmdir /s /q .next
if exist "node_modules\.cache" rmdir /s /q node_modules\.cache

echo 🔧 Setting up environment...
if not exist ".env.local" (
    echo NEXT_PUBLIC_API_URL=http://localhost:3001/api > .env.local
    echo NEXT_PUBLIC_APP_URL=http://localhost:3000 >> .env.local
    echo ✅ Created .env.local
)

echo.
echo ✅ Frontend setup complete!
echo.
echo 🚀 To start the frontend:
echo    npm run dev
echo.
echo 🌐 Then visit: http://localhost:3000
echo.
echo 📝 Features available:
echo    ✅ Beautiful blog interface with sample posts
echo    ✅ Responsive design with dark/light mode
echo    ✅ Hero section, featured posts, categories
echo    ✅ Newsletter signup form
echo    ✅ No backend required - uses mock data
echo.

pause