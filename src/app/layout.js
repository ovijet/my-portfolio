import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import CustomCursor from "@/component/Curser";
import ScrollToTop from "@/component/ScrollToTop";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/component/ThemeProvider";

export const metadata = {
  title: "Ovijit | Portfolio",
  description: "Ovijit Halder Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white min-h-full flex flex-col transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar/>
          {children}
          <CustomCursor/>
          <ScrollToTop/>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
