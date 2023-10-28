import './globals.css'
import type { Metadata } from 'next'
import favicon from '../public/round-icon.png'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Dailify',
  icons: [{ rel: 'icon', url: favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}
      </body>
    </html>
  )
}
