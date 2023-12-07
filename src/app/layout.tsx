import { Inter_Tight } from 'next/font/google';
import './globals.css';
import { Header } from '@/app/header';
import type { Metadata } from 'next';

const inter = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} bg-green-50 px-5`}>
        <Header />
        <div className='m-auto w-3/4 max-w-full py-3'> {children}</div>
      </body>
    </html>
  );
}
