import React from "react";
import type {Metadata} from 'next';
import {Nunito} from "next/font/google";

import './globals.css';
import Header from "@/app/components/Header";

export const metadata: Metadata = {
    title: 'Study with me',
    description: 'Study with me test project',
    keywords: 'Web development, web design, js, react, node, angular'
};

const font = Nunito({
    subsets: ["latin"],
});

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={font.className}>
            <Header />
            {children}
        </body>
        </html>
    )
}