'use client'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/contexts/AuthContext'
import {
  UserIcon,
  PencilIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'

interface UserMenuProps {
  user: {
    id: string
    name: string
    email: string
    role: string
    avatar?: string
  } | null
}

export function UserMenu({ user }: UserMenuProps) {
  const { logout } = useAuth()

  if (!user) return null

  const menuItems = [
    {
      name: 'Profile',
      href: `/users/${user.id}`,
      icon: UserIcon,
    },
    {
      name: 'Write Post',
      href: '/dashboard/posts/new',
      icon: PencilIcon,
      show: user.role === 'AUTHOR' || user.role === 'ADMIN',
    },
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: Cog6ToothIcon,
      show: user.role === 'AUTHOR' || user.role === 'ADMIN',
    },
  ].filter(item => item.show !== false)

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        {user.avatar ? (
          <Image
            src={user.avatar}
            alt={user.name}
            width={32}
            height={32}
            className="rounded-full"
          />
        ) : (
          <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm">
              {user.name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">
          {user.name}
        </span>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-2">
            <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-700 mb-2">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {user.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {user.email}
              </p>
            </div>

            {menuItems.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <Link
                    href={item.href}
                    className={`${
                      active ? 'bg-gray-100 dark:bg-gray-700' : ''
                    } group flex items-center w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md transition-colors`}
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </Link>
                )}
              </Menu.Item>
            ))}

            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={logout}
                  className={`${
                    active ? 'bg-gray-100 dark:bg-gray-700' : ''
                  } group flex items-center w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md transition-colors`}
                >
                  <ArrowRightOnRectangleIcon className="w-4 h-4 mr-3" />
                  Sign Out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}