import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { PATH } from "@/constants/routePath";

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
  title: "Create Next App",
  description: "Generated by create next app"
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
        <header className="w-full h-16 bg-neutral-900 flex justify-around items-center fixed z-50">
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
        </header>
        <main className="w-full absolute top-16">{children}</main>
      </body>
    </html>
  );
}

//style
const naviHover =
  "font-bold text-lg duration-300 ease-linear cursor-pointer hover:text-yellow-500";
