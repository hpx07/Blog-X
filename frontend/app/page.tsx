import { Hero } from '@/components/home/Hero'
import { FeaturedPosts } from '@/components/home/FeaturedPosts'
import { BlogFeed } from '@/components/home/BlogFeed'
import { Categories } from '@/components/home/Categories'
import { Newsletter } from '@/components/home/Newsletter'

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <div className="container mx-auto px-4 space-y-16">
        <FeaturedPosts />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BlogFeed />
          </div>
          <div className="space-y-8">
            <Categories />
            <Newsletter />
          </div>
        </div>
      </div>
    </div>
  )
}