import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes'
import ProblemCard from './components/ProblemCard';
import Providers from './components/Providers';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Math Post',
  description: 'Create and solve problems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Theme>
          <NavBar/>

          <main className="justify-center p-6 ml-4">
            {children}
          </main>
        </Theme>
        </Providers>
      </body>
    </html>
  )
}
