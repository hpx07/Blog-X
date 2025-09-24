@echo off
echo 🚀 Just Get It Working - Minimal Setup
echo =======================================

echo 📝 This script sets up ONLY the frontend with mock data
echo    Backend setup is optional and can be done later
echo.

echo 📦 Step 1: Installing root dependencies...
call npm install concurrently
if %errorlevel% neq 0 (
    echo ❌ Failed to install root dependencies
    echo 💡 Try running as administrator or check your npm installation
    pause
    exit /b 1
)

echo 📦 Step 2: Setting up frontend...
cd frontend

echo 📦 Installing Next.js and React...
call npm install next@14.0.3 react@^18.2.0 react-dom@^18.2.0
if %errorlevel% neq 0 (
    echo ❌ Failed to install React/Next.js
    cd ..
    pause
    exit /b 1
)

echo 📦 Installing UI dependencies...
call npm install @headlessui/react@^1.7.17 @heroicons/react@^2.0.18 clsx@^2.0.0
if %errorlevel% neq 0 (
    echo ❌ Failed to install UI dependencies
    cd ..
    pause
    exit /b 1
)

echo 📦 Installing Tailwind CSS...
call npm install tailwindcss@^3.3.6 @tailwindcss/typography@^0.5.10 @tailwindcss/forms@^0.5.7 autoprefixer@^10.4.16 postcss@^8.4.32
if %errorlevel% neq 0 (
    echo ❌ Failed to install Tailwind CSS
    cd ..
    pause
    exit /b 1
)

echo 📦 Installing other dependencies...
call npm install framer-motion@^10.16.5 next-themes@^0.2.1 react-query@^3.39.3 axios@^1.6.2 js-cookie@^3.0.5 react-hot-toast@^2.4.1
if %errorlevel% neq 0 (
    echo ❌ Failed to install additional dependencies
    cd ..
    pause
    exit /b 1
)

echo 📦 Installing TypeScript dependencies...
call npm install --save-dev typescript@^5.3.2 @types/node@^20.9.4 @types/react@^18.2.38 @types/react-dom@^18.2.17 @types/js-cookie@^3.0.6 eslint@^8.54.0 eslint-config-next@14.0.3
if %errorlevel% neq 0 (
    echo ❌ Failed to install TypeScript dependencies
    cd ..
    pause
    exit /b 1
)

echo 🧹 Cleaning cache...
if exist ".next" rmdir /s /q .next

echo 🔧 Creating environment file...
if not exist ".env.local" (
    echo NEXT_PUBLIC_API_URL=http://localhost:3001/api > .env.local
    echo NEXT_PUBLIC_APP_URL=http://localhost:3000 >> .env.local
)

echo.
echo ✅ Setup Complete!
echo ==================
echo.
echo 🚀 To start your blog:
echo    npm run dev
echo.
echo 🌐 Then visit: http://localhost:3000
echo.
echo 📝 What you'll see:
echo    ✅ Beautiful blog homepage with sample posts
echo    ✅ Responsive design that works on mobile
echo    ✅ Dark/light mode toggle
echo    ✅ Professional layout with hero section
echo    ✅ Featured posts with images
echo    ✅ Categories sidebar
echo    ✅ Newsletter signup form
echo.
echo 💡 Backend is optional - everything works with mock data!
echo.

pause