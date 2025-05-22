import '../styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Mini Blog',
  description: 'Blog com Next.js e TypeScript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
