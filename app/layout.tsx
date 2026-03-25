import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
