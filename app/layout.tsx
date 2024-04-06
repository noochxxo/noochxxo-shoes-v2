import { ClerkProvider } from '@clerk/nextjs'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noochxxo Shoes",
  description: "Shoe store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={`max-w-screen ${inter.className}`}>
        {children}
      </body>
    </html>
    </ClerkProvider>
    
  );
}
