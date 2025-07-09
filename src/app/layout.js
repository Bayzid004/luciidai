import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layouts/header/Header'
import Footer from '@/components/layouts/footer/Footer'

const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
})

export const metadata = {
  title: 'LuciidAi - AI-Powered Solutions',
  description: 'LuciidAi offers AI-powered solutions to enhance your business operations. Explore our services and transform your workflow with cutting-edge technology.',
  keywords: 'AI, Data Annotation, Service Provier,Sp, artificial intelligence, machine learning, business solutions, automation, data analysis'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
