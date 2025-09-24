'use client'

export function Categories() {
  // Mock categories data
  const mockCategories = [
    { id: '1', name: 'Technology', slug: 'technology', color: '#3B82F6', postCount: 24 },
    { id: '2', name: 'Programming', slug: 'programming', color: '#10B981', postCount: 18 },
    { id: '3', name: 'Design', slug: 'design', color: '#F59E0B', postCount: 12 },
    { id: '4', name: 'Business', slug: 'business', color: '#EF4444', postCount: 8 },
    { id: '5', name: 'Tutorial', slug: 'tutorial', color: '#8B5CF6', postCount: 15 },
    { id: '6', name: 'News', slug: 'news', color: '#06B6D4', postCount: 6 }
  ]

  return (
    <div className="card p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Categories
      </h3>
      
      <div className="space-y-3">
        {mockCategories.map((category) => (
          <div
            key={category.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: category.color }}
              />
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                {category.name}
              </span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {category.postCount}
            </span>
          </div>
        ))}
        
        <div className="text-center pt-2">
          <span className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium cursor-pointer">
            View All Categories
          </span>
        </div>
      </div>
    </div>
  )
}