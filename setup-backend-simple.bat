@echo off
echo 🔧 Simple Backend Setup (Essential Dependencies Only)
echo ====================================================

cd backend

echo 📦 Installing core NestJS dependencies...
call npm install @nestjs/common@^10.0.0 @nestjs/core@^10.0.0 @nestjs/platform-express@^10.0.0
if %errorlevel% neq 0 (
    echo ❌ Failed to install core NestJS packages
    pause
    exit /b 1
)

echo 📦 Installing database dependencies...
call npm install @prisma/client@^5.6.0 prisma@^5.6.0 pg@^8.11.3
if %errorlevel% neq 0 (
    echo ❌ Failed to install database packages
    pause
    exit /b 1
)

echo 📦 Installing utility dependencies...
call npm install dotenv@^16.3.1 reflect-metadata@^0.1.13 rxjs@^7.8.1
if %errorlevel% neq 0 (
    echo ❌ Failed to install utility packages
    pause
    exit /b 1
)

echo 📦 Installing development dependencies...
call npm install --save-dev @nestjs/cli@^10.0.0 typescript@^5.1.3 ts-node@^10.9.1 @types/node@^20.3.1 @types/pg@^8.10.9
if %errorlevel% neq 0 (
    echo ❌ Failed to install dev dependencies
    pause
    exit /b 1
)

echo 🗄️  Testing database connection...
call npm run test:db
if %errorlevel% neq 0 (
    echo ⚠️  Database connection test failed - check your credentials in .env
    echo Continuing with setup...
)

echo 🔧 Generating Prisma client...
call npx prisma generate
if %errorlevel% neq 0 (
    echo ❌ Failed to generate Prisma client
    pause
    exit /b 1
)

echo ✅ Backend setup complete!
echo.
echo 🚀 To start the backend:
echo    npm run start:dev
echo.
echo 📝 Note: Backend is optional - frontend works with mock data

cd ..
pause