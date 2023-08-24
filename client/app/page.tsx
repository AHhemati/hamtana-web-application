/** @format */
import Footer from '@/components/footer'
import StickyHeader from '@/components/header'
import Main from '@/components/main'

export default function Home() {
  return (
    <>
      <span className='fixed blur-[200px] w-[600px] h-[600px] rounded-full top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 bg-gradient-to-tl from-red-600/20 to-violet-600/20 dark:from-red-600/40 dark:to-violet-600/40'></span>
      <header>
        <StickyHeader />
      </header>
      <main className='flex min-h-screen flex-col items-center justify-between '>
        <Main />
      </main>
      <footer className='bg-slate-100 '>
        <Footer />
      </footer>
    </>
  )
}
