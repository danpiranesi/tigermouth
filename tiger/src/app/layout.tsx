"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Header from "./_components/Header";


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Tiger Mouth",
//   description: "Created by Dan Schmidt",
// };

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
