import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Social Value Portal',
  description: 'Measure, report and maximise your social value. Helping UK organisations win public sector contracts and demonstrate real community impact.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* Header Navigation */}
        <header className="bg-white shadow-md ring-1 ring-gray-100 sticky top-0 z-50 transition-all">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <img
                  src="/logo.svg"
                  alt="Social Value Portal"
                  className="h-8 md:h-12 w-auto"
                />
              </Link>

              {/* Navigation placeholder for future expansion */}
              <nav className="hidden md:flex items-center space-x-8">
                {/* Navigation items can be added here */}
              </nav>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  )
}
