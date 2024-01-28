import './globals.css'
import { UserProvider } from '../context/Context'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
         <head>
        <link rel="icon" href="/logo.png" />
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/favicon.png' />
        <meta name="theme-color" content="#7fffd4" />
        <meta name="msapplication-navbutton-color" content="#7fffd4" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#7fffd4" />
        <meta name="description" content="TRAUMATOLOGO ORTOPEDISTA." />
        <meta name="keywords" content="TRAUMATOLOGO ORTOPEDISTA." />
        <meta name="author" content="DR. ABRAHAM LIMA" />
        <title>DR. ABRAHAM LIMA</title>
      </head>
      <body className={`${inter.className} bg-white`}>
      <UserProvider>
        <Navbar></Navbar> 
        {children}
        </UserProvider>

        </body>
    </html>
  )
}
