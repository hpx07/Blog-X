'use client'

import { formatDateConsistent } from '@/lib/utils'

export function FeaturedPosts() {
  // Mock data for now - will be replaced with API calls once backend is running
  const mockPosts = [
    {
      id: '1',
      title: 'Getting Started with Next.js 14',
      slug: 'getting-started-nextjs-14',
      excerpt: 'Learn how to build modern web applications with the latest features in Next.js 14.',
      featuredImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      publishedAt: '2024-01-15T10:00:00Z',
      author: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
      },
      categories: [
        { name: 'Technology', slug: 'technology', color: '#3B82F6' }
      ],
      analytics: {
        views: 1250,
        readTime: 8
      }
    },
    {
      id: '2',
      title: 'Building Scalable APIs with NestJS',
      slug: 'building-scalable-apis-nestjs',
      excerpt: 'Discover best practices for creating robust and scalable backend APIs using NestJS framework.',
      featuredImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
      publishedAt: '2024-01-12T14:30:00Z',
      author: {
        name: 'Jane Smith',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
      },
      categories: [
        { name: 'Programming', slug: 'programming', color: '#10B981' }
      ],
      analytics: {
        views: 890,
        readTime: 12
      }
    }
  ]

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Featured Posts
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {mockPosts.map((post, index) => (
          <div key={post.id} className="card overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            {/* Featured Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-3">
                {post.categories.map((category) => (
                  <span
                    key={category.slug}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: category.color }}
                  >
                    {category.name}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-4">
                  {/* Author */}
                  <div className="flex items-center space-x-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <span>{post.author.name}</span>
                  </div>

                  {/* Date */}
                  <span>{formatDateConsistent(post.publishedAt)}</span>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Read Time */}
                  <span>{post.analytics.readTime} min read</span>
                  {/* Views */}
                  <span>{post.analytics.views} views</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}