# Blog-X Backend Setup

The frontend is now running with mock data. To connect to the real backend:

## 1. Install Backend Dependencies

```bash
cd backend
npm install
```

## 2. Test Database Connection

```bash
npm run test:db
```

## 3. Setup Database Schema

```bash
npx prisma generate
npx prisma db push
```

## 4. Start Backend Server

```bash
npm run start:dev
```

The backend should start on http://localhost:3001

## 5. Update Frontend to Use Real API

Once the backend is running, you can replace the mock data in:
- `frontend/components/home/FeaturedPosts.tsx`
- `frontend/components/home/BlogFeed.tsx` 
- `frontend/components/home/Categories.tsx`

Just uncomment the useQuery hooks and remove the mock data.

## Current Status

✅ Frontend running with mock data (no API calls)
✅ Database configured (CockroachDB)
⏳ Backend needs to be started
⏳ API endpoints need to be implemented

## Next Steps

1. Start the backend server
2. Implement the missing API endpoints (posts, categories, auth)
3. Replace mock data with real API calls
4. Add authentication and user management