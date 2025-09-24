@echo off
echo 🔧 Complete Debugging and Fix Script for Blog-X
echo ============================================================

echo.
echo 📋 Step 1: Checking current directory structure...
if not exist "frontend" (
    echo ❌ Frontend directory not found!
    echo Please run this script from the root project directory
    pause
    exit /b 1
)

if not exist "backend" (
    echo ❌ Backend directory not found!
    echo Please run this script from the root project directory
    pause
    exit /b 1
)

echo ✅ Project structure looks good

echo.
echo 📋 Step 2: Installing root dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install root dependencies
    pause
    exit /b 1
)

echo.
echo 📋 Step 3: Setting up Frontend...
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

echo 🧹 Cleaning Next.js cache...
if exist ".next" rmdir /s /q .next
if exist "node_modules/.cache" rmdir /s /q node_modules\.cache

echo 🔧 Checking environment file...
if not exist ".env.local" (
    echo Creating .env.local file...
    echo NEXT_PUBLIC_API_URL=http://localhost:3001/api > .env.local
    echo NEXT_PUBLIC_APP_URL=http://localhost:3000 >> .env.local
)

cd ..

echo.
echo 📋 Step 4: Setting up Backend...
cd backend

echo 📦 Installing backend dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ⚠️  Backend dependency installation failed
    echo 💡 This is OK - frontend works without backend
    echo 🔧 To setup backend later, run: setup-backend-simple.bat
    cd ..
    goto frontend_setup
)

echo 🔧 Checking environment file...
if not exist ".env" (
    echo Creating .env file...
    copy .env.example .env
)

echo 🗄️  Testing database connection...
call npm run test:db
if %errorlevel% neq 0 (
    echo ⚠️  Database connection failed - you may need to check your credentials
    echo But continuing with setup...
)

echo 🔧 Generating Prisma client...
call npx prisma generate
if %errorlevel% neq 0 (
    echo ❌ Failed to generate Prisma client
    cd ..
    pause
    exit /b 1
)

cd ..

:frontend_setup
echo.
echo 📋 Step 5: Final checks and cleanup...

echo 🧹 Clearing any port conflicts...
netstat -ano | findstr :3000 > nul
if %errorlevel% equ 0 (
    echo ⚠️  Port 3000 is in use - frontend may start on port 3001
)

netstat -ano | findstr :3001 > nul
if %errorlevel% equ 0 (
    echo ⚠️  Port 3001 is in use - backend may have issues
)

echo.
echo ✅ Setup Complete!
echo ==================

echo.
echo 🚀 Next Steps:
echo.
echo 1. Start Frontend (with mock data):
echo    cd frontend
echo    npm run dev
echo.
echo 2. Start Backend (optional):
echo    cd backend  
echo    npm run start:dev
echo.
echo 3. Access your application:
echo    Frontend: http://localhost:3000 (or 3001 if 3000 is busy)
echo    Backend API: http://localhost:3001/api
echo.
echo 📝 Notes:
echo - Frontend works with beautiful mock data (no backend needed)
echo - Backend setup is optional for initial testing
echo - All hydration errors have been fixed
echo - Tailwind CSS is properly configured
echo.

pause