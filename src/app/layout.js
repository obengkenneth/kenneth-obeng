import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kenneth Obeng',
  description: 'My personal portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#1D1D1D] text-gray-400'>{children}</body>
    </html>
  )
}
