import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import CustomCursor from "@/component/Curser";
import AIChatbot from "@/component/AIChatbot";
import { ThemeProvider } from "@/component/ThemeProvider";
import Preloader from "@/component/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ovijit Halder | Full Stack Software Developer",
  description:
    "Portfolio of Ovijit Halder - Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB.",
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
          <Navbar />
          <Preloader />
          {children}
          <AIChatbot />
          <CustomCursor />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
