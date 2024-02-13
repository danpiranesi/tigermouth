"use client";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Header from "./_components/Header";


const inter = Inter({ subsets: ["latin"], variable: "--inter" });

const ppNeueMontrealMonoMedium = localFont({
  src: "./fonts/PPNeueMontrealMono-Medium.otf",
  variable: "--montreal-mono",
  weight: "300",
});

const ppNeueMontrealMonoBold = localFont({
  src: "./fonts/PPNeueMontrealMono-Bold.otf",
  variable: "--montreal-mono-bold",
  weight: "700",

});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

const queryClient = new QueryClient()
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
      <body className={`${inter.className} text-primaryText bg-primaryBg`}>
      <Header/>
        {children}
        </body>
      </QueryClientProvider>
    </html>
  );
}
