import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: "dkmqflx's blog",
  description: '잊지 않기 이해 기록합니다.',
  icons: {
    icon: '/favicon.ico',
  },
};

const openSans = Open_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={openSans.className}>
      <body>{children}</body>
    </html>
  );
}
