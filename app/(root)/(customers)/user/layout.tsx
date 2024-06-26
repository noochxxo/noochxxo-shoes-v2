
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Noochxxo Shoes | User Profile",
  description: "Shoe store",
  icons: {
    icon: ''
  }
};

const UserLayout = ({ children }: { children: ReactNode } ) => {
  return (
    <main className="w-screen h-screen">
      <Navbar />
      {children}
    </main>
  )
}

export default UserLayout