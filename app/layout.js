import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin']})

export const metadata = {
  title: 'SaaSMe',
  description: 'SaaS Me is the best place that helps you learn what SaaS trends are taking off so that you can build ahead of the curve!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}
