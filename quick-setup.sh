#!/bin/bash

echo "🚀 Setting up Blogging Platform with CockroachDB..."

# Install dependencies
echo "📦 Installing dependencies..."
npm run install:all

# Start Redis (optional)
echo "🔴 Starting Redis..."
docker-compose up -d redis

# Test database connection
echo "🗄️  Testing CockroachDB connection..."
cd backend
npm run test:db

if [ $? -eq 0 ]; then
    echo "✅ Database connection successful!"
    
    # Generate Prisma client
    echo "🔧 Generating Prisma client..."
    npx prisma generate
    
    # Push database schema
    echo "📊 Setting up database schema..."
    npx prisma db push
    
    echo "✅ Database setup complete!"
    
    # Go back to root
    cd ..
    
    # Setup frontend environment
    echo "🎨 Setting up frontend environment..."
    cd frontend
    cp .env.example .env.local
    cd ..
    
    echo "🎉 Setup complete! You can now run:"
    echo "   npm run dev"
    echo ""
    echo "Access your application at:"
    echo "   Frontend: http://localhost:3000"
    echo "   Backend API: http://localhost:3001/api"
    
else
    echo "❌ Database connection failed. Please check your credentials."
    exit 1
fi