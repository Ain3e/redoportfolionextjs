import '../globals.css'
import type { Metadata } from 'next'
import localFont from'next/font/local'
import Footer from '@/components/Footer'
import Script from 'next/script';

const eiko = localFont({
  src: [
    {
      path: './../fonts/eiko/PPEiko-Regular.woff',
      weight: '400',
      style: 'normal'
    },
  ],
  variable: '--font-eiko'
})

const utsans = localFont({
  src: [
    {
      path: './../fonts/untitledsans/UntitledSans-Regular.woff',
      weight: '400',
      style: 'normal'
    },
  ],
  variable: '--font-utsans'
})


export const metadata: Metadata = {
  title: 'Alex Luowan Portfolio',
  description: 'Alex Luowan is the data-informed interaction designer creating compelling digital experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${eiko.variable} ${utsans.variable} text-black`}>{children}
      <Footer></Footer>
      </body>
    </html>
  )
}
