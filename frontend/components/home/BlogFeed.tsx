'use client'

import { formatDateConsistent } from '@/lib/utils'

export function BlogFeed() {
  // Mock data for demonstration
  const mockPosts = [
    {
      id: '3',
      title: 'Understanding React Server Components',
      slug: 'understanding-react-server-components',
      excerpt: 'A deep dive into React Server Components and how they revolutionize web development.',
      featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop',
      publishedAt: '2024-01-10T09:15:00Z',
      author: {
        name: 'Alex Johnson',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
      },
      categories: [
        { name: 'React', slug: 'react', color: '#61DAFB' }
      ],
      analytics: {
        views: 2100,
        readTime: 15
      }
    },
    {
      id: '4',
      title: 'Database Design Best Practices',
      slug: 'database-design-best-practices',
      excerpt: 'Learn essential principles for designing efficient and scalable database schemas.',
      featuredImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=300&fit=crop',
      publishedAt: '2024-01-08T16:45:00Z',
      author: {
        name: 'Sarah Wilson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
      },
      categories: [
        { name: 'Database', slug: 'database', color: '#F59E0B' }
      ],
      analytics: {
        views: 1680,
        readTime: 10
      }
    },
    {
      id: '5',
      title: 'Modern CSS Techniques for 2024',
      slug: 'modern-css-techniques-2024',
      excerpt: 'Explore the latest CSS features and techniques that will improve your web development workflow.',
      featuredImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=300&fit=crop',
      publishedAt: '2024-01-05T11:20:00Z',
      author: {
        name: 'Mike Chen',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
      },
      categories: [
        { name: 'CSS', slug: 'css', color: '#1572B6' }
      ],
      analytics: {
        views: 945,
        readTime: 7
      }
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Latest Posts
        </h2>
        
        {/* Category Filter */}
        <select className="input w-auto">
          <option value="">All Categories</option>
          <option value="technology">Technology</option>
          <option value="programming">Programming</option>
          <option value="design">Design</option>
          <option value="business">Business</option>
        </select>
      </div>

      <div className="grid gap-6">
        {mockPosts.map((post) => (
          <article key={post.id} className="card overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            {/* Featured Image */}
            <div className="relative h-48 overflow-hidden">
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
          </article>
        ))}
      </div>
    </div>
  )
}