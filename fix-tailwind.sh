#!/bin/bash

echo "🔧 Fixing Tailwind CSS dependencies..."

echo "📦 Installing Tailwind plugins in frontend..."
cd frontend
npm install @tailwindcss/typography @tailwindcss/forms
cd ..

echo "✅ Tailwind plugins installed!"
echo "📝 Now you need to manually update frontend/tailwind.config.js"
echo "   Uncomment the plugin lines:"
echo "   plugins: ["
echo "     require('@tailwindcss/typography'),"
echo "     require('@tailwindcss/forms'),"
echo "   ],"
echo ""
echo "🚀 After updating the config, run: npm run dev"