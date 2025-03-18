import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { PATH } from "@/constants/routePath";
import Image from "next/image";
import Provider from "./provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const metadata: Metadata = {
  title: "LOL",
  description: "League Of Legends Dex Site",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen relative`}
      >
        <header className="w-screen h-16 bg-neutral-900 flex justify-between items-center fixed z-50 pr-5 pl-5">
          <Link href={PATH.HOME}>
            <Image
              src={"/favicon.png"}
              alt="header-logo"
              width={50}
              height={50}
            />
          </Link>
          <nav className="w-auto lg:w-1/4 flex gap-3 justify-center">
            <Link href={PATH.HOME} className={naviHover}>
              HOME
            </Link>
            <Link href={PATH.CHAMPIONS} className={naviHover}>
              CHAMPIONS
            </Link>
            <Link href={PATH.ITEMS} className={naviHover}>
              ITEMS
            </Link>
            <Link href={PATH.ROTATION} className={naviHover}>
              ROTATION
            </Link>
          </nav>
        </header>
        <main className="w-full absolute top-16">
          <Provider>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </Provider>
        </main>
      </body>
    </html>
  );
}

//style
const naviHover =
  "font-bold text-base duration-300 ease-linear cursor-pointer hover:text-yellow-500";
