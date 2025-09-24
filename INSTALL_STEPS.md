# Blog-X Installation Steps

## Step 1: Install Frontend Dependencies

Open a terminal in the `frontend` directory and run:

```bash
cd frontend
npm install @tailwindcss/typography @tailwindcss/forms
```

## Step 2: Re-enable Tailwind Plugins

After installing the dependencies, update `frontend/tailwind.config.js`:

```javascript
plugins: [
  require('@tailwindcss/typography'),
  require('@tailwindcss/forms'),
],
```

## Step 3: Update CSS (Optional)

In `frontend/app/globals.css`, you can update the prose-custom class:

```css
.prose-custom {
  @apply prose prose-gray dark:prose-invert max-w-none;
}
```

## Step 4: Install All Other Dependencies

From the root directory:

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..

# Install remaining frontend dependencies (if any)
cd frontend
npm install
cd ..
```

## Step 5: Start Development Servers

```bash
npm run dev
```

## Alternative: Manual Installation Commands

If the above doesn't work, try these individual commands:

```bash
# 1. Root dependencies
npm install concurrently

# 2. Backend dependencies
cd backend
npm install @nestjs/common @nestjs/core @nestjs/platform-express @nestjs/jwt @nestjs/passport @nestjs/throttler @nestjs/cache-manager @nestjs/config @prisma/client prisma pg passport passport-jwt passport-local bcryptjs class-validator class-transformer cache-manager cache-manager-redis-store multer sharp nodemailer dotenv reflect-metadata rxjs

# 3. Frontend dependencies
cd ../frontend
npm install next react react-dom @next/font @headlessui/react @heroicons/react clsx tailwindcss @tailwindcss/typography @tailwindcss/forms autoprefixer postcss framer-motion react-markdown remark-gfm rehype-highlight react-syntax-highlighter date-fns react-hook-form react-query axios js-cookie react-hot-toast react-intersection-observer next-themes sharp

# 4. Dev dependencies for backend
cd ../backend
npm install -D @nestjs/cli @nestjs/schematics @nestjs/testing @types/express @types/jest @types/node @types/supertest @types/bcryptjs @types/multer @types/nodemailer @types/pg typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier jest prettier source-map-support supertest ts-jest ts-loader ts-node tsconfig-paths typescript

# 5. Dev dependencies for frontend
cd ../frontend
npm install -D typescript @types/node @types/react @types/react-dom @types/js-cookie @types/react-syntax-highlighter eslint eslint-config-next
```

## Troubleshooting

If you still get module not found errors:

1. Delete `node_modules` and `package-lock.json` in both frontend and backend
2. Run `npm install` in each directory
3. Make sure you're in the correct directory when running commands

## Quick Commands Summary

```bash
# Essential commands to get started
cd frontend
npm install @tailwindcss/typography @tailwindcss/forms
cd ..
npm run install:all
npm run dev
```