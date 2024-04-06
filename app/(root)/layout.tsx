
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Noochxxo Shoes",
  description: "Shoe store",
  icons: {
    icon: ''
  }
};

const HomeLayout = ({ children }: { children: ReactNode } ) => {
  return (
    <main className="w-screen h-full flex flex-col">
      <Navbar />
      <Hero />
      {children}
      <Footer />
    </main>
  )
}

export default HomeLayout