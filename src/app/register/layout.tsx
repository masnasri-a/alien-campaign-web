import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import "@/app/register/style.css"
const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Login Page | Alien Campaign',
  description: 'Login Page | Alien Campaign',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
