/** @format */
import Footer from "@/components/footer"
import StickyHeader from "@/components/header"

export default function Home() {
  return (
    <>
      <header>
        <StickyHeader />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
      <footer className="bg-slate-100 ">
        <Footer />
      </footer>
    </>
  )
}
