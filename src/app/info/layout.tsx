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
        className={`
        prose-tr:${tableRowStyles}
        prose-td:${tableDataStyles}
        prose-strong:
        prose-sm
        prose-zinc
        max-w-full
        dark:prose-invert
        sm:prose
        prose-headings:font-mono${strongStyles}
        prose-thead:hidden
        `}
      >
        {children}
      </article>
    </>
  );
}

const strongStyles = 'border-b font-mono font-black';
const tableRowStyles = 'mb-4 flex flex-col sm:table-row';
const tableDataStyles = `
g-zinc-100 px-5 py-2
first:rounded-t-lg
first:pb-0
first:text-base
first:font-semibold
first:text-zinc-800
last:rounded-b-lg
last:pt-0
last:text-left
last:text-zinc-400
dark:bg-zinc-700
dark:first:text-zinc-100
sm:bg-inherit
sm:first:rounded-t-none
sm:first:rounded-bl-lg
sm:first:rounded-tl-lg
sm:first:text-sm
sm:first:font-normal
sm:first:text-inherit
sm:last:rounded-b-none
sm:last:rounded-br-lg
sm:last:rounded-tr-lg
sm:last:text-right
sm:last:text-inherit
dark:sm:bg-inherit
dark:sm:first:text-inherit`;
