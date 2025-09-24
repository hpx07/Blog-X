# Setup Instructions

## Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose (for database)
- Git

## Quick Start

1. **Clone and Install Dependencies**
   ```bash
   git clone <repository-url>
   cd blogging-platform
   npm run install:all
   ```

2. **Start Redis (Optional for caching)**
   ```bash
   docker-compose up -d redis
   ```

3. **Setup Backend Environment**
   ```bash
   cd backend
   cp .env.example .env
   # The .env file is already configured with your CockroachDB credentials
   ```

4. **Test Database Connection**
   ```bash
   cd backend
   npm install
   npm run test:db
   ```

5. **Setup Database Schema**
   ```bash
   cd backend
   npx prisma generate
   npx prisma db push
   ```

6. **Setup Frontend Environment**
   ```bash
   cd frontend
   cp .env.example .env.local
   # Edit .env.local if needed
   ```

7. **Start Development Servers**
   ```bash
   # From root directory
   npm run dev
   ```

   Or start individually:
   ```bash
   # Backend (Terminal 1)
   cd backend && npm run start:dev

   # Frontend (Terminal 2)
   cd frontend && npm run dev
   ```

## Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001/api
- **Database**: CockroachDB Cloud (configured)
- **Redis**: localhost:6379

## Default Admin User

After setting up, create an admin user by registering through the frontend, then manually update the user role in the database:

```sql
UPDATE users SET role = 'ADMIN' WHERE email = 'your-email@example.com';
```

## Features Included

### Frontend (Next.js)
- ✅ Responsive design with Tailwind CSS
- ✅ Dark/Light theme toggle
- ✅ SEO optimization
- ✅ Authentication system
- ✅ Blog feed with pagination
- ✅ Search functionality (UI ready)
- ✅ Category and tag filtering
- ✅ Newsletter subscription
- ✅ User profiles and roles

### Backend (NestJS)
- ✅ RESTful API with TypeScript
- ✅ PostgreSQL database with Prisma ORM
- ✅ JWT authentication
- ✅ Role-based access control
- ✅ File upload handling
- ✅ Rate limiting and caching
- ✅ Email integration ready
- ✅ Analytics tracking

### Database Schema
- ✅ Users (Admin, Author, Reader roles)
- ✅ Posts with drafts and scheduling
- ✅ Categories and tags
- ✅ Comments system
- ✅ Media management
- ✅ Newsletter subscriptions
- ✅ Post analytics

## Next Steps

1. **Customize Themes**: Edit `tailwind.config.js` and CSS variables
2. **Add Content**: Create categories, tags, and sample posts
3. **Configure Email**: Set up SMTP for newsletters and notifications
4. **Deploy**: Use Vercel for frontend, Railway/Heroku for backend
5. **Add Features**: Implement search, social sharing, etc.

## Development Commands

```bash
# Install all dependencies
npm run install:all

# Start development servers
npm run dev

# Build for production
npm run build

# Database operations
npm run db:setup
npm run db:seed

# Individual services
npm run dev:frontend
npm run dev:backend
```

## Troubleshooting

1. **Database Connection Issues**: Ensure Docker containers are running
2. **Port Conflicts**: Check if ports 3000, 3001, 5432, 6379 are available
3. **Environment Variables**: Verify all required env vars are set
4. **Dependencies**: Run `npm run install:all` if packages are missing

## Production Deployment

1. **Environment Setup**: Configure production environment variables
2. **Database**: Use managed PostgreSQL (AWS RDS, Supabase, etc.)
3. **Redis**: Use managed Redis (AWS ElastiCache, Redis Cloud, etc.)
4. **Frontend**: Deploy to Vercel, Netlify, or similar
5. **Backend**: Deploy to Railway, Heroku, AWS, or similar
6. **CDN**: Configure for static assets and images