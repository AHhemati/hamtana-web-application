/** @format */
import Footer from "@/components/footer"
import Navbar from "@/components/header"

export default function Home() {
  return (
    <>
      <header className="">
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
      <footer className="bg-slate-100 ">
        <Footer />
      </footer>
    </>
  )
}
