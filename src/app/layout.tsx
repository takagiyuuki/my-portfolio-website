import { ThemeProvider } from '@/components/Elements/theme-provider';
import { Footer } from '@/components/Layouts/Footer';
import { Header } from '@/components/Layouts/Header';

import { RootMetadata } from '@/data/Metadata';
import { dmMono, robotoSlab } from '@/fonts';
import type { RootLayoutProps } from '@/lib/type';
import '@/styles/globals.css';

export const metadata = RootMetadata;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang='en'
      className={`${dmMono.variable} ${robotoSlab.variable}`}
      suppressHydrationWarning
    >
      <head />
      <body className='px-6'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className='m-auto w-9/12 max-w-max'> {children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
