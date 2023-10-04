import React from "react";
import type { Metadata } from 'next';
import {Nunito} from "next/font/google";

import './globals.css';
import Navbar from "@/app/components/navbar/Navbar";

export const metadata: Metadata = {
  title: 'Study with me',
  description: 'Study with me test project',
}

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
