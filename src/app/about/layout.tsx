/* eslint-disable tailwindcss/no-custom-classname */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article
      className='
        prose-table:font-mono 
        prose
        prose-slate 
        dark:prose-invert sm:prose-base 
        md:prose-lg 
        lg:prose-xl
        prose-headings:font-display
        prose-p:font-display
     '
    >
      {children}
    </article>
  );
}
