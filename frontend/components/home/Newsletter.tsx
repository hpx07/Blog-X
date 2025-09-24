'use client'

import { useState } from 'react'
import { newsletterAPI } from '@/lib/api'
import { validateEmail } from '@/lib/utils'
import toast from 'react-hot-toast'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    
    try {
      await newsletterAPI.subscribe(email)
      toast.success('Successfully subscribed to newsletter!')
      setEmail('')
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to subscribe')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="card p-6">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto">
          <EnvelopeIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Stay Updated
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Get the latest posts and updates delivered directly to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input w-full"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          No spam, unsubscribe at any time.
        </p>
      </div>
    </div>
  )
}