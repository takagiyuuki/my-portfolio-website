/* eslint-disable tailwindcss/no-custom-classname */
import type { Metadata } from 'next';
// import '@/styles/globals.css';

const metadataTitle: string = 'Info';

export const metadata: Metadata = {
  title: metadataTitle,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css'
        integrity='sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB'
        crossOrigin='anonymous'
      />
      <link
        href='https://cdnjs.cloudflare.com/ajax/libs/prism/1.9.0/themes/prism-tomorrow.min.css'
        rel='stylesheet'
      />
      <article
        className='
        prose-tr:tr-class
        prose-td:td-class
        prose-sm
        prose-zinc
        max-w-full dark:prose-invert
        sm:prose
        prose-headings:font-mono
        prose-strong:border-b
        prose-strong:font-mono
        prose-strong:font-black
        prose-thead:hidden
        '
      >
        {children}
      </article>
    </>
  );
}
