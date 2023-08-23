/** @format */

import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'></main>
      <footer className='bg-slate-100 '>
        <Footer />
      </footer>
    </>
  )
}
