@echo off
echo 🔧 Fixing current frontend issues...

echo 📦 Installing missing Tailwind plugins...
cd frontend
call npm install @tailwindcss/typography @tailwindcss/forms

echo 🧹 Cleaning Next.js cache...
rmdir /s /q .next 2>nul

echo ✅ Issues fixed! 
echo 📝 The frontend now runs with mock data (no backend required)
echo 🚀 Start frontend: npm run dev
echo 📖 To setup backend: see START_BACKEND.md

cd ..
pause