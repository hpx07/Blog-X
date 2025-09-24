@echo off
echo 📦 Installing all dependencies for Blog-X...

REM Install root dependencies
echo 🔧 Installing root dependencies...
call npm install

REM Install backend dependencies
echo 🔧 Installing backend dependencies...
cd backend
call npm install
cd ..

REM Install frontend dependencies
echo 🔧 Installing frontend dependencies...
cd frontend
call npm install
cd ..

echo ✅ All dependencies installed successfully!
echo.
echo Next steps:
echo 1. Run: npm run dev (to start both frontend and backend)
echo 2. Or run them separately:
echo    - Backend: cd backend && npm run start:dev
echo    - Frontend: cd frontend && npm run dev