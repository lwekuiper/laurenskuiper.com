import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s - Laurens Kuiper',
    default: 'Laurens Kuiper - Web developer and entrepreneur',
  },
  description: "I'm Laurens, a web developer and entrepreneur based in Haarlem, The Netherlands. I specialize in Laravel and Statamic CMS, and am skilled in NextJS, React, and Vue.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">

        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>

        <div className="relative flex w-full flex-col">
          <main className="flex-auto">{children}</main>
          <Footer />
        </div>

      </body>
    </html>
  );
}
