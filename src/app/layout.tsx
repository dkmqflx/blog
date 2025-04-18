import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "dkmqflx's blog",
  description: "잊지 않기 위해 기록합니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.className}>
      <body className="max-w-screen-md mx-auto p-4">
        <Header />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
