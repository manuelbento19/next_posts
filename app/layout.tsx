import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { BiNews } from "react-icons/bi";
import Logo from "./_components/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next14 - Server components and actions",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="px-4 py-4 bg-white border-0 border-b border-t-gray-400">
          <Link href="/">
            <Logo/>
          </Link>
        </header>
        <main className="h-full w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
