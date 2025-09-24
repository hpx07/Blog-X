# Blog-X

A modern, professional blogging platform built with Next.js, NestJS, TypeScript, and PostgreSQL.
NOTE-THIS PROJECT IS UNDER DEVELOPMENT

## Features

### Frontend

- Responsive UI (mobile-first design)
- Multiple theme options with light/dark mode
- Rich text rendering (Markdown support)
- SEO optimized (meta tags, OpenGraph, schema.org)
- Image optimization with lazy loading
- Blog feed with categories and trending posts
- Author profiles and search functionality

### Backend

- Role-based user management (Admin, Author, Reader)
- Content management with drafts and scheduling
- Media management for images and videos
- Comment system and analytics
- Newsletter subscription integration
- RESTful API for mobile app integration

### Database

- PostgreSQL with optimized schema
- Caching with Redis
- Performance monitoring

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: NestJS, TypeScript, Prisma ORM
- **Database**: PostgreSQL
- **Caching**: Redis
- **Authentication**: JWT with role-based access control

## Project Structure

```
blog-x/
├── frontend/          # Next.js application
├── backend/           # NestJS API
├── shared/            # Shared types and utilities
└── docker-compose.yml # Development environment
```

## 🚀 Quick Start (Recommended)

### **Option 1: One-Command Setup (PowerShell)**

```powershell
.\quick-start.ps1
```

### **Option 2: Manual Setup**

```powershell
# PowerShell
.\just-get-it-working.ps1

# Or Command Prompt
.\just-get-it-working.bat
```

### **Option 3: Step by Step**

```bash
cd frontend
npm install
npm install @tailwindcss/typography @tailwindcss/forms
npm run dev
```

**Visit:** http://localhost:3000

## ✅ Current Status

- **Frontend**: ✅ Fully working with beautiful mock data
- **Backend**: ⏳ Optional (database configured, ready to start)
- **Database**: ✅ CockroachDB configured and ready

## 🔧 Manual Setup

1. **Install all dependencies**: `npm run install:all`
2. **Fix Tailwind plugins**: `cd frontend && npm install @tailwindcss/typography @tailwindcss/forms`
3. **Start frontend**: `cd frontend && npm run dev`
4. **Optional - Start backend**: `cd backend && npm run start:dev`

## 🌐 Access Points

- **Frontend**: http://localhost:3000 (or 3001 if 3000 is busy)
- **Backend API**: http://localhost:3001/api (when running)
- **Database**: CockroachDB Cloud (under configuration)

## 🙋 Developer

**GitHub:** [@hpx07](https://github.com/hpx07)

---
