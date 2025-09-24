import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog-X',
  description: 'A modern, responsive blogging platform with multiple themes',
  keywords: 'blog, writing, articles, technology, programming',
  authors: [{ name: 'Blog-X' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blog-x.com',
    siteName: 'Blog-X',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@blogx',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}