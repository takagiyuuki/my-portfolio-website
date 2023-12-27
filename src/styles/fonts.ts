// Font Optimization (https://nextjs.org/docs/app/building-your-application/optimizing/fonts#with-tailwind-css)
// Font Module (https://nextjs.org/docs/app/api-reference/components/font)

import { DM_Mono, Roboto_Slab } from 'next/font/google';
import localFont from 'next/font/local';

const inter = localFont({
  src: [
    { path: '../../public/fonts/InterVariable.ttf', style: 'normal' },
    { path: '../../public/fonts/InterVariable-Italic.ttf', style: 'italic' },
  ],
  declarations: [
    {
      prop: 'font-feature-settings',
      value:
        '"ss01 1", "ss08 1", "tnum 1", "calt 1", "dlig 1", "cv01 1", "cv08 1", "cv05 1"',
    },
  ],
  display: 'swap',
  variable: '--font-inter',
});

const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-mono',
});

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-slab',
});

export { inter, dmMono, robotoSlab };
