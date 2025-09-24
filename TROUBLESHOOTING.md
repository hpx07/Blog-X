# Blog-X Troubleshooting Guide

## 🔧 Common Issues and Solutions

### 1. Hydration Errors (FIXED)

**Problem**: `Text content did not match. Server: "15/1/2024" Client: "1/15/2024"`

**Solution**: ✅ Fixed by using consistent date formatting with `formatDateConsistent()` utility function.

### 2. Tailwind CSS Module Not Found

**Problem**: `Cannot find module '@tailwindcss/typography'`

**Solution**:
```bash
cd frontend
npm install @tailwindcss/typography @tailwindcss/forms
```

### 3. Port Conflicts

**Problem**: Frontend tries to use port 3000 but it's occupied

**Solution**: 
- Next.js automatically tries port 3001
- Or kill the process using port 3000:
```bash
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

### 4. CORS Errors (When Backend is Running)

**Problem**: `Access-Control-Allow-Origin header is present`

**Solution**: Backend CORS is configured in `backend/src/main.ts` - ensure backend is running on port 3001.

### 5. Database Connection Issues

**Problem**: CockroachDB connection fails

**Solution**:
1. Check your `.env` file has correct credentials
2. Test connection: `cd backend && npm run test:db`
3. Verify network connectivity to CockroachDB cloud

### 6. Next.js Build Errors

**Problem**: Various Next.js configuration errors

**Solutions**:
- Clear cache: `rm -rf .next` (or `rmdir /s /q .next` on Windows)
- Remove deprecated configs (already fixed)
- Update dependencies: `npm update`

## 🚀 Quick Fix Commands

### Complete Reset and Setup:
```bash
# Run the complete fix script
debug-and-fix.bat
```

### Frontend Only:
```bash
cd frontend
npm install @tailwindcss/typography @tailwindcss/forms
rm -rf .next
npm run dev
```

### Backend Only:
```bash
cd backend
npm install
npm run test:db
npx prisma generate
npm run start:dev
```

## 📋 Current Status After Fixes

### ✅ Working Features:
- Frontend with beautiful mock data
- Responsive design with dark/light mode
- Hero section with animations
- Featured posts with images
- Blog feed with categories
- Newsletter signup form
- Proper date formatting (no hydration errors)
- Tailwind CSS with typography and forms plugins

### ⏳ Pending (Optional):
- Backend API endpoints
- Real database integration
- User authentication
- Comment system
- File uploads

## 🔍 Debugging Steps

### 1. Check if Frontend Works:
```bash
cd frontend
npm run dev
```
Visit: http://localhost:3000

### 2. Check if Backend Works:
```bash
cd backend
npm run start:dev
```
Visit: http://localhost:3001/api

### 3. Test Database:
```bash
cd backend
npm run test:db
```

### 4. Check Logs:
- Frontend: Check browser console
- Backend: Check terminal output
- Database: Check connection test results

## 🆘 If Nothing Works:

### **Option 1: Frontend Only (Recommended)**
```bash
just-get-it-working.bat
cd frontend
npm run dev
```

### **Option 2: Complete Clean Install**
```bash
# Delete all node_modules
rm -rf frontend/node_modules backend/node_modules node_modules
rm -rf frontend/.next

# Frontend only setup
setup-frontend-only.bat
```

### **Option 3: Manual Frontend Setup**
```bash
cd frontend
npm install next react react-dom
npm install @tailwindcss/typography @tailwindcss/forms
npm run dev
```

2. **Check System Requirements**:
- Node.js 18+ installed
- npm or yarn available
- Internet connection for dependencies
- Ports 3000 and 3001 available

3. **Manual Step-by-Step**:
- Follow `INSTALL_STEPS.md` manually
- Check each step for errors
- Report specific error messages

## 📞 Getting Help

If you're still having issues:

1. **Check the error message** in browser console or terminal
2. **Look for similar issues** in the troubleshooting guide above
3. **Try the complete reset** procedure
4. **Check system requirements** and dependencies

## 🎯 Expected Results

After running the fix script, you should see:

- ✅ Frontend running on http://localhost:3000
- ✅ Beautiful blog interface with sample posts
- ✅ No hydration errors in console
- ✅ Responsive design working
- ✅ Dark/light mode toggle working
- ✅ All components rendering properly

The platform is designed to work perfectly with mock data, so you can see the full interface and functionality without needing the backend running.