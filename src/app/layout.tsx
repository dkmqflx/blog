import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: "dkmqflx's blog",
  description: '잊지 않기 이해 기록합니다.',
  icons: {
    icon: '/favicon.ico',
  },
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.className}>
      <body className="max-w-screen-sm mx-auto p-4">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
