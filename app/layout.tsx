import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Autopilot Test',
  description: 'A test project for the project-autopilot skill',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
