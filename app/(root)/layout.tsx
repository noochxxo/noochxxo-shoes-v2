
import { Metadata } from "next";
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video calling app",
  icons: {
    icon: '/icons/logo.svg'
  }
};

const HomeLayout = ({ children }: { children: ReactNode } ) => {
  return (
    <main className="relative">
      
      {children}
    </main>
  )
}

export default HomeLayout