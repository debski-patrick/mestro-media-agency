import { Inter } from 'next/font/google'
import Navbar from '@/layouts/Navbar'
import Header from '@/layouts/Header'
import Service from '@/layouts/Service'
import Work from '@/layouts/Work'
import Contact from '@/layouts/Contact'
import Footer from '@/layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function App() {
  return (
    <main className={`${inter.className} flex justify-center`}>
      <div className='flex flex-col w-full'>
        <Navbar />
        <Header />
        <Service />
        <Work />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
