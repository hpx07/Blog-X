@echo off
echo Blog-X Setup
echo ===================
echo.

echo Installing root dependencies...
call npm install concurrently
if %errorlevel% neq 0 (
    echo Failed to install root dependencies
    pause
    exit /b 1
)

echo Setting up frontend...
cd frontend

echo Installing frontend dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Failed to install frontend dependencies
    cd ..
    pause
    exit /b 1
)

echo Installing Tailwind CSS plugins...
call npm install @tailwindcss/typography @tailwindcss/forms
if %errorlevel% neq 0 (
    echo Failed to install Tailwind plugins
    cd ..
    pause
    exit /b 1
)

echo Cleaning cache...
if exist ".next" rmdir /s /q .next

echo Creating environment file...
if not exist ".env.local" (
    echo NEXT_PUBLIC_API_URL=http://localhost:3001/api > .env.local
    echo NEXT_PUBLIC_APP_URL=http://localhost:3000 >> .env.local
)

echo.
echo Setup Complete!
echo.
echo To start your blog:
echo   npm run dev
echo.
echo Then visit: http://localhost:3000
echo.

pause