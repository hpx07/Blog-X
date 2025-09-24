#!/bin/bash

echo "📦 Installing all dependencies for Blog-X..."

# Install root dependencies
echo "🔧 Installing root dependencies..."
npm install

# Install backend dependencies
echo "🔧 Installing backend dependencies..."
cd backend
npm install
cd ..

# Install frontend dependencies
echo "🔧 Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo "✅ All dependencies installed successfully!"
echo ""
echo "Next steps:"
echo "1. Run: npm run dev (to start both frontend and backend)"
echo "2. Or run them separately:"
echo "   - Backend: cd backend && npm run start:dev"
echo "   - Frontend: cd frontend && npm run dev"