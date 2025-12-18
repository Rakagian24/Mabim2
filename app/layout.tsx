import type { Metadata } from "next";
import { Outfit, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Optimize Your Campus Life",
  description: "Menyadari, Memilih, dan Membangun Dirimu Selama Kuliah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${outfit.variable} ${manrope.variable}`}>
      <body className={`${manrope.className} antialiased bg-slate-900 text-white overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
