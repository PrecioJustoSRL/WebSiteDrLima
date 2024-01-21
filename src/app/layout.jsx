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
        <link rel='apple-touch-icon' href='/logo.png' />
        <meta name="theme-color" content="#000032" />
        <meta name="msapplication-navbutton-color" content="#000032" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000032" />
        <meta name="description" content="Especialistas en servicios odontologicos." />
        <meta name="keywords" content="ESTIGMA DENTAL" />
        <meta name="author" content="ESTIGMA DENTAL" />
        <title>ESTIGMA DENTAL</title>
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
