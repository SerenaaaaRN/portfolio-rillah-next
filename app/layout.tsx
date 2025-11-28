"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/components/ui/AOSInit";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
