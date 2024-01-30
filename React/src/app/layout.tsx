import './css/global.css'
import Navbar from "./components/navbar";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MovieLogger',
  description: '...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
