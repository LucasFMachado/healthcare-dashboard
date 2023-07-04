import { Lato } from 'next/font/google'

import { Providers } from '@/contexts'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

export const metadata = {
  title: 'Login | Healthcare Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
