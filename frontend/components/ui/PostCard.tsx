'use client'

import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { ClockIcon, EyeIcon } from '@heroicons/react/24/outline'

interface PostCardProps {
  post: {
    id: string
    title: string
    slug: string
    excerpt?: string
    featuredImage?: string
    publishedAt: string
    author: {
      name: string
      avatar?: string
    }
    categories: Array<{
      name: string
      slug: string
      color?: string
    }>
    analytics: {
      views: number
      readTime: number
    }
  }
  variant?: 'default' | 'featured' | 'compact'
}

export function PostCard({ post, variant = 'default' }: PostCardProps) {
  const isCompact = variant === 'compact'
  const isFeatured = variant === 'featured'

  return (
    <article className={`card overflow-hidden group hover:shadow-lg transition-shadow duration-300 ${
      isFeatured ? 'lg:flex lg:items-center' : ''
    }`}>
      {/* Featured Image */}
      {post.featuredImage && (
        <div className={`relative overflow-hidden ${
          isFeatured 
            ? 'lg:w-1/2 h-64 lg:h-80' 
            : isCompact 
              ? 'h-48' 
              : 'h-56'
        }`}>
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className={`p-6 ${isFeatured ? 'lg:w-1/2' : ''}`}>
        {/* Categories */}
        {post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.slice(0, 2).map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
                style={{
                  backgroundColor: category.color ? `${category.color}20` : undefined,
                  color: category.color || undefined,
                }}
              >
                {category.name}
              </Link>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className={`font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors ${
          isFeatured ? 'text-2xl' : isCompact ? 'text-lg' : 'text-xl'
        }`}>
          <Link href={`/posts/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        {post.excerpt && !isCompact && (
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        )}

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-4">
            {/* Author */}
            <div className="flex items-center space-x-2">
              {post.author.avatar ? (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              ) : (
                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">
                    {post.author.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <span>{post.author.name}</span>
            </div>

            {/* Date */}
            <span>{formatDate(new Date(post.publishedAt))}</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Read Time */}
            <div className="flex items-center space-x-1">
              <ClockIcon className="w-4 h-4" />
              <span>{post.analytics.readTime} min read</span>
            </div>

            {/* Views */}
            <div className="flex items-center space-x-1">
              <EyeIcon className="w-4 h-4" />
              <span>{post.analytics.views}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}