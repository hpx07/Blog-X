# Blog-X - Quick Command Reference

## 🚀 Getting Started (Choose One)

### **Fastest Setup (Recommended)**
```powershell
.\setup.ps1
cd frontend
npm run dev
```

### **Alternative (Command Prompt)**
```cmd
.\simple-setup.bat
cd frontend
npm run dev
```

### **Manual Setup**
```bash
cd frontend
npm install
npm install @tailwindcss/typography @tailwindcss/forms
npm run dev
```

## 🔧 If You Get Permission Errors

### **Enable PowerShell Scripts**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### **Or Use Command Prompt Instead**
```cmd
.\just-get-it-working.bat
```

## 🌐 Access Your Blog

After setup, visit: **http://localhost:3000**

## 📋 What You'll See

✅ **Beautiful blog homepage** with sample posts  
✅ **Responsive design** that works on mobile  
✅ **Dark/light mode toggle**  
✅ **Professional layout** with hero section  
✅ **Featured posts** with images  
✅ **Categories sidebar**  
✅ **Newsletter signup form**  

## 🔍 Troubleshooting

### **Port Already in Use**
If port 3000 is busy, Next.js will automatically use 3001

### **Dependencies Failed to Install**
Try running as administrator or check your npm installation

### **Script Not Found**
Make sure you're in the project root directory and use `.\` prefix for PowerShell

## 💡 Notes

- **Backend is optional** - everything works with mock data
- **No database required** for initial setup
- **All features work** without API calls
- **Perfect for development** and testing the UI