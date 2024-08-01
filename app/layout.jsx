import './globals.css'
import clsx from 'clsx'
// import { Metadata, Viewport } from "next";

import { Fira_Code as FontMono, Inter as FontSans } from 'next/font/google'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import NavBar from '../components/NavBar'
import MySideBar from '../components/MySideBar'
import { Providers } from './providers'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata = {
  title: {
    default: 'HeyGen Interactive Avatar SDK Demo',
    template: `%s - HeyGen Interactive Avatar SDK Demo`,
  },
  icons: {
    icon: '/heygen-logo.png',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang='en'
      className={`${fontSans.variable} ${fontMono.variable} font-sans`}
    >
      <head />
      <body className={clsx('min-h-screen bg-background antialiased')}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <ToastContainer />
          <main className='relative flex flex-col  w-screen'>
            <NavBar />
            <div className='flex flex-row '>
              <div className='w-[250px]  flex flex-col'>
                <MySideBar />
              </div>

              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  )
}
