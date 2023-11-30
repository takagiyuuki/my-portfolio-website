/* eslint-disable tailwindcss/no-custom-classname */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article
      className='
        prose-h2:bg-brack prose 
        prose-slate 
        dark:prose-invert 
        sm:prose-base md:prose-lg 
        lg:prose-xl 
        prose-h2:font-mono
        prose-h2:underline
        prose-table:font-mono
     '
    >
      {children}
    </article>
  );
}
