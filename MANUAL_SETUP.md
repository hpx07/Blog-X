# Blog-X Manual Setup Guide

If the automated scripts don't work, follow these manual steps:

## Step 1: Install Root Dependencies

```bash
npm install concurrently
```

## Step 2: Setup Frontend

```bash
cd frontend
npm install
```

## Step 3: Install Tailwind Plugins

```bash
npm install @tailwindcss/typography @tailwindcss/forms
```

## Step 4: Create Environment File

Create `frontend/.env.local` with:
```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Step 5: Clean Cache (Optional)

```bash
# Delete .next folder if it exists
rm -rf .next
```

## Step 6: Start Development Server

```bash
npm run dev
```

## Step 7: Open Your Browser

Visit: http://localhost:3000

## Expected Result

You should see:
- ✅ Beautiful blog homepage
- ✅ Sample blog posts with images
- ✅ Responsive design
- ✅ Dark/light mode toggle
- ✅ Professional layout

## If Something Goes Wrong

1. **Check Node.js version**: `node --version` (should be 18+)
2. **Check npm version**: `npm --version`
3. **Clear npm cache**: `npm cache clean --force`
4. **Delete node_modules**: `rm -rf node_modules` then `npm install`
5. **Check for port conflicts**: Make sure port 3000 is available

## Troubleshooting Common Issues

### "Module not found" errors
```bash
cd frontend
npm install
```

### "Port 3000 is already in use"
- Next.js will automatically use port 3001
- Or kill the process using port 3000

### Permission errors (Windows)
- Run Command Prompt as Administrator
- Or use PowerShell with execution policy enabled

### Network/proxy issues
```bash
npm config set registry https://registry.npmjs.org/
npm install
```