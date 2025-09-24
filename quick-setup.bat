@echo off
echo 🚀 Setting up Blogging Platform with CockroachDB...

REM Install dependencies
echo 📦 Installing dependencies...
call npm run install:all

REM Start Redis (optional)
echo 🔴 Starting Redis...
docker-compose up -d redis

REM Test database connection
echo 🗄️  Testing CockroachDB connection...
cd backend
call npm run test:db

if %errorlevel% equ 0 (
    echo ✅ Database connection successful!
    
    REM Generate Prisma client
    echo 🔧 Generating Prisma client...
    call npx prisma generate
    
    REM Push database schema
    echo 📊 Setting up database schema...
    call npx prisma db push
    
    echo ✅ Database setup complete!
    
    REM Go back to root
    cd ..
    
    REM Setup frontend environment
    echo 🎨 Setting up frontend environment...
    cd frontend
    copy .env.example .env.local
    cd ..
    
    echo 🎉 Setup complete! You can now run:
    echo    npm run dev
    echo.
    echo Access your application at:
    echo    Frontend: http://localhost:3000
    echo    Backend API: http://localhost:3001/api
    
) else (
    echo ❌ Database connection failed. Please check your credentials.
    exit /b 1
)