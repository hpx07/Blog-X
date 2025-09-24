@echo off
echo 🔍 Checking Blog-X Status
echo =====================================

echo.
echo 📁 Project Structure:
if exist "frontend" (echo ✅ Frontend directory exists) else (echo ❌ Frontend directory missing)
if exist "backend" (echo ✅ Backend directory exists) else (echo ❌ Backend directory missing)
if exist "package.json" (echo ✅ Root package.json exists) else (echo ❌ Root package.json missing)

echo.
echo 📦 Dependencies:
if exist "frontend\node_modules" (echo ✅ Frontend dependencies installed) else (echo ❌ Frontend dependencies missing)
if exist "backend\node_modules" (echo ✅ Backend dependencies installed) else (echo ❌ Backend dependencies missing)
if exist "node_modules" (echo ✅ Root dependencies installed) else (echo ❌ Root dependencies missing)

echo.
echo 🔧 Configuration:
if exist "frontend\.env.local" (echo ✅ Frontend environment configured) else (echo ⚠️  Frontend .env.local missing)
if exist "backend\.env" (echo ✅ Backend environment configured) else (echo ⚠️  Backend .env missing)

echo.
echo 🌐 Port Status:
netstat -ano | findstr :3000 > nul
if %errorlevel% equ 0 (echo ⚠️  Port 3000 is in use) else (echo ✅ Port 3000 is available)

netstat -ano | findstr :3001 > nul
if %errorlevel% equ 0 (echo ⚠️  Port 3001 is in use) else (echo ✅ Port 3001 is available)

echo.
echo 📋 Recommendations:
echo.
if not exist "frontend\node_modules" (
    echo 🔧 Run: debug-and-fix.bat
    echo    This will install all dependencies and fix common issues
)

if exist "frontend\node_modules" (
    echo 🚀 Ready to start! Run:
    echo    cd frontend
    echo    npm run dev
)

echo.
pause